function desenharCanvas() {
    tabuleiro.lineWidth = 8
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "#F3F5FC"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.fillRect(0,0,1200,800)
    tabuleiro.beginPath()
    tabuleiro.moveTo(650,500)
    tabuleiro.lineTo(900,500)
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function desenharLinhas() {
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "0A3871"
    tabuleiro.beginPath()
    let largura = 600 / palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500 + (largura * i),640)
        tabuleiro.lineTo(550 + (largura * i),640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function escreverLetraCorreta(index) {
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "#0A3871"
    let largura = 600 / palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],505 + (largura * index),620)
    tabuleiro.stroke()
}

function escreverLetraIncorreta(letra, errorsleft) {
    tabuleiro.lineWidth = 6
    tabuleiro.font = "bold 40px Inter"
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.fillText(letra,535 + (40 * (10 - errorsleft)),710,40)
}

function desenharForca(pontos) {
    tabuleiro.lineWidth = 8
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "#0A3871"
    
    if(pontos === 8) {
        //poste lado
        tabuleiro.moveTo(700,500)
        tabuleiro.lineTo(700,100)
    }
    if(pontos === 7) {
        //poste cima
        tabuleiro.moveTo(850,100)
        tabuleiro.lineTo(700,100)
    }
    if(pontos === 6) {
        //corda
        tabuleiro.moveTo(850,100)
        tabuleiro.lineTo(850,171)        
    }
    if(pontos === 5) {
        //cabeça
        tabuleiro.moveTo(900,225)
        tabuleiro.arc(850,225,50,0,Math.PI*2)
    }
    if(pontos === 4) {
        //corpo
        tabuleiro.moveTo(850,380)
        tabuleiro.lineTo(850,280)
    }    
    if(pontos === 3) {
        //perna esquerda
        tabuleiro.moveTo(850,384)
        tabuleiro.lineTo(800,445)
    }
    if(pontos === 2) {
        //perna direita
        tabuleiro.moveTo(850,384)
        tabuleiro.lineTo(900,445)
    }
    if(pontos === 1) {
        //braço esquerdo
        tabuleiro.moveTo(850,300)
        tabuleiro.lineTo(800,359)
    }
    if(pontos === 0) {
        //braço direito
        tabuleiro.moveTo(850,300)
        tabuleiro.lineTo(900,359)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function exibirDerrota() {
    tabuleiro.font = "bold 42px Inter"
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "red"
    tabuleiro.fillText("Você perdeu!", 930,320)
}

function exibirVitoria() {
    tabuleiro.font = "bold 42px Inter"
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "green"
    tabuleiro.fillText("Você venceu!",895,320)
    tabuleiro.fillText("Parabéns!",930,360)
}

function recarregar() {
    location.reload()
}