let button = document.getElementById("enviar")
let nota1 = document.getElementById("cxnota1")
let nota2 = document.getElementById("cxnota2")
let text = document.getElementById("reslt")
const alerta = document.getElementById("alerta")
let apaga = document.getElementById("limpa")
let nota_final = document.getElementById("nota")
let auxilia = false;

//verificação está feita
function verificanumber() {
    if(nota1.value < 0 || nota1.value > 11 || nota2.value < 0 || nota2.value > 11){

            alerta.textContent ="digite numeros que seja 0.1 a 10.0"
            alerta.classList.add("reprovado")
            text.classList.add("off")

        setTimeout(function () {
            alerta.textContent = ""
            alerta.classList.remove("reprovado")
        }, 4000)
        
    }
}

button.addEventListener("click", function (event) {
    //calculo esta feito
    let media = (Number(nota1.value) + Number(nota2.value)) / 2

    if(nota1.value > 0 && nota1.value <= 10 && nota2.value > 0 && nota2.value <= 10){
        auxilia = true

    }else{
         alerta.textContent ="digite numeros que seja 0.1 a 10.0"
        alerta.classList.add("reprovado")
        text.classList.add("off")
        setTimeout(function () {
            alerta.textContent = ""
            alerta.classList.remove("reprovado")
        }, 4000)
    }
    //status do aluno esta feito
    if(auxilia){
        function verificarmedia(){
            let status = ""
            if(media <= 3){
                status = "Reprovou"
            }else if(media == 4 || media < 5){
                status = "Recuperação"
            }else if(media >= 5){
                status = "Parábens Passou"
            }else{
                status = "Tente de Novo!"
            }
            return status;
        }
        //passar se passou ou não
        text.textContent = verificarmedia()

        //passar a media para o dom
        nota_final.textContent = media.toFixed(2)

        //trocar de cor nos status esta feito
    
        function colorsatus(){
        let result = verificarmedia(media)
    
        switch(result){
            case "Reprovou":
                text.classList.remove("recuperacao")
                text.classList.remove("aprovado")
                text.classList.remove("off")
                text.classList.add("reprovado")
                break;
            case "Recuperação":
                text.classList.remove("reprovado")
                text.classList.remove("aprovado")
                text.classList.remove("off")
                text.classList.add("recuperacao")
                break;
            case "Parábens Passou":
                text.classList.remove("reprovado")
                text.classList.remove("recuperacao")
                text.classList.remove("off")
                text.classList.add("aprovado")
                break;          
        }
    }
        colorsatus()
    }
    event.preventDefault()
})

apaga.addEventListener("click", function () {
    text.classList.remove("reprovado")
    text.classList.remove("recuperacao")
    text.classList.remove("Aprovado")
    text.classList.add("off")
    text.textContent = "Status"
    nota_final.textContent = "Nota final"
    auxilia = false;
})









