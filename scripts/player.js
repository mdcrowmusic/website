
var iframeElement   = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget         = SC.Widget(iframeElement);
var x = document.getElementById("play");


function play(){
widget.toggle();
};

widget.bind(SC.Widget.Events.READY, function() {
widget.getCurrentSound(function(currentSound) {
 document.getElementById("current").innerHTML = currentSound.title;
});
  });







 


  




