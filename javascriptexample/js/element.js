function accessId(){
    const div1 = document.getElementById("div1");
    //접근한 요소의 배경색 얻어오기
    const bgColor = div1.style.backgroundColor;

    if(bgColor == "red"){
        div1.style.backgroundColor ="yellow";
    }
    else{
        div1.style.backgroundColor ="red";
    }
}
