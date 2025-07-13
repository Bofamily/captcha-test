const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const recaptchaResponse = grecaptcha.getResponse();
  
  if (!(recaptchaResponse.length > 0)) {
    alert('Please complete the reCAPTCHA');
    return;
  } else {
    window.location.replace("https://bofamily.github.io/captcha-test/recaptcha1passed");;
  }
  
  // Here you would typically send the form data and the reCAPTCHA response to your server
  console.log('Form submitted with reCAPTCHA response:', recaptchaResponse);
});