// 탭메뉴
const tabBtn1 = document.querySelectorAll('.js1 .btn');
const tabCont1 = document.querySelectorAll('.js1 .des');
const tabBtn2 = document.querySelectorAll('.js2 .btn');
const tabCont2 = document.querySelectorAll('.js2 .des');
const tabBtn3 = document.querySelectorAll('.js3 .btn');
const tabCont3 = document.querySelectorAll('.js3 .des');
const tabBtn4 = document.querySelectorAll('.js4 .btn');
const tabCont4 = document.querySelectorAll('.js4 .des');

function click1(e) {
    e.preventDefault();
    var target = e.currentTarget;
    var language = target.dataset.lan_1;
    tabCont1.forEach(function(e) {
        e.classList.remove("active");
    });
    
    tabBtn1.forEach(function(e) {
        e.classList.remove("active");
    });
    
    document.querySelector("#" + language).classList.add("active");
    target.classList.add("active");
}

function click2(e) {
    e.preventDefault();
    var target = e.currentTarget;
    var language = target.dataset.lan_2;
    tabCont2.forEach(function(e) {
        e.classList.remove("active");
    });
    
    tabBtn2.forEach(function(e) {
        e.classList.remove("active");
    });
    
    document.querySelector("#" + language).classList.add("active");
    target.classList.add("active");
}

function click3(e) {
    e.preventDefault();
    var target = e.currentTarget;
    var language = target.dataset.lan_3;
    tabCont3.forEach(function(e) {
        e.classList.remove("active");
    });
    
    tabBtn3.forEach(function(e) {
        e.classList.remove("active");
    });
    
    document.querySelector("#" + language).classList.add("active");
    target.classList.add("active");
}
function click4(e) {
    e.preventDefault();
    var target = e.currentTarget;
    var language = target.dataset.lan_4;
    tabCont4.forEach(function(e) {
        e.classList.remove("active");
    });
    
    tabBtn4.forEach(function(e) {
        e.classList.remove("active");
    });
    
    document.querySelector("#" + language).classList.add("active");
    target.classList.add("active");
}

tabBtn1.forEach(function(e) {
    e.addEventListener("click", click1);
});
tabBtn2.forEach(function(e) {
    e.addEventListener("click", click2);
});
tabBtn3.forEach(function(e) {
    e.addEventListener("click", click3);
});
tabBtn4.forEach(function(e) {
    e.addEventListener("click", click4);
});
