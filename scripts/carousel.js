document.addEventListener("DOMContentLoaded", function() {
  let currentSlideSala = 0;
  const slidesSala = document.querySelectorAll(".carrocelSalas .slide");
  
  function showSlideSala(index) {
      slidesSala.forEach((slide, i) => {
          if (i === index) {
              slide.style.display = "block";
          } else {
              slide.style.display = "none";
          }
      });
  }
  
  function nextSlideSala() {
      currentSlideSala = (currentSlideSala + 1) % slidesSala.length;
      showSlideSala(currentSlideSala);
  }
  
  function prevSlideSala() {
      currentSlideSala = (currentSlideSala - 1 + slidesSala.length) % slidesSala.length;
      showSlideSala(currentSlideSala);
  }
  
  // Exibindo o primeiro slide
  showSlideSala(currentSlideSala);
  
  // Adicionando eventos para os botões de avançar e voltar
  document.querySelector("#nextBtnSala").addEventListener("click", nextSlideSala);
  document.querySelector("#prevBtnSala").addEventListener("click", prevSlideSala);
});

document.addEventListener("DOMContentLoaded", function() {
  let currentSlideCoz = 0;
  const slidesCoz = document.querySelectorAll(".carouselCoz .slide");
  
  function showSlideCoz(index) {
      slidesCoz.forEach((slide, i) => {
          if (i === index) {
              slide.style.display = "block";
          } else {
              slide.style.display = "none";
          }
      });
  }
  
  function nextSlideCoz() {
      currentSlideCoz = (currentSlideCoz + 1) % slidesCoz.length;
      showSlideCoz(currentSlideCoz);
  }
  
  function prevSlideCoz() {
      currentSlideCoz = (currentSlideCoz - 1 + slidesCoz.length) % slidesCoz.length;
      showSlideCoz(currentSlideCoz);
  }
  
  // Exibindo o primeiro slide
  showSlideCoz(currentSlideCoz);
  
  // Adicionando eventos para os botões de avançar e voltar
  document.querySelector("#nextBtnCoz").addEventListener("click", nextSlideCoz);
  document.querySelector("#prevBtnCoz").addEventListener("click", prevSlideCoz);
});

//back to top
const backToTopButton = document.querySelector('#sobe')

const backToTop = () => {
 if (window.scrollY >= 100) {
backToTopButton.classList.add('visible')
 } else {
backToTopButton.classList.remove('visible')
 }
}

window.addEventListener('scroll', function () {
 backToTop()
})