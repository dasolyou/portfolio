// 상수 정의
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const box = document.querySelector('.box');
const slide = Array.from(document.querySelectorAll('.box .slide'));
const pagination = document.querySelector('.pagination');
const dot = Array.from(document.querySelectorAll('.dot_Wrap .dot'));

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
    let currentSlide = document.querySelector('.box .showing');
    let nextSlide = currentSlide.nextElementSibling;
    let firstSlide = document.querySelector('.slide:first-child');
    let currentDot = document.querySelector('.dot_wrap .showing');
    let nextDot = currentDot.nextElementSibling;
    let firstDot = document.querySelector('.dot:first-child');

    moveSlide(currentSlide, nextSlide, firstSlide);
    moveDot(currentDot, nextDot, firstDot);
}

// prev 사진, dot을 보여주는 함수
const moveToPrev = () => {
    let currentSlide = document.querySelector('.box .showing');
    let prevSlide = currentSlide.previousElementSibling;
    let lastSlide = document.querySelector('.slide:last-child');
    let currentDot = document.querySelector('.dot_wrap .showing');
    let prevDot = currentDot.previousElementSibling;
    let lastDot = document.querySelector('.dot:last-child');

    moveSlide(currentSlide, prevSlide, lastSlide);
    moveDot(currentDot, prevDot, lastDot);
}

// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const box = document.querySelector('.box');
// const slide = Array.from(document.querySelectorAll('.slide'));
// const pagination = document.querySelector('.pagination');
// const dot = Array.from(document.querySelectorAll('.dot'));

// pagination을 클릭했을 때, 클릭된 사진, dot 변경하는 함수
// const clickPagination = (event) => {
//     // const dotObj = Object.assign({}, dot);
//     let clickedDot = event.target.closest('.dot');
//     if(!clickedDot) return;

//     let currentSlide = document.querySelector('.box .showing');
//     let currentDot = document.querySelector('.dot_wrap .showing');
//     let clickedDotIndex = dot.indexOf(clickedDot);
//     let clickedSlide = slide[clickedDotIndex];
//     console.log(clickedSlide);
//     let lastSlide = document.querySelector('.slide:last-child');
//     let lastDot = document.querySelector('.dot:last-child');
    
//     moveSlide(currentSlide, clickedSlide, lastSlide);
//     moveDot(currentDot, clickedDot, lastDot);
// }

// const clickPagination = () => {
//     let currentSlide = document.querySelector('.box .showing');
//     let currentDot = document.querySelector('.dot_wrap .showing');
//     let lastSlide = document.querySelector('.slide:last-child');
//     let lastDot = document.querySelector('.dot:last-child');

//     for (let i = 0, len = dot.length; i < len; i++){
//         let clickedDot = dot[i].onclick;
//         let clickedDotIndex = dot.indexOf(clickedDot);
//         let clickedSlide = slide[clickedDotIndex];

//         moveSlide(currentSlide, clickedSlide, lastSlide);
//         moveDot(currentDot, clickedDot, lastDot);
//     }
// }


for (let i = 0, len = dot.length; i < len; i++){
    let clickedDot = dot[i].onclick
    clickedDot = clickPagination = () => {
        let currentSlide = document.querySelector('.box .showing');
        let currentDot = document.querySelector('.dot_wrap .showing');
        let clickedDotIndex = dot.indexOf(this);
        let clickedSlide = slide[clickedDotIndex];
        let lastSlide = document.querySelector('.slide:last-child');
        let lastDot = document.querySelector('.dot:last-child');

        moveSlide(currentSlide, clickedSlide, lastSlide);
        moveDot(currentDot, clickedDot, lastDot);
    }   
}

const carouselInit = () => {
    nextBtn.addEventListener('click', moveToNext);
    prevBtn.addEventListener('click', moveToPrev);
    // pagination.addEventListener('click', clickPagination);
}
carouselInit();