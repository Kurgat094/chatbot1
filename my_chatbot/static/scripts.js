
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    
    if (userInput.value.trim() !== "") {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.innerText = userInput.value;
        chatWindow.appendChild(userMessage);
        
        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Fetch bot response
        fetch(`/chatbot/get_response/?message=${encodeURIComponent(userInput.value)}`)
            .then(response => response.json())
            .then(data => {
                const botMessage = document.createElement('div');
                botMessage.className = 'chat-message bot';
                botMessage.innerText = data.message;
                chatWindow.appendChild(botMessage);
                
                // Scroll to the bottom of the chat window
                chatWindow.scrollTop = chatWindow.scrollHeight;
            });

        // Clear the input field
        userInput.value = "";
    }
}

