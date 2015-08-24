var data
var firebaseData = new Firebase("https://scheduleanalyzer.firebaseio.com/data");
firebaseData.once('value', function(snap) {
    data = snap.val();
});

$('#home').click(
    function(){
        reload()
    })

$('#submitAdvice').click( 
    function(){
        className = $('#className').val().toLowerCase();
        teacher = $('#teacherName').val().toLowerCase();
        hours = parseFloat($('#hours').val());
        difficulty = parseFloat($('#difficulty').val());
        enter(className, teacher, hours, difficulty);

    }
);

function enter(c, t, hours, difficulty){ //class, teacher, hours, difficulity
    if(data[c][t]){
        var datact
        var firebase = new Firebase("https://scheduleanalyzer.firebaseio.com/data/"+c.replace(' ', '%20')+'/' + t)
        firebase.once('value', function(snap) {
            datact = snap.val();
            var num = datact['numEntries']

            datact['hours'] = (datact['hours']*num + hours)/(num + 1)
            datact['difficulty'] = parseFloat((datact['difficulty']*num + difficulty)/(num + 1))
            datact['hoursVariance'] = (parseInt(datact['hoursVariance'])*num + Math.pow(hours - datact['hours'], 2))/(num + 1)
            datact['difficultyVariance'] = (parseInt(datact['difficultyVariance'])*num + Math.pow(difficulty - datact['difficulty'], 2))/(num + 1)
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
        });   
    }  else {
        $('#rightContainer').append("<div class='pure-g'> <div class='pure-u-4-5'> <center> <span class='message'> Class/Teacher not found. Be sure to use the autocomplete suggestions. </span> </center></div> <div class='pure-u-1-5'> </div> </div> ");
    }
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



