 function calculatePentagonArea(){
   const perimeter= getInputValueById('pentagon-perimeter')
   const apothem= getInputValueById('pentagon-apothem')
//    area calculation
  const area = 0.5 * perimeter * apothem
  
  setInnerTextById('pentagon-area', area)
 }


 function getInputValueById(getInputFieldId){
    const inputField = document.getElementById(getInputFieldId)
    const inputValue = inputField.value;
    const value = parseFloat(inputValue)
    return value ;
 }

 function setInnerTextById(elementId , area){
    const element = document.getElementById(elementId)
    element.innerText = area;
 }