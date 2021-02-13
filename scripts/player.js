

// Best practice stuff
var jsonMimeType = "application/json;charset=UTF-8";
var songData = {}; // initialize my dataset variable to store stuff in
var trackID;
var lastPlayedTrack;
// I set my variables outside of my .ajax function so that they have global scope.


$.ajax({
  // you can link to a JSON file here, or an api link
  url: "https://api.soundcloud.com/playlists/302577446?client_id=d1729d6f17228d2c1132b127e9510b67",
  // GET's the data file linked above
  method: "GET",
  dataType: "json"
}).done(function(data) { //when done (with data as an argument) do this:
  songData = data // store the data in my existing songData variable


  // Create loop list
  for(var i in songData.tracks) {
    var trackTitle = songData.tracks[i].title;
    var trackNum = songData.tracks[i].id;
    var cliID = "d1729d6f17228d2c1132b127e9510b67";
    // append to dom
    $('#tracklist').append("<li class='track-item' id=" + trackNum + ">" + trackTitle + "</li>");

  }

  var player = $("#player");

  // generates soundcloud url from trackID and client ID;
  var generateSoundcloudURL = function(id) {
    return player.attr({
      src: "https://api.soundcloud.com/tracks/" + id + "/stream" + '?client_id=' + cliID
    });

  }


  // on click play this ID's song
  $("li").click(function() {
    generateSoundcloudURL(this.id);
    player.get(0).play();
    $(current).empty();
    $(this).clone().addClass("current").removeClass("track-item").appendTo(current);
  });


  $(document).ready(function(){
  $("li:first-child").clone().addClass("current").removeClass("track-item").appendTo(current);
    });

  $("#initialPlay").click(function(){
   $("li:first-child").click();
 });

 //show/hide
 $(".track-item").click(function(){
 $("#pause").show();
 $("#play").hide();
 $("#initialPlay").hide();
 $("#tracklist").hide();
 $("#expander").animate({height:'45px'},"slow");
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

if (currentTime === duration){
  $("#pause").hide();
  $("#play").show();

}

  var percentage = currentTime / duration
  var progress = (canvasWidth * percentage)
  canvas.fillStyle = "rgb(0,85,120)"
  canvas.fillRect(0, 0, progress, 50)
}
