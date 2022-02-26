const paper = document.querySelector('.paper');
const resetPaperButton = document.querySelector('#clear-paper');
const eraserButton = document.querySelector('#eraser')
const paperWidth = paper.clientWidth;
const paperHeight = paper.clientHeight;
let pixelCount = 16;
let pixelWidthHeight = paperWidth/pixelCount
let padding = 2
let isMouseDown = false;
let penColor ="black";
let eraserOn = false;


setNewPaper(pixelCount);


function removeAllGrid(){
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
    div.setAttribute('style', `height:${pixelWidthHeight-padding}px; width:${pixelWidthHeight-padding}px;`)
    div.addEventListener('mouseover', ()=>{
        isMouseOver = true;
    });
    div.addEventListener('mouseleave', ()=>{
        isMouseOver = false
    });
    div.addEventListener('mousedown',()=>{
        if(isMouseOver){
            drawPixel(div);
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
        eraserButton.style.background = "#ebe8e8";
        eraserButton.style.color = "black";
        penColor = "black"
    }else{
        eraserOn = true
        eraserButton.style.background = "black";
        eraserButton.style.color = "white";
        penColor = "white";
    }
})


window.addEventListener('mousedown', () => {
    isMouseDown = true; 
})
window.addEventListener('mouseup', () => {
    isMouseDown = false;
})



window.addEventListener('dragstart', (e) => {
    e.preventDefault()
  })
window.addEventListener('drop', (e) => {
    e.preventDefault()
  })

