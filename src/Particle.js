function toDegrees(radians) {
    const pi = Math.PI;
    return radians * (180/pi);
}
function toRadians(degrees) {
    const pi = Math.PI;
    return degrees * (pi/180);
}

export default class Particle {
    constructor(x, y, angle, mouseX, mouseY) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.xSpeed = 1 * Math.cos(toRadians(angle));
        this.ySpeed = 1 * Math.sin(toRadians(angle));
        this.mouseX = 0;
        this.mouseY = 0;
        this.turned = false;
    }
    update() {
        const distance = Math.sqrt((this.x - this.mouseX) ** 2 + (this.y - this.mouseY) ** 2);
        if (this.x > window.innerWidth || this.x < 0) this.xSpeed = -this.xSpeed;
        if (this.y > window.innerHeight || this.y < 0) this.ySpeed = -this.ySpeed;
        if (distance < 100) this.turn();
        
        this.angle = toDegrees(Math.atan2(this.ySpeed, this.xSpeed));
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    draw(ctx) {
        ctx.fillStyle = "white"
        ctx.beginPath();
        ctx.arc(this.x,this.y,1,0,Math.PI*2);
        ctx.fill();
    }
    setDirection(angle)  {
        this.angle = angle;
        this.xSpeed = 1 * Math.cos(toRadians(angle));
        this.ySpeed = 1 * Math.sin(toRadians(angle));
    }
    turn(rand) {
        
        const newAng = toDegrees(Math.atan2(this.mouseY - this.y, this.mouseX - this.x));
        this.angle = -newAng;
        this.setDirection(this.angle); 
        console.log(Math.atan2(this.x - this.mouseX, this.y - this.mouseY))
    }
    slow() {
        this.xSpeed = this.xSpeed / 1.01;
        this.ySpeed = this.ySpeed / 1.01;
    }
    speed() {
        this.xSpeed += 0.05;
        this.ySpeed += 0.05;
    }
}