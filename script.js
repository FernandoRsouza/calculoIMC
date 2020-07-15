
// IMC = Peso ÷ (Altura × Altura)
function calcular() {
let n1 =Number(document.getElementById('digite1').value)
let n2 = Number(document.getElementById('digite2').value)
let alertDom = document.getElementById('alert')
let imc = n2/(n1*n1)

document.getElementById('digite1').value = ""
document.getElementById('digite2').value = ""
alertDom.style.display='block'

// fazer  validação 
if(n1 == "" && n2 == ""){
alertDom.innerHTML = '[ERRO]!!!!\n VERIFIQUE OS CAMPOS ACIMA DIGITE NOVAMENTE!'
}
else if(imc <= 18.5){
    alertDom.innerHTML = `SEU ÍNDICE É : ${imc.toFixed(2)} Kg/M² \n<b>VOCÊ ESTÁ ABAIXO DO PESO<b> `
}else if( imc > 18.5 && imc <=24.9){
    alertDom.innerHTML = `SEU ÍNDICE É : ${imc.toFixed(2)} Kg/M² \n<b>VOCÊ ESTÁ COM PESO NORMAL<b> `
}else if(imc >24.9 && imc <= 29.9){
    alertDom.innerHTML = `SEU ÍNDICE É : ${imc.toFixed(2)} Kg/M² \n<b>VOCÊ ESTÁ COM SOBREPESO<b> `
}else if(imc >29.9 && imc<= 34.9){
    alertDom.innerHTML = `SEU ÍNDICE É : ${imc.toFixed(2)} Kg/M²\n<b>VOCÊ ESTÁ COM OBESIDADE GRAU 1<b>!!  `
}else if(imc > 34.9 && imc <= 39.9){
    alertDom.innerHTML = `SEU ÍNDICE É : ${imc.toFixed(2)} Kg/M² \n<b>VOCÊ ESTÁ COM OBESIDADE GRAU 2<b>!! `
}else{
    alertDom.innerHTML = `SEU ÍNDICE É : ${imc.toFixed(2)} Kg/M²\n<b> !!!OBESIDADE MORBÍDA!!!<b> `
}


}
function esconder(){

document.getElementById('alert').style.display='none'

}