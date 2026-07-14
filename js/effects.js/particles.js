/*=========================================
PARTÍCULAS CON CANVAS
=========================================*/

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

class Particle{

    constructor(){

        this.reset();

        this.y = Math.random()*canvas.height;

    }

    reset(){

        this.x = Math.random()*canvas.width;

        this.y = canvas.height+Math.random()*300;

        this.radius = Math.random()*2+1;

        this.speed = Math.random()*0.8+0.2;

        this.alpha = Math.random()*0.7+0.2;

    }

    update(){

        this.y -= this.speed;

        this.x += Math.sin(this.y*0.01)*0.3;

        if(this.y<-20){

            this.reset();

        }

    }

    draw(){

        ctx.beginPath();

        ctx.fillStyle="rgba(255,255,255,"+this.alpha+")";

        ctx.shadowBlur=15;

        ctx.shadowColor="#00AEEF";

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        ctx.fill();

    }

}

for(let i=0;i<180;i++){

    particles.push(new Particle());

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.update();

        p.draw();

    });

    requestAnimationFrame(animate);

}

animate();