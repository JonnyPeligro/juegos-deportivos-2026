class FloatingObjects {

    constructor(){

        this.objects = document.querySelectorAll(".ball");

        this.start();

    }

    start(){

        this.objects.forEach((object,index)=>{

            this.animate(object,index);

        });

    }

    animate(object,index){

        object.style.transition = "left 12s linear, top 12s linear, transform 12s linear";

        const move = ()=>{

            const maxX = window.innerWidth - object.offsetWidth;
            const maxY = window.innerHeight - object.offsetHeight;

            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            const rotation = Math.random() * 720 - 360;

            const scale = 0.8 + Math.random() * 0.6;

            object.style.left = x + "px";
            object.style.top = y + "px";
            object.style.transform =
                `rotate(${rotation}deg) scale(${scale})`;

        };

        move();

        setInterval(move,10000 + index*1000);

    }

}

window.addEventListener("DOMContentLoaded",()=>{

    new FloatingObjects();

});

window.addEventListener("resize",()=>{

    new FloatingObjects();

});