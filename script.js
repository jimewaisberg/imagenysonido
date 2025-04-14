document.addEventListener('DOMContentLoaded', function() {
    // Establece el año actual en el footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
    // Alternar menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menuToggle && mobileMenu) {
      const menuIcon = menuToggle.querySelector('i');
      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
          // Cambiar icono (ejemplo usando FontAwesome)
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        } else {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
      });
    }
  
    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          // Cierra otros items abiertos
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          // Alterna el estado del item actual
          item.classList.toggle('active');
        });
      }
    });
  
    // Envío de formulario
    const inscriptionForm = document.getElementById('inscription-form');
    const formWrapper = document.getElementById('form-wrapper');
    const successMessage = document.getElementById('success-message');
    const backToFormButton = document.getElementById('back-to-form');
  
    if (inscriptionForm && formWrapper && successMessage) {
      inscriptionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simula un envío con retardo
        setTimeout(() => {
          formWrapper.style.display = 'none';
          successMessage.classList.remove('hidden');
        }, 1000);
      });
  
      if (backToFormButton) {
        backToFormButton.addEventListener('click', function() {
          successMessage.classList.add('hidden');
          formWrapper.style.display = 'block';
          inscriptionForm.reset();
        });
      }
    }
  
    // Animación simple al hacer scroll para revelar secciones
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.section-title, .step-card, .gallery-item, .testimonial-card, .schedule-card, .artwork-card, .team-card');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('animate-in');
        }
      });
    };
  
    // Inyecta estilos para animaciones sencillas
    const style = document.createElement('style');
    style.textContent = `
      .section-title, .step-card, .gallery-item, .testimonial-card, .schedule-card, .artwork-card, .team-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
      }
      .animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  
    // Ejecuta animaciones al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let currentSlide = 0;
  
    // Función para actualizar la posición del carrusel
    function moveToSlide(index) {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
    
    // Función de auto-desplazamiento cada 3 segundos
    setInterval(function() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      moveToSlide(currentSlide);
    }, 3000);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
          obs.unobserve(entry.target); 
          /* Deja de observar el elemento para que no se repita la animación */
        }
      });
    }, { threshold: 0.1 }); 
    /* threshold: 0.1 significa que con un 10% visible, dispara la animación */
  
    slideElements.forEach(el => {
      observer.observe(el);
    });
  });
    
  document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
    
    const observerOptions = {
      threshold: 0.2  // Cuando al menos el 20% del elemento esté visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Una vez animado, se deja de observar
        }
      });
    }, observerOptions);
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    // Opciones para el observer: se dispara cuando al menos el 30% del elemento está visible.
    const observerOptions = {
      threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Si deseas que la animación se active solo una vez, desobserva el elemento:
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    fadeElements.forEach(el => {
      observer.observe(el);
    });
  });
    