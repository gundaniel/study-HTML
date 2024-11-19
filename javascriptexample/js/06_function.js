function clickcount() {
    //input일때 value, 아닐때 innerHTML
    const btn1 = document.getElementById("btn1");
    btn1.innerHTML = parseInt(btn1.innerHTML) + 1;
}


function add(){
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    if(isNaN(num1 || isNaN(num2))){
        alert("숫자만 입력해주셔야 합니다");

        document.getElementById("form1").reset(); //reset은 form 단위로 초기화
        return;
    }
    document.getElementById("result").value = sum(num1, num2);

    // let result = document.getElementById("result");
    // result = parseInt(num1) + parseInt(num2);
}

function sum(num1, num2){
    return num1 + num2;
}

// =======================================
// 선언적 함수
function test1(name){
    console.log(name + " 매개변수를 가진 기본 함수");
}
test1("홍길동"); 

// 익명함수
const test2 = function(){
    console.log("익명함수");
}
test2(); 

// =======================================
// 즉시 실행 함수 - 매개변수를 가지고 있지 않을 때
(function(){
    console.log("즉시 실행 함수");
}());

// 즉시 실행 함수
(function(name){
    console.log(name + " 매개변수를 가진 즉시 실행 함수");
}("홍길동"));

// * 즉시 실행 함수의 변수명 중복 해결
const str ="전역 변수의 str";

(function(){
    const str = "즉시 실행 함수내 지역변수의 str";
    console.log(str);
})();
console.log(str);

// =======================================
//document.getElementById("요소id").addEventListener("이벤트", function(){
//}); 

// 화살표 함수(Arrow Function)
// 1. 기본 형태 : ([매개변수]) => {}
document.getElementById("btn2-1").addEventListener("click", () => {
    alert("화살표 함수 기본 형태 입니다.");
});
// 2. 매개변수 1개 : 매개변수 => {}
document.getElementById("btn2-2").addEventListener("click", e => {
    console.log(e.target.id);
    e.target.style.backgroundColor = "yellow";
})
// fn = num =>  num * 5
function printConsole(fn){ // 매개변수로 함수가 전달됨
    // console.log( fn(2) );
    console.log( fn("홍길동", 20) );
}

// 3. {}, return 생략
document.getElementById("btn2-3").addEventListener("click", () => {
    // 함수 호출(익명 함수)
    printConsole( function(num){ return num * 10} );

    // 함수 호출(화살표 함수)
    //printConsole( num =>  num * 5);

    // 반환값이 Object이면 {}, return 생략 불가
    // -> 화살표(=>) 다음에 함수 정의 부분이 있어야 되는데
    //    객체(Object)가 작성되어 있어 문법 오류가 발생

    //printConsole( (name, age) =>  { "name" : name, "age" : age} ); // 문법오류
    printConsole( (name, age) => { return { "name" : name, "age" : age} } );
});

// this(이벤트가 발생한 요소) 사용 불가
// 1) 익명 함수는 this 사용 가능
// document.getElementById("btn2-4").addEventListener("click", function(){
    // this.style.backgroundColor = "pink";
// });

// 2) 화살표 함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click", (e) => {
    // 화살표 함수에서 this는 창 자체를 나타내는 객체(window)이다.
    console.log(e.target);

    //this.style.color = "white"; // 글자색 변경
    e.target.style.color = "white"; // 글자색 변경
})

// 이벤트를 줄 id , 이벤트발생방법, 함수(function 생략가능 = =>대체가능)
    document.getElementById("fontChange").addEventListener("click",function(){ //이벤트 발생하는 버튼을 가져옴
        const fontColor = document.getElementById("fontColor").value; //색상을 변경하는 이벤트를 가져옴
        document.getElementById("bicycle").style.color = fontColor; //적용해줄 id를 가져옴
    });
