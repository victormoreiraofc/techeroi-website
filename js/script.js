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

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-text').addEventListener('input', function () {
    var searchTerm = this.value.toLowerCase();
    var infoContainers = document.getElementsByClassName('info-container');

    for (var i = 0; i < infoContainers.length; i++) {
      var nameElement = infoContainers[i].querySelector('.name');
      var name = nameElement.textContent.toLowerCase();

      if (name.includes(searchTerm)) {
        infoContainers[i].style.display = 'flex';
      } else {
        infoContainers[i].style.display = 'none';
      }
    }
  });
});

function toggleLikeIcon(element) {
  element.classList.toggle('active');
}

if (window.location.href.indexOf("404") === -1) {
  fetch("../404.html")
    .then(response => {
      if (!response.ok) {
        window.location.href = "../404.html";
      }
    })
    .catch(error => {
      console.error("Erro ao verificar a página: " + error);
    });
}

window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-scr');
  loadingScreen.style.display = 'none';
});
