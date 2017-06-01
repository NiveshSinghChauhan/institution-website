$(document).ready(function(){
  var text_1 = "<strong>CLASSROOMS</strong><hr><p>Spacious and well ventilated classrooms</p>";
  var text_2 = "<strong>SCIENCE LABORATORIES</strong><hr><p>The Science Laboratories are fully equipped with tools and apparatus required for performing various experiments</p>";
  var text_3 = "<strong>OTHER LABORATORIES</strong><hr><p>We also have a well furnished Maths laboratory and a Hi - Tech Computer Laboratory equipped with internet connection.</p>";
  var text_4 = "<strong>LIBRARY</strong><hr><p>A well furnished library along with a reading room is made available. Newspapers and Magazines are provided in addition to a wide range of books which also include Dictionaries, Encyclopedia, Books on General Knowledge and Year Books.The Library subscribes to half-a-dozen of newspapers and a score of periodicals.</p>";
  var text_5 = "<strong>HALL</strong><hr><p>A spacious and well- equipped hall for conducting various programmes.</p>";
  var text_6 = "<strong>AUDIO VISUAL ROOM</strong><hr><p>The latest Audio-Visual equipments and modern teaching aids are available in a large audio-visual room which is used for digital teaching by all the teachers.</p>";
  var text_7 = "<strong>An Assembly Ground</strong>";
  var text_8 = "<strong>An open Air stage</strong>";
  var text_9 = "<strong>Indoor and outdoor games</strong>";
  var text_10 = "<strong>Quality education through a highly dedicated staff</strong>";
  var text_11 = "<strong>Buses for transportation of students</strong>";
  var text_12 = "<strong>Two basketball courts</strong>";

  $(".img").click(function(){
    var src = $(this).attr("class");
    console.log(src);

  });

  $(".img").hover(function(){
    console.log( $(this).attr("class").split(" ")[1] );
    $(this).addClass("hover");
    $(this).css("opacity","1");
    $(this).css("z-index","2");
    if ($(this).attr("class").split(" ")[1] == "img-1") {
      $(".textbox").html(text_6);
    }else if ($(this).attr("class").split(" ")[1] == "img-2") {
      $(".textbox").html(text_5);
    }else if ($(this).attr("class").split(" ")[1] == "img-3") {
        $(".textbox").html(text_4);
    }else if ($(this).attr("class").split(" ")[1] == "img-4") {
        $(".textbox").html(text_3);
    }else if ($(this).attr("class").split(" ")[1] == "img-5") {
      $(".textbox").html(text_2);
    }else if ($(this).attr("class").split(" ")[1] == "img-6") {
      $(".textbox").html(text_1);
    }else if ($(this).attr("class").split(" ")[1] == "img-7") {
      $(".textbox").html(text_7);
    }else if ($(this).attr("class").split(" ")[1] == "img-8") {
      $(".textbox").html(text_8);
    }else if ($(this).attr("class").split(" ")[1] == "img-9") {
      $(".textbox").html(text_9);
    }else if ($(this).attr("class").split(" ")[1] == "img-10") {
      $(".textbox").html(text_10);
    }else if ($(this).attr("class").split(" ")[1] == "img-11") {
      $(".textbox").html(text_11);
    }else if ($(this).attr("class").split(" ")[1] == "img-12") {
      $(".textbox").html(text_12);
    }
},
  function(){
    $(this).removeClass("hover");
    $(this).css("opacity","(0.9)");
    var item = $(this);
    setTimeout(function( items = item ) {
      $(item).css("z-index","1");
    },500);

  });


});
