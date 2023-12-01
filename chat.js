document.addEventListener('DOMContentLoaded', function() {
    var popup1 = document.getElementById("popup1");
    var popup2 = document.getElementById("popup2");
  
    // Display the first popup
    popup1.style.display = "block";
  
    // Display the second popup after a delay
    setTimeout(function() {
      popup2.style.display = "block";
    }, 1000); // Adjust the delay time as needed (in milliseconds)
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-btn").addEventListener("click", function() {
      sendMessage();
    });
  
    document.getElementById("user-input").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  });

  window.onload = function () {
    displayConnectingMessage();
    setTimeout(() => {
      removeConnectingMessage();
      displayConnectedMessage();
      startChat();
    }, 5000);
  };
  
  function displayConnectingMessage() {
    const initialMessage = "Connecting to live server...";
    displayMessage(initialMessage, false);
  }
  
  function removeConnectingMessage() {
    const connectingMessage = document.querySelector(".bot-message");
    if (connectingMessage) {
      connectingMessage.remove();
    }
  }
  
  function displayConnectedMessage() {
    const connectedMessage = "Connected!";
    displayMessage(connectedMessage, false);
  }
  
  
  function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
      displayMessage("You: " + userInput, true);
      setTimeout(() => { // Introduce a delay of 3 seconds before responding
        respondToUser(userInput);
      }, 3000); // 3000 milliseconds = 3 seconds
      document.getElementById("user-input").value = "";
      // Scroll to the bottom of the chat box after sending a message
      const chatBox = document.getElementById("chat-box");
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  function respondToUser(message) {
    let response = "I'm sorry, I didn't understand that.";
    const anonymousText = "Anonymous: ";
  
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
      response = "Hello! I am good.";
      displayMessage(anonymousText + response, false);
    } else if (message.toLowerCase().includes("where are you from")) {
      response = "I'm from Kenya, and you?";
      displayMessage(anonymousText + response, false);
    } else {
      displayMessage(anonymousText + response, false);
    }
  }
  
  function displayMessage(message, isUser) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add(isUser ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
  }