// 需要使用到的元素对象
let timeshow = document.querySelector(".time");
let evn1 = document.querySelector(".evn1");
let evn2 = document.querySelector(".evn2");
let ringOBJ = document.querySelector("audio");
let ringBTN = document.querySelector(".ringbtn");
let ringADD = document.querySelector(".add");

// 初始化网页
window.onload = function(){
    TimeShow();
    Preview();
    Ring();
}

// 数据初始化
let time1 = null;
let time2 = null;
let time3 = null;
let time4 = null;
let i = 0;

/**
 * 时间的显示
 * 图标样式随着时间的变化而变化
 */
function TimeShow(){
    time2 = null;
    time3 = null;
    time1 = setInterval(() => {
        let date = new Date();
        let h = date.getHours() + "";
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes() + "";
        m = m < 10 ? "0" + m : m;
        timeshow.innerHTML = `${h}∶${m}`;
        if(h >= 18 && h <= 7){
            evn2.style.opacity = "1";
            evn2.style.transform = "scale(1)";
            evn1.style.opacity = "0.4";
            evn1.style.transform = "scale(0.5)";
            document.body.style.background = "rgba(0, 0, 0, 0.7)";
        }else{
            evn1.style.opacity = "1";
            evn1.style.transform = "scale(1)";
            evn2.style.opacity = "0.4";
            evn2.style.transform = "scale(0.5)";
            document.body.style.background = "rgba(0, 0, 0, 0.1)";
        }
    }, 1000);
}

/**
 * 黑天和白天的样式预览
 * 进行2秒的预览
 */
function Preview(){
    evn1.onclick = function(){
        clearInterval(time1);
        evn1.style.opacity = "1";
        evn1.style.transform = "scale(1)";
        evn2.style.opacity = "0.4";
        evn2.style.transform = "scale(0.5)";
        document.body.style.background = "rgba(0, 0, 0, 0.1)";
        time2 = setTimeout(() => {
            TimeShow();
        }, 2000);
    }
    evn2.onclick = function(){
        clearInterval(time1);
        evn2.style.opacity = "1";
        evn2.style.transform = "scale(1)";
        evn1.style.opacity = "0.4";
        evn1.style.transform = "scale(0.5)";
        document.body.style.background = "rgba(0, 0, 0, 0.7)";
        time3 = setTimeout(() => {
            TimeShow();
        }, 2000);
    }
}

/**
 * 定时闹钟
 */ 
function Ring(){
    ringBTN.onclick = function(){
        clearInterval(time1);
        timeshow.innerText = "00∶00";
        ringADD.onclick = function(){
            i++;
            i = i < 10 ? "0" + i : i;
            if(i >= 60){
                i = 60;
            }
            timeshow.innerText = `00∶${i}`;
            ringBTN.onclick = function(){
                TimeShow();
                time4 = setTimeout(() => {
                    ringOBJ.play();
                }, i * 1000);
                time4 = null;
            }
        }
    }
}