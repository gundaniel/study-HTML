let num = 0;

let image = document.querySelectorAll('.imageChoice');
image.forEach((target) => {
    target.addEventListener("click", function () {
        console.log(target);
        let image = document.getElementById("target");
        image.src = this.src;
    })
});

let image1 = document.querySelectorAll('.imageChoice');
    setInterval(function () {
        num = (num % 3) + 1;
        document.getElementById("imgView").src = "../images/" + num + ".jpg"
    }, 1000);



/*
// 확인코드
let array = ["자바", "html", "css", "javascript"];
//forEach
array.forEach(element) =>{
    console.log(element);
});
*/