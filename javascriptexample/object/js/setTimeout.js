let time_id, color_id;

window.onload =function(){
    //window.setTimeout(함수, 지연시간(ms))
    //지연시간후 함수가 1회 실행
    document.getElementById("btn1").addEventListener("click",()=>{
        setTimeout(function(){alert("setTimeout()을 사용하여 표시됩니다.")} ,3000);
    });

    document.getElementById("btn2").addEventListener("click",()=>{
        start_time();
    });

    document.getElementById("btn3").addEventListener("click",()=>{
        clearTimeout(time_id);
        document.querySelector("#result").value ="";
    });
    //window.setInterval(함수, 지연시간(ms))
    //지연시간마다 실행

    document.getElementById("btn4").addEventListener("click",()=>{
        color_id = setInterval(function(){ //여러번 반복하는 함수
            let element =document.getElementById("target");
            element.style.color = (element.style.color =="red") ? "navy" : "red";
            element.style.backgroundColor = (element.style.backgroundColor == "orange") ? "yellow" : "orange";
        }, 500);
        document.getElementById("btn4").setAttribute("disabled","true");
        document.getElementById("btn5").removeAttribute("disabled");
    });

    document.getElementById("btn5").addEventListener("click",()=>{
        clearInterval(color_id);
        document.getElementById("btn4").removeAttribute("disabled");
        document.getElementById("btn5").setAttribute("disabled","disabled");
    })
};

function start_time(){
    let now = new Date();
    document.querySelector("#result").value = now.toLocaleTimeString();
    time_id = setTimeout(start_time, 1000);
}
