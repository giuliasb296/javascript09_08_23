/* 
    Atividade challenge: Race Say
    Senai Nadir Dias de Figueiredo
    @author Giulia Santiago Barreto
    Data: 09/08/2023
*/

let raceNumber = Math.floor(Math.random() * 1000)
console.log(raceNumber)

let registrouCedo = true

let idadeCorredor = 19

if(idadeCorredor > 18) {
    raceNumber = raceNumber + 1000
    console.log(raceNumber)
}

if(idadeCorredor > 18 && registrouCedo == true) {
    console.log(`Por ter se registrado cedo, você correrá às 9h30! Seu número de corrida é ${raceNumber}.`)
}
else if(idadeCorredor > 18 && registrouCedo == false) {
    console.log(`Por ter se registrado tarde, você correrá às 11h00! Seu número de corrida é ${raceNumber}.`)
}
else if(idadeCorredor < 18) {
    console.log(`Você correrá às 12h30! Seu número de corrida é ${raceNumber}.`)
}

else {
    console.log('Verifique a mesa de registro!')
}