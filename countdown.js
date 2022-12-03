var countDownDate = new Date("2023/1/1 0:0:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countTimer").innerHTML = days + "<span>日</span>" + hours + "<span>時</span>"
  + minutes + "<span>分</span>" + seconds + "<span>秒</span>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countTimer").innerHTML = "<p>明けましておめでとうございます</p>";
  }
}, 1000);