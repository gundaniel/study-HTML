// alert 확인
function fnAlert(){
    window.alert("alert 버튼 클릭됨");

    // window는 브라우저 자체를 나타내는 객체 또는 브라우저를 제어하는 내장 객체.
    // -> JS 코드는 브라우저(window) 내부에서 실행되는 코드이다보니
    //    window를 생략할 수 있다.
}
// write 확인
function documentWrite(){
    document.write("자바스크립트<br />");
    document.write("<b>안녕하세요</b><br /><h2>반가워요</h2>");
}


// innterText 읽어오기
function getInnerText(){
    //     변수 = 읽어 들인 값; 
    const test1 = document.getElementById("test1");
    // test1 변수에 대입된 요소에서 내용을 얻어와 console에 출력
    console.log(test1.innerText);
}

// innerText로 변경하기
function setInnerText(){
    //const test1 = document.getElementById("test1");
    // test1 변수에 대입된 요소에 새로운 내용을 작성
    //  출력대상     =  출력값;
    //test1.innerText = "innerText로 <br /> 변경된 내용입니다.";
    document.getElementById("test1").innerText = "innerText로 <br /> 변경된 내용입니다.";
}

// innerHTML로 읽어오기
function getInnerHTML1(){
    const test2 = document.getElementById("test2");
    // test2 요소 내부에 내용(태그 + 속성 + 내용)을 읽어 출력
    console.log(test2.innerHTML);
}

// innerHTML로 변경하기
function setInnerHTML1(){
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<strong>innerHTML</strong>로 변경된 내용<br /> 반갑습니다.";
}


// innerHTML 예제
function print(){
// 작성해 주세요.
//document.getElementById("title").innerHTML = "hello javascript~~!!"
//document.getElementById("title").style.color = "red";
const title = document.getElementById("title"); 
title.innerHTML = "안녕하세요 김서건입니다.";
title.style.color = "red";

//css내부의 클래스 활용
//title.classaName = "box1";
}

// confirm 확인하기
function fnConfirm(){
    const confirmBtn = document.getElementById("confirmBtn");
    
    if(confirm("배경색을 오렌지색으로 바꾸시겠습니까?")){
        //confirmBtn.style.backgroundColor
        body.style.backgroundColor = "orange";
        body.style.color = "black";
    }else{
        body.style.backgroundColor = "green";
        body.style.color = "white";
    }
}

// promtp 확인하기
function fnPrompt1(){
    const name = prompt("당신의 이름은 무엇입니까?","홍길동");
    const age = prompt("당신의 나이는 몇살입니까?","30");

    console.log(name);
    console.log(age);

    const divEl = document.getElementById("area2");
    divEl.innerHTML = "<b>앗, 당신이 바로 " + age + "살 " + name + "님이군요..!</b>";
}

function fnPrompt2(){
   // 작성해 주세요
   const input = prompt("이름을 입력해주세요." , "");
   const area3 = document.getElementById("area3");
   if(input !=null && input !=""){
    area3.innerText = input + "님 환영합니다.";
   }else{
    area3.innerText = "이름을 입력하세요";
   }
}

 // 선택한input요소.value 확인하기
function fnInput(){
    //      변수 = input 요소의 값
    const input1 = document.getElementById("userId");  // 아이디 input 요소
    const input2 = document.getElementById("userPwd"); // 비밀번호 input 요소

    const id = input1.value; // 변수 = input1에 입력한 값
    const pwd = input2.value;// 변수 = input2에 입력한 값

    //const id = document.getElementById("userId").value; 
    //const pwd = document.getElementById("userPwd").value;

    const result = document.getElementById("result");

    if(id != "" && pwd != "" ){
        result.value = id + ", " + pwd; // result요소의 값으로 = 다음의 값 설정
    } else {
        result.value = "다시 확인해 주세요";
    }
    
    //id = "";          //변수의 초기화
    input1.value = "";  //input요소의 초기화
    input2.value = "";
}

function fnChange(){
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");
    let num3 = document.getElementById("number1").value;
    
    num1.value = num2.value;
    num2.value = num3;
}   
    

function namebtn(){
    document.getElementById("namePrint").innerHTML = document.getElementById("name").value;
}