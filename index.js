const config = {
  type: Phaser.AUTO, // Which renderer to use
  width: 240, // Canvas width in pixels
  height: 240, // Canvas height in pixels
	    backgroundColor: '#33F9FF',

  parent: "game-container", // ID of the DOM element to add the canvas to
  physics: {
  default: "arcade",
    arcade: {
	  //debug: true,
      gravity: { 
		  y: 300
	  },
		checkCollision: {
        	up: true,
            down: false,
            left: true,
            right: false
        },
    }
  },
	
  scene: [Titulo, Juego, Juego2, Fin, GameOver, Ind, Campo, Modos, Puntos, Juego3, FinNivel]
	
	
};

const game = new Phaser.Game(config);

var Poder = false;
var PoderA = false;
var vidas = 2;
var player;
var Pun = 0;
var spaceBar;
var C;
var EnP = 0;
var moned = 0;
var enemigo;
var muerte = false;
var abc;
var enemigo2;
var alas;
var alas2;
var PoderAlas;
var Goal;
var camera;
var child;
var keyA;

var N;
var IsN = 0;
var InStair = 0;
var InCantaro = 0;
var CarCant = 0;
var Caux = 0;
var auxCant = 0;
var dir = 0;
var cantaro;
var toque = 0;
var atacando = 0;
var atacado = 0;
var PuntosVida = 2;

var evento;
var EnTo = 0;
var TortasT;
var usado = 0;
var bloques;
var bloquesM;
var MiniPlata;

function fuera(scene){
	//console.log(player.y);
	if(vidas != 0){
		if(this.player.x < 12){
			player.x = 16;
		}
		if(this.player.y > 640){
			Poder = false;
			PoderA = false;
			vidas = vidas - 1;
			CarCant = 0;
			InCantaro = 0;
			auxCant = 0;
			if(vidas == 0){
				scene.scene.start("Final");
			}else{
				scene.scene.start();
			}
		}
	}
}

function Muer(scene){
	if(vidas == 0){
		scene.scene.start("Final");
	}
	
	if(vidas != 0){
		if(muerte == true){
			    vidas = vidas - 1;
				Poder = false;
				PoderA = false;
				PuntosVida = 2;
				CarCant = 0;
				InCantaro = 0;
			    auxCant = 0;
			if(vidas == 0){
				scene.scene.start("Final");
			}else{
			    scene.scene.start("Over");
			}
			muerte = false;
		}
	}
}

function entrar(scene){
	if(EnP == 1){
		scene.scene.start("Juego");
		CarCant = 0;
		InCantaro = 0;
	}
	if(EnP == 2){
		scene.scene.start("Juego2");
	}
}

function cargar(){
	if(CarCant == 1){
		auxCant.x = player.x;
		auxCant.y = player.y - 15;
		auxCant.setSize(35, 40, true);
		if(player.body.onFloor() || player.body.touching.down == true){
			auxCant.setVelocityY(-5);		   
		}else{
			//auxCant.setVelocityY(180);
			
			//console.log("ssdsdsd")
		}
		//auxCant.body.setAllowGravity(false);
	}
}
function estar(){
	if(player.x + 24 >= auxCant.x &&
	   auxCant.x + 15 >= player.x &&
	   auxCant.y + 15 >= player.y &&
	   player.y + 24 >= auxCant.y){
		InCantaro = 1;
	}else{
		InCantaro = 0;
	}
}

function arrojar(){
	//auxCant.x = player.x + 25;
	//auxCant.y = player.y - 25;
	auxCant.setVelocityY(-180);
    auxCant.setSize(15, 15, true);
			auxCant.name = "roto";

	if(dir == 0){
		auxCant.setVelocityX(100);
	}else{
		auxCant.setVelocityX(-100);		
	}
	//CarCant = 0;
	Caux = 0;
	//auxCant = 0;	
}

function textoT(){
	if(EnTo == 1){
		TortasT = "TORTAS!!!!!!!!!!!"
	}else{
		TortasT = "";
	}
}

function CantaroInP(){
	if(auxCant != 0){
		if(auxCant.body.onFloor() == true || auxCant.body.touching.down == true){
			auxCant.setVelocityX(0);
			if(auxCant.name == "roto"){
				auxCant.body.enable = false;
				auxCant.visible = false;
			}
		}
	}
}
