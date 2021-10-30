const socket = io("http://localhost:3001");

const editor = document.getElementById('textEditor');
  editor.addEventListener("keyup",(evt)=>{
  const text = editor.value;
  socket.send(text);
})

socket.on('message',(data)=>{
  editor.value = data;
})



