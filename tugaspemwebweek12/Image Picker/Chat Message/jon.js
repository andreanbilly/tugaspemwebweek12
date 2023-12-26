
document.addEventListener("DOMContentLoaded", function() {
    var sendBtn = document.getElementById("sendbtn");
    var usernameInput = document.getElementById("username");
    var userMsg = document.getElementById("usermsg");
    var chatLog = document.getElementById("chatlog");

    sendBtn.addEventListener("click", function() {
        var username = usernameInput.value;
        var message = userMsg.value;
        if (username.trim() !== "" && message.trim() !== "") {
            var chatEntry = document.createElement("div");
            chatEntry.classList.add("entry");
            chatEntry.innerHTML = "<strong>" + username + ":</strong> " + message;
            chatLog.appendChild(chatEntry);
            usernameInput.value = "";
            userMsg.value = "";
            chatLog.scrollTop = chatLog.scrollHeight;
            // Lakukan sesuatu dengan pesan yang dikirim, misalnya mengirim ke server atau memprosesnya
        }
    });

    userMsg.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });
});


