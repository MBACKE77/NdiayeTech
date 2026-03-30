// Script pour le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Simulation d'envoi (remplacez par votre logique d'envoi réelle)
  const feedback = document.getElementById('feedback');
  feedback.textContent = 'Merci pour votre message ! Nous vous contacterons bientôt.';
  feedback.style.color = 'green';
  
  // Réinitialiser le formulaire
  this.reset();
});