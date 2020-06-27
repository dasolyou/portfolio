// 상수 정의
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const box = document.querySelector('.box');
const slide = Array.from(document.querySelectorAll('.slide'));
const pagination = document.querySelector('.pagination');
const dot = Array.from(document.querySelectorAll('.dot'));

// showing class를 이용하여 사진 변경
const moveSlide = (currentSlide, targetSlide, oppasiteSlide) => {
    if(currentSlide){ // 현재 사진 class 제거
        currentSlide.classList.remove('showing');
        if(targetSlide){ // 타겟 사진(next 또는 prev) class 추가
            targetSlide.classList.add('showing');
        } else { // next 또는 prev가 없는 경우, first 또는 last에 class 추가
            oppasiteSlide.classList.add('showing'); 
        }
    }
}

// showing class를 이용하여 dot 변경
const moveDot = (currentDot, targetDot, oppasiteDot) => {
    if(currentDot){ // 현재 dot의 class 제거
        currentDot.classList.remove('showing');
        if(targetDot){ // 타겟 dot (next 또는 prev) class 추가
            targetDot.classList.add('showing');
        } else { // next 또는 prev가 없는 경우, first 또는 last에 class 추가
            oppasiteDot.classList.add('showing');
        }
    }
}

// next 사진, dot을 보여주는 함수
const moveToNext = () => {
    var currentSlide = document.querySelector('.box .showing');
    var nextSlide = currentSlide.nextElementSibling;
    var firstSlide = document.querySelector('.slide:first-child');
    var currentDot = document.querySelector('.dot_wrap .showing');
    var nextDot = currentDot.nextElementSibling;
    var firstDot = document.querySelector('.dot:first-child');

    moveSlide(currentSlide, nextSlide, firstSlide);
    moveDot(currentDot, nextDot, firstDot);
}

// prev 사진, dot을 보여주는 함수
const moveToPrev = () => {
    var currentSlide = document.querySelector('.box .showing');
    var prevSlide = currentSlide.previousElementSibling;
    var lastSlide = document.querySelector('.slide:last-child');
    var currentDot = document.querySelector('.dot_wrap .showing');
    var prevDot = currentDot.previousElementSibling;
    var lastDot = document.querySelector('.dot:last-child');

    moveSlide(currentSlide, prevSlide, lastSlide);
    moveDot(currentDot, prevDot, lastDot);
}

// pagination을 클릭했을 때, 클릭된 사진, dot 변경하는 함수
const clickPagination = (event) => {
    var clickedDot = event.target.closest('.dot');
    if(!clickedDot) return;

    var currentSlide = document.querySelector('.box .showing');
    var currentDot = document.querySelector('.dot_wrap .showing');
    var clickedDotIndex = dot.findIndex(ele => ele === clickedDot);
    var clickedSlide = slide[clickedDotIndex]
    var lastSlide = document.querySelector('.slide:last-child');
    var lastDot = document.querySelector('.dot:last-child');

    moveSlide(currentSlide, clickedSlide, lastSlide);
    moveDot(currentDot, clickedDot, lastDot);
}

const carouselInit = () => {
    nextBtn.addEventListener('click', moveToNext);
    prevBtn.addEventListener('click', moveToPrev);
    pagination.addEventListener('click', clickPagination);
}
carouselInit();

// setInterval(moveToNext, 2000)