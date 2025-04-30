'use strict';

document.addEventListener('DOMContentLoaded', () => {
let image = [];
let currentIndex = 0;
let autoPlayInterval;

//constants//
const carouselImage = document.getElementById('carouselImage')
const carouselContainer = document.querySelector('.carousel')
//get the background from CSS//
const background = document.getElementById('.caraouselImage')
//colors//
const colors = [



]



//fetch images from json//
fetch ('./xoxo.json')
.then(response => {
 if (!response.ok) throw new Error ("Network erro");
return response.json();
})
.then(data => {
    if (!data.image) throw new Error ("Inavalid JSON format")
        image = data.image
    if (image.length > 0){
        carouselImage.src = image[currentIndex].url;
        startAutoPlay();
    }
})
    .catch(error => console.error('Error:',error));

//auto play functionality//
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % image.length;
        updateImage();
    },5000);
}

//function the stop autopaly//
function stopautoplay() { 
    clearInterval(autoPlayInterval);
}
function updateImage () {
    carouselImage.classList.add('fade-out');
    setTimeout(() => {
      carouselImage.src = image[currentIndex].url;
      carouselImage.alt = 'Image ${currentIndex +1}';
      carouselImage.classList.remove('fade-out');
    }, 5000);
}
});

// TEMPORARY DISAPLED //
/*setTimeout(() => {
document.querySelector('.container').style.background = 'purple'
},3000)*/

