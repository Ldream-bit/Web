// 需要使用到的元素对象
let log = document.querySelector(".l1");
let reg = document.querySelector(".l2");
let log_box = document.querySelector(".login");
let reg_box = document.querySelector(".register");
let name_txt = document.querySelector(".name > input");
let pas_txt = document.querySelector(".pas > input");

// 登录按钮的点击
log.onclick = function(){
    this.style.textShadow = "0 0 10px white";
    this.style.color = "white";
    reg.style.color = "rgba(255, 255, 255, 0.3)";
    reg.style.textShadow = "none";
    log_box.style.right = "0";
    reg_box.style.right = "-400px";
    name_txt.value = "";
    pas_txt.value = "";
}

// 注册按钮的点击
reg.onclick = function(){
    this.style.textShadow = "0 0 10px white";
    this.style.color = "white";
    log.style.color = "rgba(255, 255, 255, 0.3)";
    log.style.textShadow = "none";
    reg_box.style.right = "0";
    log_box.style.right = "-400px";
    name_txt.value = "";
    pas_txt.value = "";
}