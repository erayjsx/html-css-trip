window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var logo = document.querySelector(".logo");
  var btn = document.querySelector(".icons a");
  var menuLinks = document.querySelectorAll("nav ul a");
  var content = document.querySelector("body");
  var contentPosition = content.getBoundingClientRect().top;

  if (contentPosition < 0) {
    nav.style.backgroundColor = "#fff";
    logo.style.color = "#FF4F00";
    btn.style.color = "#000";
    btn.style.border = "1px solid #000";
    menuLinks.forEach((link) => {
      link.style.color = "#000";
    });
    nav.classList.add("shadow");

    logo.style.backgroundImage = "url('./assets/logo.png')";
  } else {
    nav.style.backgroundColor = "transparent";
    logo.style.color = "#fff";
    btn.style.color = "#fff";
    btn.style.border = "1px solid #fff";
    menuLinks.forEach((link) => {
      link.style.color = "#fff";
    });
    nav.classList.remove("shadow");
    logo.style.backgroundImage = "url('./assets/light-logo.png')";
  }
});

function openTabs(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
