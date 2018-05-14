function openNav() {
  document.getElementById("mySidenav").style.width = "250px"; //width
  document.getElementById("main").style.marginLeft = "250px"; //left margin of nav bar
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; //background color when nav open
  // document.footer.style.backgroundColor = "rgba(0, 0, 0, 0.4)";


  // fade header elements
  var h1s = document.getElementsByTagName("h1");
  var i;
  for (i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "rgba(0,0,0,0.4)";
  }


  // fade paragraph elements
  var ps = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < ps.length; i++) {
    ps[i].style.color = "rgba(0,0,0,0.4)";
  }
}

  //fade the horizontal rules bro
  var hrs = document.getElementsByTagName("hr");
  var i;
  for (i = 0; i < hrs.length; i++) {
    hrs[i].style.color = "rgba(0,0,0,0.4)";
  }
  //
  // var divs = document.getElementsByTagName("div")
  // var i;
  // for (i = 0; i < divs.length; i++) {
  //   divs[i].style.backgroundColor = "rgba(0,0,0,0.4)";
  // }

// return to normal screen and font
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";

  var h1s = document.getElementsByTagName("h1");
  var i;
  for (i = 0; i < h1s.length; i++) {
  h1s[i].style.color = "rgb(31, 99, 1)";
  }

  var ps = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < ps.length; i++) {
  ps[i].style.color = "rgb(0, 0, 0)";
  }

  var hrs = document.getElementsByTagName("hr");
  var i;
  for (i = 0; i < hrs.length; i++) {
    hrs[i].style.color = "rgba(0,0,0,0.4)";
  }
}

// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
