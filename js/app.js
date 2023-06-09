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

  let myskills = [
    { name: "JavaScript", width: "70%" },
    { name: "CSS3", width: "80%" },
    { name: "SCSS", width: "60%" },
    { name: "HTML5", width: "90%" },
    { name: "jQuery", width: "80%" },
    { name: "Angular", width: "70%" },
    { name: "PHP", width: "30%" },
    { name: "MySQL", width: "60%" },
    { name: "Materialize CSS", width: "85%" },
    { name: "Bootstrap CSS", width: "70%" },
    { name: "Angular Formly", width: "60%" },
    { name: "Linux", width: "40%" },
    { name: "Windows", width: "60%" },
    { name: "Photoshop", width: "30%" },
    { name: "Office Word", width: "50%" },
    { name: "office Powerpoint", width: "50%" },
    { name: "English", width: "30%" },
    { name: "Persian", width: "90%" },
  ];

  let skillparent = $("#skills .row");
  let firstele =
    '<div class="col s12 m6 l4"><div class="my-skill-wrapper"><div class="my-skill-title-wrapper"><h3 class="left">';
  let secondele = '</h3><p class="right">';
  let thirdele =
    '</p></div><div class="progress"><div class="determinate" style="width: ';
  let forthele = '"></div></div></div></div>';
  (() => {
    for (let i = 0; i < myskills.length; i++) {
      let name = myskills[i].name;
      let width = myskills[i].width;
      skillparent.append(
        firstele + name + secondele + width + thirdele + width + forthele
      );
    }
  })();
});
