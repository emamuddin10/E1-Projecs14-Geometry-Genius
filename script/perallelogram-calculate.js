 
//  function parallelogramCalculateArea(){
//     const base = getParallelogramBase()
//     console.log(base)
//  }

//  function getParallelogramBase(){
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText)
//     return base
//  }

function calculateParallelogramArea(){
   
  const base =  getInputValue('parallelogram-base')
  const height = getInputValue('parallelogram-height')

  const area = base*height

  setParallelogramInnerText('parallelogram-output',area)

}
function getInputValue(getInputFieldId){
    const inputField = document.getElementById(getInputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText)
    return inputValue ;

}

function setParallelogramInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area 
}