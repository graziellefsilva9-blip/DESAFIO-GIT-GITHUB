//PEGANDO LEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVETO SUBMIT DO FORMULARIO
 formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()
    
    const objformDados = new FormData(formDados)

   let n1 = parseFloat(objformDados.get('num1'))
   let n2 = parseFloat(objformDados.get('num2'))
   let n3 = parseFloat(objformDados.get('num3'))

   let media = (n1 +n2 +n3) /3

    divResultado.innerHTML = `a media dos numeros digitados é: ${media.toFixed(2).replace('.',',')}`


})