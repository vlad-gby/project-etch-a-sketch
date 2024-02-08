const scratchpad = document.querySelector('.scratchpad');
const buttons = document.querySelectorAll('button');
const contWidth = 800;
const contHeight = 400;

// CREATE A GRID
function createGrid(pxlside){
  if(document.querySelector('.pixel') !== null){
    const divs = document.querySelectorAll('.pixel');
    divs.forEach((e) => {
      e.remove();
    });
  }

  for(let i = 0; i < (contWidth / pxlside) * (contHeight / pxlside); i++){
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    scratchpad.appendChild(pixel);
  }

  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.width = pxlside + 'px';
    pixel.style.height = pxlside + 'px';
  });
}
createGrid(16);

// CONTROLS
buttons.forEach((btn) => {
  btn.addEventListener('mouseover', e => {
    btn.style.backgroundColor = 'rgb(48, 119, 10)';
  });
  btn.addEventListener('mouseout', e => {
    btn.style.backgroundColor = 'rgb(39, 98, 7)';
  });
  btn.addEventListener('mousedown', e => {
    btn.style.border = '2px solid rgb(135, 242, 28)';
  });
  btn.addEventListener('mouseup', e => {
    btn.style.border = '2px solid rgb(0,0,0,0)';
    switch(e.target.id){
      case '1':
        createGrid(40);
      break;
      case '2':
        createGrid(36.366);
      break;
      case '3':
        createGrid(16);
      break;
      case '4':
        createGrid(8);
      break;
      case '5':
        createGrid(4);
        {const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
          pixel.style.border = 'none';
        });}
      break;
      case '6':
        createGrid(2);
        {const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
          pixel.style.border = 'none';
        });}
      break;
      case 'clear':
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
          pixel.style.backgroundColor = 'white';
        });
      break;
    }
  });
});
  

function paintHandler(){
  this.style.backgroundColor = 'rgb(135, 242, 28)';
}

scratchpad.addEventListener('mousedown', e => {
  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', paintHandler);

    pixel.addEventListener('mouseup', () => {
      pixels.forEach((pixel) => {
        pixel.removeEventListener('mouseover', paintHandler);
      });
    });
  });
});



