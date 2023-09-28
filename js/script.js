document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loading-screen").style.display = "none";
});

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(".fade-in-element");
  
  elementsToAnimate.forEach(function (element, index) {
      const delay = index * 200; 
      element.style.animationDelay = delay + "ms";
  });
});