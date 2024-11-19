window.onload = function () {

    let named = {
        "comName": "javascript/ jQuery/ Ajax",
        "description": "클라이언트 프로그래밍 과목을 정리해 놓은 게시판입니다.",
        "total": 4,
        "item": [
            {
                "num": "공지",
                "name": "클라이언트 프로그래밍",
                "see": 3,
                "save": "2023.05.01"
            },
            {
                "num": 3,
                "name": "Ajax",
                "see": 6,
                "save": "2024.04.08"
            },
            {
                "num": 2,
                "name": "jQuery",
                "see": 15,
                "save": "2023.11.07"
            },
            {
                "num": 1,
                "name": "javascript",
                "see": 19,
                "save": "2023.06.05"
            }
        ]
    };
    document.getElementById("comName").innerHTML = named.comName;
    document.getElementById("description").innerHTML = named.description;

    let num_td = "";

    for(let i = 0; i < named.item.length; i++){
        let item = named.item[i];
        num_td += `<tr><td>${item.num}</td>`;
        num_td += `<td class ='text-left'> ${item.name}</td>`;
        num_td += `<td> ${item.see}</td>`;
        num_td += `<td> ${item.save}</td></tr>`;
    }

    document.getElementById("item").innerHTML = num_td;
}