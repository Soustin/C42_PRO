var Soustin = ["Soustin Roy", 13, "Delhi Public School", "7th Grade",  36];
var Pra = "HELLO";
// Soustin[3]=14;
Soustin.push("5.8");
Soustin.pop();
console.log(Soustin);
console.log("My name is "+ Soustin[0], "I am "+ Soustin[1]+" years old", "I study in "+ Soustin[2], "I am in "+ Soustin[3], "My Roll no. is "+ Soustin[4])

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50); 
}

function draw() {
  background(255,255,255); 
  drawSprites();
}