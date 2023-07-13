//1. 짝홀 판단
alert("ok");

let obj ={
    discrimination : function(num){
        num = Number(num);
        if(num%2 ==0){
            console.log("짝수입니다");
        }else{
            console.log("홀수입니다");   
        }
    }
    
}
obj.discrimination(prompt("짝홀 판별 숫자를 입략하세요"));

// 2 배열 내 최대값
function max(arr) {
    var len = arr.length
    var max = arr[0];

    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };
  


//   var array = [];
                
         
/* 
var end;
while(end == ""){
    var temp = prompt("배열에 넣을 숫자를 입략하세요('끝'이라고 입력시 종료합니다.)");
      switch(num){
        case isNaN(num) == false :
          console.log("숫자입니다.");
          
          for (var i = 0; i < array.length ; i++){
              if(array[i].length === 0){
                  array[i] == num
                  console.log("넣는다"+arr[i]);
                }else{
                    console.log("있어"+arr[i]);
                }
            }
            break;
            
        case isNaN(num) == true :
            console.log("종료합니다. 곧 배열이 출력됩니다.");
            console.log(max(array));
            break;
            
        default:
            break;
    }

} */


let arr2 = [1,2,3];

arr2.push("hello");
arr2.pop();
console.log(arr2);

let arr3 = [1,2,3,"hello"];

arr3.reverse();
console.log(arr3);

arr3.sort();
console.log(arr3);

//3.구구단
var gugu = prompt("원하는 구구단을 입력해주세요");
if(!isNaN(gugu)){
for(var i = 1; i<10; i++){
    console.log(gugu+"x"+i+"="+(i*gugu));
}
}