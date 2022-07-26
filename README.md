# The first book in _The Fishermen_ series.

## [Book One: Radiant](https://martekode.github.io/challenge-parallax/).

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

### The Blessing of The Cave

With the setup of the new world entity and the constraints of that same being, i left everything else to Im'Khar and the stableboy. Their knowlege about the ancient texts are good enough to figure the enigma out. Im'Khar, while grabbing another Razoo to quench his undying thirst to douse himself with gloom to never feel the unforgettable and raucous state of So'Ber, figured out that now the creation is set up he would need to find new texts to make the Mighty Side Scroll. The stableboy was leaning against the outside cave wall with a piece of very old and withered foliage between his marbled teeth. He wore a hat, flat at the front that got rounder the more you moved your eyes to the back or top of his head, entirely made of straw. Browning hair, short and roughly cut as if the cutting of it had to be done quick and saw no revisions. He wore a grey shirt with faint blueish hues that opened neer the colar. Red suspenders lounged on top with gold trimmings and symbols, relaxing under the radiance. An unperticularly dark pair of shorts, black thick shoes that've seen distances far off and a withered red scarf to finish the picture. Slightly humming to himself the vague melody he heared the beautiful Sandara Theatricus performe 3 dark spans before this very minute, still etched in his mind. It wasn't perfect but any villager of Sandara would compliment him emediatly on getting it as close as he has from only hearing it ones. "Enough with that slouching... and hinging about!" Im'Khar bellowed from the bottom of his suzzeling and whirling belly from the countless amounts of Razoo he consumed a quartlightspan. Normally Im'Khar was a funny and a delight to be with. But when he was drunk, which was more often then not, and you didn't do your work he would loose all the marbles he doesn't even know he has. For if u remind him the next day of it he would simply not remember and be again the delightfull man as many men know him. "You're j-jj-just sitting tthere..." he stumbled. T's were almost s'es and the "j" just became a slurr at this point. "Alright man! Alright, suus..." the stableboy sighed. _This man is going to make me go crazy... For 3 days we've been scouring the desert to find this bloody cave, all because he got lost. And now he is yelling at me for taking a short span break to look at her radiance. Why are people like this? i swear everywhere i go i meet people like this_ "I shall go ahead and search then!" the stableboy shreaked back at the waddling so called Radianceer while walking to the entrance. "Sinds your Radiance should not move his feet for that is below him..." he whispered under his own breath and the breath of the cave. "I heard that you ssscrummm! And don't call me Radiance, you here me? I ssshould not be c-ccompared to Our Raaadiant Mother for ssshe is inffffinnnit!" Im'Khar tried correcting the stableboy in fear of judgement from her Radiancy.

Upon entering the cave the dampness took him, as if he inhaled a wall. _It reminded him of the time he was known as Mufar in those hellish depths. He didn't want to think about it and shook his head in discust. He wasn't called Mufar anymore.. He went by the name of Ohokacha, but everyone called him Ohoka, not that that left the people less unfamiliar with it._ A name like that was never used in these parts, anywhere if he really thought about it. He heard it from a story he once witnessed when he was younger. Stories where he came from were rare, not in the rest of the world, but rare indeed from where he hailed. It made him think again about the pits and shook head and shoulders once more in pain. He suddenly realised that whilst within his thoughts he kept moving and forgot to look around for clues. As an awakening out of his thoughts he started towards a perticular wall that was behind collapsed rubble dropped forgetfully to the ground from the roof. Every wall possessed inscriptions. Once powerfull he was sure. The legends say that these texts could influence the most stubborn, make the non beleivers into the most faithfull of all and it had the power to create. Ohoka was always intreged by that last part of it, it made him think of what is left behind and by who. The vastness of it all, spread out like an entity once collected it all and sent it flying with aqual velocity across the world. But usually these things were more publically formed and centered in important places survived from the Whipeage. This cave however seemed different. Not public, within a decent size rock where if you hollowed it out you could comfortably live. Miles away from Sandara and even further from Bh'Odhar. That's why they got lost in the first place. The Radon that somehow tracked the inscriptions made Im'Khar loose his way as he was determined to find the faintest blop on it. It depends on the winds of soot if the Radon can easily track it or not and in the desert you fond plenty of these belly churning winds. These winds could make you sick if you inhaled too much. That's why they all wore the red scarves, well... They wore the red scarve but the color signified the beleives the people upheld. Red was for her Radiance and Marine was for his Might. All Ohoka really knew about the beleives of the people was that the Radiance was interchangable with The Swirl of Heat that perfectly placed itself in the space around. She ruled over the light and the span that accompanies it. The Might represented by the Marine scarves of the people and the White eye of Might that ruled over dark and linked spans. The Swirl of Heat, when the lightspans begin, shows always true and almost never hides. While the White eye shuts from time to time. But in his opinion the saying should go differently. because he truelly felt that instead of closing now and again, it actually seemed the oposite. It seemed as if it was mostly shut but sometimes it completely opened for all to see and to see all. The stableboy always felt afraid when he thought about it. uneasy would be a better word.

Ohoka didn't really think much of the beleives of the people. Not in a way that made him ignorant at least but he rather found it to be a lot like freedom. A craving he had for so long and now he can freely choose what to beleive in. Now that he got time for beleives at last. He reminded himself one last time of the radiant good feeling he got when sitting in the light outside the cave, all rest and no rumble. _Until that oaf started barking at least._ The thought reminded him that he was in the cave for a reason. But the reason he thought it was, was not. He started towards the end of the cave where he saw the bebouldered wall. When he approached he saw that many were way to heavy for his average boyish body, as Im'Khar reminded him these past days, to even shift a sliverspan. He looked at the wall, at what he could see at least, and found it to be filled with inscriptions. Some words or passages were colored in all sorts of different HEXA's, the colorsystem used in the lands of sand and dust. But to him many were just crimson red and marine blue and the other many were your average collection of purples, greens,oranges and pinks. He wanted to know what it all meant and started to heave at the boulders without much thought. It was as if his body was possessed and moved puppetlike on it's own. _Was it really on it's own?_ Where he got the strength to move these boulders was beyond him. "Probably..." he thought while clearing more and more of the crumbled crumbs of rock. When he moved some of the last blocks of stone he saw a mark on one of the boulders and felt a sharp and imidiate impulse. An impulse so sharp he started bending his back double. He didn't know where to move to make the pain go and started to fit into the weirdest of shapes without his knowing. With a feint try he looked at the wall, let out a cry and dropped down with skull on stone and brain on voidfull space. Equally dense, equally hard.

---

### voiddream: The fisherman

_Ohoka was drifting in a pool fighting the reflection of tints of Ruby and Midnight beams. He could not think or move or be, only listnen to the waves by still water. Waves of colors struggling at each other but also mixing the further they got from their scource. You could almost say they were brawling silklike. Ripples formed from the water that grew bigger and bigger to quakes in the ditance. He could feel it, sense it. It was almost as if it was him. The Quakes got bigger and closer. The stableboy tasted the denseness of them that made him quake within. The waves were approaching but he could do no more then lie down to it, infinitly floating. Bobbing as it were towards the danger. He was the bob but when he gets caught there will be none to pull him out with the prey. For he is the prey now. The huge shifts of water evolved into more rythmic behavior and he could swear that he understood it. whatever the waves tried to tell, it was as if it were shouting at him. "G.. P!" he couldn't understand. A second Wave hit his eardrums. "GE.. UP!" Ohaka understood imidiatly and one moment he ley preylike in the endless water of serenity and the other he was pulled out by fisherman. For that person pulled him out just before a fish too big bit the hook._

---

## Chapter Three:

### The Ancient Power stirrs

The heat radiated on his cheeks as his eye lids warmed under her gaze. Just the amount of quality of life he was looking for and slowly he opened his eyes to see himself sitting with his back to the cave wall, radiance bathing. All seemed blurry and fuzzy but not his vision, the reality. "What just happened?" He had to force those words out sinds his throat felt hoarse more then ever. It felt like two sand buster wheels grinding at each other, the sound of it was almost as loud as the beep tone he had searing his eardrums. "By her gaze! You're awake... Get up, we need to get out of here." The Radianceer was struttling down the sand dunes towards what ones was the entrence to the cave. The Radan was making a highpiched melodious string of sound that indicated trouble and Im'Khar grew more patient the more Ohoka kept ignoring his calls. "I'm not going to stand here and be consumed by the storm, kid..." Im'Khar said in way that seemed he was waiting for him to give a response. Almost as if he was going to leave if he didn't do as much as make a sound. "Alright...lrigth y.. big oaf" This was all he could menage as he wanted his strength to carry his weight as he tried to stand up. His elbows and knees couldn't help shift his wait over his center and gave in just as he was about to make it. He was caught by a warm palm in the center of his shoulderblades and a scorching sent of Razoo. "C'mon boy you can do it...I'll help you to the cart. You can rest there my son..." Im'khar pushed him up and threw the boys arm around his neck and shuffled him to the cart and mule. As the uncontrolled Razoo consumer pulled the boy over one of the last dunes before the cart he heared the boy mumble. "w...w...Wha h..happennn?" In the feintes tone exclaimed. "I don't know kid, the cave collapsed that's for damn sure and also our score..." The boy could sense the frustration in his voice. Three days of running in soot and sand, getting lost searching for this perticular cave. _Why couln't any other inscription scource satisfy the funders?_ The boy thought within his now pounding skull. The master of drink threw him on the back of the cart with an exlcaimed realisation he was getting way to old for this. The Radan was now beeping in alternate rhytm and the man turned around fiercly and looked at the sky. The vastest of grey winds approached faster than he had ever seen a soot storm move. So vast, it was like the biggest ball of grey dustlike wool come from the sootiest sheep. "Don't worry son I'll get you out, my mighty mule will take care of that. Isn't that true, Romazan" The boy looked at the back of the mules' ears from the back of the cart thinking: "How can this piece of trashy animal pull ous out of this infinitly drying soot pool. "She can move like the wind, let none fool you son." The man now purched atop the front of the cart just about to smack his beloved mule on it's beefy behind. He smacked the mule with the loudest of whips and exclaimed at the same time: "She outruns every filthy, stinky and slimy Sithar." Ohoka felt the cart shoot out like force indeed to be reconned with at the same time as the whip and the decleration of awesomness. "Maybe this animal can indeed do it" he thought while slowly fading away in sleep whilst the rumble of the cart and intense speed of the mule rocked him to slumber.

When he woke, he found himself in a warm bed and her rays were poking through the blinds right in his eyes as if to wake him. He was sore all over and moved his eyes to his hand as a reflex because of a stinging pain right on the top part of his hand, above his knuckles. He saw a speck of black ink on it and as his vision focused more after a long and well needed nap, he saw the mark. The same mark that give him immense pain in the cave and after that he... He couldn't remember. As far as he knew he feinted and all was void after that, unknowing how accurate he was. The mark didn't cause him pain anymore, except for the continues stinging on his hand. Whilest trying to move to the window he had to use a great deal of energy, he was still not fully recoverd. With the blinds open now he could see he was in Bh'Odhar. "Unbeleivable... that beast must've run so fast it's own hooves seared off" He chuckled whilest seeing her Radiancy was up and about in the center of the sky to mark the halflightspan passed. _Did he sleep that long? The entire night and morning?_ His thoughts abrupted by the knocking on the door. The boy went to the peaky hole in the door and saw the drunken Radianceer looking to his left and right in uneasiness. He opened the door and the man came darting in. "Oh thank god, you're awake kid" The man said with a big sigh of exhaustion whilst almost stumbling over the little one inch border of wood at the bottom of the doorframe. "Radiance smite it!" He bellowed. "These stupid dune Tocklers are worth nothing nowadays... Radiance..!" Tocklers are builders and dune tocklers are ones that specialised in building in loose sands, he reminded himself of the time he first came to these lands and knew nothing. The man seemed in a hurried and bad mood wich was not unusual for the Razoo crazed oaf but the unusual was his lack of it. It seemed as if he hadn't had a drink yet. He should've been the delight he was known to be in the mornings before he starts his shift as drainpipe. Ohaka chuckled at his ow thoughts. "What's so funny kid?" The man belted. "I've been running around town for days to get some help to get you awake, getting in all sorts of trouble and when your finally wake you're going to smicker at me? Boy, I'm loosing my marbles here." He was pacing up and down the bedroom, realising for the first time he had marbles.

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

# new structure

```js
function scrollerLeft(x, imgWidth, reset, speed) {
  if (x < imgWidth) {
    return (x = reset);
  } else {
    return (x -= speed);
  }
}
function scrollerRight(x, imgWidth, reset, speed) {
  if (x > imgWidth) {
    return (x = reset);
  } else {
    return (x += speed);
  }
}
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backGroundOne, backgroundx, -150);
  ctx.drawImage(BDesert2, backgroundx2, -150);
  ctx.drawImage(BDesert3, backgroundx3, -150);
  ctx.drawImage(backGroundFour, hugeCloudx2, 0);
  ctx.drawImage(backGroundFour, hugeCloudx, 0);
  //ctx.drawImage(backGroundFive,Dtreesx,-450);
  //ctx.drawImage(backGroundFive,Dtreesx2,-450);
  ctx.drawImage(backGroundTwo, x, 0);
  ctx.drawImage(backGroundThree, cloudx, 0);
  ctx.drawImage(ship, shipx, 100);
  const backGroundWidth = -1900;
  const resetBackGroundWidth = 3800;
  const imgWidthCloud1 = -2000;
  const resetCloud1 = 800;
  const imgWidthCloud2 = -1500;
  const resetCloud2 = 400;
  const ImgWidthHugeCloud = -2040;
  const resetCloudHuge = 2040;
  // const DtreesWidth = -2000;
  // const resetDtrees = 2000;
  const shipWidth = 5000;
  const resetShip = -130;
  backgroundx = scrollerLeft(
    backgroundx,
    backGroundWidth,
    resetBackGroundWidth,
    GENSPEED
  );
  backgroundx2 = scrollerLeft(
    backgroundx2,
    backGroundWidth,
    resetBackGroundWidth,
    GENSPEED
  );
  backgroundx3 = scrollerLeft(
    backgroundx3,
    backGroundWidth,
    resetBackGroundWidth,
    GENSPEED
  );
  x = scrollerLeft(x, imgWidthCloud1, resetCloud1, CLOUDSPEED);
  // if (x < -2000) x= 800;
  // else x-= CLOUDSPEED;
  cloudx = scrollerLeft(cloudx, imgWidthCloud2, resetCloud2, CLOUDSPEEDCLOSER);
  // if(cloudx < -1500) cloudx =400;
  // else cloudx-=CLOUDSPEEDCLOSER;
  hugeCloudx = scrollerLeft(
    hugeCloudx,
    ImgWidthHugeCloud,
    resetCloudHuge,
    GENSPEEDCLOSER
  );
  hugeCloudx2 = scrollerLeft(
    hugeCloudx2,
    ImgWidthHugeCloud,
    resetCloudHuge,
    GENSPEEDCLOSER
  );
  //Dtreesx = scrollerLeft(Dtreesx,DtreesWidth,resetDtrees,GENSPEEDCLOSER);
  //Dtreesx2 = scrollerLeft(Dtreesx2,DtreesWidth,resetDtrees,GENSPEEDCLOSER);
  shipx = scrollerRight(shipx, shipWidth, resetShip, SHIPSPEED);
  requestAnimationFrame(animate);
}
animate();
```

scroller right and left are seprate functions now.
