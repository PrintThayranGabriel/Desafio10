const open_chat = document.getElementById("open_chat");
const close_chat = document.getElementById("close_chat");
const chat = document.getElementById("chat")


window.addEventListener('click', function(e) {
    
    if(open_chat.contains(e.target)) {
        chat.style.display = "flex";

    } else if(close_chat.contains(e.target)){
        chat.style.display = "none";
   
    } 

})
