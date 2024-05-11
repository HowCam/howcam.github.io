// countdown.js

// 设置倒计时结束的时间
var countDownDate = new Date("May 15, 2024 15:37:25").getTime();

// 每秒更新倒计时
var x = setInterval(function() {

  // 获取当前时间
  var now = new Date().getTime();

  // 计算倒计时时间
  var distance = countDownDate - now;

  // 计算天、时、分和秒
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 在页面上显示倒计时
  document.getElementById("countdown").innerHTML = days + "天 " + hours + "小时 "
  + minutes + "分 " + seconds + "秒 ";

}, 1000);