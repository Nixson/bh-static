
var ball = document.getElementById('ball');

ball.onmousedown = function(e) {

  var coords = getCoords(ball);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  ball.style.position = 'absolute';
  document.body.appendChild(ball);
  moveAt(e);
  ball.style.zIndex = 4000;
  function moveAt(e) {
    ball.style.left = e.pageX - shiftX + 'px';
    ball.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  };

}

ball.ondragstart = function() {
  return false;
};