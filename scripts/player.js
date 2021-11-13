
// Best practice stuff
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
       
  widget.getSounds(function(tracks){
    for (var i in tracks)
      {
    
       $('#tracklist').append("<li class='track-item' id='" + i + "'" + ">" + tracks[i].title + "</li>");
    
     $(".track-item").click(function(){
       var s = this.id
       widget.seekTo(0);
    widget.skip(s);       
      x.innerHTML = "||" ;     widget.getCurrentSound(function(currentSound) {
 document.getElementById("current").innerHTML = currentSound.title;
});
       
  });
    
   };
 
  });
  
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
});

function updateBar() {
var canvasWidth = 500
var audioEl = document.getElementById("player")
var canvas = document.getElementById("progress").getContext('2d')
var num = 1

  canvas.clearRect(0, 0, canvasWidth, 50)
  canvas.fillStyle = "#f8f8ff";
  canvas.fillRect(0, 0, canvasWidth, 50)

  var currentTime = audioEl.currentTime;
  var duration = audioEl.duration;


  var percentage = currentTime / duration
  var progress = (canvasWidth * percentage)
  canvas.fillStyle = "rgb(0,85,120)"
  canvas.fillRect(0, 0, progress, 50)
}
