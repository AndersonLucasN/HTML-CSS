var agora = new Date()
var hora = agora.getHours()
console.log('Agoras são exatamente ' + hora + ' horas')
if (hora>12){
    console.log('Boa tarde')
}
else if (hora>18){
console.log('Boa noite')
}
else{
    console.log('Bom dia')

}