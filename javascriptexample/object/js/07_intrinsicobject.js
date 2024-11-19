window.onload = function(){
    // 문자열 관련 함수
    document.getElementById("btn1").addEventListener("click", function(){

        // 문자열.indexOf("str") :
        // 문자열에서 "str"과 일치하는 부분이 시작되는 인덱스를 반환
        // 없으면 -1 반환
        const str1 = "Hello World";

        console.log(str1.indexOf("e")); // 1
        console.log(str1.indexOf("l")); // 2 (가장 먼저 검색된 인덱스 반환)
        console.log(str1.indexOf("가")); // -1
        console.log(str1.lastIndexOf("l")); // 9

        // 문자열.substring(시작인덱스, 종료인덱스(미포함)) : 문자열 일부 잘라내기
        // - 시작 이상 종료 미만(시작인덱스로부터 종료인덱스전까지 추출)
        const str2 = "abcdefg";

        console.log(str2.substring(0, 3)); // abc
        console.log(str2.substring(2, 6)); // cdef

        const urlData = "http://www.hanbit.co.kr/book/bookmain.html";
        console.log("urlData 변수 선언 초기값: " + urlData); 

        // 파일명 얻기(urlData에서 파일명만 출력되도록 코딩해 주세요)
        let value1 = urlData.lastIndexOf("/");
        console.log(value1);
        let value2 = urlData.lastIndexOf(".");
        console.log(value2);
        let file = urlData.substring(value1+1, value2);
        console.log("파일명: "+ file );

        // 확장자 얻기(urlData에서 확장자만 출력되도록 코딩해 주세요)
        //console.log("확장자: "); 
        let fileName = urlData.lastIndexOf(".");
        let ext = urlData.substring(fileName + 1);
        console.log("확장자: " + ext ); 

        // 문자열 대체 
        const data = "Hong's number is 123-4567.";
        console.log("데이터 원본 : " + data); 
        // Hong's -> Kim's 대체
        //console.log("데이터 대체: "); 
        let result1 = data.replace("Hong's", "Kim's");
        console.log("데이터 대체: " + result1 ); 

        // 구분자로 분리하여 배열로 반한한다.
        // 문자열.split("구분자") : 문자열을 "구분자"로 잘라서 배열로 반환
        const result = "One,Two,Three,Four,Five";
        console.log("데이터 원본 : " + result ); 
        let array = result.split(',');
        for (let i = 0; i < array.length; i++) {
            console.log(i + '-' + array[i]);
        }
    });

     // 숫자 관련 함수 및 Math 객체의 메서드 확인 부분 코딩해 주시면 됩니다.

    // 형변환 확인 부분 코딩해 주시면 됩니다.
};
 // 숫자 관련 함수 및 Math 객체의 메서드 확인
 document.getElementById("btn2").addEventListener("click", function(){
    // Infinity 리터럴 확인
    console.log( 5 / 0 );

    if( 5/0 == Infinity){
        console.log("무한입니다.");
    }

    // NaN 리터럴 확인
    console.log( "aaa" * 100 );
    // "aaa" * 100 == NaN   (X)

    // isNaN(값) 함수 : 값이 NaN(Not a Number)이면 true, 아니면 false
    if( isNaN("aaa" * 100) ){
        console.log("숫자가 아닙니다.");
    }

    // Math.random() : 0이상 1미만의 난수 발생 ( 0<= random < 1)
    // this.innerText = Math.random();

    // 소수점 관련 함수
    // round(), ceil(), floor(), trunc()
    // 반올림    올림    내림      버림(절삭)
    // -> 소수점 자리를 지정할 수 없다
    console.log( Math.round(10.7) ); // 11 
    console.log( Math.ceil(10.1) );  // 11

    console.log( Math.floor(10.9) ); // 10
    console.log( Math.trunc(12.9) ); // 12

   // trunc() 숫자의 정수부분만 필요한 경우.
   // floor() 주어진 숫자보다 작으면서 가장 큰 정수가 필요한 경우
    console.log( Math.floor(-3.1) ); // -4
    console.log( Math.trunc(-3.1) ); // -3

    // 현재 버튼 배경색 랜덤으로 바꾸기 rgb(0~255, 0~255, 0~255)함수
    const r = Math.floor(Math.random() * 256); // 0 ~ 255
    const g = Math.floor(Math.random() * 256); // 0 ~ 255
    const b = Math.floor(Math.random() * 256); // 0 ~ 255
    console.log(r + ", " + g + ", " + b);

    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    // 숫자.toFixed(자릿수) : 지정된 자릿수 까지 반올림해서 표현
    console.log( (3.45).toFixed(1) );
});

// 형변환 확인
document.getElementById("btn3").addEventListener("click", function(){
    console.log(parseInt("1.234"), typeof(parseInt("1.234")));
    console.log(parseFloat("1.234"), typeof(parseFloat("1.234")));
    console.log(Number("100"), typeof(Number("100")));
});