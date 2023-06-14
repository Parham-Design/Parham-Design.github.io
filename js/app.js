/*------------------------------ Modify by Parham Design in 2023 ------------------------------*/

/*-------------------------------------- Personal Scripts -------------------------------------*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let sidenavLinks = document.querySelectorAll(
  ".my_sidenav .my_mobile_menu_links ul li a"
);
let mobilMenuIcon = document.querySelector("#mobile_menu_trigger");
let navbar = document.querySelector(".navbar");
let sidenavOverlay = document.querySelector(".sidenav_overlay");
let sidenav = document.querySelector(".my_sidenav");
let closeSidenavMenu = document.querySelector("#close_sidenav_menu");
let myThemeToggleButton = document.querySelectorAll(".my_theme_toggle_button");

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

function themApplyed(event) {
  if (event == "" || event == null) {
    localStorage.setItem("theme", "light_mode");
    themApplyed(localStorage.getItem("theme"));
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
    themApplyed("light_mode");
  } else {
    localStorage.setItem("theme", "dark_mode");
    themApplyed("dark_mode");
  }
}

themApplyed(localStorage.getItem("theme"));

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

const typed = new Typed(".multiple_text", {
  strings: ["Web Designer", "Frontend Developer", "Based in Iran"],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 2000,
  cursorChar: "_",
  loop: true,
});

/*------------------------------------ end Typed JS Scripts -----------------------------------*/
