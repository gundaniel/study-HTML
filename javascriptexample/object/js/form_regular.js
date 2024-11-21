window.addEventListener("load", function () {

    document.getElementById("btn").addEventListener("click", function () {
        const div = document.querySelector("#div");
        div.innerHTML = "";

        let reg = /cat/;
        // test() 메서드는 논리값 반환. 형식: 패턴.test("문자")
        div.innerHTML += "/cat/ , cat : " + reg.test("cat") + "<hr />";
        div.innerHTML += "/cat/ , cats and dogs : " + reg.test("cats and dogs") + "<hr />";
        div.innerHTML += "/cat/ , Cat : " + reg.test("Cat") + "<hr />";
        div.innerHTML += "/cat/ , dog and cat : " + reg.test("dog and cat") + "<hr />";

        // match()메서드는 일치하는 값이 존재하지 않으면 null 반환. 
        // string에서 제공하기 때문에 형식: "문자".match(패턴)
        let str = "1 little, 2 little indian";
        let result = str.match(/\d+/g);
        div.innerHTML += "result 갯수 : " + result.length + "<hr />";
        div.innerHTML += "result : " + result[0] + " , " + result[1] + "<hr />";

        str = "one little, two little indian";
        result = str.match(/\d+/g);
        div.innerHTML += "result : " + result;

        let value = "one";
        if (value.match(/\d+/g) == null) {
            div.innerHTML += "숫자를 입력해 주셔야 합니다.<hr/>";
        }

        // exec()메서드는 일치하는 값이 존재하지 않으면 null 반환. 
        // 형식: 패턴.exec("문자") 
        reg = /Script/g;
        result = reg.exec("JavaScript Script");
        div.innerHTML += result.length + "<hr />";
        div.innerHTML += result + "<hr />";

        reg = /(Script)/g;  //괄호를 넣으면 모두 찾아줌
        result = reg.exec("JavaScript Script");
        div.innerHTML += result + "<hr />";
        div.innerHTML += result.length + "<hr />";

        reg = /Script/g;
        result = reg.exec("JavaScript");
        div.innerHTML += result + "<hr />";
        div.innerHTML += result.length + "<hr />";
    });

    document.getElementById("btn1").addEventListener("click", function () {
        const div1 = document.getElementById("div1");
        div1.innerHTML = ""; // 내용 모두 삭제

        // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는 검색
        const regExp1 = /a/;
        div1.innerHTML += "/a/ , apple : " + regExp1.test("apple") + "<hr />";
        div1.innerHTML += "/a/ , price : " + regExp1.test("price") + "<hr />";

        // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
        let regExp2 = /[abcd]/;
        div1.innerHTML += "/[abcd]/ , apple : " + regExp2.test("apple") + "<hr />";
        div1.innerHTML += "/[abcd]/ , sub : " + regExp2.test("sub") + "<hr />";
        div1.innerHTML += "/[abcd]/ , qwert : " + regExp2.test("qwert") + "<hr />";
        regExp2 = /[^abcd]/;
        div1.innerHTML += "/[^abcd]/ , html : " + regExp2.test("html") + "<hr />";

        // ^(캐럿) : 문자열의 시작을 의미
        const regExp3 = /^group/; // 문자열의 시작이 "group"인지 확인
        div1.innerHTML += "/^group/ , group100 : " + regExp3.test("group100") + "<hr />";
        div1.innerHTML += "/^group/ , 100group : " + regExp3.test("100group") + "<hr />";

        // $ : 문자열의 끝을 의미
        const regExp4 = /group$/; // 문자열의 끝이 "gorup"인지 확인
        div1.innerHTML += "/group$/ , group100 : " + regExp4.test("group100") + "<hr />";
        div1.innerHTML += "/group$/ , 100group : " + regExp4.test("100group") + "<hr />";
    });

    // 이름 유효성 검사
    document.getElementById("inputName").addEventListener("keyup", function () {
        // 결과 출력용 span 공간은 없으나 화면은잡히지 않음 
        const span = document.getElementById("inputNameResult");

        // 한글 2~5글자 정규 표현식(정규식)
        // [가-힣] : 한글(단일 자음, 모음 제외)
        const regExp = /^[가-힣]{2,5}$/;

        // 유효성 검사
        if (regExp.test(this.value)) {
            // #inputName에 작성된 값이 유효한 경우
            span.innerText = "유효한 이름 형식입니다.";
            span.style.color = "green";
            span.style.fontWeight = "bold";
        } else {
            span.innerText = "이름 형식이 유효하지 않습니다.";
            span.style.color = "red";
            span.style.fontWeight = "bold";
        }

        // 빈칸인지 검사 
        // 빈칸이라면 span에 작성된 내용 초기화(삭제)
        // (-> 이름을 쓰고 지웠을때 처음화면처럼 보여야함)
        if (this.value.length == 0) {
            span.innerText = "";
        }
    });

    // 아이디 유효성 검사

    document.getElementById("idCheck").addEventListener("click", function () {
        const let2 = document.getElementById("inputNameResult2");
        let idck = document.getElementById("mid").value;
        const idc = /^[a-zA-Z][0-9a-z-A-Z]{4,7}$/;
        if (idc.test(idck)) {
            let2.innerText = "id 형식이 유효합니다.";
        }
        else {
            let2.innerText = "id 형식이 유효하지 않습니다.";
        }
    });


    // 공백 유효성 검사
    document.getElementById("nameCheck").addEventListener("click", function () {
        if (document.getElementById('user_name').value.replace(/\s/g, "") == "") {
            /*alert("이름을 입력해 주세요.");
            document.getElementById('user_name').value = "";
            document.getElementById('user_name').focus();*/

            document.getElementById('msg').innerHTML = "이름을 입력해 주세요.";
            document.getElementById('msg').style.color = "red";
            document.getElementById('user_name').value = "";
        }
        document.getElementById('user_name').addEventListener("focus", function () {
            document.getElementById('msg').innerHTML = "";
        });
    });

    //이메일 유효성 검사
    let email = document.getElementById("email");
    let msg1 = document.getElementById("msg1");

    document.getElementById("email").addEventListener("click", function () {
        if (email.value.replace(/\s/g, "") == "") {
            msg1.innerText = "이메일을 입력해주세요";
        }
        else {
            msg1.innerText = "";
        }
    });
    msg1.style.color = "red";
    msg1.style.fontWeight = "bold";

    // 비밀번호 유효성 검사
    // (?= ... ): 특정 패턴이 포함되었는지 확인
    // .*: 임의의 문자(.)가 0개 이상(*) 존재하는 패턴. 
    // 즉, (?=.* )는 문자열에 임의의 문자가 0개 이상 포함되었는지를 확인하는 패턴이다.
    // (?=.*[A-Za-z])는 문자열에 최소 하나 이상의 영문자가 포함되었는지 확인하는 패턴이다.
    // (?=.*\d): 숫자(0-9)를 최소 하나 포함해야 함.


    document.getElementById("pwdCheck").addEventListener("click", function () {
        let pwd = document.getElementById("user_pwd").value;
        const msg = document.getElementById("message");
        const num = /^(?=.*[\w])(?=.*[@$!%*?&])[\w@$!%*?&]{6,10}$/;
        if (num.test(pwd)) {
            msg.innerText = "값이 유효합니다.";
        }
        else{
            msg.innerText = "값이 유효하지않습니다.";
        }
        msg.style.color = "red";
    })

});
