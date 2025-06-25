const pizza = document.getElementById('Pizza');
    let isEnlarged = false;
function toggleSizeAndBorder() {
  if (!isEnlarged) {
    pizza.style.width = '300px';
    pizza.style.border = '3px solid white';
  } else {
    pizza.style.width = '100px';           
    pizza.style.border = 'none';          
  }
  isEnlarged = !isEnlarged;
}
pizza.addEventListener('click', toggleSizeAndBorder);
