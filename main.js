document.addEventListener("mousemove", MouseMove);
function MouseMove(e) {
  var heart = document.createElement("span");
  var x = e.offsetX;
  var y = e.offsetY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  var size = Math.random() * 70;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  var images = [
    "url('2.png')",
    "url('1.png')",
    "url('3.png')",
    "url('4.png')",
    "url('5.png')",
    "url('6.png')",
    "url('7.png')",
    "url('8.png')",
  ];
  var random = Math.floor(Math.random() * 8);
  var m = images[random];
  heart.style.backgroundImage = m;
  document.getElementById("tym").append(heart);
  setTimeout(function () {
    heart.remove();
  }, 3500);
}
document.addEventListener("touchmove", myFunction);

function myFunction(event) {
  var hear = document.createElement("div");
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  console.log(x);
  console.log(y);

  hear.style.top = x + "px";
  hear.style.left = y + "px";
  var size = Math.random() * 70;

  hear.style.width = size + "px";
  hear.style.height = size + "px";
  var imagee = [
    "url('1.png')",
    "url('2.png')",
    "url('3.png')",
    "url('4.png')",
    "url('4.png')",
    "url('5.png')",
    "url('6.png')",
    "url('7.png')",
    "url('8.png')",
  ];
  var a = Math.floor(Math.random() * 8);
  var i = imagee[a];
  hear.style.backgroundImage = i;
  document.getElementById("tym2").append(hear);
  setTimeout(function () {
    hear.remove();
  }, 4000);
}
