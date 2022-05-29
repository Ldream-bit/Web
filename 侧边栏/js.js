// 需要使用到的元素对象
let box = document.querySelector(".box");
let appitems = document.querySelectorAll(".APP_box > div");
let inner = document.querySelector(".inner_box");

// 初始化变量
let last = 0;
let inner_list = ["我是个人区域","我是购物区域","我是消息区域","我是设置区域"];
// 侧边栏鼠标移入移出事件
box.onmouseenter = function(){
    this.style.right = "0px";
}
box.onmouseleave = function(){
    this.style.right = "-350px";
}

// 工具应用点击切换事件
for (let i = 0; i < appitems.length; i++) {
    appitems[i].onclick = function(){
        appitems[last].style.color = "rgba(0, 0, 0, 0.5)";
        this.style.color = "deeppink";
        inner.innerText = inner_list[i];
        last = i;
    }
}

