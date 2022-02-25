const paper = document.querySelector('.paper');
const paperWidth = paper.clientWidth;
const paperHeight = paper.clientHeight;
let pixelCount = 16;
let pixelWidthHeight = paperWidth/pixelCount
let padding = 2
let isMouseDown = false;


setNewPaperGridSize();


function setNewPaperGridSize(){
    let i = 0;
    while(i < pixelCount * pixelCount){
        const pixel = createPixel()
        paper.append(pixel);
        i++;
    }
    paper.setAttribute('style', `grid-template-columns:repeat(${pixelCount},${pixelWidthHeight}fr); grid-auto-rows: ${pixelWidthHeight}px`)    
}

function createPixel(){
    const div = document.createElement('div');
    div.setAttribute('draggable', 'false')
    div.setAttribute('class', 'pixel');
    div.setAttribute('style', `height:${pixelWidthHeight-padding}px; width:${pixelWidthHeight-padding}px;`)

    div.addEventListener('mouseover', ()=>drawPixel(div));
    return div;
}

function drawPixel(event){
    if(isMouseDown){
        event.style.background = "black";
    }
}

window.addEventListener('mousedown', () => {
    isMouseDown = true;
    console.log(isHoldingMouse);
})
window.addEventListener('mouseup', () => {
    isMouseDown = false;
    console.log(isHoldingMouse);
})

window.addEventListener('dragstart', (e) => {
    e.preventDefault()
  })
  div.addEventListener('drop', (e) => {
    e.preventDefault()
  })

