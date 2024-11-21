window.onload = function () {

    let title1 = document.getElementById("title");
    // let span = document.querySelectorAll(".message");
    // let span2 = document.getElementsByClassName("message")[1];
    // let span3 = document.getElementsByClassName("message")[2];

    document.getElementById("title").addEventListener("focusout", function () {
        for (let i = 0; i < 3; i++) {
            if (title1.value == "") {
                document.getElementsByClassName("message")[i].innerText = "반드시 명시되어야 합니다";
                document.getElementsByClassName("message")[i].style.color = "red";
                document.getElementsByClassName("message")[i].style.fontWeight = "bold";
            }
        };
    });
    document.getElementById("title").addEventListener("focus", function () {
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName("message")[i].innerText = "";

        }
    })

    document.querySelectorAll("inputData").forEach(function (input) {
        //포커스를 읽을 때의 이벤트 리스너를 추가
        input.addEventListener("focusout", function () {
            //입력된 값에서 모든 공백을 제거한 후 값이 비어있는지 확인=
            if (input.value.replace(/\s/g, "") === "") {
                // 다음 형제 요소의 내용을 설정.
                input.nextElementSibling.innerHTML = "반드시 입력되어야 합니다.";
                // input.previousElementSibling.innerHTML = "반드시 입력되어야 합니다.";
                return;
            }

            //포커스를 주어졌을 때의 이벤트 리스너를 추가.
            input.addEventListener("focusin", function () {
                //다음 형제 요소의 내용을 지운다.
                input.nextElementSibling.innerHTML = "";
            });

        })
    })





}