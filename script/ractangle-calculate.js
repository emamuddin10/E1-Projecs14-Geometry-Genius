function calculateRectangleArea(){

    // get rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const lengthValue = rectangleLengthInput.value;
    const length = parseFloat(lengthValue)
    console.log(length)


    // get ractangle width

    const rectangleWidthInput = document.getElementById('rectangle-width')
    const WidthValue = rectangleWidthInput.value;
    const width = parseFloat(WidthValue)
    console.log(width)

    // calculate ractangle area
    const area = length * width;

    // set the area number of display
    const rectangleAreaSpan = document.getElementById('rectangle-l')
    rectangleAreaSpan.innerText = length;
    const rectangleAreaSpan2 = document.getElementById('rectangle-w')
    rectangleAreaSpan2.innerText = width;
}