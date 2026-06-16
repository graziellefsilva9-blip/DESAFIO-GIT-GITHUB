//PEGANDO LEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVETO SUBMIT DO FORMULARIO
formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()
    
    const objformDados = new FormData(formDados)

    let peso = parseFloat(objformDados.get('peso'))
    let altura = parseFloat(objformDados.get('altura'))

    let imc = peso / (altura**2)

    if (imc <=20){
       faixaderisco = "Está abaixo do peso"
  
    }else if (imc >= 20 && imc <=25){
      faixaderisco = "Está com o peso normal"
  
    }else if (imc >= 25 && imc <=30){
       faixaderisco = "Está acima do peso"
  
    }else if(imc >= 30 && imc <=35){
       faixaderisco = "Obesidade"
         
  
    }else(imc >= 30)
          faixadersico = "Obesidade mórbida"
   
   
divResultado.innerHTML =  faixaderisco
   
      formDados.reset()
  }
   

)