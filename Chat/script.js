//Funcion para enviar mensajes
function enviarMensaje(){
    const inputMensaje= document.getElementById('input-mensaje');
    const mensaje= inputMensaje.value.trim();
    if(mensaje!==''){
        const mensajesChat=document.querySelector('.mensajes-chat');
        const elementosChat= document.createElement('div');
        elementosChat.classList.add('mensaje');
        elementosChat.textContent=mensaje;
        mensajesChat.appendChild(elementosChat);
        inputMensaje.value='';
        mensajesChat.scrollTop= mensajesChat.scrollHeight;
    }
}
//Listador de eventos
document.getElementById('boton-enviar').addEventListener('click', enviarMensaje);
document.getElementById('mensaje-input').addEventListener('keydown', (event)=>{
    if(event.key==='Enviar'){
        event.preventDefault();
        enviarMensaje();
    }
});