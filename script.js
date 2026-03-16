let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openLightbox(img){
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=img.src;

images.forEach((image,index)=>{
if(image.src === img.src){
currentIndex=index;
}
});
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function nextImage(){
currentIndex++;
if(currentIndex >= images.length){
currentIndex = 0;
}
document.getElementById("lightbox-img").src=images[currentIndex].src;
}

function prevImage(){
currentIndex--;
if(currentIndex < 0){
currentIndex = images.length-1;
}
document.getElementById("lightbox-img").src=images[currentIndex].src;
}