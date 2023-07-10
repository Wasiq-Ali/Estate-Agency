$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 400,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true,
    stopOnHover: true,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,
  });
});

$(document).ready(function () {
  $("#owl-demo1").owlCarousel({
    navigation: false,
    items: 3,
    margin: 10,
    responsive: true,
    pagination: true,
    slideSpeed: 400,
    paginationSpeed: 400,
  });
});

$(document).ready(function () {
  $("#owl-demo2").owlCarousel({
    navigation: false,
    items: 3,
    margin: 10,
    responsive: true,
    pagination: true,
    slideSpeed: 400,
    paginationSpeed: 400,
  });
});

$(document).ready(function () {
  $(".testi-boxes").owlCarousel({
    navigation: true,
    navigationText: false,
    items: 1,
    margin: 10,
    responsive: true,
    pagination: true,
    slideSpeed: 400,
    paginationSpeed: 400,
    autoPlay: true,
  });
});

// Custom Js
let search = document.getElementById("search-bar");
let searchBar = document.getElementById("search");
let close = document.getElementById("close");
let shadow = document.getElementById("shadow");

search.addEventListener("click", function () {
  searchBar.classList.add("service-bar-active");
  shadow.style.cssText = "visibility: visible;";
});

close.addEventListener("click", function () {
  searchBar.classList.remove("service-bar-active");
  shadow.style.cssText = "visibility: hidden;";
});

// Humberger-Menu
let nav = document.getElementById("mobile-menu");
let icon = document.getElementById("bar-icon");

icon.addEventListener("click", function () {
  nav.classList.toggle("hamburger-active");
  icon.classList.toggle("fa-xmark");
});

let topIcon = document.getElementById("top-icon");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 180) {
    topIcon.style.cssText = "visibility: visible; opacity:1;";
  } else {
    topIcon.style.cssText = "visibility: hidden; opacity:0;";
  }
});
