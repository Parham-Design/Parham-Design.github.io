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

window.addEventListener("click", function (e) {
  if (e.target.closest(".language_change_btn") === null) {
    myLanguageChangeMenu.setAttribute("style", "display: none;");
  }
});

function openLanguageMenu(event) {
  if (myLanguageChangeMenu.style.display == "block") {
    myLanguageChangeMenu.setAttribute("style", "display: none;");
  } else {
    console.log(event);
    myLanguageChangeMenu.setAttribute(
      "style",
      "display: block; top: calc(" +
        event.target.offsetTop +
        "px + 35px); left: calc(" +
        event.target.offsetLeft +
        "px - 165px);"
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
  aboutSecondParagraph.setAttribute("style", "display: block;");
});
window.addEventListener("click", function (e) {
  if (e.target.closest("#about_section_button") === null) {
    aboutSecondParagraph.setAttribute("style", "display: none;");
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
  reset: true,
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

/*-------------------------------------- Typed JS Scripts -------------------------------------*/
let typedTextsEN = ["Web Designer", "Frontend Developer"];
const typedEN = new Typed(".multiple_text_EN", {
  strings: typedTextsEN,
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 2000,
  cursorChar: "_",
  loop: true,
});

let typedTextsIR = ["وب دیزاینر", "فرانتند دولوپر", "هستم"];
const typedIR = new Typed(".multiple_text_IR", {
  strings: typedTextsIR,
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 2000,
  cursorChar: " _",
  loop: true,
});

let typedTextsJP = ["Webデザイナー", "兼フロントエンド開発者"];
const typedJP = new Typed(".multiple_text_JP", {
  strings: typedTextsJP,
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 2000,
  cursorChar: "_",
  loop: true,
});

let typedTextsKR = ["웹 디자이너", "프론트엔드 개발자"];
const typedKR = new Typed(".multiple_text_KR", {
  strings: typedTextsKR,
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 2000,
  cursorChar: "_",
  loop: true,
});

/*------------------------------------ end Typed JS Scripts -----------------------------------*/

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
