const blog1 = document.getElementById("blog1");
const blog2 = document.getElementById("blog2");
const blog3 = document.getElementById("blog3");

//functions
function addFadeOut(idName) {
  var idElements = document.getElementById(idName);
  idElements.classList.add("fade-out");
}

function removeFadeOut(idName) {
  var idElements = document.getElementById(idName);
  idElements.classList.remove("fade-out");
}

function slide(idName) {
  var idElements = document.getElementById(idName);
  idElements.classList.add("revealed");
}

function removeSlide(idName) {
  var idElements = document.getElementById(idName);
  idElements.classList.remove("revealed");
}

function checkLocWithScroll() {
  if (pageYOffset > 400 && pageYOffset < 1200) {
    addFadeOut("main-text");
  } else if (pageYOffset < 400) {
    changeText(
      '<span class="orange">Jump</span>Start your career with us!',
      "main-text"
    );
    removeFadeOut("main-text");
    removeLightGray("main-text");
    removeSlide("signUp");
  } else if (pageYOffset > 1200) {
    removeFadeOut("main-text");
    changeText("We offer only the best!", "main-text");
    addLightGray("main-text");
    slide("signUp");
  }
}

function addLightGray(idName) {
  var idElements = document.getElementById(idName);
  idElements.classList.add("light-gray");
}

function removeLightGray(idName) {
  var idElements = document.getElementById(idName);
  idElements.classList.remove("light-gray");
}

function changeText(yourText, idName) {
  var idInnerText = document.getElementById(idName);
  idInnerText.innerHTML = yourText;
}

function extendNav() {
  var elements = document.getElementById("extended-div");
  var three = document.getElementsByClassName("nav");

  //I have no idea why I have to put [0] in order for it to work
  if (elements.classList.contains("extend")) {
    elements.classList.remove("extend");
    three[0].classList.remove("extended");
  } else {
    elements.classList.add("extend");
    three[0].classList.add("extended");
  }
}

//for blog page
function checkLocWithScroll2() {
  console.log(pageYOffset);
  if (pageYOffset > 50 && pageYOffset < 400) {
    blog1.classList.add("appear");
    blog2.classList.add("appear");
  } else if (pageYOffset > 400) {
    blog3.classList.add("appear");
  }
  console.log(blog1);
}

//finished 9/16/2020
