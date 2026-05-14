const elements = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if(position < screen - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
    const chatToggle = document.getElementById("chatToggle");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

chatToggle.addEventListener("click", () => {
  chatbox.style.display = "flex";
});

closeChat.addEventListener("click", () => {
  chatbox.style.display = "none";
});

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {

  const message = userInput.value.trim();

  if(message === "") return;

  // message utilisateur
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerText = message;

  chatBody.appendChild(userMessage);

  // réponse bot
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");

  let response = "Je ne comprends pas.";

  if(message.toLowerCase().includes("prix")) {
    response = "Nos tarifs dépendent du projet 😊";
  }
  else if(message.toLowerCase().includes("site")) {
    response = "Nous créons des sites vitrines, e-commerce et applications web.";
  }
  else if(message.toLowerCase().includes("contact")) {
    response = "📞 +221 77 219 85 12";
  }
  else if(message.toLowerCase().includes("bonjour")) {
    response = "Bonjour 👋 bienvenue chez NDIAYE-TECH";
  }

  setTimeout(() => {
    botMessage.innerText = response;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  userInput.value = "";
}
document.body.classList.toggle("dark-mode");
ScrollReveal().reveal('.card', {
  distance: '50px',
  duration: 1000,
  interval: 200
});
ScrollReveal().reveal('.card', {
  distance: '50px',
  duration: 1000,
  interval: 200
});
  });
});
