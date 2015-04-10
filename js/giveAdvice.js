$('#submitAdvice').click( 
    function(){
        className = $('#className').val().toLowerCase();
        teacherName = $('#teacherName').val().toLowerCase();
        
        hours = $('#hourSlider').slider('option', 'value');
        $('#hours').val(hours);
        
        difficulty = $('#difficultySlider').slider("option", "value")
        $('#difficulty').val(difficulty);
        
        console.log("clicked");
        if(className.length>0 && teacherName.length>0){
            console.log(className);
            enter(className, teacherName, hours, difficulty);
        }

    }
);

function enter(c, t, hours, difficulty){ //class, teacher, hours, difficulity
    var datact //data[class][teacher]
    var url = "https://scheduleanalyzer.firebaseio.com/data/"+c.replace(' ', '%20')+'/' + t
    var firebase = new Firebase(url)
    console.log("entering");
    firebase.once('value', function(snap) {
        if(snap.exists()){
            datact = snap.val();
            var num = datact['numEntries']
            datact['hours'] = (datact['hours']*num + hours)/(num + 1)
            datact['difficulty'] = parseFloat((datact['difficulty']*num + difficulty)/(num + 1))
            datact['hoursVariance'] = (parseFloat(datact['hoursVariance'])*num + Math.pow(hours - datact['hours'], 2))/(num + 1)
            datact['difficultyVariance'] = (parseFloat(datact['difficultyVariance'])*num + Math.pow(difficulty - datact['difficulty'], 2))/(num + 1)
            datact['numEntries'] += 1
            console.log("here")
            firebase.update(datact, function(o){
                if(o){
                    console.log("failure " + o);
                    addFailure()                    
                    setTimeout(removeMessage, 3000);
                } else {
                    addSuccess()
                    setTimeout(removeMessage, 3000);
                    console.log("success!");
                    $('#className').val('');
                    $('#teacherName').val('');
                    $('#hours').val('');
                    $('#difficulty').val('');
                }
            })
        } else {
                
                $('#rightContainer').append("<div class='pure-g'> <div class='pure-u-4-5'> <center> <span class='message'> Class/Teacher not found. Be sure to use the autocomplete suggestions. </span> </center></div> <div class='pure-u-1-5'> </div> </div> ");
        
        }
    });   
}  


function addSuccess(){
            $('#rightContainer').append("<div class='pure-g'> <div class='pure-u-4-5'> <center> <span class='message'> Thank you! Your response has been recorded </span> </center></div> <div class='pure-u-1-5'> </div> </div> ");

}

function addFailure(){
    $('#rightContainer').append("<div class='pure-g'> <div class='pure-u-4-5'> <center> <span class='message'> Thank you! Your response has been recorded </span> </center></div> <div class='pure-u-1-5'> </div> </div> ");
}

function removeMessage(){
    $('.message').fadeOut();
}



