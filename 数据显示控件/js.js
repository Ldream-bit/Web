let databox = document.querySelector(".data_box");
let datas = document.querySelectorAll(".data_list > div");
let datasetbut = document.querySelector(".set");
let datainput = document.querySelectorAll(".data_editor > input");
let avgbtn = document.querySelector(".avg");
let sumbtn = document.querySelector(".sum");
let avg_show = document.querySelector(".avgshow");
for(let i = 1;i <= 20;i++){
    let line = document.createElement("div");
    line.className = "line";
    line.innerText = i * 10 + "";
    line.style.bottom = i * (25.5) + "px";
    databox.append(line);
}
for(let i = 0;i < datas.length;i++){
    datas[i].onmouseenter = function(){
        this.title = datainput[i].value;
    }
}
let f1 = false;
avgbtn.onclick = function(){
    if(!f1){
        if(parseInt(sumbtn.innerText) < 801 || parseInt(sumbtn.innerText) > 0){
            this.style.background = "#02C39A";
            this.style.color = "white";
            avg_show.style.height = parseInt(sumbtn.innerText) / 4 * 2.6 + "px";
            f1 = true;
        }
    }else{
        this.style.background = "white";
        this.style.color = "black";
        avg_show.style.height = "0px";
        f1 = false;
    }
}
datasetbut.onclick = function(){
    for(let i = 0;i < datainput.length;i++){
        if(datainput[i].value > 200 || datainput[i].value < 0 || datainput[i].value == ""){
            datainput[i].style.background = "rgba(255, 0, 0, 0.2)";
            return false;
        }else{
            datainput[i].style.background = "white";
            datas[i].style.height = datainput[i].value / 0.38 + "px";
        }
    }
    let sum = 0;
    for(let i = 0;i < datainput.length;i++){
        sum += parseInt(datainput[i].value);
    }
    sumbtn.innerText = sum + "";
    if(f1){
        avg_show.style.height = parseInt(sumbtn.innerText) / 4 * 2.6 + "px";
    }
}
avg_show.onmouseenter = function(){
    this.title = parseInt(sumbtn.innerText) / 4 + "";
}
