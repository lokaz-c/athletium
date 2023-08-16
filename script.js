window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolling');
    } else {
      navbar.classList.remove('scrolling');
    }
  });

// ... (The previous JavaScript code remains the same)

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName('mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
const chatLog = document.getElementById("chatLog");

function appendMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", `${sender}-message`);
  messageDiv.innerHTML = message;
  chatLog.appendChild(messageDiv);
}

let suggestedOptions = [];

function handleEmojiChoice(choice, emoji) {
  appendMessage(`<p> ${emoji}</p>`, "user");

  let followUpQuestion = "";
  suggestedOptions = [];

  if (choice === "resting") {
    followUpQuestion = "Taking a break is important. What have you been up to?";
    suggestedOptions = ["Reading a book", "Watching a movie", "Going for a walk"];
  } else if (choice === "sad") {
    followUpQuestion = "I'm sorry to hear that. What's bothering you?";
    suggestedOptions = ["Relationship issues", "Work stress", "Loneliness"];
  } else if (choice === "crying") {
    followUpQuestion = "I'm sorry to hear that you're feeling down. Can you tell me more about what's bothering you?";
    suggestedOptions = ["Relationship issues", "Work stress", "Loneliness"];
  } else if (choice === "happy") {
    followUpQuestion = "Great! What's making you happy today?";
    suggestedOptions = ["Achieving a goal", "Spending time with loved ones", "Enjoying a hobby"];
  } else if (choice === "joyful") {
    followUpQuestion = "That's wonderful! What's bringing you so much joy?";
    suggestedOptions = ["Success at work", "Personal accomplishments", "Positive news"];
  }

  setTimeout(() => {
    appendMessage(`<p>${followUpQuestion}</p>`, "ai");
    if (suggestedOptions.length > 0) {
      const suggestedOptionsMarkup = suggestedOptions.map(option => `<button class="option-button" onclick="handleFollowUpChoice('${option}')">${option}</button>`).join("");
      appendMessage(`<div class="options">${suggestedOptionsMarkup}</div>`, "ai");
    }
  }, 500);
}

function handleFollowUpChoice(response) {
  appendMessage(`<p> ${response}</p>`, "user");

  let solutions = [];

  if (response === "Relationship issues") {
    solutions = ["Consider talking to a trusted friend", "Seek professional counseling"];
  } else if (response === "Work stress") {
    solutions = ["Practice relaxation techniques", "Set clear work boundaries"];
  } else if (response === "Loneliness") {
    solutions = ["Engage in social activities", "Join clubs or groups with shared interests"];
  } else if (response === "Achieving a goal") {
    solutions = ["Celebrate your accomplishments", "Set new goals for continuous growth"];
  } else if (response === "Spending time with loved ones") {
    solutions = ["Plan regular gatherings with friends and family", "Create memorable experiences"];
  } else if (response === "Enjoying a hobby") {
    solutions = ["Allocate time for hobbies in your schedule", "Learn something new"];
  } else if (response === "Success at work") {
    solutions = ["Recognize your achievements", "Share your success with colleagues"];
  } else if (response === "Personal accomplishments") {
    solutions = ["Acknowledge your progress", "Set new challenges for personal growth"];
  } else if (response === "Positive news") {
    solutions = ["Spread positivity to others", "Stay informed about uplifting stories"];
  }

  setTimeout(() => {
    appendMessage(`<p>Here are some solutions you might find helpful:</p>`, "ai");
    appendMessage(`<ul>${solutions.map(solution => `<li>${solution}</li>`).join("")}</ul>`, "ai");
  }, 500);
}


