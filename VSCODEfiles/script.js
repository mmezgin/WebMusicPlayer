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



})

  
  
  });