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

window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-scr');
  loadingScreen.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
  const infoContainers = document.querySelectorAll('.info-container');

  // Loop através de todos os info-containers
  infoContainers.forEach(function (container) {
      const characterId = container.getAttribute('data-character-id');
      const clickCountElement = document.getElementById('click-count-' + characterId);

      // Verifique se há uma contagem armazenada no localStorage
      let storedCount = localStorage.getItem('click-count-' + characterId);

      if (storedCount !== null) {
          // Se houver, use essa contagem
          clickCountElement.textContent = storedCount;
      }

      // Adicione um ouvinte de eventos de clique a cada info-container
      container.addEventListener('click', function () {
          incrementClickCount(characterId);
      });
  });
});

function incrementClickCount(characterId) {
  const clickCountElement = document.getElementById('click-count-' + characterId);
  
  if (clickCountElement) {
      let currentCount = parseInt(clickCountElement.textContent);
      currentCount++;
      clickCountElement.textContent = currentCount;

      // Armazene o novo valor no localStorage
      localStorage.setItem('click-count-' + characterId, currentCount);
  }
}

function toggleLikeIcon(element) {
  element.classList.toggle('active');
  const likeCountElement = document.getElementById('like-count');

  if (element.classList.contains('active')) {
    // Incrementa o contador de likes
    let currentCount = parseInt(likeCountElement.textContent);
    currentCount++;
    likeCountElement.textContent = currentCount;

    // Armazena o novo valor no localStorage
    localStorage.setItem('likeCount', currentCount);
    
    // Marca que o like está ativo no localStorage
    localStorage.setItem('likeActive', 'true');
  } else {
    // Decrementa o contador de likes se o like for desfeito
    let currentCount = parseInt(likeCountElement.textContent);
    if (currentCount > 0) {
      currentCount--;
      likeCountElement.textContent = currentCount;

      // Atualiza o valor no localStorage
      localStorage.setItem('likeCount', currentCount);
      
      // Marca que o like não está ativo no localStorage
      localStorage.setItem('likeActive', 'false');
    }
  }
}

// Verifique se o like estava ativo quando a página foi carregada e atualize o ícone de acordo
document.addEventListener('DOMContentLoaded', function () {
  const likeActive = localStorage.getItem('likeActive');
  const likeIcon = document.querySelector('.icon-like');

  if (likeActive === 'true') {
    likeIcon.classList.add('active');
  } else {
    likeIcon.classList.remove('active');
  }

  const likeCountElement = document.getElementById('like-count');
  const storedCount = localStorage.getItem('likeCount');

  if (storedCount !== null) {
    likeCountElement.textContent = storedCount;
  }
});

