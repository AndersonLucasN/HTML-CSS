let entrada = document.querySelector('.caixa-de-texto-entrada');

function codificar() {
    
   
    let encodedValue = entrada.value.replace(/[aeiou]/g, function(match) {
  
 
        switch (match) {
            
           
        case 'a':
              
             
        return 'ai';
            
           
        case 'e':
              
             
        return 'enter';
            
           
        case 'i':
              
             
        return 'imes';
            
           
        case 'o':
              
             
        return 'ober';


        case 'u':
              
             
        return 'ufat';


        
          }
        });



    
   
let saida = encodedValue;
    
   
alert(saida);
}



var button = document.querySelector('.botao-criptografar');
button.onclick = codificar;



function descodificar() {
    
   
  let encodedValue = entrada.value.replace(/[aienterimesoberufat]/g, function(match) {


      switch (match) {
          
         
      case 'ai':
            
           
      return 'a';
          
         
      case 'enter':
            
           
      return 'e';
          
         
      case 'imes':
            
           
      return 'i';
          
         
      case 'ober':
            
           
      return 'o';


      case 'ufat':
            
           
      return 'u';


      
        }
      });



  
 
let saida = encodedValue;
  
 
alert(saida);
}



var button = document.querySelector('.botao-descriptografar');
button.onclick = descodificar;


