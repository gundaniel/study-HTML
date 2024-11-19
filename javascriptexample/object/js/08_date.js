window.onload = function(){
    const div = document.getElementById("area");

    //Date 객체의 생성
    let myDate = new Date();

    //년,월,일 시간, 분, 초 를 리턴받기
    let yy = myDate.getFullYear(); // 년도
    let mm = myDate.getMonth() +1; // 월 (index 0부터 시작하므로 뒤에 +1)
    let dd = myDate.getDate(); //일

    //요일의 이름을 저장하고 있는 배열의 생성
    let days = ["일", "월", "화", "수", "목", "금", "토"]
    let i = myDate.getDay();
    let day = days[i];

    let hh = myDate.getHours();
    let mi = myDate.getMinutes();
    let ss = myDate.getSeconds();
   
    //let result = yy + "-" + mm + "-" + dd + " " + day + "요일 " + hh + ":" + mi + ":" + ss;
    let result = "오늘은 " + yy +"년 " + mm +"월 " + dd +"일 " + day +"요일 입니다.<br />";
    result += "현재 시간은 " + hh + "시 " + mi +"분 " +ss +"초 입니다." 
    div.innerHTML = "<h1>현재 날짜와 시간 출력</h1>";
    div.innerHTML += "<h3>" + result + "</h3>";
    
    div.innerHTML += "<h1>toXXXString() 메서드 예제</h1>";
    // toLocaleDateString() 함수는 "년 월 일"를 문자열로 반환하는 함수 
    div.innerHTML += "<h3>" + myDate.toLocaleDateString() + "</h3>";
    // toLocaleTimeString() 함수는 "오전/오후 시:분:초"를 문자열로 반환하는 함수 
    div.innerHTML += "<h3>" + myDate.toLocaleTimeString() +"</h3>";
    // toLocaleString() 함수는 "년월일 오전/오후 시:분:초"를 문자열로 반환하는 함수 
    div.innerHTML += "<h3>" +myDate.toLocaleString()+ "</h3>";

    document.querySelector("#btn").addEventListener("click", ()=>{
       startTime();
    });
};

function startTime(){
    let now = new Date();
    let result = now.toLocaleString();
    document.getElementById("timeArea").innerHTML = result;
    window.setTimeout(startTime, 1000) //setTimeout("호출함수", 지연시간(1/000))
    //1초간격으로 값을 출력
}