const canvas = document.getElementById('canvas');
const ctx  = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 6;

// init the background images
const backGroundOne = new Image();
backGroundOne.src = 'images/11_background.png';
const backGroundTwo = new Image();
backGroundTwo.src = 'images/10_distant_clouds.png';

//recursive loop that keep drawing the backGround
let x = 0;
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundTwo,x,0);
    if (x < -2000) x= 800;
    else x-= gameSpeed;
    requestAnimationFrame(animate);
}
animate();