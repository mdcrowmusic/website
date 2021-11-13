
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







 


  

  
 //show/hide
 $(".track-item").click(function(){
 $("#tracklist").hide();
   $("#showTracklist").delay(700).show(0);
   $("#hideTracklist").delay(700).hide(0);
   $("#expanderA").animate({height:'45px'},"slow");
   $("#expanderB").animate({height:'80px'},"slow");
});


