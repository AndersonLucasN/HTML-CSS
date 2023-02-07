function calcular(){
    var txtv= document.getElementById("txtvel")
    var vel= Number(txtv.value)
    var res= document.getElementById("res")
    res.innerHTML="Sua velocidade atual é de <strong>"+vel+"km/h</strong>"
    if(vel>60){
        res.innerHTML+="<br>Você ultrapassou a velocidade permitida. <strong>MULTADO!</strong>"
    }
    res.innerHTML+= "<br> Dirija com cinto de segurança!"


    
}