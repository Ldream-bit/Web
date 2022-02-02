// 红包主体元素
let bonusBox = document.querySelector(".bonus_box");
// 红包关闭元素
let lidClose = document.querySelector(".lid_close");
// 纸币显示元素
let showBox = document.querySelector(".show_box");
// 纸币元素
let showMoney = document.querySelector(".show");

let f1 = false;
// 红包打开和关闭的效果
bonusBox.onclick = function(){
    // 红包打开的显示
    if(!f1){
        lidClose.style.transform = "rotateX(180deg)";
        lidClose.style.background = "#ccc";
        lidClose.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.3)";
        showMoney.style.transform = "translate(0,150px)";
        showBox.style.opacity = "1";
        f1 = true;
    // 红包关闭的显示
    }else{
        showMoney.style.transform = "translate(0,400px)";
        setTimeout(() => {
            lidClose.style.transform = "rotateX(0deg)";
            lidClose.style.background = "#D90429";
            lidClose.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.3)";
        }, 500);
        f1 = false;
    }
}