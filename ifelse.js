/* 
    Atividade checkpoint: If e Else
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 09/08/2023
*/

let promocao = true 
promocao = false
if(promocao = true) {
    console.log("Hora de Comprar!")
}
else { 
    console.log("Hora de esperar uma promoção!")
}

let nivelFome = 7;
if(nivelFome > 7) {
    console.log("Hora de Comer!")
}
else {
    console.log("Podemos comer mais tarde!")
}

let humor = "Sonolento", nivelCansaco = 6;
if(humor = "Sonolento" && nivelCansaco > 8) {
    console.log("Hora de dormir!")
}
else {
    console.log("Ainda não é hora de dormir!")
}

let estacaoDoAno = "Inverno";
if(estacaoDoAno == "Primavera") {
    console.log('Estamos na primavera!')
}

else if(estacaoDoAno == "Inverno") {
    console.log('É inverno! Tudo está coberto de neve.')
}

else if(estacaoDoAno == "Outono") {
    console.log('É outono! As folhas estão caindo!')
}

else if(estacaoDoAno == "Verão") {
    console.log('É ensolarado e quente porque é verão!')
}

else {
    console.log('Inválido')
}

let posicaoFinalAtleta = 'Primeiro Lugar!';
switch(posicaoFinalAtleta) {
    case 'Primeiro Lugar!':
        console.log('Você ganha a medalha de ouro!');
        break;  
    
    case 'Segundo Lugar!':
        console.log('Você ganha medalha de prata!');
        break;

    case 'Terceiro Lugar!':
        console.log('Você ganha medalha de bronze!');
        break;

    default: 
        console.log('Nenhuma medalha concedida!');
        break;    
}



