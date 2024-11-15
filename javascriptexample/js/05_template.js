// 여러 타입의 문자열 출력

const myName = "홍길동";
const age = 25;
const height = 178.5;

console.log("my name is" + myName + "," + "My age is"+  age + "," + "My height is" + height);
console.log("------------------------------");

// 백틱을 사용한 여러타입의 문자열 출력
// 템플릿 리터럴에 플레이스 홀더 ${...}를 넣을 수 있다. 
// const myName = "홍길동";
// const gae = 25;
// const height = 178.5;

console.log(`My name is ${myName}, My age is ${age}, My height is ${height}`);
console.log("------------------------------");

//일반 문자열의 개행
// const myName = "홍길동";
// const age = 25;
// const height =178.5;

console.log("My name is" + myName + "\n" + "My age is"+  age + "\n" + "My height is" + height);
console.log("------------------------------");

//백틱안에서의 개행
// const myName = "홍길동";
// const gae = 25;
// const height = 178.5;

console.log(`My name is ${myName}
    My age is ${age}
    My height is ${height}`);
    console.log("------------------------------");

    //백틱안에서의 따옴표 사용
    const say = `안녕맨은 나에게 이렇게 말했다. "안녕"`;
    const intro = `I'm a progammer`;

    console.log(say);
    console.log(intro);


