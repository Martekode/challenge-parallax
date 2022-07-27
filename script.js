const canvas = document.getElementById('canvas');
const ctx  = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 6;
const CLOUDSPEED = 3;
const CLOUDSPEEDCLOSER=4;
const GENSPEED=1;
const GENSPEEDCLOSER = 2;
const SHIPSPEED = 20;
const PLAYERSPEED = 10;



// init the background images
const backGroundOne = new Image();
backGroundOne.src = 'images/desert.png';
const BDesert2 = new Image();
BDesert2.src = 'images/desert2.png';
const BDesert3 = new Image();
BDesert3.src = 'images/desert3.png';
const backGroundTwo = new Image();
backGroundTwo.src = 'images/10_distant_clouds.png';
const backGroundThree = new Image();
backGroundThree.src = 'images/09_distant_clouds1.png';
const backGroundFour = new Image();
backGroundFour.src = 'images/07_huge_clouds.png';
const backGroundFive = new Image();
backGroundFive.src = 'images/03_distant_trees.png';
const ship = new Image();
ship.src = 'images/ship-05.png';
const playerSprite = new Image();
playerSprite.src = 'images/Fisherman_idle.png'
//recursive loop that keep drawing the backGround
let x = 0;
let backgroundx=0;
let backgroundx2=1900;
let backgroundx3=3800;
let hugeCloudx = 0;
let hugeCloudx2 = 2040;
let Dtreesx = 0;
let Dtreesx2 = 2000;
let cloudx=0;
let shipx = -130;
let playerx = 0;
let playery =0;
function scrollerLeft(x,imgWidth,reset,speed) {
    if (x < imgWidth) {return x = reset;}
    else {return x -= speed;}
}
function scrollerRight(x,imgWidth,reset,speed) {
    if (x > imgWidth) {return x = reset;}
    else {return x += speed;}
}
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundOne,backgroundx,-150);
    ctx.drawImage(BDesert2,backgroundx2,-150);
    ctx.drawImage(BDesert3,backgroundx3,-150);
    ctx.drawImage(backGroundFour,hugeCloudx2,0);
    ctx.drawImage(backGroundFour,hugeCloudx,0);
    //ctx.drawImage(backGroundFive,Dtreesx,-450);
    //ctx.drawImage(backGroundFive,Dtreesx2,-450);
    ctx.drawImage(backGroundTwo,x,0);
    ctx.drawImage(backGroundThree,cloudx,0)
    ctx.drawImage(ship,shipx,100);
    ctx.drawImage(playerSprite, 0 , 0 ,playerSprite.width / 4, playerSprite.height,playerx,playery,playerSprite.width,playerSprite.height * 2);
    const backGroundWidth = -1900;
    const resetBackGroundWidth = 3800;
    const imgWidthCloud1  = -2000;
    const resetCloud1 = 800;
    const imgWidthCloud2 = -1500;
    const resetCloud2= 400;
    const ImgWidthHugeCloud = -2040;
    const resetCloudHuge = 2040;
    // const DtreesWidth = -2000;
    // const resetDtrees = 2000;
    const shipWidth = 5000;
    const resetShip= -130;
    backgroundx = scrollerLeft(backgroundx,backGroundWidth,resetBackGroundWidth,GENSPEED);
    backgroundx2 = scrollerLeft(backgroundx2,backGroundWidth,resetBackGroundWidth,GENSPEED);
    backgroundx3 = scrollerLeft(backgroundx3,backGroundWidth,resetBackGroundWidth,GENSPEED);
    x = scrollerLeft(x,imgWidthCloud1,resetCloud1,CLOUDSPEED);
    // if (x < -2000) x= 800;
    // else x-= CLOUDSPEED;
    cloudx = scrollerLeft(cloudx,imgWidthCloud2,resetCloud2,CLOUDSPEEDCLOSER);
    // if(cloudx < -1500) cloudx =400;
    // else cloudx-=CLOUDSPEEDCLOSER;
    hugeCloudx = scrollerLeft(hugeCloudx,ImgWidthHugeCloud,resetCloudHuge,GENSPEEDCLOSER);
    hugeCloudx2 = scrollerLeft(hugeCloudx2,ImgWidthHugeCloud,resetCloudHuge,GENSPEEDCLOSER);
    //Dtreesx = scrollerLeft(Dtreesx,DtreesWidth,resetDtrees,GENSPEEDCLOSER);
    //Dtreesx2 = scrollerLeft(Dtreesx2,DtreesWidth,resetDtrees,GENSPEEDCLOSER);
    shipx = scrollerRight(shipx,shipWidth,resetShip,SHIPSPEED);
    requestAnimationFrame(animate);
}
function init(){
    window.addEventListener("keydown", (event)=>{
        if(event.keyCode === 68){
            event.preventDefault();
            console.log("lala");
            playerx+= PLAYERSPEED;
        }
    })
    window.addEventListener("keydown", (event)=>{
        if(event.keyCode === 81){
            event.preventDefault();
            console.log("lala");
            playerx-= PLAYERSPEED;
        }
    })
    window.addEventListener("keydown", (event)=>{
        if(event.keyCode === 83){
            event.preventDefault();
            console.log("lala");
            playery+= PLAYERSPEED;
        }
    })
    window.addEventListener("keydown", (event)=>{
        if(event.keyCode === 90){
            event.preventDefault();
            console.log("lala");
            playery-= PLAYERSPEED;
        }
    })
}
init();
animate();