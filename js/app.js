/*------------------------------ Modify by Parham Design in 2023 ------------------------------*/

/*-------------------------------------- Personal Scripts -------------------------------------*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let sidenavLinks = document.querySelectorAll(".my_mobile_menu_links ul li a");
let mobilMenuIcon = document.querySelector("#mobile_menu_trigger");
let navbar = document.querySelector(".navbar");
let sidenavOverlay = document.querySelector(".sidenav_overlay");
let sidenav = document.querySelector(".my_sidenav");
let closeSidenavMenu = document.querySelector("#close_sidenav_menu");
let aboutSecondParagraph = document.getElementById(
  "about_section_paragraph_second"
);
let aboutReadMoreBtn = document.getElementById("about_section_button");
let myThemeToggleButton = document.querySelectorAll(".my_theme_toggle_button");
let myLanguageChangeMenu = document.querySelector(
  ".my_language_list_drop_down"
);
let languages = ["english", "persian", "japanes", "korean"];
let successMessage = "";
let errorMessage = "";

function myTyped(event) {
  let a = document.querySelector(".multiple_text_container");
  let b = document.querySelectorAll(".multiple_text");
  let c = document.querySelectorAll(".typed-cursor");
  b.forEach((d) => {
    a.removeChild(d);
  });
  c.forEach((e) => {
    a.removeChild(e);
  });
  let f = document.createElement("span");
  f.classList.add("multiple_text");
  a.appendChild(f);
  let typed = new Typed(".multiple_text", {
    strings: event,
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    cursorChar: "_",
    loop: true,
  });
  return typed;
}

window.addEventListener("click", function (e) {
  if (e.target.closest(".language_change_btn") === null) {
    myLanguageChangeMenu.setAttribute("style", "display: none;");
  }
});

function openLanguageMenu(event) {
  if (myLanguageChangeMenu.style.display == "block") {
    myLanguageChangeMenu.setAttribute("style", "display: none;");
  } else {
    myLanguageChangeMenu.setAttribute(
      "style",
      "display: block; top: calc(" +
        event.target.offsetTop +
        "px + 35px); left: calc(34px + " +
        event.target.offsetLeft +
        "px - 150px);"
    );
  }
}

function checkLanguage() {
  languages.forEach((language) => {
    if (document.body.classList.contains(language)) {
      document.body.classList.remove(language);
    }
  });
}

function changeLanguage(event) {
  if (event == "" || event == null) {
    localStorage.setItem("language", "english");
    changeLanguage(localStorage.getItem("language"));
  } else {
    checkLanguage();
    localStorage.setItem("language", event);
    document.body.classList.add(event);
    if (event == "english") {
      myTyped(["Web Designer", "Frontend Developer"]);
      pageText.english.forEach((res) => {
        document.getElementById(res.elementId).innerHTML = res.text;
      });
      formText.english.forEach((res) => {
        document
          .getElementById(res.elementId)
          .setAttribute("placeholder", res.attributeValue);
      });
      successMessage = "Sent successfully";
      errorMessage = "Message not sent (error :";
    } else if (event == "persian") {
      myTyped(["وب دیزاینر", "فرانتند دولوپر", "هستم"]);
      pageText.persian.forEach((res) => {
        document.getElementById(res.elementId).innerHTML = res.text;
      });
      formText.persian.forEach((res) => {
        document
          .getElementById(res.elementId)
          .setAttribute("placeholder", res.attributeValue);
      });
      successMessage = "با موفقیت ارسال شد";
      errorMessage = "پیام ارسال نشد (کد خطا :";
    } else if (event == "japanes") {
      myTyped(["Webデザイナー", "兼フロントエンド開発者"]);
      pageText.japanes.forEach((res) => {
        document.getElementById(res.elementId).innerHTML = res.text;
      });
      formText.japanes.forEach((res) => {
        document
          .getElementById(res.elementId)
          .setAttribute("placeholder", res.attributeValue);
      });
      successMessage = "正常に送信されました";
      errorMessage = "メッセージは送信されませんでした (エラーコード :";
    } else if (event == "korean") {
      myTyped(["웹 디자이너", "프론트엔드 개발자"]);
      pageText.korean.forEach((res) => {
        document.getElementById(res.elementId).innerHTML = res.text;
      });
      formText.korean.forEach((res) => {
        document
          .getElementById(res.elementId)
          .setAttribute("placeholder", res.attributeValue);
      });
      successMessage = "성공적으로 전송";
      errorMessage = "메시지가 전송되지 않음 (에러 코드 :";
    }
  }
}

changeLanguage(localStorage.getItem("language"));

function themeButtonIconChanger(event) {
  if (event == "dark_mode") {
    myThemeToggleButton.forEach((btn) => {
      if (btn.classList.contains("bxs-sun")) {
        btn.classList.remove("bxs-sun");
        btn.classList.add("bxs-moon");
      } else {
        btn.classList.add("bxs-moon");
      }
    });
  } else {
    myThemeToggleButton.forEach((btn) => {
      if (btn.classList.contains("bxs-moon")) {
        btn.classList.remove("bxs-moon");
        btn.classList.add("bxs-sun");
      } else {
        btn.classList.add("bxs-sun");
      }
    });
  }
}

function themeApplyed(event) {
  if (event == "" || event == null) {
    localStorage.setItem("theme", "light_mode");
    themeApplyed(localStorage.getItem("theme"));
  } else if (event == "dark_mode") {
    document.body.classList.add(event);
    themeButtonIconChanger(event);
    if (document.body.classList.contains("light_mode")) {
      document.body.classList.remove("light_mode");
    }
  } else {
    document.body.classList.add(event);
    themeButtonIconChanger(event);
    if (document.body.classList.contains("dark_mode")) {
      document.body.classList.remove("dark_mode");
    }
  }
}

function changeTheme() {
  if (document.body.classList.contains("dark_mode")) {
    localStorage.setItem("theme", "light_mode");
    themeApplyed("light_mode");
  } else {
    localStorage.setItem("theme", "dark_mode");
    themeApplyed("dark_mode");
  }
}

themeApplyed(localStorage.getItem("theme"));

mobilMenuIcon.onclick = () => {
  sidenav.classList.add("active");
  sidenavOverlay.classList.add("active");
};

closeSidenavMenu.onclick = () => {
  sidenav.classList.remove("active");
  sidenavOverlay.classList.remove("active");
};

sidenavLinks.forEach((link) => {
  link.onclick = () => {
    mobilMenuIcon.classList.remove("bx-x");
    sidenav.classList.remove("active");
    sidenavOverlay.classList.remove("active");
  };
});

sidenavOverlay.onclick = () => {
  mobilMenuIcon.classList.remove("bx-x");
  sidenav.classList.remove("active");
  sidenavOverlay.classList.remove("active");
};

aboutReadMoreBtn.addEventListener("click", function () {
  aboutSecondParagraph.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  if (e.target.closest("#about_section_button") === null) {
    aboutSecondParagraph.classList.remove("active");
  }
});

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      sidenavLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(
            ".my_sidenav .my_mobile_menu_links ul li a[href*=" + id + "]"
          )
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

/*------------------------------------ end Personal Scripts -----------------------------------*/

/*------------------------------------ Scroll Reveal Scripts ----------------------------------*/

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".hero_section_content, .section_heading", {
  origin: "top",
});
ScrollReveal().reveal(
  ".hero_section_image, .services_container, .works_box, .contact_section form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".hero_section_content h1, .about_section_image", {
  origin: "left",
});

/*---------------------------------- end Scroll Reveal Scripts --------------------------------*/

/*-------------------------------------- Email JS Scripts -------------------------------------*/

let contactForm = document.getElementById("contact_form");
let stateSuccessMessage = document.getElementById(
  "contact_form_stage_success_message"
);
let stateErrorMessage = document.getElementById(
  "contact_form_stage_error_message"
);

let serviceId = "service_uxwxq54";
let templateId = "template_c1hcety";
let publicKey = "JYl7NUg6kT0g6eNNL";

let sendEmail = (event) => {
  event.preventDefault();
  emailjs
    .send(
      serviceId,
      templateId,
      {
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        user_number: document.getElementById("user_number").value,
        user_subject: document.getElementById("user_subject").value,
        user_message: document.getElementById("user_message").value,
      },
      publicKey
    )
    .then(
      (success) => {
        stateSuccessMessage.classList.add("active");
        stateSuccessMessage.textContent = successMessage;
        contactForm.reset();
        setTimeout(() => {
          stateSuccessMessage.classList.remove("active");
          stateSuccessMessage.textContent = "";
        }, 3000);
      },
      (error) => {
        stateErrorMessage.classList.add("active");
        stateErrorMessage.textContent = errorMessage + error.status + ")";
        setTimeout(() => {
          stateErrorMessage.classList.remove("active");
          stateErrorMessage.textContent = "";
        }, 3000);
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*------------------------------------ end Email JS Scripts -----------------------------------*/
