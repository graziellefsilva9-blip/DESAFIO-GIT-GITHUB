//PEGANDO LEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVETO SUBMIT DO FORMULARIO
formDados.addEventListener ('submit', (evl)=> {
    evt.prevenDefault()

    const objformDados = new FormData(formDados)

    let nome = objformDados.get('nome')
    let idade = objformDados.get('idade')

    let situacaoIdade = ''

    if (idade >= 18){
        situacaoIdade = '${nome}, você é maior de idade'
    }else{
        situacaoIdade = '${nome}, você é menor de idade'
    }

    divResultado.innerHTML = situacaoIdade


})