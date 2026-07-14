class SportsInvitation {

    constructor(){

        //====================================
        // ESCENAS
        //====================================

        this.scene1 = document.getElementById("scene1");
        this.scene2 = document.getElementById("scene2");
        this.sceneGO = document.getElementById("sceneGO");
        this.scene3 = document.getElementById("scene3");
        this.scene4 = document.getElementById("scene4");
        this.scene5 = document.getElementById("scene5");
        this.scene6 = document.getElementById("scene6");
        this.scene7 = document.getElementById("scene7");
        this.scene8 = document.getElementById("scene8");
        this.scene9 = document.getElementById("scene9");
        this.scene10 = document.getElementById("scene10");

        //====================================
        // BOTONES PRINCIPALES
        //====================================

        this.startButton = document.getElementById("startButton");
        this.continueButton = document.getElementById("continueButton");

        //====================================
        // BOTONES DEL MENÚ
        //====================================

        this.sportsButton = document.getElementById("sportsButton");
        this.artButton = document.getElementById("artButton");
        this.cinemaButton = document.getElementById("cinemaButton");
        this.fabricButton = document.getElementById("fabricButton");
        this.languagesButton = document.getElementById("languagesButton");
        this.roboticsButton = document.getElementById("roboticsButton");

        //====================================
        // BOTONES REGRESAR
        //====================================

        this.backSportsButton = document.getElementById("backSportsButton");
        this.backArtButton = document.getElementById("backArtButton");
        this.backCinemaButton = document.getElementById("backCinemaButton");
        this.backFabricButton = document.getElementById("backFabricButton");
        this.backLanguagesButton = document.getElementById("backLanguagesButton");
        this.backRoboticsButton = document.getElementById("backRoboticsButton");

        //====================================
        // CONTADOR
        //====================================

        this.counter = document.getElementById("counterNumber");

        //====================================
        // EFECTOS
        //====================================

        this.flash = document.getElementById("flash");
        this.video = document.getElementById("stadiumVideo");

        //====================================
        // AUDIOS
        //====================================

        this.music = document.getElementById("music");
        this.hoverSound = document.getElementById("hoverSound");
        this.clickSound = document.getElementById("clickSound");
        this.goSound = document.getElementById("goSound");

        this.isRunning = false;

        this.init();

    }

    //====================================
    // INICIALIZAR
    //====================================

    init(){

        console.log("🏆 Juegos Deportivos 2026 iniciado");

        this.registerEvents();

    }

    //====================================
    // REGISTRAR EVENTOS
    //====================================

    registerEvents(){

        // BOTÓN INICIAR

        if(this.startButton){

            this.startButton.addEventListener("click",()=>{

                this.startShow();

            });

            this.startButton.addEventListener("mouseenter",()=>{

                if(this.hoverSound){

                    this.hoverSound.currentTime = 0;
                    this.hoverSound.play().catch(()=>{});

                }

            });

        }

        // BOTÓN EXPLORAR TALENTOS

        if(this.continueButton){

            this.continueButton.addEventListener("click",()=>{

                this.showScene4();

            });

        }

        // BOTÓN DEPORTES

        if(this.sportsButton){

            this.sportsButton.addEventListener("click",()=>{

                this.showScene5();

            });

        }

        // BOTÓN ARTES

        if(this.artButton){

            this.artButton.addEventListener("click",()=>{

                this.showScene6();

            });

        }

        // BOTÓN CINE

        if(this.cinemaButton){

            this.cinemaButton.addEventListener("click",()=>{

                this.showScene7();

            });

        }

        // BOTÓN TEJIDO

        if(this.fabricButton){

            this.fabricButton.addEventListener("click",()=>{

                this.showScene8();

            });

        }

        // BOTÓN IDIOMAS

        if(this.languagesButton){

            this.languagesButton.addEventListener("click",()=>{

                this.showScene9();

            });

        }

        // BOTÓN ROBÓTICA

        if(this.roboticsButton){

            this.roboticsButton.addEventListener("click",()=>{

                this.showScene10();

            });

        }

        // REGRESAR DEPORTES

        if(this.backSportsButton){

            this.backSportsButton.addEventListener("click",()=>{

                this.showScene4();

            });

        }

        // REGRESAR ARTES

        if(this.backArtButton){

            this.backArtButton.addEventListener("click",()=>{

                this.showScene4();

            });

        }

        // REGRESAR CINE

        if(this.backCinemaButton){

            this.backCinemaButton.addEventListener("click",()=>{

                this.showScene4();

            });

        }

        // REGRESAR TEJIDO

        if(this.backFabricButton){

            this.backFabricButton.addEventListener("click",()=>{

                this.showScene4();

            });

        }

        // REGRESAR IDIOMAS

        if(this.backLanguagesButton){

            this.backLanguagesButton.addEventListener("click",()=>{

                this.showScene4();

            });

        }

        // REGRESAR ROBÓTICA

        if(this.backRoboticsButton){

            this.backRoboticsButton.addEventListener("click",()=>{

                this.showScene4();

            });

        }

    }
        //====================================
    // INICIAR PRESENTACIÓN
    //====================================

    async startShow(){

        if(this.isRunning) return;

        this.isRunning = true;

        if(this.clickSound){

            this.clickSound.currentTime = 0;
            this.clickSound.play().catch(()=>{});

        }

        if(this.music){

            this.music.volume = .35;
            this.music.play().catch(()=>{});

        }

        this.flashScreen();

        this.videoZoom();

        await this.sleep(900);

        this.showCountdown();

    }

    //====================================
    // CUENTA REGRESIVA
    //====================================

    showCountdown(){

        this.scene1.classList.add("hidden");

        this.scene2.classList.remove("hidden");

        this.countdown(3);

    }

    countdown(value){

        this.counter.innerHTML = value;

        this.counter.classList.remove("countAnimation");

        void this.counter.offsetWidth;

        this.counter.classList.add("countAnimation");

        if(value > 1){

            setTimeout(()=>{

                this.countdown(value - 1);

            },1000);

        }else{

            setTimeout(()=>{

                this.showGO();

            },1000);

        }

    }

    //====================================
    // ESCENA GO
    //====================================

    showGO(){

        this.scene2.classList.add("hidden");

        this.sceneGO.classList.remove("hidden");

        if(this.goSound){

            this.goSound.currentTime = 0;

            this.goSound.play().catch(()=>{});

        }

        this.flashScreen();

        setTimeout(()=>{

            this.sceneGO.classList.add("hidden");

            this.enterStadium();

        },1200);

    }

    //====================================
    // ENTRADA AL ESTADIO
    //====================================

    enterStadium(){

        this.video.style.animation = "none";

        this.video.style.transition = "transform 5s ease";

        this.video.style.transform = "scale(1.35)";

        setTimeout(()=>{

            this.scene3.classList.remove("hidden");

        },1800);

    }
        //====================================
    // SCENE 4 - MENÚ DE TALENTOS
    //====================================

    showScene4(){

        console.log("🎨 Menú de Talentos");

        this.flashScreen();

        this.scene3.classList.add("hidden");
        this.scene5.classList.add("hidden");
        this.scene6.classList.add("hidden");
        this.scene7.classList.add("hidden");
        this.scene8.classList.add("hidden");
        this.scene9.classList.add("hidden");
        this.scene10.classList.add("hidden");

        this.scene4.classList.remove("hidden");

    }

    //====================================
    // SCENE 5 - DEPORTES
    //====================================

    showScene5(){

        console.log("⚽ Club Deportivo");

        this.flashScreen();

        this.scene4.classList.add("hidden");

        this.scene5.classList.remove("hidden");

    }

    //====================================
    // SCENE 6 - ARTES
    //====================================

    showScene6(){

        console.log("🎨 Club de Artes");

        this.flashScreen();

        this.scene4.classList.add("hidden");

        this.scene6.classList.remove("hidden");

    }

    //====================================
    // SCENE 7 - CINE
    //====================================

    showScene7(){

        console.log("🎬 Club de Cine");

        this.flashScreen();

        this.scene4.classList.add("hidden");

        this.scene7.classList.remove("hidden");

    }

    //====================================
    // SCENE 8 - TEJIDO
    //====================================

    showScene8(){

        console.log("🧵 Club de Tejido");

        this.flashScreen();

        this.scene4.classList.add("hidden");

        this.scene8.classList.remove("hidden");

    }

    //====================================
    // SCENE 9 - IDIOMAS
    //====================================

    showScene9(){

        console.log("🌍 Club de Idiomas");

        this.flashScreen();

        this.scene4.classList.add("hidden");

        this.scene9.classList.remove("hidden");

    }

    //====================================
    // SCENE 10 - ROBÓTICA
    //====================================

    showScene10(){

        console.log("🤖 Club de Robótica");

        this.flashScreen();

        this.scene4.classList.add("hidden");

        this.scene10.classList.remove("hidden");

    }
        //====================================
    // EFECTO FLASH
    //====================================

    flashScreen(){

        if(!this.flash) return;

        this.flash.classList.add("flashAnimation");

        setTimeout(()=>{

            this.flash.classList.remove("flashAnimation");

        },450);

    }

    //====================================
    // ZOOM DEL VIDEO
    //====================================

    videoZoom(){

        if(!this.video) return;

        this.video.style.transition = "transform 3s ease";

        this.video.style.transform = "scale(1.12)";

    }

    //====================================
    // ESPERA
    //====================================

    sleep(ms){

        return new Promise(resolve => setTimeout(resolve, ms));

    }

}

//====================================
// INICIAR APLICACIÓN
//====================================

window.addEventListener("DOMContentLoaded",()=>{

    new SportsInvitation();

});