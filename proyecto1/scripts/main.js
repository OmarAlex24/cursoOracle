var pantalla = document.querySelector('canvas');

var pincel = pantalla.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, pantalla.width, pantalla.height);

pincel.fillStyle = 'black';
// Ojos
pincel.fillRect(70, 75, 160, 175);
pincel.fillRect(350, 75, 160, 175);
// Boca
pincel.fillRect(230, 250, 120, 175);
pincel.fillRect(130, 320, 100, 175);
pincel.fillRect(345, 320, 100, 175);
