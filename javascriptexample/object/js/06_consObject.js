window.onload = function() {

    let result1 = document.getElementById("name");
    let result2 = document.getElementById("phoneNumber");

    class PhoneInfo {
        constructor(name, phone) {
            this.name = name;
            this.phone = phone;
        }
        greeting() {
            document.getElementById("result").innerText = "이름" + result1.value + "전화번호" + result2.value;
        }
    };

    document.getElementById("showBtn").addEventListener("click", () => {
        let Phoneinfo = new PhoneInfo(result1,result2);
        Phoneinfo.greeting();
    });
}