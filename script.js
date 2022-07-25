const canvas = document.getElementById('canvas');
const ctx  = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 6;
const CLOUDSPEED = 3;
const CLOUDSPEEDCLOSER=4;
const GENSPEED=1;
const GENSPEEDCLOSER = 2;



// init the background images
const backGroundOne = new Image();
backGroundOne.src = 'images/11_background.png';
const backGroundTwo = new Image();
backGroundTwo.src = 'images/10_distant_clouds.png';
const backGroundThree = new Image();
backGroundThree.src = 'images/09_distant_clouds1.png';
const backGroundFour = new Image();
backGroundFour.src = 'images/07_huge_clouds.png';
const backGroundFive = new Image();
backGroundFive.src = 'images/03_distant_trees.png';
//recursive loop that keep drawing the backGround
let x = 0;
let hugeCloudx = 0;
let hugeCloudx2 = 2050;
let Dtreesx = 0;
let Dtreesx2 = 2000;
let cloudx=0;
function scroller(x,imgWidth,reset,speed) {
    if (x < imgWidth) {return x = reset;}
    else {return x -= speed;}
}
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundOne,0,0);
    ctx.drawImage(backGroundFour,hugeCloudx2,0);
    ctx.drawImage(backGroundFour,hugeCloudx,0);
    ctx.drawImage(backGroundFive,Dtreesx,-450);
    ctx.drawImage(backGroundFive,Dtreesx2,-450);
    ctx.drawImage(backGroundTwo,x,0);
    ctx.drawImage(backGroundThree,cloudx,0)
    const imgWidthCloud1  = -2000;
    const resetCloud1 = 800;
    const imgWidthCloud2 = -1500;
    const resetCloud2= 400;
    const ImgWidthHugeCloud = -2045;
    const resetCloudHuge = 2045;
    const DtreesWidth = -2000;
    const resetDtrees = 2000;
    
    x = scroller(x,imgWidthCloud1,resetCloud1,CLOUDSPEED);
    // if (x < -2000) x= 800;
    // else x-= CLOUDSPEED;
    cloudx = scroller(cloudx,imgWidthCloud2,resetCloud2,CLOUDSPEEDCLOSER);
    // if(cloudx < -1500) cloudx =400;
    // else cloudx-=CLOUDSPEEDCLOSER;
    hugeCloudx = scroller(hugeCloudx,ImgWidthHugeCloud,resetCloudHuge,GENSPEED);
    hugeCloudx2 = scroller(hugeCloudx2,ImgWidthHugeCloud,resetCloudHuge,GENSPEED);
    Dtreesx = scroller(Dtreesx,DtreesWidth,resetDtrees,GENSPEEDCLOSER);
    Dtreesx2 = scroller(Dtreesx2,DtreesWidth,resetDtrees,GENSPEEDCLOSER);
    requestAnimationFrame(animate);
}
animate();