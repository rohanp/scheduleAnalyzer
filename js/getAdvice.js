$("#getAdvice").click( function(){
    $('#rightContainer').empty()
    $('.title').remove()
    
    $('#rightContainer').append(
    "<div class='pure-g' style='height:59px'>\
         <div class='grid pure-u-2-5'>\
            <h6> Hours per Day </h6>\
        </div>\
        <div class='grid pure-u-2-5'>\
            <h6> Class Avg </h6>\
        </div>\
        <div class='grid pure-u-1-5'> </div>\
    </div>")
                                
    for(var i=1; i<=8;i++){
        $('#rightContainer').append(
            "<div class='pure-g'>\
                <div id= \"hours"+i+"\" class='grid pure-u-2-5'> </div>\
                 <div id= \"difficulty"+i+"\" class='grid pure-u-2-5'>\
                </div>\
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
            var j = i
            firebase.once('value', function(snap) {
                if(snap.exists()){
                    datact = snap.val()
                    writeData(datact, j);
                    console.log(datact);
                }
                else{
                    console.log("NOT FOUND")
                }
            })
        }
    }
})

function writeData(datact, i){
    console.log( i );
    var hours = Math.round(datact['hours']*10)/10
    var diff =  Math.round(datact['difficulty']*10)/10
    var hsd = Math.round( Math.sqrt(datact["hoursVariance"])*10 )/10
    var dsd = Math.round( Math.sqrt(datact["difficultyVariance"])*10 )/10
    $('#hours'+i).html(  hours + " ± " + hsd );
    $('#difficulty'+i).html( diff + " ± " + dsd );

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