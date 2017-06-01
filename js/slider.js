
var bannerStatus = 1;
var bannerTimer = 3000;

window.onload = function() {
  bannerLoop();
}

var startBannerLoop = setInterval(function() {
  bannerLoop();
},bannerTimer);


$("#slide-container").hover(function() {
  clearInterval(startBannerLoop);
},
function() {
  startBannerLoop = setInterval(function() {
    bannerLoop();
  },bannerTimer);
});

function bannerLoop() {
  if (bannerStatus === 1) {
    $("#slide2").css("opacity","0");
    setTimeout(function() {
      $("#slide1").css({"right":"0px","z-index":"-10"});
      $("#slide2").css({"right":"-1200px","z-index":"-15"});
      $("#slide3").css({"right":"1200px","z-index":"-5"});
    }, 500);
    setTimeout(function() {
      $("#slide2").css("opacity","1");
    }, 1000);
    bannerStatus = 2;
  }
  else if (bannerStatus === 2) {
    $("#slide3").css("opacity","0");
    setTimeout(function() {
      $("#slide2").css({"right":"0px","z-index":"-10"});
      $("#slide3").css({"right":"-1200px","z-index":"-15"});
      $("#slide1").css({"right":"1200px","z-index":"-5"});
    }, 500);
    setTimeout(function() {
      $("#slide3").css("opacity","1");
    }, 1000);
    bannerStatus = 3;
  }
  else if (bannerStatus === 3) {
    $("#slide1").css("opacity","0");
    setTimeout(function() {
      $("#slide3").css({"right":"0px","z-index":"-10"});
      $("#slide1").css({"right":"-1200px","z-index":"-15"});
      $("#slide2").css({"right":"1200px","z-index":"-5"});
    }, 500);
    setTimeout(function() {
      $("#slide1").css("opacity","1");
    }, 1000);
    bannerStatus = 1;
  }
}
//=======================================back button compatible looping===================\\
function bannerBackLoop() {
  if (bannerStatus === 1) {
    $("#slide3").css("opacity","0");
    setTimeout(function() {
      $("#slide1").css({"right":"0px","z-index":"-15"});
      $("#slide2").css({"right":"-1200px","z-index":"-10"});
      $("#slide3").css({"right":"1200px","z-index":"-5"});
    }, 500);
    setTimeout(function() {
      $("#slide3").css("opacity","1");
    }, 1000);
    bannerStatus = 2;
  }
  else if (bannerStatus === 2) {
    $("#slide1").css("opacity","0");
    setTimeout(function() {
      $("#slide2").css({"right":"0px","z-index":"-15"});
      $("#slide3").css({"right":"-1200px","z-index":"-10"});
      $("#slide1").css({"right":"1200px","z-index":"-5"});
    }, 500);
    setTimeout(function() {
      $("#slide1").css("opacity","1");
    }, 1000);
    bannerStatus = 3;
  }
  else if (bannerStatus === 3) {
    $("#slide2").css("opacity","0");
    setTimeout(function() {
      $("#slide3").css({"right":"0px","z-index":"-15"});
      $("#slide1").css({"right":"-1200px","z-index":"-5"});
      $("#slide2").css({"right":"1200px","z-index":"-10"});
    }, 500);
    setTimeout(function() {
      $("#slide2").css("opacity","1");
    }, 1000);
    bannerStatus = 1;
  }
}
//*----------------------------btn workngs------------------------*\\

$(".slide-btn-prev").click(function(){
  if (bannerStatus === 1) {
    bannerStatus = 2;
  }
  else if (bannerStatus === 2) {
    bannerStatus = 3;
  }
  else if (bannerStatus === 3) {
    bannerStatus = 1;
  }
  bannerBackLoop();
});

$(".slide-btn-next").click(function(){
  bannerLoop();
});
