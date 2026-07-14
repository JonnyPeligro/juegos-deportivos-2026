/*=====================================
REFLECTORES DINÁMICOS
=====================================*/

const beamLeft = document.querySelector(".beamLeft");
const beamRight = document.querySelector(".beamRight");

let angle = 0;

function animateLights(){

    angle += 0.008;

    const left = Math.sin(angle) * 22;

    const right = Math.cos(angle) * 22;

    beamLeft.style.transform =
    `rotate(${-35 + left}deg)`;

    beamRight.style.transform =
    `rotate(${35 + right}deg)`;

    requestAnimationFrame(animateLights);

}

animateLights();