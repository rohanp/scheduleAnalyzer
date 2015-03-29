
//move this data to parse or something
data = {
	'AP Physics': {
		'Scholla':{
			'hours': 0.0,
			'hoursVariance': 0.0,
			'difficulty': 0.0,
			'difficultyVariance':0.0,
			'numEntries': 0.0
		}
	}

}
//var firebaseData = new Firebase("https://scheduleanalyzer.firebaseio.com/");

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
    /*var data;
    firebaseData.once('value', function(snap) {
        data = snap.val();
    });*/
    
	var num = data[c][t]['numEntries']
    console.log(data[c][t]['hours']*num)
    console.log(data[c][t]['hours']*num + hours)
    console.log((data[c][t]['hours']*num + hours)/(num + 1))
    data[c][t]['hours'] = (data[c][t]['hours']*num + hours)/(num + 1)
	data[c][t]['difficulty'] = parseFloat((data[c][t]['difficulty']*num + difficulty)/(num + 1))  
    
	data[c][t]['hoursVariance'] = (parseInt(data[c][t]['hoursVariance'])*num + Math.pow(hours - data[c][t]['hours'], 2))/(num + 1)
                                   
	data[c][t]['difficultyVariance'] = (parseInt(data[c][t]['difficultyVariance'])*num + Math.pow(difficulty - data[c][t]['difficulty'], 2))/(num + 1) 

	data[c][t]['numEntries'] += 1
    
    //firebaseData.update(data);

}


