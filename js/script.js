const socket = io("https://collab-texteditor.herokuapp.com/");

const editor = document.getElementById('textEditor');
  editor.addEventListener("keyup",(evt)=>{
  const text = editor.value;
  socket.send(text);
})

socket.on('message',(data)=>{
  editor.value = data;
})



