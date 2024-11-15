function accessId() {
    const div1 = document.getElementById("div1");
    //접근한 요소의 배경색 얻어오기
    const bgColor = div1.style.backgroundColor;

    if (bgColor == "red") {
        div1.style.backgroundColor = "yellow";
    }
    else {
        div1.style.backgroundColor = "red";
    }
}

function accessClass() {
    //요소를 여러개 접근하는 경우 [배열] 형태로 변환됨

    const array = document.getElementsByClassName("div2");

    //index를 이용해서 요소 하나씩 접근
    array[0].style.backgroundColor = "pink";
    array[0].innerHTML = "첫 번째 요소";

    array[1].style.backgroundColor = "tomato";
    array[1].innerHTML = "두 번째 요소";

    array[2].style.backgroundColor = "skyblue";
    array[2].innerHTML = "세 번째 요소";
}

//태그명으로 접근하기
function accessTagName() {
    //문서 내 모든 li태그 접근(배열 반환)
    const tagName = document.getElementsByTagName("li");

    for (let i = 0; i < tagName.length; i++) {
        const num = tagName[i].innerText;
        tagName[i].style.backgroundColor = `rgb(130,220, ${50 * num})`;
    }
}

//input 태그의 값(value) 얻어오기/변경하기
function inputTest() {
    const input = document.getElementById("input-test");
    console.log(input.value);
    input.value = "";
    input.focus();
}

//name으로 접근하기
function accessName() {
    const hobbyList = document.getElementsByName("hobby");
    let str = "";
    let count = 0;

    for (let i = 0; i < hobbyList.length; i++) {
        if (hobbyList[i].checked) {
            str += hobbyList[i].value + " ";
            count++;
        }
    }

    const nameDiv = document.getElementById("name-div");
    nameDiv.innerHTML = str;
    nameDiv.innerHTML += "<br /><br />선택된 개수: " + count;
}

// CSS 선택자로 접근하기
function accessCss(){
    // querySelector() : 요소 1개 선택시 사용
    //                   (여러 요소가 선택되면 첫 번째 요소만 선택)

    document.querySelector("#css-div").style.border = "3px solid red";

    document.querySelector("#css-div > div").style.fontSize = "30px";

    // querySelectorAll() : 모든 요소 선택 시 사용
    const array = document.querySelectorAll("#css-div > div");

    for(let i = 0; i < array.length ; i++){
        array[i].style.backgroundColor = "gold";
        array[i].style.margin = "5px";
    }
}

