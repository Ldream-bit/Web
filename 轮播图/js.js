// 需要使用到的元素对象
let box = document.querySelector(".box");
let main = document.querySelector(".main");
let items = document.querySelectorAll(".main > img");
let last = document.querySelector(".last");
let next = document.querySelector(".next");

// 初始化变量
let curr = 4;

// 下一张功能
next.onclick = function(){
    curr++;
    main.style.left = -curr * 980 + "px";
    if(curr >= items.length){
        curr = 0;
        main.style.left = "0px";
    }
}

// 上一张功能
last.onclick = function(){
    curr--;
    main.style.left = -curr * 980 + "px";
    if(curr < 0){
        curr = items.length - 1;
        main.style.left = "-3920px";
    }
}

// 自动轮播图功能
let time = setInterval(function () {
    next.onclick();
}, 2000);

// 鼠标进入时
box.onmouseenter = function(){
    clearInterval(time);
};

// 鼠标离开时
box.onmouseleave = function(){
    time = setInterval(function () {
        next.onclick();
    }, 2000);
};

