const paper = document.querySelector('.paper');
const paperWidth = paper.clientWidth;
const paperHeight = paper.clientHeight;

//const paperHeight = "500px"
//paper.setAttribute('style', `width:${paperWidth}`)

console.log(paperWidth)
console.log(paperHeight)
let pixelCount = 16;
let i = 0;
let j = 0;
let pixelWidthHeight = paperWidth/pixelCount
let padding = 2
while(i < pixelCount){
    const div = document.createElement('div');
    div.setAttribute('class', 'pixel');
    div.setAttribute('style', `height:${pixelWidthHeight-padding}px; width:${pixelWidthHeight-padding}px;`)
    paper.append(div);
    i++;
}

paper.setAttribute('style', `grid-template-columns:repeat(${pixelCount},${pixelWidthHeight}fr);`)

