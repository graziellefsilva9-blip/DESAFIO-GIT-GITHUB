//PEGANDO LEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado =  document.querySelector('#div-dados')

//CAPTURANDO O EVETO SUBMIT DO FORMULARIO
 formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()
    
    const objformDados = new FormData(formDados)

   let largura = parseFloat(objformDados.get('largura'))
   let altura = parseFloat(objformDados.get('altura'))
   
   let area = largura * altura

    divResultado.innerHTML = `A área a ser pintada é de ${area.toFixed(2).replace('.', ',')}m², Total de litros para pintar essa área é de ${parseFloat(area / 2).toFixed(2).replace('.',',')}`

    formDados.reset()
})