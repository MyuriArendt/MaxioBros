class Mone extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);
		
		//this.setTexture('Pu').setScale(0.5, 0.5);
		this.setTexture('Pu');
        this.setPosition(x, y - 5);
		//this.anims.play('Mone');
		
		//this.physics.enable(this, Phaser.Physics.ARCADE);
		
		this.name = 'moneda';
		//this.setVelocityX(200);
		//this.body = true;
		scene.physics.world.enableBody(this);
		//this.body.gravity = 0;
		if(dir == 0){
			this.body.velocity.x = 100;
		}else{
			this.flipX = true;
			this.body.velocity.x = -100;
		}
		this.body.velocity.y = -5;
		//this.body.gravity = 0;
		//this.body.bounce.set(1);
		
    }
	
    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);	
		this.body.velocity.y = -5;
		if(this.body.x > player.x + 60 || this.body.x < player.x - 60){
			this.destroy(); 
		}
    }

}