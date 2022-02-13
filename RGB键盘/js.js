//需要使用到的元素
let Box = document.querySelector(".box");
let colorItems = document.querySelectorAll(".RGB > div");

// 按键
let keyValue = [
    "ESC","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","PrtSc","ScrLk","Pause","`~","1!","2@","3#","4$","5%","6%","7%","8*","9(",
    "0)","-_","=+","<——","Ins","Home","PgUp","Tab","Q","W","E","R","T","Y","U","I","O","P","[{","}]","\\|","Del","End","PgDn","CapsLock","A","S",
    "D","F","G","H","J","K","L",";:","\'\"","Enter","LShift","Z","X","C","V","B","N","M",",<",".>","/?","RShift","↑","LCtrl","Win","LAlt","Space","RAlt",
    "Fn","✉","RCtrl","←","↓","→"
]

// 按键的添加
for (let i = 0; i < keyValue.length; i++) {
    let items = document.createElement("div");
    Box.append(items);
    items.innerText = keyValue[i];
    items.className = keyValue[i];
}

// RGB灯光效果
for (let i = 0; i < colorItems.length; i++) {
    colorItems[i].onclick = function(){
        Box.style.color = this.className + "";
        Box.style.textShadow = "0 0 10px "+ this.className;
    }
}