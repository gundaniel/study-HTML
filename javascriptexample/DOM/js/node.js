window.addEventListener("load", function () {
    document.getElementById("createBtn").addEventListener("click", createNode);
   
    document.getElementById("subject").addEventListener("keypress", (e)=>{
        if (e.key === 'Enter') {
            e.preventDefault();
            createNode();
        }
    });
});

function createNode(){
    //요소 노드 추가
    let newItem = document.createElement("li");

    //폼의 텍스트 필드 요소 접근
    let subject = document.querySelector("#subject");
    //텍스트 필드의 값을 텍스트 노드로 만들기
    let newText = document.createTextNode(subject.value);
    //텍스트 노드를 요소 노드의 자식 노드로 추가
    newItem.appendChild(newText);

    //웹문서에서 부모 노드 가져오기(ul)
    let itemList = document.querySelector("#itemList");
    //새로 만든 요소 노드를 부모 노드에 추가
    itemList.appendChild(newItem);
    // itemList.insertBefore(newItem, itemList.childNodes[0]);
    subject.value="";

    let items = document.querySelectorAll("li");
    itemList.forEach((target) =>{
        target.addEventListener("click",function(){
            console.log(this.parentNode)
            if(this.parentNode){
                this.parentNode.removeChild(this);
            }
        });
    });
}