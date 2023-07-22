window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    $("#intro").addClass("on");
  }, 1000);

  /* container scroll event section */
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);

    if (scrollTop >= 0 && scrollTop <= 1015) {
      $(".navi01").fadeOut(500);
    } else {
    }
    //
    // lottieScroll();
  });

  //oneScroll page 구문

  var $mouseX = 0,
    $mouseY = 0,
    $xp = 0,
    $yp = 0,
    $flag = $("#mega .cursor_circle");

  $(document).mousemove(function (e) {
    $mouseX = e.pageX;
    $mouseY = e.pageY;
  });

  var $loop = setInterval(function () {
    // change 12 to alter damping higher is slower
    $xp += ($mouseX - $xp) / 32;
    $yp += ($mouseY - $yp) / 32;
    $flag.css({
      left: $xp - $flag.width() * 2 + "px",
      top: $yp - $flag.height() * 2 + "px",
    });
  }, 1);

  const stageX = $("#oneScrollX");

  function next(page, index) {
    stageX.css("transform", `translateY(-${innerHeight * index}px)`);
    stageX.removeClass();

    setTimeout(() => {
      stageX.addClass(page);
    }, 1000);
  }

  $("#intro  .group1 .intro_btn").click(function () {
    $("#intro").addClass("off");
  });

  $(".menu_right .sequence > li").click(function () {
    let $idx = $(this).index();
    $(".menu_right .sequence > li").removeClass("on");
    $(this).addClass("on");
    $("#container").addClass("active");
    $("#oneScrollX").addClass("active");

    if ($idx === 0) {
      $("#container").removeClass("active");
      $("#oneScrollX").removeClass("active");
      $("#header_top").removeClass("on");
      $(".bottom").removeClass("on");
      $(".menu_left").removeClass("on");
      $(".menu_right").removeClass("on");
      container.scrollTo(0, 0, 600, {
        easing: easing.easeInOutCirc,
      });
    }
    if ($idx === 1) {
      next("pageX-1", 0);
    }
    if ($idx === 2) {
      next("pageX-2", 1);
    }
    if ($idx === 3) {
      next("pageX-3", 2);
    }
    if ($idx === 4) {
      next("pageX-4", 3);
    }

    if ($idx === 5) {
      next("pageX-5", 4);
    }
  });

  $(".menu_left").click(function () {
    $("#mega").addClass("on");
  });

  $("#mega .xx").click(function () {
    $("#mega").removeClass("on");
  });

  $("#mega .inner .group01 > li").click(function () {
    let $idx = $(this).index();
    $("#mega").removeClass("on");
    $("#container").addClass("active");
    $("#oneScrollX").addClass("active");

    if ($idx === 0) {
      $("#container").removeClass("active");
      $("#oneScrollX").removeClass("active");
      $("#header_top").removeClass("on");
      $(".bottom").removeClass("on");
      $(".menu_left").removeClass("on");
      $(".menu_right").removeClass("on");
      $(".menu_right .sequence > li").removeClass("on");
      $(".menu_right .sequence > li:nth-child(1)").addClass("on");
      container.scrollTo(0, 0, 600, {
        easing: easing.easeInOutCirc,
      });
    }
    if ($idx === 1) {
      next("pageX-1", 0);

      $(".menu_right .sequence > li").removeClass("on");
      $(".menu_right .sequence > li:nth-child(2)").addClass("on");
    }
    if ($idx === 2) {
      next("pageX-2", 1);

      $(".menu_right .sequence > li").removeClass("on");
      $(".menu_right .sequence > li:nth-child(3)").addClass("on");
    }
    if ($idx === 3) {
      next("pageX-3", 2);

      $(".menu_right .sequence > li").removeClass("on");
      $(".menu_right .sequence > li:nth-child(4)").addClass("on");
    }
    if ($idx === 4) {
      next("pageX-4", 3);

      $(".menu_right .sequence > li").removeClass("on");
      $(".menu_right .sequence > li:nth-child(5)").addClass("on");
    }

    if ($idx === 5) {
      next("pageX-5", 4);

      $(".menu_right .sequence > li").removeClass("on");
      $(".menu_right .sequence > li:nth-child(6)").addClass("on");
    }
  });

  stageX.on("wheel", function (e) {
    let v = e.originalEvent.deltaY;

    if (v < 0) {
      if (stageX.hasClass("pageX-1")) {
        setTimeout(() => {
          $("#oneScrollX").css("transform", "translateY(100vh)");
          $("#container").removeClass("active");
        }, 500);

        // $('#container').removeClass('active');
        // $('#oneScrollX').removeClass('active');

        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(1)").addClass("on");

        $("#header_top").removeClass("on");
        $(".bottom").removeClass("on");
        $(".menu_left").removeClass("on");
        $(".menu_right").removeClass("on");
      }

      if (stageX.hasClass("pageX-2")) {
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(2)").addClass("on");
        next("pageX-1", 0);
      }
      if (stageX.hasClass("pageX-3")) {
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(3)").addClass("on");
        next("pageX-2", 1);

        $("#w_section03").removeClass("on");
      }
      if (stageX.hasClass("pageX-4")) {
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(4)").addClass("on");
        next("pageX-3", 2);
        $("#w_section04").removeClass("on");
        $("#w_section03").addClass("on");
      }
      if (stageX.hasClass("pageX-5")) {
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(5)").addClass("on");
        next("pageX-4", 3);
        $("#w_section04").addClass("on");
      }
    } else {
      if (stageX.hasClass("pageX-1")) {
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(3)").addClass("on");
        next("pageX-2", 1);
      }
      if (stageX.hasClass("pageX-2")) {
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(4)").addClass("on");
        next("pageX-3", 2);
        $("#w_section03").addClass("on");
      }
      if (stageX.hasClass("pageX-3")) {
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(5)").addClass("on");
        $("#w_section03").removeClass("on");
        $("#w_section04").addClass("on");
        next("pageX-4", 3);
      }
      if (stageX.hasClass("pageX-4")) {
        $(".menu_right .sequence > li").removeClass("on");

        $(".menu_right .sequence > li:nth-child(6)").addClass("on");

        // $('#oneScrollX').removeClass('active');
        // stageX.css('transform', `translateY(-${innerHeight * 4}px)`);
        $("#w_section04").removeClass("on");
        next("pageX-5", 4);
      }
      // if (stageX.hasClass('pageX-5')) {
      // }
    }
  });

  $("#w_section01 .box01")
    .mouseenter(function () {
      $(this).css({ width: "65.33%", height: "50%" });
      $("#w_section01 .box02").css({ width: "34.5%", height: "83.5%" });
      $("#w_section01 .box03").css({ left: "872px", top: "394.5px" });
      $("#w_section01 .box04").css({ width: "50%", height: "49.6%" });
      $("#w_section01 .box05").css({ width: "49.8%", height: "16.1%" });
    })
    .mouseleave(function () {
      $(this).css({ width: "57.5%", height: "33%" });
      $("#w_section01 .box02").css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box03").css({ left: "737px", top: "260px" });

      $("#w_section01 .box04").css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box05").css({ width: "57.5%", height: "33%" });
    });

  $("#w_section01 .box02")
    .mouseenter(function () {
      $("#w_section01 .box01").css({ width: "49.8%", height: "51.4%" });
      $(this).css({ width: "50%", height: "85%" });
      $("#w_section01 .box03").css({ left: "604px", top: "405px" });
      $("#w_section01 .box04").css({ width: "34.6%", height: "48.12%" });
      $("#w_section01 .box05").css({ width: "65.2%", height: "14.6%" });
    })
    .mouseleave(function () {
      $("#w_section01 .box01").css({ width: "57.5%", height: "33%" });
      $(this).css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box03").css({ left: "737px", top: "260px" });
      $("#w_section01 .box04").css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box05").css({ width: "57.5%", height: "33%" });
    });

  $("#w_section01 .box03")
    .mouseenter(function () {
      $("#w_section01 .box01").css({ width: "61.4%", height: "25%" }); /**/
      $("#w_section01 .box02").css({ width: "38.4%", height: "74.02%" }); /**/
      $(this).css({ left: 676, top: 198 });
      $(this).addClass("on");
      $("#w_section01 .box04").css({ width: "38.9%", height: "74.6%" }); /**/
      $("#w_section01 .box05").css({ width: "60.9%", height: "25.54%" }); /**/
    })
    .mouseleave(function () {
      $("#w_section01 .box01").css({ width: "57.5%", height: "33%" });
      $("#w_section01 .box02").css({ width: "42.3%", height: "66.56%" });
      $(this).css({ left: 737, top: 262 });
      $(this).removeClass("on");
      $("#w_section01 .box04").css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box05").css({ width: "57.5%", height: "33%" });
    });

  $("#w_section01 .box04")
    .mouseenter(function () {
      $("#w_section01 .box01").css({ width: "65.2%", height: "14.6%" });
      $("#w_section01 .box02").css({ width: "34.6%", height: "48%" });
      $("#w_section01 .box03").css({ left: "872px", top: "115px" });
      $(this).css({ width: "50%", height: "84.9%" });
      $("#w_section01 .box05").css({ width: "49.8%", height: "51.4%" });
    })
    .mouseleave(function () {
      $("#w_section01 .box01").css({ width: "57.5%", height: "33%" });
      $("#w_section01 .box02").css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box03").css({ left: "737px", top: "260px" });
      $(this).css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box05").css({ width: "57.5%", height: "33%" });
    });

  $("#w_section01 .box05")
    .mouseenter(function () {
      $("#w_section01 .box01").css({ width: "49.8%", height: "16.1%" });
      $("#w_section01 .box02").css({ width: "50%", height: "49.9%" });
      $("#w_section01 .box03").css({ left: "600px", top: "126px" });
      $("#w_section01 .box04").css({ width: "34.3%", height: "83.5%" });
      $(this).css({ width: "65.5%", height: "50%" });
    })
    .mouseleave(function () {
      $("#w_section01 .box01").css({ width: "57.5%", height: "33%" });
      $("#w_section01 .box02").css({ width: "42.3%", height: "66.56%" });
      $("#w_section01 .box03").css({ left: "737px", top: "260px" });
      $("#w_section01 .box04").css({ width: "42.3%", height: "66.56%" });
      $(this).css({ width: "57.5%", height: "33%" });
    });

  $("#w_section04 .inner1 > div").mouseenter(function () {
    $("#w_section04 .inner1 >div").removeClass("on");
    $(this).addClass("on");
  });

  $(" #w_section05 .se05_inner .group0 > section")
    .mouseenter(function () {
      // $('#w_section05 .se05_inner .group0 > section').removeClass('on');
      $("#w_section05 .se05_inner .group0 > section").addClass("off");
      $(this).addClass("on");
    })
    .mouseleave(function () {
      $("#w_section05 .se05_inner .group0 > section").removeClass("on");
      $("#w_section05 .se05_inner .group0 > section").removeClass("off");
    });

  // var anim;
  // var elem = document.getElementById('lottie');
  //
  // var params = {
  //     container : elem,
  //     renderer:'svg',
  //     loop:false,
  //     rendererSettings: {
  //         // preserveAspectRatio: "none",
  //         progressiveLoad:false,
  //     },
  //     // preserveAspectRatio:"none",
  //     autoplay:true,
  //     animationData : animationData2,
  //     // path:'../json/data.json'
  // }
  //
  //
  // anim = lottie.loadAnimation(params);
  //
  // function lottieScroll() {
  //     let scrollPercent = Math.round(container.scrollTop );
  //
  //     // let scrollPercent = Math.round(document.documentElement.scrollTop
  //     //     /(document.documentElement.scrollHeight - window.innerHeight) * 100);
  //     console.log('스크롤 :'+ scrollPercent + "%");
  //
  //     console.log('현재 프레임 :'+ anim.currentRawFrame);
  //     console.log('토탈 프레임 :' + anim.totalFrames);
  //     //
  //     anim.goToAndStop((scrollPercent/100) *  anim.totalFrames *0.05, true);
  // }
  //

  gsap.to("#main_section01", {
    scrollTrigger: {
      trigger: "#main_section01",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onLeave: () => {
        console.log("onLeave");
        $("#container").addClass("active");
        $("#oneScrollX").css("transform", "translateY(0)");

        // $('#oneScrollX').addClass('active');
        // $('#w_section01').addClass('on');
        $(".menu_right .sequence > li").removeClass("on");
        $(".menu_right .sequence > li:nth-child(2)").addClass("on");

        $("#header_top").addClass("on");
        $(".bottom").addClass("on");
        $(".menu_left").addClass("on");
        $(".menu_right").addClass("on");
      },
    },
  });

  gsap.to("#main_section01 .fix-this-01", {
    scrollTrigger: {
      trigger: "#main_section01 .trigger-this-01",
      start: "top top",
      // end: () => "+=" + 300,
      end: "bottom bottom",
      pin: true,
      // pinSpace:false,
      pinSpacing: false,
      scrub: true,
    },
  });

  let v = 0;
  gsap.to("main_section01 .main_img", {
    scrollTrigger: {
      trigger: "#main_section01",
      start: "top top",
      end: "bottom bottom",
      // end: () => "+=" + 300,
      pinSpacing: false,
      scrub: true,
      onUpdate: (self) => {
        // console.log("progress:", self.progress)
        v = Math.floor(self.progress * 239);
        // console.log(v)
        $("#main_section01 .main_img > img").attr(
          "src",
          `images/cut/final_0000${v + 1}.png`
        );
      },
    },
  });

  gsap.to("#main_section01 .main", {
    scale: 2,
    scrollTrigger: {
      trigger: "#main_section01",
      start: "1000 top",
      end: () => "+=" + 2000,
      // end: 'bottom bottom',
      pinSpacing: false,
      scrub: true,
    },
  });

  $("#w_section02 .inner .se02_slide01")
    .slick({
      dots: false, //navigation
      arrows: true, //arrow
      prevArrow: $(""), //prev
      nextArrow: $(""), //next
      autoplay: true, // autoplay mode
      autoplaySpeed: 3000, // auto speed
      pauseOnHover: false, // pause on mouse hover
      fade: false, //fade mode only one slider
      speed: 1000, // speed
      infinite: true, // infinite mode
      asNavFor: ".se02_slide02", // another slider
      centerMode: false, // center move
      centerPadding: "0%", // center move padding
      slidesToShow: 1, // show slider number
      slidesToScroll: 1, // next slider number
      swipe: true, // swiper
      focusOnSelect: false, // click to slider
      draggable: true,
      vertical: false, // vertical slider
      verticalSwiping: false, // vertical swiper
      initialSlide: 0, // slider number
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition∑
      variableWidth: false,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".slider02 .slick-slide").removeClass("on");
    })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      $(".slider02 .slick-current").addClass("on");
    });

  $("#w_section02 .inner .se02_slide02")
    .slick({
      dots: false, //navigation
      arrows: true, //arrow
      prevArrow: $(""), //prev
      nextArrow: $(""), //next
      autoplay: true, // autoplay mode
      autoplaySpeed: 3000, // auto speed
      pauseOnHover: false, // pause on mouse hover
      fade: false, //fade mode only one slider
      speed: 1000, // speed
      infinite: true, // infinite mode
      asNavFor: ".se02_slide01", // another slider
      centerMode: false, // center move
      centerPadding: "0%", // center move padding
      slidesToShow: 1, // show slider number
      slidesToScroll: 1, // next slider number
      swipe: true, // swiper
      focusOnSelect: false, // click to slider
      draggable: true,
      vertical: true, // vertical slider
      verticalSwiping: false, // vertical swiper
      initialSlide: 0, // slider number
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition∑
      variableWidth: false,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".slider02 .slick-slide").removeClass("on");
    })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      $(".slider02 .slick-current").addClass("on");
    });

  $("#w_section01 .inner .box01").mouseenter(function () {
    $(this).addClass("on");
  });

  $("#w_section01 .inner > div").click(function () {
    let $idx = $(this).index();

    $(".pop").addClass("on");
    $(".pop .box1 > img").attr("src", `images/section01/box${$idx + 1}.png`);
  });

  $(".pop .close").click(function () {
    $(".pop").removeClass("on");
  });
});
