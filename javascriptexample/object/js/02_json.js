window.onload =function(){

    let company = {
        "name" : "(주)자바컴퍼니",
        "since" : 2013,
        "department" : ["기획팀","영업팀","디자인팀","개발팀"],
        "biz" : ["소프트웨어 개발","통신판매업","위치정보서비스"]
    };

    // 회사이름 출력
    document.getElementById("name").innerHTML = company.name;

    //설립년도 출력
    document.getElementById("since").innerHTML = company.since;

    //주요 사업부서를 출력하기 위하여 배열을 반복문으로 읽는다. 

    let dept_li = "";
    for( let i = 0; i < company.department.length; i++){
        dept_li += `<li> ${company.department[i]} </li>`;
    }
    document.getElementById("department").innerHTML = dept_li;

    let biz_li = "";
    for( let i = 0; i < company.biz.length; i++){
        biz_li += `<li> ${company.biz[i]} </li>`;  
    }
    document.getElementById("biz").innerHTML = biz_li;
}
