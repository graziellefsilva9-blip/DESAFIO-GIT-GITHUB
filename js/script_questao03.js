//PEGANDO LEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVETO SUBMIT DO FORMULARIO
 formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()
    
    const objformDados = new FormData(formDados)

      let distancia = parseFloat(objformDados.get('distancia'));
      let consumo = parseFloat(objformDados.get('consumo'));
      let preco = parseFloat(objformDados.get('preco'));

      let litrosNecessarios = distancia / consumo
      let custoTotal = litrosNecessarios * preco
      
      divResultado.innerHTML = `valor total a pagar ${litrosNecessarios.toFixed(2).replace('.', ',')} quantidade de combustível necessário para percorrer
      o trajeto é ${custoTotal.toFixed(2).replace('.',',')}`

      formDados.reset()
  }
   

)