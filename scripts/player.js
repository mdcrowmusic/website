var iframeElement   = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget         = SC.Widget(iframeElement);
var x = document.getElementById("play");

widget.bind(SC.Widget.Events.FINISH,function(){
  widget.getCurrentSound(function(currentSound) {
 document.getElementById("currentTrack").innerHTML = currentSound.title;
});
});

function play(){  
  if (x.innerHTML === "▶") {
    x.innerHTML = "||";
  } else {x.innerHTML = "▶";
         }
  widget.toggle();
};

function next(){
  x.innerHTML = "||";
  widget.next();
  widget.seekTo(0);
widget.getCurrentSound(function(currentSound) {
 document.getElementById("currentTrack").innerHTML = currentSound.title;
});
};  
                       
function prev(){
  x.innerHTML = "||";
  widget.prev();
  widget.seekTo(0);
widget.getCurrentSound(function(currentSound) {
 document.getElementById("currentTrack").innerHTML = currentSound.title;
});
}; 

widget.bind(SC.Widget.Events.READY, function() {
widget.getCurrentSound(function(currentSound) {
 document.getElementById("currentTrack").innerHTML = currentSound.title;
       
  widget.getSounds(function(tracks){
    for (var i in tracks)
      {
    
       $('#tracklist').append("<li class='track-item' id='" + i + "'" + ">" + tracks[i].title + "</li>");
    
     $(".track-item").click(function(){
       var s = this.id
       widget.seekTo(0);
    widget.skip(s);       
      x.innerHTML = "||" ;     widget.getCurrentSound(function(currentSound) {
 document.getElementById("currentTrack").innerHTML = currentSound.title;
});
       
  });
    
   };
 
  });
  
});
  });


