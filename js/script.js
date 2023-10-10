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

<!-- ... ( código HTML anterior) ... -->

<div id="character-slider" class="container fade-in-element">
    <a href="tony-stark.html">
        <div class="info-container">
            <!-- ... (seu código anterior) ... -->
            <div class="like-counter">
                <span id="like-count-ts">0</span> Likes
            </div>
            <img src="assets/icons/like.png" alt="like-icon" class="icon-like" onclick="toggleLikeIcon('ts')">
            <img src="assets/icons/click.png" alt="click-icon" class="icon-click">
            <hr>
        </div>
    </a>
    <!-- Mesmo padrão para os outros personagens -->
</div>

<!-- ... ( código HTML posterior) ... -->


if (window.location.href.indexOf("404") === -1) {
  fetch("404.html")
    .then(response => {
      if (!response.ok) {
        window.location.href = "404.html";
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
