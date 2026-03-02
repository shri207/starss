// Set year
document.getElementById('year').textContent = new Date().getFullYear();

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 150;

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Star{
constructor(){
this.reset();
}

reset(){
this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;
this.z = Math.random()*canvas.width;
}

update(){
this.z -= 2;
if(this.z <=0) this.reset();
}

draw(){

const sx = (this.x - canvas.width/2) * (canvas.width/this.z) + canvas.width/2;
const sy = (this.y - canvas.height/2) * (canvas.width/this.z) + canvas.height/2;

const radius = canvas.width/this.z;

ctx.beginPath();
ctx.arc(sx, sy, radius, 0, Math.PI*2);
ctx.fillStyle="white";
ctx.fill();
}
}

for(let i=0;i<numStars;i++){
stars.push(new Star());
}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fillRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{
star.update();
star.draw();
});

requestAnimationFrame(animate);
}

animate();
