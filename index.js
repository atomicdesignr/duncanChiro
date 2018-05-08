function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


  var h1s = document.getElementsByTagName("h1");
  // var p = x.getElementsByTagName("P");
  var i;
  for (i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "rgba(0,0,0,0.4)";
  } // Hackerman: You messed this parenthesis up. It ended up on line 18 somehow.
  var ps = document.getElementsByTagName("p");
  var i;
  for (i = 0; i < ps.length; i++) {
    ps[i].style.color = "rgba(0,0,0,0.4)";
  }

  // document.getElementById("style.color = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";


  var h1s = document.getElementsByTagName("h1");
  // var p = x.getElementsByTagName("P");
  var i;
  for (i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "rgb(31, 99, 1)";

    var ps = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < ps.length; i++) {
      ps[i].style.color = "rgb(0, 0, 0)";
    }
  }
} // Hackerman: You messed this parenthesis up.



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
    var slides = document.getElementsByClassName("mySlides"); // Hackerman: This className isn't used in your html.
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
