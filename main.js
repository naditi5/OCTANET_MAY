const imgContainer = document.querySelector('.img-container')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const imgs = document.querySelectorAll('.img-container img')

let currentSlide = 0

function changeImage() {
    imgContainer.style.transform = `translateX(-${
        currentSlide * imgContainer.offsetWidth
    }px)`
}

btnLeft.addEventListener('click', function() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = imgs.length - 1;
    }
    changeImage();
});


btnRight.addEventListener('click', function() {
    currentSlide++;
    if (currentSlide >= imgs.length) {
        currentSlide = 0;
    }
    changeImage();
});

