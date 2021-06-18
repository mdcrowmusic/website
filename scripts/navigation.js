$(document).ready(function(){
var nav=$("#navigation .row");

$("#siteTitle").click(function(){
   $("#expander").animate({height:'45px'},"slow");
   $("#about").css('color', '');
   $("#music").css('color', '');
   $("#tracklist").hide();
   $("#aboutDiv").hide();
   });

$("#about").click(function(){
$("#expander").animate({height:'100%'},"slow");
$("#aboutDiv").delay(500).fadeIn();
$("#about").css('color','RGB(0,85,120)');
$("#music").css('color', '');
$("#tracklist").hide();
});



$("#twitter").hover(function(){
$(this).attr("src", "../assets/img/twitter_hover.png");
}, function(){
  $(this).attr("src", "../assets/img/twitter_icon.png");
});

$("#instagram").hover(function(){
$(this).attr("src", "../assets/img/instagram_hover.png");
}, function(){
  $(this).attr("src", "../assets/img/instagram_icon.png");
});

$("#youtube").hover(function(){
$(this).attr("src", "../assets/img/yt_hover.png");
}, function(){
  $(this).attr("src", "../assets/img/yt_icon.png");
});

$("#showTracklist").click(function(){
$("#tracklist").delay(700).fadeIn();
$("#expander").animate({height:'200px'},"slow");
$("#about").css('color', '');
$("#music").css('color', '');
$("#showTracklist").delay(700).hide(0);
$("#hideTracklist").delay(700).show(0);
$("#aboutDiv").hide();

});

$("#hideTracklist").click(function(){
  $("#tracklist").delay(1).hide(0);
  $("#expander").animate({height:'45px'},"slow");
  $("#showTracklist").delay(700).show(0);
  $("#hideTracklist").delay(700).hide(0);
});
$("#initialPlay").click(function(){
$("#initialPlay").hide();
$("#pause").show();
});


$("#pause").click(function(){
$("#pause").hide();
$("#play").show();
});
$("#play").click(function(){
$("#play").hide();
$("#pause").show();
});


});
