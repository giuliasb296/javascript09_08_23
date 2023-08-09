/* 
    Atividade checkpoint: Functions
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 09/08/2023
*/

function mostrarLembrete() {
    console.log('Water the plants!')
}

function saudacaoEmEspanhol() {
    console.log('Buenas Tardes!')
}

function agradecerClient(nome) {
    console.log('Thank you '+ nome + ' for you purchase! We appreciate your business!')
}

agradecerClient("Vitória")
agradecerClient("Giullia")
agradecerClient("Letícia")

agradecerClient('Cole')

// Atividade 11 //
function criarListaDeCompras(item1 = "leite", item2 = "pão", item3 = "ovos") {       
    console.log('Os itens da sua lista de compras são: '+ item1 +', '+ item2 +' e '+ item3 +'.')
}
criarListaDeCompras()

// Atividade 12 //
function contarMonitores(linhas, colunas) { 
    return (linhas * colunas) 
}
let numeroDeMonitores = contarMonitores(5,4)
console.log(numeroDeMonitores)
   
function custoDosMonitores(linhas, colunas) {
    return (linhas * colunas) * 200
}
let custoTotal = custoDosMonitores(5,4)
console.log(custoTotal)

// Atividade 13 e 14 //

const plantaPrecisaDeAgua = dia => {
    if(dia === 'Wednesday') {
        return true
    }
    else {
        return false
    }
}
console.log(plantaPrecisaDeAgua('Wednesday'));


    
    
