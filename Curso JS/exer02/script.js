function verificar(){
   var data= new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res= document.querySelector('div#res')
   if(fano.valeu.length == 0 || fano.value>ano){
    window.alert('[Erro] Os dados estão incorrentos, por favor! Verifique novamente')
   }else{
    var fsex= document.getElementsByName('radsex')
    var idade= ano - Number(fano.value)
    res.innerHTML = "idade: ${idade}"
   }
}