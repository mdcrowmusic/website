
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
  $(".row").css({"-webkit-box-shadow": "0px 0px 0px"});
$(".expander").animate({height:'8px'},"slow");
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

widget.bind(SC.Widget.Events.FINISH,function(){
  widget.getCurrentSound(function(currentSound) {
 document.getElementById("currentTrack").innerHTML = currentSound.title;
});
});
