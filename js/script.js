var firebaseData = new Firebase("https://scheduleanalyzer.firebaseio.com/data");
var data;

firebaseData.once('value', function(snap) {
    data = snap.val();
});

firebaseData.on("value", function(snapshot) {
      data = snapshot.val();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
});

$('#submitAdvice').click( 
    function(){
        className = $('#className').val().toLowerCase();
        teacher = $('#teacherName').val().toLowerCase();
        hours = parseFloat($('#hours').val());
        difficulty = parseFloat($('#difficulty').val());
        enter(className, teacher, hours, difficulty);
        $('#className').val('');
        $('#teacherName').val('');
        $('#hours').val('');
        $('#difficulty').val('');
    }
);

function enter(c, t, hours, difficulty){ //class, teacher, hours, difficulity
    console.log(data)
    console.log(c+t)
	var num = data[c][t]['numEntries']
    data[c][t]['hours'] = (data[c][t]['hours']*num + hours)/(num + 1)
	data[c][t]['difficulty'] = parseFloat((data[c][t]['difficulty']*num + difficulty)/(num + 1))  
    
	data[c][t]['hoursVariance'] = (parseInt(data[c][t]['hoursVariance'])*num + Math.pow(hours - data[c][t]['hours'], 2))/(num + 1)
                                   
	data[c][t]['difficultyVariance'] = (parseInt(data[c][t]['difficultyVariance'])*num + Math.pow(difficulty - data[c][t]['difficulty'], 2))/(num + 1) 

	data[c][t]['numEntries'] += 1
    
    firebaseData.update(data, function(){
            $('#rightContainer').append("<div class='pure-g'> <div class='pure-u-4-5'> <center> <span id='successText'> Thank you! Your response has been recorded </span> </center></div> <div class='pure-u-1-5'> </div> </div> ");
            setTimeout(removeSuccess, 3000);
            console.log("success!");
        }
    );
}

function removeSuccess(){
    $('#successText').fadeOut();
}



