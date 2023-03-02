import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

console.log("Gonzalo's code is working!");

fetch('./Productos.json')
  .then(response => response.json())
  .then(data => console.log(data));
