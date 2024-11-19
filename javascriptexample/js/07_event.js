//인라인 이벤트모델 확인하기
function test1(button){
    button.style.backgroundColor="pink";
    button.style.color = "white";
}

function changeBg(color){
const result = document.querySelector('#result');
result.style.backgroundColor = color;
}


let cnt = 0; //전역변수
function ImageChange(){
    if(cnt == 0){
    document.getElementById("quiz").src= "../images/dips.png";
        cnt = 1;
    }
    else{
        document.getElementById("quiz").src = "../images/down.png"
        cnt = 0;
    }
}

// 고전 이벤트 모델 확인하기

/*** 주의사항 **
고전/표준 이벤트 모델은 랜더링된 HTML 요소에 이벤트 관련된 동작을 부여하는 코드
-> 랜더링이 되지 않은 요소에는 이벤트 관련 동작을 추가할 수 없다!!
   (문제 원인 : HTML 코드 해석 순서 (위 -> 아래) )
-> 해결 방법 : HTML 요소가 먼저 랜더링된 후 JS코드 수행. </body> 전에 명시. 
              window.onload()로 작성 시 <head> 태그에 명시가능. 
*/ 


//방법1 : 요소를 변수로 지정 &미리 만든 함수 사용
let btn=document.querySelector("#btn1");
btn.onclick  = changeColor;

function changeColor(){
    document.querySelector("p").style.color = "#f00";
}
//2. 요소를 따로 변수로 만들지 않고 사용 (여러 버튼을 쓸때)
// document.querySelector("btn1").onclick = changeColor;
// function changeColor(){
    // document.querySelector("p").style.color = "#f00";
// }

//3. 직접함수를 선언
// document.querySelector("#btn1").onclick = function(){
    // document.getElementById("btn1").style.color = "#f00";
// };

document.getElementById("test2-1").onclick = function(){
    alert("고전 이벤트모델로 출력된 대화상자 ");
};

//이벤트 제거
document.getElementById("test2-2").onclick = function(){
    document.getElementById("test2-1").onclick = null;
    alert("test2-1의 이벤트를 제거하였습니다");
}

document.getElementById("test2-3").onclick =function(e){
    //버튼 색바꾸기
    // 방법1) 요소를 문자에서 찾아서 선택
    document.getElementById("test2-3").style.backgroundColor = "pink";

    // 방법2) 매개변수 e 또는 event 활용하기
    //-> 이벤트 핸들러에 e 또는 event를 작성하는 경우
    //  해당 이벤트와 관련된 모든 정보가 담긴 이벤트 객체가 반환된다.
    // console.log(e);
}

//event.target : 이벤트가 발생한 요소
//e.target.style.backgroundColor = "pink";


//표준이벤트 모델

/*
요소.addEventListner("click", function(){})
요소.addEventListner("click", () => {})
                     이벤트        핸들러 */


document.getElementById("test3").addEventListener("click",function(){
console.log(this.clientWidth);
this.style.width = (this.clientWidth + 20) + "px";
});

document.getElementById("test3").addEventListener("click",function(){
    this.style.height  = (this.clientHeight + 20) + "px";
});

/*복습문제
document.getElementById("changeBtn1").addEventListener("click", function(){

    const div1 = document.getElementById("div1");
    const input1 = document.getElementById("input1");

    //input1에 작성된 값 얻어오기
    const bgColor =input1.value;

    //div1 배경색 변경
    div1.style.backgroundColor = bgColor;
}); */


//intput1에 값이 변경되었을때 입력된 값으로 배경색 변경
document.getElementById("input1").addEventListener("change",function(){
    console.log("change이벤트 발생!");
    const div1= document.getElementById("div1");

    //input1에 작성된 값 얻어오기
    const bgColor = this.value;

    //div1 배경색 변경
    div1.style.backgroundColor = bgColor;
    //this.value = " ";
})

document.getElementById("button1").addEventListener("click",function(){
const printData = document.getElementById("printData");
const word = document.getElementById("word");
if(word.value != ""){
printData.append(word.value+"\n");
word.value= "";
}
});

//글자수가 6글자가 되면 뒤로 넘어가게 만들기
document.getElementById("jumin1").addEventListener("keyup",function(){
    const jumin1 = document.getElementById("jumin1").value;
    if(jumin1.length == 6){
        document.getElementById("jumin2").focus();
    }
})

//a태그 기본이벤트 제거
document.getElementById("goNaver").addEventListener("click",function(e){
//매개변수 e 또는 event ==이벤트발생 객체(관련정보가 담긴 객체)

e.preventDefault(); //HTML의 기본 이벤트 제거

//Default :기본/기본값
//prevent: 막다, 방지하다
alert("네이버 이동이 되지 않습니다.");
});