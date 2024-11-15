function result(){
const kor = parseInt(document.getElementById("kor").value);
const eng = parseInt(document.getElementById("eng").value);
const mat = parseInt(document.getElementById("math").value);

let sum = kor + eng + mat;
let avg = sum / 3;
document.getElementById("sum").value =sum;
document.getElementById("avg").value =avg.toFixed(1);
}



const computerNumber = Math.floor((Math.random() * 10) + 1); // 전역변수
//console.log(computerNumber);
let nGuesses = 0;		// 추측 횟수

let res = document.getElementById("result");
let use = document.getElementById("user"); //재정의 

function guess() {
    if(use.value == computerNumber){
        document.getElementById("result").value = "yes";
    }
    else if(use.value > computerNumber){
        document.getElementById("result").value = "down"; 
    }
    else if(use.value < computerNumber){
        document.getElementById("result").value = "up"; 
    }
    nGuesses++;
    document.getElementById("guesses").value = nGuesses;
}