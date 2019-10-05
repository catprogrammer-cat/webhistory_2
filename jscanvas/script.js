const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(175, 175, 100, 100);
ctx.fillStyle = 'red';
ctx.font = "50px Sans-Serif";
ctx.fillText ("Hello World!", 50, 250);
