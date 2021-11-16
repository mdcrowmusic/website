
var iframeElement = document.querySelector('iframe');
var widget = SC.Widget(iframeElement);
var x = document.getElementById('play');

widget.bind(SC.Widget.Events.READY, function() {
widget.getCurrentSound(function(currentSound) {
 document.getElementById("currentTrack").innerHTML = currentSound.title;

 widget.getSounds(function(tracks){
   for (var i in tracks)
     {

      $('#tracklist').append("<li class='track-item' id='" + i + "'" + ">" + tracks[i].title + "</li>");

    $(".track-item").click(function(){
      $("#tracklist").delay(1).hide(0);
  $("#expanderA").animate({height:'45px'},"slow");
   $("#expanderB").animate({height:'80px'},"slow");
  $("#showTracklist").delay(700).show(0);
  $("#hideTracklist").delay(700).hide(0);
     x.classList.remove("fa-play");
      x.classList.add("fa-pause");     
     var s = this.id;
      widget.seekTo(0);
   widget.skip(s);  
     widget.getCurrentSound(function(currentSound) {
document.getElementById("currentTrack").innerHTML = currentSound.title;
});


 });

  };

 });

});
});


function play(){
 if(x.classList.contains("fa-play")){
 x.classList.remove("fa-play"); 
  x.classList.add("fa-pause");
 } else {x.classList.remove("fa-pause");
         x.classList.add("fa-play")};
  widget.toggle();
};
