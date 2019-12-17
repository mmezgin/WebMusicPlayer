$(document).ready(function(){

  var i = -1;
  var items = [];

  $("#a1").click(function(){
      $("#log").toggle("swing");
     
    });


  $("#rock").click(function(){
    window.location = "categoryRock.html";
    

  })

  $("#hiphop").click(function(){
    window.location = "categoryRap.html";

  })

  $("#pop").click(function(){
    window.location = "categoryBlues.html";

  })

  $("#classic").click(function(){
    window.location = "categoryJazz.html";

  })

  $("#edm").click(function(){
    window.location = "categoryEDM.html";

  })

  $("#metal").click(function(){
    window.location = "categoryMetal.html";

  })

  $("#logo").click(function(){
    window.location = "main2.html";

  })

  $('#s1').click(function() {
    var text = $('#songName1').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/paranoid.png");
    var src="music/paranoid.mp3";
  document.getElementById("player").setAttribute('src',src);
  document.getElementById("player").load();
  document.getElementById("player").play();
       
});

   $('#s2').click(function() {
    var text = $('#songName2').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/ridersof.png");
    var src="music/riders.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
    
});

$('#s3').click(function() {
  var text = $('#songName3').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/money.png");
    var src="music/money.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});
 $('#s4').click(function() {
  var text = $('#songName4').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/ironman.png");
    var src="music/ironman.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});
$('#s5').click(function() {
  var text = $('#songName5').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/tnt.png");
    var src="music/tnt.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});
 $('#s6').click(function() {
  var text = $('#songName6').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/hotelcali.png");
    var src="music/california.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});
$('#s7').click(function() {
  var text = $('#songName7').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/whiteroom.png");
    var src="music/whiteroom.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});
 $('#s8').click(function() {
  var text = $('#songName8').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/duman.png");
    var src="music/duman.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});
$('#s9').click(function() {
  var text = $('#songName9').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/immigrant.png");
    var src="music/immigrant.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});
$('#s10').click(function() {
  var text = $('#songName10').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
    $('#textRock').html(inner);
    $("#img").attr("src","rockImg/backinblack.png");
    var src="music/backinblack.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});

$('#s11').click(function() {
  var text = $('#songName11').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/dark.png");
  var src="music/darklight.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
     
});

 $('#s12').click(function() {
  var text = $('#songName12').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/ghost.png");
  var src="music/ghostface.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});

$('#s13').click(function() {
  var text = $('#songName13').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/xxx.png");
  var src="music/sad.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s14').click(function() {
  var text = $('#songName14').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/panda.png");
  var src="music/panda.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s15').click(function() {
  var text = $('#songName15').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/mercy.png");
  var src="music/mercy.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s16').click(function() {
  var text = $('#songName16').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/venom.png");
  var src="music/venom.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s17').click(function() {
  var text = $('#songName17').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/nefret.png");
  var src="music/nefret.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s18').click(function() {
  var text = $('#songName18').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/goose.png");
  var src="music/goose.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s19').click(function() {
  var text = $('#songName19').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/lucid.png");
  var src="music/lucid.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s20').click(function() {
  var text = $('#songName20').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","rapImg/pump.png");
  var src="music/pump.mp3";
  document.getElementById("player").setAttribute('src',src);
  document.getElementById("player").load();
  document.getElementById("player").play();
 


});
$('#s21').click(function() {
  var text = $('#songName21').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/1.png");
  var src="music/sic.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
     
});

 $('#s22').click(function() {
  var text = $('#songName22').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/2.png");
  var src="music/shoot.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});

$('#s23').click(function() {
  var text = $('#songName23').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/3.png");
  var src="music/coma.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s24').click(function() {
  var text = $('#songName24').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/4.png");
  var src="music/dieshard.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s25').click(function() {
  var text = $('#songName25').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/5.png");
  var src="music/sandman.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s26').click(function() {
  var text = $('#songName26').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/6.png");
  var src="music/lovemeforever.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s27').click(function() {
  var text = $('#songName27').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/7.png");
  var src="music/nemesis.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s28').click(function() {
  var text = $('#songName28').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/8.png");
  var src="music/ohne.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s29').click(function() {
  var text = $('#songName29').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/9.png");
  var src="music/thisilove.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s30').click(function() {
  var text = $('#songName30').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","metalImg/10.png");
  var src="music/toxicity.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});

$('#s31').click(function() {
  var text = $('#songName31').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/1.png");
var src="music/alfie.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
   
});

$('#s32').click(function() {
  var text = $('#songName32').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/2.png");
var src="music/ciaccona.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});

$('#s33').click(function() {
  var text = $('#songName33').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/3.png");
var src="music/crystal.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s34').click(function() {
  var text = $('#songName34').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/4.png");
var src="music/faithfull.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s35').click(function() {
  var text = $('#songName35').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/5.png");
var src="music/zaz.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s36').click(function() {
  var text = $('#songName36').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/6.png");
var src="music/seeds.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s37').click(function() {
  var text = $('#songName37').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/7.png");
var src="music/wateriswide.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s38').click(function() {
  var text = $('#songName38').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/8.png");
var src="music/taintedlove.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s39').click(function() {
  var text = $('#songName39').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/9.png");
var src="music/vashkar.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s40').click(function() {
  var text = $('#songName40').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","jazzImg/10.png");
var src="music/vignette.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s41').click(function() {
  var text = $('#songName41').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/1.png");
  var src="music/batshit.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
     
});

 $('#s42').click(function() {
  var text = $('#songName42').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/2.png");
  var src="music/calma.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
  
});

$('#s43').click(function() {
  var text = $('#songName43').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/3.png");
  var src="music/dancemonkey.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s44').click(function() {
  var text = $('#songName44').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/4.png");
  var src="music/inmymind.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s45').click(function() {
  var text = $('#songName45').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/5.png");
  var src="music/jump.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s46').click(function() {
  var text = $('#songName46').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/6.png");
  var src="music/onekiss.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s47').click(function() {
  var text = $('#songName47').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/7.png");
  var src="music/.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
    var src="music/onethingright.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s48').click(function() {
  var text = $('#songName48').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/8.png");
  var src="music/rideit.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s49').click(function() {
  var text = $('#songName49').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/9.png");
  var src="music/roses.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s50').click(function() {
  var text = $('#songName50').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
  $('#textRock').html(inner);
  $("#img").attr("src","edmImg/10.png");
  var src="music/spectre.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});

$('#s51').click(function() {
  var text = $('#songName51').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/1.png");
var src="music/crazyblues.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();
   
});

$('#s52').click(function() {
  var text = $('#songName52').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/2.png");
var src="music/anima.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});

$('#s53').click(function() {
  var text = $('#songName53').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/3.png");
var src="music/devilgot.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s54').click(function() {
  var text = $('#songName54').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/4.png");
var src="music/bocarter.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s55').click(function() {
  var text = $('#songName55').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/5.png");
var src="music/borntodie.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s56').click(function() {
  var text = $('#songName56').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/6.png");
var src="music/crossroad.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s57').click(function() {
  var text = $('#songName57').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/7.png");
var src="music/guitarrag.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s58').click(function() {
  var text = $('#songName58').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/8.png");
var src="music/someday.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s59').click(function() {
  var text = $('#songName59').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/9.png");
var src="music/johnlee.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});
$('#s60').click(function() {
  var text = $('#songName60').text().split("-");
  var color = "color:rgb(255,255,255);";
  var size = "font-size:24px;"
  var style = "font-style:oblique;"
  var id = "hd";
  var inner = "<h3 id="+id+" style="+color+""+size+""+style+">"+"<u>Click to buy :</u></br>"+text[0]+"</br>"+text[1]+"</h3>"
$('#textRock').html(inner);
$("#img").attr("src","bluesImg/10.png");
var src="music/allyourlove.mp3";
    document.getElementById("player").setAttribute('src',src);
    document.getElementById("player").load();
    document.getElementById("player").play();

});

$('.cart').click(function(){

 $('.popup').show(1000);

 $('.cancel').click(function(){

  $('.popup').hide(1000);  
 })

 
})

$('#textRock').click(function(){


i++;


var text = $('#hd').text().split(":");
items[i] = text[1];
var arr = items.join('\r\n');
console.log(arr)
$('span').html(arr);
console.log(i);

})


$('.checkout').click(function(){
var k = 0;

while(k<i+1){
 
$.post("save.php",{
  array: items[k]
  
});
k++;

}
console.log(k);




  
  
});

$('#get2').click(function(){
  var songName = [];


var ajax = new XMLHttpRequest();
var method = "GET";
var url = "returnData.php";
var asynchronous = true;

ajax.open(method,url,asynchronous);
ajax.send();

ajax.onreadystatechange = function(){

if(this.readyState == 4 && this.status == 200){
  var data = JSON.parse(this.responseText);
  

  for(var a=0; a < data.length; a++){
    songName[a] = data[a].song;
    
  }

  $('#songName51').text(songName[0]);
  $('#songName52').text(songName[1]);
  $('#songName53').text(songName[2]);
  $('#songName54').text(songName[3]);
  $('#songName55').text(songName[4]);
  $('#songName56').text(songName[5]);
  $('#songName57').text(songName[6]);
  $('#songName58').text(songName[7]);
  $('#songName59').text(songName[8]);
  $('#songName60').text(songName[9]);



}

}




})


});