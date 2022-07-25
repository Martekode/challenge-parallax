# challenge-parallax

[woooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooot](https://martekode.github.io/challenge-parallax/).

## The Empire of Radiance

## introduction

Today we were given the challenge of making a parallax. we were given a lot of freedom which is both good and bad. good bacause it lets ous think for ourselves, but with an equal part bad because when given the world, many crumble under it's weight. So because the weight felt overwhelming i started looking for some ideas and spent too much time thinking. after a burst of equal frustration as impatians i just gave myself the task of making an endless scrolling background to begin with. Because time is limited and as many limits in this world are breakable, time finds itself in the way of that breaking infinitly and unmoveably. However time has an other property and that is it's stretchability, but we'll get into that later.

## So let's move to task one:

i found that the easiest method to do this is going to involve the canvas in some way or another so i established that i will go for the "CANVAS" method. This involves a canvas-tag in html that let's you display pixels in a box. atleast that is the (breakable) limit to my understanding of this vivid concept. offcourse the always repeated creating and initialising of the starting files happened first, the creation of this sentence questioning it's relevence as it is always repeated and well known. I gave the background of the body the dark and voided tint of the much seen black, the canvas by assosciation was given a white border with a girth of no more and no less then 3 pixels. This distinction will reveal many things. the placement of the newly born entity called canvas, the spans wide of it's existance and the heights it now can reach with dreams to release it's tethers to this world. To position the shreekly crying canvas in this empty and voided world we used the ultimate absolution of the placement itself. everything will happen within the unbendable framing of the window we look through that shoot back colorfull glimpses of this freshly boomed world. underneath this passage i will provide text that is long lost. some say it was the language of the Co 'm Puters folk that many beleive to be extinct. How they became unmade is for many an even looser beleive. The talkings involving it always involve a cataclisme of some sorts. The Great Whipeage is the most common name for it. Sinds the earliest that could be remembered and was told further, that name stood as the primary information about it. because it describes and it displays and it tells more then the other two, the essence.

texts found in the tombs of Canv 'As located in the Can Var province at the border of Bh'Ody, 900 -AW of the third age.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script src="script.js"></script>
  </body>
</html>
```

```css
body {
  background-color: black;
}
#canvas {
  position: absolute;
  border: 2px solid white;
  width: 800px;
  height: 700px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

these texts were found by a man clothed in stail brown and primarily leather. a hat to keep both the scorching rays of the never ending swirl of heat millions of spans away and the dust from collecting on his almost fully balded head. clubbed boots, fully bedusted again brown and leathery pants that only partially covered his sandy legs (fancy way of saying shorts) and glasses almost as thick as bubble glass used in Radiances as they tend to bounce of surfaces trying to dock and depart from its stations. His thick mustache, blushing and drunken nose and smiley grin that could make you laugh only by looking once is what makes him hated in the community of Radianceers (archiologists). At last, a red scarf should finish the image. I hope you got a picture of him in your head, because to that picture you should attach the name "Im'Khar". He will be providing ous with these texts as soon as he finds them. however the translations are sometimes vague and hard to uderstand. But he'll do his utter and mostest of drunkest best.

## Chapter Two:

### The Continuous Scroll

With the setup of the new world entity and the constraints of that same being, i left everything else to Im'Khar and the stableboy. Their knowlege about the ancient texts are good enough to figure the enigma out. Im'Khar, while grabbing another Razoo to quench his undying thirst to douse himself with gloom to never feel the unforgettable and raucous state of So'Ber, figured out that now the creation is set up he would need to find new texts to make the Mighty Side Scroll. The stableboy was leaning against the outside cave wall with a piece of very old and withered foliage between his marbled teeth. He wore a hat, flat at the front that got rounder the more you moved your eyes to the back or top of his head, entirely made of straw. Browning hair, short and roughly cut as if the cutting of it had to be done quick and saw no revisions. He wore a grey shirt with faint blueish hues that opened neer the colar. Red suspenders lounged on top with gold trimmings and symbols, relaxing under the radiance. An unperticularly dark pair of shorts, black thick shoes that've seen distances far off and a withered red scarf to finish the picture. Slightly humming to himself the vague melody he heared the beautiful Sandara Theatricus performe 3 dark spans before this very minute, still etched in his mind. It wasn't perfect but any villager of Sandara would compliment him emediatly on getting it as close as he has from only hearing it ones. "Enough with that slouching... and hinging about!" Im'Khar bellowed from the bottom of his suzzeling and whirling belly from the countless amounts of Razoo he consumed a quartlightspan. Normally Im'Khar was a funny and a delight to be with. But when he was drunk, which was more often then not, and you didn't do your work he would loose all the marbles he doesn't even know he has. For if u remind him the next day of it he would simply not remember and be again the delightfull man as many men know him. "You're j-jj-just sitting tthere..." he stumbled. T's were almost s'es and the "j" just became a slurr at this point. "Alright man! Alright, suus..." the stableboy sighed. _This man is going to make me go crazy... For 3 days we've been scouring the desert to find this bloody cave, all because he got lost. And now he is yelling at me for taking a short span break to look at her radiance. Why are people like this? i swear everywhere i go i meet people like this_ "I shall go ahead and search then!" the stableboy shreaked back at the waddling so called Radianceer while walking to the entrance. "Sinds your Radiance should not move his feet for that is below him..." he whispered under his own breath and the breath of the cave. "I heard that you ssscrummm! And don't call me Radiance, you here me? I ssshould not be c-ccompared to Our Raaadiant Mother for ssshe is inffffinnnit!" Im'Khar tried correcting the stableboy in fear of judgement from her Radiancy.

Upon entering the cave the dampness took him, as if he inhaled a wall. _It reminded him of the time he was known as Mufar in those hellish depths. He didn't want to think about it and shook his head in discust. He wasn't called Mufar anymore.. He went by the name of Ohokacha, but everyone called him Ohoka, not that that left the people less unfamiliar with it._ A name like that was never used in these parts, anywhere if he really thought about it. He heard it from a story he once witnessed when he was younger. Stories where he came from were rare, not in the rest of the world, but rare indeed from where he hailed. It made him think again about the pits and shook head and shoulders once more in pain. He suddenly realised that whilst within his thoughts he kept moving and forgot to look around for clues. As an awakening out of his thoughts he started towards a perticular wall that was behind collapsed rubble dropped forgetfully to the ground from the roof. Every wall possessed inscriptions. Once powerfull he was sure. The legends say that these texts could influence the most stubborn, make the non beleivers into the most faithfull of all and it had the power to create. Ohoka was always intreged by that last part of it, it made him think of what is left behind and by who. The vastness of it all, spread out like an entity once collected it all and sent it flying with aqual velocity across the world. But usually these things were more publically formed and centered in important places survived from the Whipeage. This cave however seemed different. Not public, within a decent size rock where if you hollowed it out you could comfortably live. Miles away from Sandara and even further from Bh'Odhar. That's why they got lost in the first place. The Radon that somehow tracked the inscriptions made Im'Khar loose his way as he was determined to find the faintest blop on it. It depends on the winds of soot if the Radon can easily track it or not and in the desert you fond plenty of these belly churning winds. These winds could make you sick if you inhaled too much. That's why they all wore the red scarves, well... They wore the red scarve but the color signified the beleives the people upheld. Red was for her Radiance and Marine was for his Might. All Ohoka really knew about the beleives of the people was that the Radiance was interchangable with The Swirl of Heat that perfectly placed itself in the space around. She ruled over the light and the span that accompanies it. The Might represented by the Marine scarves of the people and the White eye of Might that ruled over dark and linked spans. The Swirl of Heat, when the lightspans begin, shows always true and almost never hides. While the White eye shuts from time to time. But in his opinion the saying should go differently. because he truelly felt that instead of closing now and again, it actually seemed the oposite. It seemed as if it was mostly shut but sometimes it completely opened for all to see and to see all. The stableboy always felt afraid when he thought about it. uneasy would be a better word.

```js
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 6;

// init the background images
const backGroundOne = new Image();
backGroundOne.src = "images/11_background.png";
const backGroundTwo = new Image();
backGroundTwo.src = "images/10_distant_clouds.png";

//recursive loop that keep drawing the backGround
let x = 0;
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backGroundTwo, x, 0);
  if (x < -2000) x = 800;
  else x -= gameSpeed;
  requestAnimationFrame(animate);
}
animate();
```

```js
function scroller(x, imgWidth, reset, speed) {
  if (x < imgWidth) {
    return (x = reset);
  } else {
    return (x -= speed);
  }
}
```

created function to handle repeated code

```js
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backGroundOne, 0, 0);
  ctx.drawImage(backGroundFour, hugeCloudx2, 0);
  ctx.drawImage(backGroundFour, hugeCloudx, 0);
  ctx.drawImage(backGroundFive, Dtreesx, -450);
  ctx.drawImage(backGroundFive, Dtreesx2, -450);
  ctx.drawImage(backGroundTwo, x, 0);
  ctx.drawImage(backGroundThree, cloudx, 0);
  const imgWidthCloud1 = -2000;
  const resetCloud1 = 800;
  const imgWidthCloud2 = -1500;
  const resetCloud2 = 400;
  const ImgWidthHugeCloud = -2045;
  const resetCloudHuge = 2045;
  const DtreesWidth = -2000;
  const resetDtrees = 2000;

  x = scroller(x, imgWidthCloud1, resetCloud1, CLOUDSPEED);
  // if (x < -2000) x= 800;
  // else x-= CLOUDSPEED;
  cloudx = scroller(cloudx, imgWidthCloud2, resetCloud2, CLOUDSPEEDCLOSER);
  // if(cloudx < -1500) cloudx =400;
  // else cloudx-=CLOUDSPEEDCLOSER;
  hugeCloudx = scroller(
    hugeCloudx,
    ImgWidthHugeCloud,
    resetCloudHuge,
    GENSPEED
  );
  hugeCloudx2 = scroller(
    hugeCloudx2,
    ImgWidthHugeCloud,
    resetCloudHuge,
    GENSPEED
  );
  Dtreesx = scroller(Dtreesx, DtreesWidth, resetDtrees, GENSPEEDCLOSER);
  Dtreesx2 = scroller(Dtreesx2, DtreesWidth, resetDtrees, GENSPEEDCLOSER);
  requestAnimationFrame(animate);
}
animate();
```

implemented it in the animate function
