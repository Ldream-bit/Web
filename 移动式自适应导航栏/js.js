let box = document.querySelector(".box");
let item = document.querySelector(".item");
let items = document.querySelectorAll(".item > div");
let f1 = false;
let fn = null;
fn = box.onclick = function(){
    if(!f1){
        if((this.offsetLeft >= 200 && window.innerWidth - this.offsetLeft + 100 >= 200)){
            this.style.width = "600px";
            this.style.color = "transparent";
            item.style.color = "black";
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "block";
            }
            item.style.flexDirection = "row";
        }else{
            this.style.height = "600px";
            this.style.color = "transparent";
            item.style.color = "black";
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "block";
                items[i].style.width = "100px";
            }
            item.style.flexDirection = "column";
        }
        f1 = true;
    }else{
        this.style.width = "100px";
        this.style.height = "100px";
        this.style.color = "black";
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }
        f1 = false;
    }
}
let x = 0,y = 0;
box.onmousedown = function(){
    this.onclick = null;
    this.style.transition = "none";
    document.onmousemove = function(){
        y = event.clientY;
        x = event.clientX;
        box.style.left = x + "px";
        box.style.top = y + "px";
    }
}
box.onmouseup = function(){
    this.style.transition = "all .5s";
    document.onmousemove = null;
    this.onclick = fn;
}