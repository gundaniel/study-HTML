// ECMAScript 6 문법
// 1. 변수를 중복 정의 할 수 있다.
var number = 10;
 
var number = "자바스크립트";
console.log(number);
console.log("----------------");

//2-1. 변수가 사용되고 나서 선언이 되었을 때

console.log(number1); 
// var로 선언한 변수는 끌어 올려진다.(호이스팅)
var number1 = 30;
console.log(number1);
console.log("----------------");

// var로 선언한 변수는 끌어 올려진다.
number2 = 40;
var number2;
console.log(number2);
console.log("----------------");

// 3. for문 초기화식에서 변수 선언
console.log(i); 
for(var i=0; i <3; i++){
    console.log("Test i = " + i);
}
i = 0; //i의 초기화 과정.
console.log("----------------");

var i;
console.log(i);
for(i=0; i <3; i++){
    console.log("Test_1 i = " + i);
}
console.log("----------------");


// 변수가 사용되고 난 후 선언이 되었을 때
console.log(num);

if(num !== 10) { 
    // var로 선언한 변수는 끌어 올려진다.
    var num = 20;
    console.log("num !== 10");
}else{
    console.log("num === 10");
}
console.log("num= " + num);
console.log("----------------");

function test(){
    var number3 = 3; 
    number4 = 4;   

    if(true){ 
        var number5 = 5; 
        number6 = 6;    
    }
    
    console.log("number5 : " + number5);
}
test(); // 함수 호출

//console.log("number3 : " + number3); 
console.log("number4 : " + number4); 


// console.log("number5 : " + number5); 
console.log("number6 : " + number6); 
console.log("----------------");

// let 선언과 동시에 초기화
let number7 = 100;
console.log(number7);
// 같은 이름으로 중복 선언이 불가능하다
// 변수 선언의 끌어올림이 발생하지 않는다.
console.log("----------------");

// const 상수 선언. 선언과 동시에 초기화해야 한다.
const number8 = 10;
console.log(number8);

// 자료형 확인
function typeTest(){
    const typeBox = document.getElementById("typeBox");
    let temp; // 선언 후 값을 초기화 하지 않음 == undefined
    typeBox.innerHTML = "temp : " + temp;

    // string
    const name = "홍길동";

    // typeof 변수명 : 해당 변수의 자료형을 검사하는 연산자
    typeBox.innerHTML += "<br />name : " + name + " / " + typeof name;

    const gender = 'M';
    typeBox.innerHTML += "<br />gender : " + gender + " / " + typeof gender;
    // 자바스크립트는 char 자료형이 존재하지 않는다!
    // "", '' 모두 string 리터럴 표기법
    typeBox.innerHTML += "<br />-------------------------------------------- "

    // number
    const age = 20;
    const height = 178.3;

    typeBox.innerHTML += "<br />age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br />height : " + height + " / " + typeof height;

    // boolean
    const isTrue = true;
    typeBox.innerHTML += "<br />isTrue : " + isTrue + " / " + typeof isTrue;
    typeBox.innerHTML += "<br />-------------------------------------------- "

    // object 타입

    // javascript ([] 사용): 배열
    const array = [10, 30, 70, 50];
    typeBox.innerHTML += "<br />array : " + array + " / " + typeof array;

    for(let i = 0; i < array.length ; i++){
        typeBox.innerHTML += "<br />array[" + i +"] : " + array[i];
    }
    typeBox.innerHTML += "<br />-------------------------------------------- "
    // 자바스크립트 객체는 K:V (Map 형식)로 작성
    const user = {
        "id" : "javauser", 
        "pwd" : "java1234", 
        "name" : "홍길동"
    };

    typeBox.innerHTML += "<br />user : " + user + " / " + typeof user;

    // 객체 내용 출력 방법 1
    typeBox.innerHTML += "<br>user.id : " + user.id;
    typeBox.innerHTML += "<br>user.pwd : " + user.pwd;
    typeBox.innerHTML += "<br>user.name : " + user.name;

    // 객체 내용 출력 방법 2 (객체 전용 for문  for ... in )
    for(let key in user){
        // user 객체의 키(id, pwd, name)를 반복할 때 마다 하나씩 얻어와 key 변수에 저장
        typeBox.innerHTML += "<br />user[" + key + "] : " + user[key];
    } 

    console.log(user); 
    typeBox.innerHTML += "<br />-------------------------------------------- "

    // function 
    // 1) 변수명 == 함수명 => 익명 함수
    const sumFn = function(n1, n2){ 
        return n1 + n2;
    }

    typeBox.innerHTML += "<br />sumFn : " + sumFn + " / " + typeof sumFn;

    // 함수명() 괄호를 포함해서 작성하는 경우 -> 함수 호출(수행)
    typeBox.innerHTML += "<br />sumFn(10, 20) : " + sumFn(10, 20);

    typeBox.innerHTML += "<br />tempFn(30, sumFn) : " + tempFn(30, sumFn);
}
function tempFn(n3, fn){ //fn = function(n1, n2){ return n1 + n2; }
    return n3 + fn(10, 20);
}