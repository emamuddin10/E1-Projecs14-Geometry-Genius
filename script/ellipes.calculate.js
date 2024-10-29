function calculateEllipseArea(){
    const majorRadius = getInputValueById('major-radius')
    const minorRadius = getInputValueById('major-radius')

    const area = 3.14 * majorRadius * minorRadius

    setInnerTextById('ellipse-area', area)
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