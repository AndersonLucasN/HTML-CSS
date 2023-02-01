var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText= 'clicou'
    a.style.background='red'
    
}
function entrar() {
    a.innerText='entrou'
    a.style.background='green'
    
}

function sair (){
    a.innerText='sair'
    a.style.background='black'

}