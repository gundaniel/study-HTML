document.write("<h3>배열생성</h3>");
//array 객체로 배열생성
//let myArray = new array("자바","자바스크립트","스프링");
//리터럴을 이용한 배열 생성(아래의 방법도 사용가능합니다.)
let myArray = ["자바","자바스크립트","스프링"];

//배열에 저장된 값들을 읽기 - 반복문
document.write(`<h6>${myArray[0]}</h6>`);
document.write(`<h6>${myArray[1]}</h6>`);
document.write(`<h6>${myArray[2]}</h6>`);

document.write(`<h3>빈 배열 생성</h3>`);
//빈 배열의 생성
//let myArry1 = new Array();
let myArray1 = [];
 
//반복문을 통하여 배열의 크기를 확장하고 값을 저장
for( let i = 0; i < 10; i++){
    myArray1.push(i);
}
document.write("myArray1 배열의 길이: " + myArray1.length + "<br />");

//반복문을 배열의 길이만큼 반복하도록 설정하고 값을 출력
for(let i=0; i <myArray1.length; i++){
    document.write(myArray1[i] + " ");
}
document.write("<br />");

//join([str]) 
//배열에 들어있는 값들을 모두 더해서 하나의 문자열로 만들어준다. 
//str은 배열에 있는 값들을 더할 때 구분자의 역할을 한다. 생략하면 ","가 사용된다.

document.write("<h3>join() 메서드로 출력</h3>");
document.write(`<p>${myArray1.join(" ")}</p>`);

//sort
//현재 배열에 들어있는 값들을 정렬시긴타. abc순으로 오름차순 정렬이 된다. 
document.write("<h3>sort()메서드로 출력</h3>");
let myArray2 = [10, 7, 23, 99, 169, 19, 11, 1];
myArray2.sort();
document.write("<p>" + myArray2.join(" / ") + "</p>");

let myArray3 = [10, 7, 23, 99, 169, 19, 11, 1];
myArray3.sort(function(a,b) {return a - b;});
document.write("<p>오름차순" + myArray3.join(" , ") + "</p>");

//reverse()
//배열이 들어간 순서를 반대로 바꿔주는 메소드이다. 
myArray3.reverse(function(a,b) {return a - b})
document.write("<p>내림차순" + myArray3.join(" , ") + "</p>");

//출력함수 생성 -print_array( 배열, 출력시 사용할 배열명)
function print_array(a, name){
    document.write("Size of array:" + a.length + "<br/>");
}

