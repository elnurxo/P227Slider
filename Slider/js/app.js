let slides = document.querySelectorAll(".image");
let slideCount = slides.length;
let position = 0;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");


next.addEventListener("click",function(){
    if (position == slideCount -1) {
        position = 0;
    }
    else{
        position++;
    }

    UpdatePosition();
});


prev.addEventListener("click",function(){
    if (position == 0) {
        position = slideCount-1;
    }
    else{
        position--;
    }

    UpdatePosition();
});
function UpdatePosition() {
    slides.forEach(value => {
      value.classList.remove("active");
      value.classList.add("hidden");
    });

    slides[position].classList.add("active");
    slides[position].classList.remove("hidden");
}
