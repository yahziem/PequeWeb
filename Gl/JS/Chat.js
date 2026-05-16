document.getElementById("send-btn").addEventListener("click", function() {
    const messageInput = document.getElementById("message");
    const chatWindow = document.querySelector(".chat-window");
  
    const newMessage = document.createElement("div");
    newMessage.classList.add("message", "sent");
  
    const messageText = document.createElement("p");
    messageText.textContent = messageInput.value;
  
    const timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
    newMessage.appendChild(messageText);
    newMessage.appendChild(timestamp);
  
    chatWindow.appendChild(newMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  
    messageInput.value = "";
  });
  