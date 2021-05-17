
 const caract = document.querySelector('#caract')
 const original = document.querySelector('#original')
 const efeito = document.querySelector ( '#efeito')
 const modificado = document.querySelector('#modificado')
 caract.innerHTML = 0 
 
 original.addEventListener( 'keyup', 
 function() {
     caract.innerHTML =   original.value.length;
     if( efeito.value == 'uppercase') 
        modificado.value = original.value.toUpperCase()
     
        else ( efeito.value == 'change')
        modificado.value = original.value.toLowerCase()

 } )

 original.addEventListener( 'change', 
 function() { 
    caract.innerHTML = efeito.value.length; 
    if ( original.value == 'lowercase') {
     modificado.value = efeito.value.toLouwerCase()
    }
    else {
       modificado.value = efeito.value.toUpperCase()
    }


    





















