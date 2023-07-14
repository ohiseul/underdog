// alert("ok");
// console.log(50);
// console.log(50-3);

// let a = 50;
// let b = 3;
// a=b;
// a= 50000;

// console.log(a,b);
// console.log("안녕하세요");


// moviesㅣist = [];


// a = "10";
// b = "안녕하세요";
// let c = true;

// c = false;

// console.log(a,b,c);
// console.log(10,"10");

// let happyFace = "🥰";

// console.log(happyFace);


// console.log(5+3);
// console.log(5-3);
// console.log(5/3);
// console.log(5*3);
// console.log(30%4);
// console.log(3 ** 2);
// console.log("3" * 5);


// console.log(5>3);
// console.log(5<3);
// console.log(5==3);
// console.log(3 != 4);
// console.log(3 >= 4);

// let date = new Date();
// console.log(date);

// let hour = date.getHours();
// console.log(hour);

// if(hour <12 ){
//     console.log("오전입니다.")
// }else if(hour<15){
//     console.log("오후입니다.")
// }else{
//     console.log("저녁입니다")
// }

// a=50;
// switch(a%2){
//     case 0:
//         console.log("짝수다");
//         break;
//     case 1:
//         console.log("홀수다");
//         break;
//     default:
//         break;


// }

// let input = prompt("숫자를 입략하세요")
// console.log(typeof(input));
// input = Number(input);
// console.log(typeof(input));

// switch(input % 2){
//     case 0:
//         console.log("짝수")
//         break;
//     case 1:
//         console.log("홀수")
//         break;
//     default:
//         console.log("숫자가 아닙니다")
//         break;
        

// }

// let dayOfWeek = [ "monday", "tuesday","wednesday","thursday","friday","saturday","sunday",54, true, false]
// console.log(dayOfWeek[1]);

// let myInfo = ["직업","거주지",29,true]

// let obj ={
//     name: "이름",
//     age:29,
//     occupation:"직업",
//     isMarried:false,
//     favoriteMovies:["영화1","영화2"],
//     favoriteFoods:[
//         {
//             name: "햄버거",
//             isHealthy:false
//         },
        
//         {
//             name: "피자",
//             isHealthy:false
//         }

//     ]
// }

// console.log(obj.name);
// console.log(obj.occupation);
// console.log(obj.favoriteFoods[1]);


// function sayHello(name){
//     console.log("Hello", name)

// }

// sayHello();
// sayHello("kim");

// function addNum(a,b){
//     console.log(a+b);
//     return a+b;
// }

// let result = addNum(2,3);
// console.log(result);


// let obj2 = {
//     name:"이름",
//     age:29,
//     sayHello: function() {
//         console.log(`Hello ${this.name} you are ${this.age} years old`)
//         return "Hello";
//     }

// }

// console.log(obj2.sayHello());

// for(i=0; i<30;i++){
//     if(i%2 ==0){
//         console.log(i)
//     }else if(i%5==0){
//         console.log('5읩 배수이다')
//     }else{
//     }
// }

// let arr = ['사과','배','복숭아','바나나','딸기'];
// let i = 0;
// // for(let i=0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // for(let i of arr){
// //     console.log(i);
// // }

// // for(let i in arr){
// //     console.log(arr[i]);
// // }
// // while( i < 5 ){
// //     console.log(i);
// //     i = i + 2;
// // }

// let value = 0;
// do{
//     console.log(value);
//     value++;

// }
// while( value < 5 );

// console.log('바깥', value);


// var titleColor = document.getElementById('title').style.color;
// console.log("?"+titleColor);

// document.title = "타이틀 변경";

let title;
title = document.querySelector('#title');
// title.style.color ="red";
// title.innerHTML ="타이틀 js변경";


//이벤트
// window.addEventListener("resize", notifyResize);

// function notifyResize(){
//     console.log("리사이즈됨");
//     let width = window.innerWidth;
//     let heigth = window.innerHeight;
//     console.log(width,heigth); 
// }
title.addEventListener("click", handleClick);


//클릭 시 색상변경
function colorCange(){
    return "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}
function handleClick(){
    var other_color = colorCange(); 
    console.log(other_color);
    title.style.color = other_color;
}

//컬러배열 
title.addEventListener("mouseover", handleClick2);
var arr = ["blue","red","yellow","green"];
function handleClick2(){
    title.style.color = arr[Math.floor(Math.random() * arr.length)];
}



//등급산정
while (true){
    let testGrade= prompt("시험점수를 입력하세요 (00 입력시 종료)");
    if(testGrade === "00"){
        break;
    }

    testGrade = Number(testGrade);
    
    if(testGrade >= 90){
        console.log("A등급");
    }else if(testGrade >= 80){
        console.log("B등급");
    }else if(testGrade >= 70){
        console.log("C등급");
    }else if(testGrade >= 60){
        console.log("D등급");
    }else{
        console.log("조금 더 노력하세요");
    }
    
}

//반복문이용 원하는 데이터 출력
let dataInfo = [
    {회원번호: 0, 아이디: "red", 성별: "남자", 나이: 21 }, 
    {회원번호: 1, 아이디: "yellow", 성별: "남자", 나이: 17 }, 
    {회원번호: 2, 아이디: "orange", 성별: "여자", 나이: 16 }, 
    {회원번호: 3, 아이디: "green", 성별: "여자", 나이: 55} 
];
//1.20살 이상인 여성
function findWomen(){
    for (let i =0; i < dataInfo.length ; i++){
        if(dataInfo[i].나이 >= 20 && dataInfo[i].성별 == "여자"){
            console.log("20살 이상인:"+ JSON.stringify(dataInfo[i]));  
        }
    }
}

//2. 나이의 총합
function addAge(){
    let tempaAge= 0;
    for (let i =0; i < dataInfo.length ; i++){
        tempaAge = tempaAge + Number(dataInfo[i].나이);
    }
    console.log("나이 총합:"+tempaAge);
}


//3.가장 나이가 많은사람과 적은 사람
function findMinMax(way){
    if(way == "함수"){


    }else{



    }
}


//빈복문을 사용하여 0~ 100 까지 짝수들의 합 구하기
function evenPlus(){

    let temp = 0;
    for(let i=0 ; i <=100 ; i++){
        if(i % 2 ==0){
            temp = temp+i
        }
    }
    console.log("0~100까지 짝수의 합 : "+ temp);
}

findWomen();
addAge();
findMinMax();
evenPlus();