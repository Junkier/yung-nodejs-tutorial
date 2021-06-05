// 我是前端程式 (瀏覽器～)

// alert("~~~~~~~");

console.log("嗨嗨 , 我是傑夫～～～");

let today = "禮拜三";
console.log("今天" , today);


// html 標籤渲染完成後 , 才開始執行的 js 程式
$(function(){

  /////////////////////////////////////////////////
  // 事件聆聽 --> 綁事件上去 
  // 綁定 點擊事件 
  // 一旦 #button-1 的標籤 , 被點擊的話 , 就觸發 function ~

  // 綁定 click 事件
  // 寫法 --> $(想定位的標籤).事件(處理函式)
  $("#button-1").click(()=>{
    alert("這是 點我看程式！");
  });

  $("#button-2").click(()=>{
    alert("點我看 惡靈古堡～～");
  });


  $("#button-add").click(()=>{
    // 1. 先抓到 次數 值
    let value = $("#number-qq").text();  // 此時 value 為字串
    value = Number(value);               // 把 字串 , 轉成數字

    console.log(value);

    if(value === 10){
      alert("不可大於 10 !!!");
      return;   // 結束 function 執行
      //  從下面開始 , 程式不會執行到
    };

    // 2. 幫次數值 +1
    value += 1;

    // 3. 寫回去 #number-qq 的標籤裡
    $("#number-qq").text(value);


    if(value <0){
      // 增加 class 的方法
      $("#number-qq").addClass("text-danger");
    }else{
      // 移除 class 的方法
      $("#number-qq").removeClass("text-danger");
    };

  });

  $("#button-sub").click(()=>{
    // 1. 先抓到 次數 值
    let value = $("#number-qq").text();  // 此時 value 為字串
    value = Number(value);               // 把 字串 , 轉成數字

    console.log(value);

    if(value === -10){
      alert("不可小於 -10 !!!");
      return;   // 結束 function 執行
      //  從下面開始 , 程式不會執行到
    };

    // 2. 幫次數值 +1
    value -= 1;

    // 3. 寫回去 #number-qq 的標籤裡
    $("#number-qq").text(value);


    ////// 
    if(value <0){
      // 增加 class 的方法
      $("#number-qq").addClass("text-danger");
    }else{
      // 移除 class 的方法
      $("#number-qq").removeClass("text-danger");
    };

  });



  

});