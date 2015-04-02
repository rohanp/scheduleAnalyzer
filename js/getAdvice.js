$("#getAdvice").click( function(){
    $('#rightContainer')
    .animate({
        left: '+=800px'
    }, 500, 'swing');
    
    $('#rightContainer').empty()
    $('#leftContainer').css('width', parseInt(window.innerWidth/2)-25);
    $('#rightContainer').css('width', parseInt(window.innerWidth/2)-25);

    $('#rightContainer').append(
    "<div class='title pure-g'>\
        <div class='pure-u-1-5'>\
        </div>\
        <div class='pure-u-4-5'>\
            <h4>  &nbsp </h4>\
        </div>\
    </div>\
    <div class='pure-g' style='height:59px'>\
         <div class='grid pure-u-1-5'>\
            <h6> Hours/Day </h6>\
        </div>\
        <div class='grid pure-u-1-5'>\
            <h6> Class Avg </h6>\
        </div>\
        <div class='grid pure-u-1-5'>\
            <h6>  </h6>\
        </div>\
        <div class='grid pure-u-2-5'>\
        </div>\
    </div>")

    $('h4').animate({
        left: window.innerWidth/5 + 'px'
    }, 300 )
    
    for(var i=1; i<=8;i++){
        $('#rightContainer').append(
            "<div class='pure-g' style='height:62px'>\
                <div class='grid pure-u-1-5'> <span id= \"hours"+i+"\"> </span> </div>\
                <div class='grid pure-u-1-5'> <span id= \"difficulty"+i+"\"> </span> </div>\
                <div class='grid pure-u-1-5'> <span id= \"top"+i+"\" > </span> </div>\
                <div class='grid pure-u-1-5'>\
                </div>\
            </div>");
    }                                              
    
    $a = $('#classesContainer .pure-g')
    console.log($a);
    for(var i=1; i<$a.length; i++){
        className = $a[i].children[1].children[0].children[1].value.toLowerCase()
        teacherName = $a[i].children[2].children[0].children[1].value.toLowerCase()
        if(className.length>0 && teacherName.length>0){
            var url = "https://scheduleanalyzer.firebaseio.com/data/"+className.replace(' ', '%20')+'/' + teacherName
            console.log(url);
            var firebase = new Firebase(url)
            writeData(firebase, i)
        } else if(className.length>0){
            var url = "https://scheduleanalyzer.firebaseio.com/data/"+className.replace(' ', '%20')
            var firebase = new Firebase(url)
            writeDataNoTeacher(firebase, i)
        }
    }
    
    $('#rightContainer')
        .animate({
            left: '-=800px'
        }, 500)

})

function writeDataNoTeacher(firebase, i){
    firebase.once('value', function(snap) {
        if(snap.exists()){
            datac = snap.val()
            datact = calcDatact(datac)
            writeDatact(datact, i)
        }
    })
}

function writeData(firebase, i){
    firebase.once('value', function(snap) {
        if(snap.exists()){
            datact = snap.val()
            writeDatact(datact, i)
        }
        else{
            console.log("NOT FOUND")
        }
    })
}

function calcDatact(datac){
    var datact = {"hours":0, "hoursVariance":0, "difficulty":0, "difficultyVariance":0, "numEntries":0}
    Object.keys(datac).forEach( function(t){
            var num = datact['numEntries']
            datact['hours'] = (datact['hours']*num + datac[t]['hours'])/(num + 1)
            datact['difficulty'] = parseFloat((datact['difficulty']*num + datac[t]['difficulty'])/(num + 1))
            datact['hoursVariance'] = (parseFloat(datact['hoursVariance'])*num + Math.pow(datac[t]['hours'] - datact['hours'], 2))/(num + 1)
            datact['difficultyVariance'] = (parseFloat(datact['difficultyVariance'])*num + Math.pow(datac[t]['difficulty'] - datact['difficulty'], 2))/(num + 1)
            datact['numEntries'] += 1
        
    })
    return datact
}
    
function writeDatact(datact, i){
        console.log(datact);
        var hours = Math.round(datact['hours']/7*10)/10
        var diff =  Math.round(datact['difficulty']*10)/10
        var hsd = Math.round( Math.sqrt(datact["hoursVariance"]/7)*10 )/10
        var dsd = Math.round( Math.sqrt(datact["difficultyVariance"])*10 )/10
        if(datact["numEntries"] < 2){
            $('#hours'+i).html( "no data" );
            $('#difficulty'+i).html( "no data" );
        } else {
            $('#hours'+i).html(  hours + " ± " + hsd );
            $('#difficulty'+i).html( diff + " ± " + dsd );
        }
}

function makeGraph(datact){
    var margin = {top: 5, right: 40, bottom: 20, left: 120},
    width = 960 - margin.left - margin.right,
    height = 50 - margin.top - margin.bottom;

    var chart = d3.bullet()
        .width(width)
        .height(height);

    d3.json("toGraph.json", function(error, data) {
      var svg = d3.select("#rightContainer").selectAll("svg")
          .data(data)
        .enter().append("svg")
          .attr("class", "bullet")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
          .call(chart);

      var title = svg.append("g")
          .style("text-anchor", "end")
          .attr("transform", "translate(-6," + height / 2 + ")");

      title.append("text")
          .attr("class", "title")
          .text(function(d) { return d.title; });

      title.append("text")
          .attr("class", "subtitle")
          .attr("dy", "1em")
          .text(function(d) { return d.subtitle; });

      d3.selectAll("button").on("click", function() {
        svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
      });
    });
}