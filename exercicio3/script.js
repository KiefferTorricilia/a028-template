// function checaCaps(event) {
//     if(event.shiftKey) {
//         const mensagem = document.getElementById("mensagem")
//         mensagem.innerHTML = "SEGURANDO SHIFT"
//     } else {
//         const mensagem = document.getElementById("mensagem")
//         mensagem.innerHTML = ""

//     }
// }

function checaCaps(event) {
    if(event.shiftKey) {
        const mensagem = document.getElementById("mensagem")
        mensagem.innerHTML = "A TECLA SHIFT ESTÁ PRESSIONADA"
    }else {
        const mensagem = document.getElementById("mensagem")
        mensagem.innerHTML = ""
    }
}



