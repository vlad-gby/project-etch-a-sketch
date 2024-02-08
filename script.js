const scratchpad = document.querySelector('.scratchpad');
const buttons = document.querySelectorAll('button');
const opacityBtn = document.querySelector('.opacity-btn');
const colorBtn = document.querySelector('.color-btn');
const removeFeatures = document.querySelector('.remove-features');
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
  
// console.log(getComputedStyle(buttons[1]).backgroundColor)

// PAINT
function paintHandler(){
  if(feature){
    switch (feature){
      case 'opacity':
        changeOpacity(this);
      break;
      case 'color':
        changingColor(this);
      break;
    }
    return;
  }
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

// ADDITIONAL FEATURES
let feature;

function changeOpacity(element){
  const bg = getComputedStyle(element).backgroundColor;
  if(bg.slice(17,18) === '') return;

  if(bg.at(3) != 'a'){
    element.style.backgroundColor = 'rgba(135, 242, 28, 0.1)';
  } else if(bg.at(3) == 'a'){
    if(bg.at(-3) == '.'){
      let opacity = (Number(bg.slice(18,22)));
      opacity += 0.1;
      element.style.backgroundColor = `rgba(135, 242, 28, ${opacity})`
    }
  }
}

function changingColor(element){
  const bg = getComputedStyle(element).backgroundColor;
  const red = Math.floor(Math.random()*200 + 1) + 50;
  const green = Math.floor(Math.random()*200 + 1) + 50;
  const blue = Math.floor(Math.random()*200 + 1) + 50;
  element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

opacityBtn.addEventListener('mouseup', function(){
  feature = 'opacity';
});
colorBtn.addEventListener('mouseup', function(){
  feature = 'color';
});
removeFeatures.addEventListener('mouseup', function(){
  feature = '';
});


