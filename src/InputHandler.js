export default class Input {
    constructor(particle) {
        document.addEventListener("mousemove", (e) => {
            particle.mouseX = e.clientX;
            particle.mouseY = e.clientY;
        })
    }
}