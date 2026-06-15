//PEGANDO LEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVETO SUBMIT DO FORMULARIO
 formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()
    
    const objformDados = new FormData(formDados)

    let nota1 = parseFloat(objformDados.get('nota1'))
    let nota2 = parseFloat(objformDados.get('nota2'))
    let nota3 = parseFloat(objformDados.get('nota3'))
    let nome = objformDados.get('nome')
 
    let media = (nota1 + nota2 + nota3) /3

    let situacaonotafinal = ''

    if (media >= 6){
        situacaonotafinal = `${nome}, Aprovado`
    }else{
        situacaonotafinal = `${nome}, Reprovado`
    }

    // divResultado.innerHTML = `A media Final dos números digitados é: ${media.toFixed(2).replace('.',',')}`

divResultado.innerHTML = situacaonotafinal;

      formDados.reset()
  }
   

)