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
        className = $('#className').val();
        teacher = $('#teacher').val();
        hours = parseFloat($('#hours').val());
        difficulty = parseFloat($('#difficulty').val());
        enter(className, teacher, hours, difficulty);
        $('#className').val('');
        $('#teacher').val('');
        $('#hours').val('');
        $('#difficulty').val('');
    }
);


function enter(c, t, hours, difficulty){ //class, teacher, hours, difficulity
    console.log(data)
    console.log(c+t)
	var num = data[c][t]['numEntries']
    console.log(data[c][t]['hours'])
    console.log(data[c][t]['hours']*num + hours)
    console.log((data[c][t]['hours']*num + hours)/(num + 1))
    data[c][t]['hours'] = (data[c][t]['hours']*num + hours)/(num + 1)
	data[c][t]['difficulty'] = parseFloat((data[c][t]['difficulty']*num + difficulty)/(num + 1))  
    
	data[c][t]['hoursVariance'] = (parseInt(data[c][t]['hoursVariance'])*num + Math.pow(hours - data[c][t]['hours'], 2))/(num + 1)
                                   
	data[c][t]['difficultyVariance'] = (parseInt(data[c][t]['difficultyVariance'])*num + Math.pow(difficulty - data[c][t]['difficulty'], 2))/(num + 1) 

	data[c][t]['numEntries'] += 1
    
    firebaseData.update(data, function(){ 
            console.log("success!");
        }
    );

}




