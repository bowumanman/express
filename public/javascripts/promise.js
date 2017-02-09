/**
 * Created by zhangsai on 2017/2/4.
 */
$(function(){
  console.log(window.location.href)
  function returnP (){
    var p = new Promise(function(resolve,reject){
      $.ajax({
        type:"get",
        url:"../javascripts/test.json",
        dataType:"json",
        contentType: "application/json",
        success:function(data){
          resolve(data);
        },
        error:function(e){
          reject("出错啦");
          console.log(e,"error")
        }
      })
    });
    return p;
  }
  returnP().then(function(res){
    return new Promise(function(resolve1,reject1){
      setTimeout(function(){
        console.log(res,"1");
        res = Object.assign({"old":123},res);
        resolve1(res);
      },1000)
    })
  }).then(function(res){
    console.log(res,"2")
  })

  var myInit = {
    method: 'GET',
  };

  fetch('../javascripts/test.json',myInit)
    .then(function(res){
      console.log(res,"LLLLLL",res.json());
      return res.json();
    })
    .then(function(json){
      console.log(json,">>>>>>")
    });
    // .then(response => response.json())
    // .then(json =>{
    //   console.log(json,"fetch")
    // })



});