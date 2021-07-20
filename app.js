// const pictures = [
//   "image-0",
//   "image-1",
//   "image-2",
//   "image-3",
   
// ];


// const buttons = document.querySelectorAll(".button")
// const image = document.querySelector(".image-container")
// let counter = 0


// function clickevent(){
//   buttons.forEach(button){
//       button.addEventListener('click',function(){
//           if(button.classList.contains(".button-left")){
//               counter --
//               if(counter < 0){
//                   counter = pictures.length - 1
//               }
//               image.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
//           }
//           if(button.classList.contains(".button-right")){
//               counter++
//               if(counter > pictures.length -1){
//               counter = 0
//           }
//           image.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
//       })
//   }}


let slidesIndex = 1;  
        displaySlides(slidesIndex);  

        
  
        function nextSlide(next) {  
            displaySlides(slidesIndex += next);  
        }  
  
        function currentSlide(next) {  
            displaySlides(slidesIndex = next);  
        }  
  
        function displaySlides(next) {  
            let i;  
            let slides = document.getElementsByClassName("slides");  
            if (next > slides.length) { slidesIndex = 1 }  
            if (next < 1) { slidesIndex = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slidesIndex - 1].style.display = "block";  
        }