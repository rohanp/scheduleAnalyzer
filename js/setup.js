$('#leftContainer').css('width', parseInt(window.innerWidth/2)-50);
$('#rightContainer').css('width', parseInt(window.innerWidth/2)-50);
$('#leftHalf').css('width', parseInt(window.outerWidth/2));

console.log("heyo")
$('#home').click(
    function(){
        //location.reload();
        location.reload( true ); 
        //window.location = self.location;
    })

$.fn.addSliderSegments = function (amount, orientation) {
  return this.each(function () {
    if (orientation == "vertical") {
      var output = ''
        , i;
      for (i = 1; i <= amount - 2; i++) {
        output += '<div class="ui-slider-segment" style="top:' + 100 / (amount - 1) * i + '%;"></div>';
      };
      $(this).prepend(output);
    } else {
      var segmentGap = 100 / (amount - 1) + "%"
        , segment = '<div class="ui-slider-segment" style="margin-left: ' + segmentGap + ';"></div>';
      $(this).prepend(segment.repeat(amount - 2));
    }
  });
};

console.log("scriptjs loaded!");

var $slider = $("#hourSlider");
if ($slider.length > 0) {
  $slider.slider({
    min: 0,
    max: 10,
    value: 1,
    step: 0.5,
    orientation: "horizontal",
    range: "min",
    slide: function(event, ui) {
        $("#hours").val(ui.value);
    }
  }).addSliderSegments($slider.slider("option").max);
}

$("#hours").change(function () {
    var value = $('#hours').val()
    $("#hourSlider").slider("value", parseInt(value));
});

var $slider = $("#difficultySlider");
if ($slider.length > 0) {
  $slider.slider({
    min: 80,
    max: 100,
    value: 88,
    orientation: "horizontal",
    range: "min",
    slide: function(event, ui) {
        $("#difficulty").val(ui.value);
    }
  }).addSliderSegments($slider.slider("option").max);
}

$("#difficulty").change(function () {
    var value = $('#difficulty').val()
    $("#difficultySlider").slider("value", parseInt(value));
});

$('#classesContainer').append("\
        <div class='pure-g'>\
            <div class='grid pure-u-1-5'> </div>\
             <div class='grid pure-u-2-5'>\
                <input type='text' placeholder='English 11' class='className form-control blue blueChildren'/>\
            </div>\
            <div class='grid pure-u-2-5'>\
                 <input type='text' placeholder='Miller (or leave blank)' class='teacherName form-control blue blueChildren'/>\
            </div>\
        </div>");


for(var i=0; i<6; i++){
    $('#classesContainer').append("\
            <div class='pure-g'>\
                <div class='grid pure-u-1-5'> </div>\
                 <div class='grid pure-u-2-5'>\
                    <input type='text' placeholder='' class='className form-control blue blueChildren'/>\
                </div>\
                <div class='grid pure-u-2-5'>\
                     <input type='text' placeholder='' class='teacherName form-control blue blueChildren'/>\
                </div>\
            </div>");
}