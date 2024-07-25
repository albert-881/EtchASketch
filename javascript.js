const container = document.querySelector('.container');
const buttonReset = document.querySelector('.butt');
buttonReset.addEventListener('click', () => {
    
    let sizeSquares = prompt('choose how many squares you want for hieght and width');
    

    while (sizeSquares > 100 || sizeSquares < 0){
        sizeSquares = prompt('has to be less than 100px');
    }
    makeGrid(sizeSquares);

})


function makeGrid(size){
    container.innerHTML = '';
    const squareSize = container.clientWidth / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.append(square);
    }
}
container.addEventListener('mouseover', (e) => {
    console.log(e.target.classList)
    if(e.target.classList == 'square'){
    e.target.style.backgroundColor = getRandomColor();
    }
})

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
