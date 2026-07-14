/*=====================================
BALONES FLOTANTES
=====================================*/

const balls = document.querySelectorAll(".ball");

let t = 0;

function animateBalls(){

    t += 0.02;

    balls.forEach((ball,index)=>{

        const y =
        Math.sin(t+index)*15;

        const r =
        Math.cos(t+index)*10;

        ball.style.transform=

        `translateY(${y}px)
         rotate(${r}deg)`;

    });

    requestAnimationFrame(animateBalls);

}

animateBalls();