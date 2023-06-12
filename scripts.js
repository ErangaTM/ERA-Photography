// toggle btn
function toggleAchievements() {
    const achievementsDiv = document.querySelector('#list');
    const toggleBtn = document.querySelector('#toggleBtn');
    const showLessBtn = document.querySelector('#showLessBtn');

    if (achievementsDiv.style.display === 'none') {
        achievementsDiv.style.display = 'block';
        toggleBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
    } else {
        achievementsDiv.style.display = 'none';
        toggleBtn.style.display = 'block';
        showLessBtn.style.display = 'none';
    }
}

// validation form scroll


function handleFormSubmission(event) {
    event.preventDefault(); 
  
   
    if (validateForm(event)) {
     
      const contactSection = document.getElementById('message');
      contactSection.scrollIntoView({ behavior: 'smooth' });
  
      
      document.getElementById('contactForm').reset();
      openPopup();
    }
  }
  
  // validate form
  function validateForm(event) {
    event.preventDefault(); 
  
    // input 
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const messageInput = document.getElementById('message');
  
    //  error message 
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');
    const messageError = document.getElementById('messageError');
  
    
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    addressError.textContent = '';
    messageError.textContent = '';
  
    // inputs
    let isValid = true;{
      
    }
    
  
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
      
    }
  
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    }
  
    if (phoneInput.value.trim() === '') {
      phoneError.textContent = 'Phone is required';
      isValid = false;
    }
  
    if (addressInput.value.trim() === '') {
      addressError.textContent = 'Address is required';
      isValid = false;
    }
  
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Message is required';
      isValid = false;
    }
  
    
    return isValid;
  }
  
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);
  
  // popup

  let popup = document.getElementById("popup");
  function openPopup(){
    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }


// image slider
  let slideIndex = 1;
let slideshowInterval;


showSlides(slideIndex);


function plusSlides(n) {
  showSlides((slideIndex += n));
}


function currentSlide(n) {
  showSlides((slideIndex = n));
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function automatic slideshow
function startSlideshow() {
  stopSlideshow(); 
  
  
  slideshowInterval = setInterval(function() {
    plusSlides(1);
  }, 5000);
}


function stopSlideshow() {
  clearInterval(slideshowInterval);
}


startSlideshow();
