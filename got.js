let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("section .slide img")
    max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("select")

    currentImageIndex++

    if(currentImageIndex >= max){

        currentImageIndex = 0
    }
    
    images[currentImageIndex].classList.add("select")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)