function changeAboutMeText() 
{
    const aboutMeTexts = ["Tech Enthusiast", "Java Developer", "Full Stack Web Developer"]; // Add more texts as needed
    const typingSpeed = 100; // milliseconds per character
    const eraseSpeed = 50; // milliseconds per character during erasing
    const pauseTime = 1500; // milliseconds to pause between each text change
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() 
    {
        const currentText = aboutMeTexts[textIndex];
        /* Typing */
        if (!isDeleting && charIndex < currentText.length) 
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        /* Erasing */
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        /* Switching the deleting or Typing process */
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', function(){
    const darkModeToggle= document.getElementById('dark-mode-toggle');
    const body= document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode= body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
    });
});

// Call function to add stunning modification
changeAboutMeText();

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const progressBar = entry.target.querySelector('.progress-bar');
              const progress = progressBar.dataset.progress;

              progressBar.style.setProperty('--progress', `${progress}%`);
              progressBar.classList.remove('animated');
              void progressBar.offsetWidth; // Reflow to restart animation
              progressBar.classList.add('animated');
          }
      });
  });

  const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
  programmingLanguages.forEach(skill => {
      observer.observe(skill);
  });
});




document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});






// Modal + Carousel setup
document.querySelectorAll('.btn.know-more').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
  
      const modalId = this.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);
  
      if (modal) {
        modal.style.display = 'block';
        disableScroll();
  
        const carouselContainer = modal.querySelector('.carousel-container');
        if (carouselContainer) {
          initializeCarousel(carouselContainer);
        }
  
        // Close modal on close button click
        modal.querySelector('.close-button').addEventListener('click', () => {
          modal.style.display = 'none';
          enableScroll();
        });
      }
    });
  });
  
  // Disable scroll when modal is open
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  // Re-enable scroll when modal is closed
  function enableScroll() {
    document.body.style.overflow = '';
  }
  
  // Carousel setup per modal
  function initializeCarousel(carouselContainer) {
    let slideIndex = 1;
    const slides = carouselContainer.querySelectorAll('.carousel-slide img');
  
    function showSlides(n) {
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;
      slides.forEach(slide => (slide.style.display = 'none'));
      slides[slideIndex - 1].style.display = 'block';
    }
  
    carouselContainer.querySelector('.prev')?.addEventListener('click', () => {
      slideIndex--;
      showSlides(slideIndex);
    });
  
    carouselContainer.querySelector('.next')?.addEventListener('click', () => {
      slideIndex++;
      showSlides(slideIndex);
    });
  
    showSlides(slideIndex);
  }
  
  // Close modal when clicking outside the modal content
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
      enableScroll();
    }
  });




//Certificates
  function openCertModal() {
    document.getElementById("certModal").style.display = "block";
    document.body.classList.add("stop-scrolling");
  }
  
  function closeCertModal() {
    document.getElementById("certModal").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  }
  
  // Optional: close when clicking outside
  document.addEventListener('click', function (e) {
    const modal = document.getElementById('certModal');
    if (e.target === modal) {
      closeCertModal();
    }
  });
  




  function showFullImage(src) {
    const fullImage = document.getElementById('fullImage');
    fullImage.src = src;
    const modal = document.getElementById('fullImageModal');
    modal.style.display = 'flex';
    document.body.classList.add("stop-scrolling");
  
    // Trigger fullscreen
    if (modal.requestFullscreen) {
      modal.requestFullscreen();
    } else if (modal.webkitRequestFullscreen) { /* Safari */
      modal.webkitRequestFullscreen();
    } else if (modal.msRequestFullscreen) { /* IE11 */
      modal.msRequestFullscreen();
    }
  }
  

  function closeFullImage() {
    document.getElementById('fullImageModal').style.display = 'none';
    document.body.classList.remove("stop-scrolling");
  
    // Exit fullscreen if active
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
  }
  
  
  

  window.onload = function() {
    document.getElementById("fullImageModal").style.display = "none";
  };
