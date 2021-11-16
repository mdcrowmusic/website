
var iframeElement = document.querySelector('iframe');
var widget = SC.Widget(iframeElement);

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


function play(){
  var x = document.getElementById('play')
  if (x.innerHTML === "▶") {
    x.innerHTML = "||";
  } else {x.innerHTML = "▶";
};
  widget.toggle();
};
