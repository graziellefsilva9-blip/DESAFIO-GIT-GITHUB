//PEGANDO LEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVETO SUBMIT DO FORMULARIO
formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()
    
    const objformDados = new FormData(formDados)

    let lado1 = parseFloat(objformDados.get('lado1'))
    let lado2 = parseFloat(objformDados.get('lado2'))
    let lado3 = parseFloat(objformDados.get('lado3'))

    let tipodetriangulo = ''

    if (lado1==lado2 && lado2==lado3){
     tipodetriangulo = " um Equilátero, ele possui 3 lados iguais"
  }else if (lado1==lado2 || lado1==lado3 || lado2==lado3){
      tipodetriangulo = "um Isóscele, ele possui 2 lados iguais."
       }else{
      tipodetriangulo = "um Escaleno, ele possui 3 lados diferentes"
  }
    

divResultado.innerHTML =  `Seu triângulo é ${tipodetriangulo}`
   
      formDados.reset()
  }
   

)