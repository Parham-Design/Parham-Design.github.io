//  ** start here ** (this section is for switching betwean persian language and english language)
let en_content = "hello world";
let ir_content = "سلام دنیا";

function contentRender(content_type) {
  if (content_type == "en-content") {
    document.getElementById("content-render").innerText = en_content;
  } else {
    document.getElementById("content-render").innerText = ir_content;
  }
}

(() => {
  contentRender("en-content");
})();

document.getElementById("en-language").addEventListener("click", () => {
  let en = document.getElementById("en-language");
  if (en.checked) {
    contentRender("en-content");
  } else {
    contentRender("ir-content");
  }
});

document.getElementById("ir-language").addEventListener("click", () => {
  let ir = document.getElementById("ir-language");
  if (ir.checked) {
    contentRender("ir-content");
  } else {
    contentRender("en-content");
  }
});
// ** end here **

//  ** start here ** (this section is for switching betwean light theme and dark theme)

if (
  localStorage.getItem("theme") == "" ||
  localStorage.getItem("theme") == null
) {
  document.getElementById("dark-theme-mode").click();
  localStorage.setItem("theme", "dark-mode");
} else if (localStorage.getItem("theme") == "dark-mode") {
  document.getElementById("dark-theme-mode").click();
} else {
  document.getElementById("light-theme-mode").click();
}

function themeRender() {
  let ls = localStorage.getItem("theme");
  if (ls == "dark-mode") {
    document.body.setAttribute("class", "dark-mode");
  } else {
    document.body.setAttribute("class", "light-mode");
  }
}

(() => {
  themeRender(localStorage.getItem("theme"));
})();

document.getElementById("dark-theme-mode").addEventListener("click", () => {
  let dark = document.getElementById("dark-theme-mode");
  if (dark.checked) {
    localStorage.setItem("theme", "dark-mode");
    themeRender();
  } else {
    localStorage.setItem("theme", "light-mode");
    themeRender();
  }
});

document.getElementById("light-theme-mode").addEventListener("click", () => {
  let light = document.getElementById("light-theme-mode");
  if (light.checked) {
    localStorage.setItem("theme", "light-mode");
    themeRender();
  } else {
    localStorage.setItem("theme", "dark-mode");
    themeRender();
  }
});
//  ** end here **
