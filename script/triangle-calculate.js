// objective:get the base, height of a triangle.Calculate the area by using the provided formula. and then display the area .
// * step-1 get the base value 
// * step-2 added an id in the base input field
// * step-2 use getElementById to access the input     
// * step-4 get value from the input field. (value is string now)
// * step-5 convert the value to a number. use parseFloati
function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleInputText = triangleBaseInput.value;
    const b = parseFloat(triangleInputText)
   

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleBaseInput.value;
    const h = parseFloat(triangleHeightText)


    // calculate area
    const area = 0.5 * b * h
   
    // set the triangle calculation
    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText = area;



}
