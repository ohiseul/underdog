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
  


  var array = [];
  
  console.log(max(array));
