


/*
let sayHello = {
    "name" : "javascript",
    "eng" : function(){
        let console =document.getElementById("console");
        console.innerHTML = "Hello" + this.name;
        console.style.color = "#ff0000";
    },
    "kor" : function(){
        let console = document.getElementById("console");
        console.innerHTML = "안녕하세요" + this.name;
        console.style.color = "#ff0000";
    }
};*/



window.onload = function() {
    let user = {
        name:"javauser",
        email:"javauser@naver.com",
        phone:"02-506-3536"
    };
    
    // stringify() : JSON 객체를 string으로 변환해 준다
    let userString = JSON.stringify(user);
    console.log(typeof userString);
    document.getElementById("string").innerHTML = userString;

    let userJson = "";
    console.log(typeof JSON.parse(userString));

    // parse() : String 객체를 JSON으로 변환해 준다
    JSON.parse(userString, function(key, value){
        if(key != ""){
            userJson += key+" : "+value +"<br />"; 
        }
    });
    document.getElementById("json").innerHTML = userJson;
};


