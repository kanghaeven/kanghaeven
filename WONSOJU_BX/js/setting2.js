let container2;
let stage2;

window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  stage2 = document.querySelector("#container2");
  container2 = Scrollbar.init(stage2, {
    damping: 0.1,
    delegateTo: stage2,
    continuousScrolling: true,
    alwaysShowTracks: false,
  });

  ScrollTrigger.scrollerProxy("#container2", {
    scrollTop(value) {
      if (arguments.length) {
        container2.scrollTop = value;
      }

      return container2.scrollTop;
    },
  });
  container2.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: stage2 });

  container2.setPosition(0, 0);
  container2.track.xAxis.element.remove();
  // Scrollbar.detachStyle();

  $(".startPoint").click(function () {
    container2.scrollTo(0, 0, 600, {
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  (function () {
    gsap.to("#fix_section01 .fix-this-01", {
      // rotation: 360,
      // x: -3200,
      scrollTrigger: {
        trigger: "#fix_section01 .trigger-this-01",
        start: "top top",
        // end: () => "+=" + 300,
        end: "bottom bottom",
        pin: true,
        scrub: true,
      },
    });

    gsap.to("#fix_section01 #media_play", {
      // rotation: 360,
      x: -3200,
      scrollTrigger: {
        trigger: "#fix_section01",
        start: "top top",
        // end: () => "+=" + 300,
        end: "bottom bottom",
        pin: false,
        scrub: true,
      },
    });
  })();

  // Only necessary to correct marker position - not needed in production
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    container2.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y });
      $(".posNum").html(offset.y);
    });
  }
});
