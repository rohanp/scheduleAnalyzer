$('#leftContainer').css('width', parseInt(window.innerWidth/2)-50);
$('#rightContainer').css('width', parseInt(window.innerWidth/2)-50);
$('#leftHalf').css('width', parseInt(window.outerWidth/2));


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
    min: 1,
    max: 12,
    value: 4,
    orientation: "horizontal",
    range: "min"
  }).addSliderSegments($slider.slider("option").max);
}

$('#hourSlider').change(
    function() {
        console.log("here");
        console.log( $('#hourSlider').val );
        $('#hourInput').setInputValue( $('#hourSlider').val );
    }
);

$('#hourInput').change(
    function() {
        $('#hourSliver').val = $('#hourInput').val
    }
);

var $slider = $("#difficultySlider");
if ($slider.length > 0) {
  $slider.slider({
    min: 70,
    max: 100,
    value: 88,
    orientation: "horizontal",
    range: "min"
  }).addSliderSegments($slider.slider("option").max);
}

for(var i=0; i<6; i++){
    $('#classesContainer').append("\
            <div class='pure-g'>\
                <div class='grid pure-u-1-5'> </div>\
                 <div class='grid pure-u-2-5'>\
                    <input type='text' placeholder='' class='form-control blue'/>\
                </div>\
                <div class='grid pure-u-2-5'>\
                     <input type='text' placeholder='' class='form-control blue'/>\
                </div>\
            </div>");
}