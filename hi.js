document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.hire-me-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for your submission! I will get back to you soon.');
    });
  });
  