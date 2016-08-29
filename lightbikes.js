var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var backCanvas = document.createElement('canvas');
backCanvas.width = canvas.width;
backCanvas.height = canvas.height;
var backCtx = backCanvas.getContext('2d');

var speed = 1/16/1000;

var x = 0;
var y = 0;

var input = {
  up: false,
  down: false,
  left: false,
  right: false,
}

window.onkeydown = function(event) {
  console.log(event);
  console.log(event.keyCode);
  //event.preventDefault();
  switch(event.keyCode) {
    //up
    case 38:
    case 87:
      input.up = true;
      break;
    //left
    case 37:
    case 65:
      input.left = true;
      break;
    //right
    case 39:
    case 68:
      input.right = true;
      break;
    //down
    case 40:
    case 83:
      input.down = true;
      break;
  }
}

window.onkeyup = function(event) {
  console.log(event);
  console.log(event.keyCode);
  switch(event.keyCode) {
    //up
    case 38:
    case 87:
      input.up = false;
      break;
    //left
    case 37:
    case 65:
      input.left = false;
      break;
    //right
    case 39:
    case 68:
      input.right = false;
      break;
    //down
    case 40:
    case 83:
      input.down = false;
      break;
  }
}

function loop(timestamp) {
  if(input.up && !input.down) y -= 1;
  if(input.down && !input.up) y += 1;
  if(input.left && !input.right) x -= 1;
  if(input.right && !input.left) x += 1;
  backCtx.clearRect(0, 0, backCanvas.width, backCanvas.height);
  //backCtx.fillStyle = "blue";
  /*for(i = 0; i < 1000; i++) {
    backCtx.fillRect(
      (i * 20) % 100,
      (i * 20) % 100,
      10, 10 );
  }*/
  backCtx.fillStyle = "red";
  backCtx.fillRect(x, y, 5, 5);

  //Added this line because I noticed it was still drawing a line rather
  // than moving the dot on the convas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //Swap buffers
  ctx.drawImage(backCanvas,0,0);

  //setTimeout(loop, speed);
  requestAnimationFrame(loop);
}
//var timeID = setInterval(loop, speed);
requestAnimationFrame(loop);
