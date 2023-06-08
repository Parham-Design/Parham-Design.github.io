//  ** start here ** (this section is for switching betwean persian language and english language)

// let en_content = "hello world";
// let ir_content = "سلام دنیا";

// function contentRender(content_type) {
//   if (content_type == "en-content") {
//     document.getElementById("content-render").innerText = en_content;
//   } else {
//     document.getElementById("content-render").innerText = ir_content;
//   }
// }

// (() => {
//   contentRender("en-content");
// })();

// document.getElementById("en-language").addEventListener("click", () => {
//   let en = document.getElementById("en-language");
//   if (en.checked) {
//     contentRender("en-content");
//   } else {
//     contentRender("ir-content");
//   }
// });

// document.getElementById("ir-language").addEventListener("click", () => {
//   let ir = document.getElementById("ir-language");
//   if (ir.checked) {
//     contentRender("ir-content");
//   } else {
//     contentRender("en-content");
//   }
// });
// ** end here **

$(document).ready(function () {
  function themApplyed(ele) {
    if (ele == "" || ele == null) {
      localStorage.setItem("theme", "dark-mode");
      themApplyed(localStorage.getItem("theme"));
    } else if (ele == "dark-mode") {
      $("body").removeClass("light-mode");
      $("body").addClass("dark-mode");
      $("#change-theme-mode-desctop").attr("checked", "");
      $("#change-theme-mode-mobile").attr("checked", "");
    } else {
      $("body").removeClass("dark-mode");
      $("body").addClass("light-mode");
    }
  }

  function themeRender(ele) {
    if ($(ele).prop("checked") == true) {
      localStorage.setItem("theme", "dark-mode");
      themApplyed(localStorage.getItem("theme"));
    } else if ($(ele).prop("checked") == false) {
      localStorage.setItem("theme", "light-mode");
      themApplyed(localStorage.getItem("theme"));
    }
  }

  themApplyed(localStorage.getItem("theme"));

  $("#change-theme-mode-desctop").on("change", function () {
    $("#change-theme-mode-mobile").prop("checked", this.checked);
    themeRender(this);
  });
  $("#change-theme-mode-mobile").on("change", function () {
    $("#change-theme-mode-desctop").prop("checked", this.checked);
    themeRender(this);
  });

  $(".sidenav").sidenav();
  $(".collapsible").collapsible();
  $(".scrollspy").scrollSpy();
  $(".parallax").parallax();
  $(".dropdown-trigger").dropdown({
    alignment: "right",
    inDuration: 550,
    outDuration: 550,
  });
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
    duration: 500,
  });

  var interval = setInterval(function () {
    $(".carousel.carousel-slider").carousel("next");
  }, 5000);
  $(".carousel.carousel-slider").mouseleave(function () {
    interval = setInterval(function () {
      $(".carousel.carousel-slider").carousel("next");
    }, 5000);
  });
  $(".carousel.carousel-slider").mouseenter(function () {
    clearInterval(interval);
  });
  // $(".carousel.carousel-slider").mouseup(function () {
  //   interval = setInterval(function () {
  //     $(".carousel.carousel-slider").carousel("next");
  //   }, 5000);
  // });
  // $(".carousel.carousel-slider").mousedown(function () {
  //   clearInterval(interval);
  // });
});
