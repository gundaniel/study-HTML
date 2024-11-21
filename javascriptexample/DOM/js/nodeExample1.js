window.onload = function () {

    let check = document.querySelectorAll(".check");
    check.forEach((target) => {
        target.addEventListener("click", function () {
            this.style.color = "#ccc";
            this.parentNode.style.color = "#ccc";
            this.parentNode.style.textDecoration = "line-through";
            this.parentNode.style.backgroundColor= "greenyellow";
        })
    });



}


