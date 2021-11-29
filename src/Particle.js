function toDegrees(radians) {
    const pi = Math.PI;
    return radians * (180/pi);
}
function toRadians(degrees) {
    const pi = Math.PI;
    return degrees * (pi/180);
}

export default class Particle {
    constructor(x, y, angle, img) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.xSpeed = 1 * Math.cos(toRadians(angle));
        this.ySpeed = 1 * Math.sin(toRadians(angle));
        this.mouseX = 0;
        this.mouseY = 0;
        this.turned = false;
        this.width = window.innerWidth;
        this.height = this.width > 1280 ? window.innerHeight : document.body.scrollHeight;
        this.img = img;
        this.defaultSpeed = Math.random() * (0.5) + 0.5;
    }
    update() {
        const distance = Math.sqrt((this.x - this.mouseX) ** 2 + (this.y - this.mouseY) ** 2);
            if (this.x > this.width || this.x < 0) this.xSpeed = -this.xSpeed;
            if (this.y > this.height || this.y < 0) this.ySpeed = -this.ySpeed;
        
        
        if (distance < 100) {
            this.turn(true); 
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        } else if (this.xSpeed > 1 || this.xSpeed < -1 || this.ySpeed > 1 || this.ySpeed < -1) {
            this.slow();
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        } else {
            this.angle = toDegrees(Math.atan2(this.ySpeed, this.xSpeed));
            this.setDirection(this.angle);
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }
        
        
        
    }
    draw(ctx) {
        ctx.drawImage(this.img,0,0,2,2,this.x,this.y,2,2)
    }
    setDirection(angle, avoiding)  {
        this.angle = angle;
        if (avoiding) {
            this.xSpeed = 3 * Math.cos(toRadians(angle));
            this.ySpeed = 3 * Math.sin(toRadians(angle));
        } else {
            this.xSpeed = this.defaultSpeed * Math.cos(toRadians(angle));
            this.ySpeed = this.defaultSpeed * Math.sin(toRadians(angle));
        }
        
    }
    turn(avoiding) {
        const newAng = toDegrees(Math.atan2(this.mouseY - this.y, this.mouseX - this.x));
        this.angle = newAng - 180;
        this.setDirection(this.angle, avoiding); 
    }
    slow() {
        if (this.xSpeed > 1 || this.xSpeed < -1 || this.ySpeed > 1 || this.ySpeed < -1) {
            this.xSpeed = this.xSpeed / 1.01;
            this.ySpeed = this.ySpeed / 1.01;
        }
    }
    speed() {
        this.xSpeed += 0.05;
        this.ySpeed += 0.05;
    }
}