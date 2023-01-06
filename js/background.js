const images = ["1.jpeg","2.jpeg","3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];


function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(img/${chosenImage})`
}

document.body.addEventListener("DOMContentLoaded",changeBackgroundImage());