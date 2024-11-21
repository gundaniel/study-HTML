window.onload = function () {


    document.getElementById("sendBtn").addEventListener("click", function () {
        const frm = document.form1;

        if (document.getElementById("user_name").value.replace(/\s/g, "") == "") {
            alert("이름을 입력해주세요");
            frm.user_name.value = "";
            frm.user_name.focus();
            return;
        }


        if(document.getElementById("user_id").value.replace(/\s/g, "") ==""){
                    alert("아이디를 입력해주세요");
            document.getElementById("user_id").focus();
            return;
        };


        //라디오 버튼의 입력여부 검사 !(not) 부정연산자 true ->false /false -> true
        if (!frm.gender[0].checked && !frm.gender[1].checked) {
            alert("성별을 선택해주세요");
            return;
        }

        //select요소에 대한 선택위치 검사
        if(frm.job.selectedIndex < 1){
            alert("직업을 선택해주세요");
            return;
        }

        let chk = false;
        for(let i = 0; i<frm.hobby.length; i++){
            if(frm.hobby[i].checked){
                chk = true;
                break;
            }
        }
        if(!chk){
           alert ("취미를 선택해주세요");
           return; 
        }

        let str = this.inputData(frm);
        str += "\n\n입력하신 내용이 맞습니까? \n[취소를 누르면 모든 데이터가 사라집니다]";
        //입력확인하기
        if(confirm(str)){
            return;

        }else{
            frm.reset();
            return;
        }


    })


}