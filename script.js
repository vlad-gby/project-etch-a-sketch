const container = document.querySelector('.container');


// CREATE A GRID
function createGrid(pxlside, width, height){
  for(let i = 0; i < width * height; i++){
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
  }
  // SET SIZE
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.width = pxlside + 'px';
    pixel.style.height = pxlside + 'px';
  });

  container.style.width = pxlside * width + 'px';
}

createGrid(24,10,10);



