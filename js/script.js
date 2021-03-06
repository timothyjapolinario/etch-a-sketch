const paper = document.querySelector('.paper');
const resetPaperButton = document.querySelector('#clear-paper');
const eraserButton = document.querySelector('#eraser');
const colorPicker = document.querySelector("#colorpicker");
const pixelCountSlider = document.querySelector("#pixel-count-slider");
const pixelCountTextBox = document.querySelector("#pixel-count-textbox");
let colorPickerValue = "black";
const paperWidth = paper.clientWidth;
const paperHeight = paper.clientHeight;
let pixelCount = 16;
let pixelWidthHeight = paperWidth/pixelCount
let padding = 2
let isMouseDown = false;
let penColor = colorPicker.getAttribute("value");
let eraserOn = false;


setNewPaper(pixelCount);


function removeAllGrid(){
    penColor = colorPickerValue
    while(paper.firstChild){
        paper.removeChild(paper.firstChild)
    }
}

function setNewPaper(newPixelCount){
    let i = 0;
    pixelCount = newPixelCount;
    pixelWidthHeight = paperWidth/pixelCount
    while(i < pixelCount * pixelCount){
        const pixel = createPixel()
        paper.append(pixel);
        i++;
    }
    paper.setAttribute('style', `grid-template-columns:repeat(${pixelCount},${pixelWidthHeight}fr); grid-auto-rows: ${pixelWidthHeight}px`)    
}

function createPixel(){
    let isMouseOver = false;
    const div = document.createElement('div');
    div.setAttribute('draggable', 'false')
    div.setAttribute('class', 'pixel');
    div.setAttribute('style', `height:${pixelWidthHeight-padding}px; width:${pixelWidthHeight-padding}px; background-color:#ebe8e8;`)
    div.addEventListener('mouseover', ()=>{
        isMouseOver = true;
    });
    div.addEventListener('mouseleave', ()=>{
        isMouseOver = false
    });
    div.addEventListener('mousedown',()=>{
        if(isMouseOver){
            drawPixel(div);
            console.log(penColor);
        }
    })
    div.addEventListener('mouseover', ()=>{
        if(isMouseDown){
            drawPixel(div)
        }
    })
    return div; 
}

function drawPixel(event, color = penColor){
    event.style.background = color;
}


resetPaperButton.addEventListener('click', ()=>{
    removeAllGrid();
    setNewPaper(pixelCount);
});

eraserButton.addEventListener('click',()=>{
    if(eraserOn){
        eraserOn = false
        eraserButton.style.background = "#98c1d9";
        eraserButton.style.color = "black";
        penColor = colorPickerValue;
    }else{
        eraserOn = true
        eraserButton.style.background = "#3d5a80";
        eraserButton.style.color = "#98c1d9";
        penColor = "#ebe8e8";
    }
})

window.addEventListener('mousedown', () => {
    isMouseDown = true; 
})
window.addEventListener('mouseup', () => {
    isMouseDown = false;
})

colorPicker.addEventListener("change",(e)=>{

    colorPickerValue = e.target.value;
    penColor = colorPickerValue;
})

pixelCountSlider.addEventListener("change",(e)=>{
    console.log(e.target.value);
    removeAllGrid();
    setNewPaper(e.target.value);
    pixelCountTextBox.value = e.target.value;
})

pixelCountTextBox.addEventListener("change",(e)=>{
    removeAllGrid();
    setNewPaper(e.target.value);
    pixelCountSlider.value = e.target.value;
})



window.addEventListener('dragstart', (e) => {
    e.preventDefault()
  })
window.addEventListener('drop', (e) => {
    e.preventDefault()
  })

