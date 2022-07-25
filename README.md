# challenge-parallax

[woooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooot]https://martekode.github.io/challenge-parallax/).

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
