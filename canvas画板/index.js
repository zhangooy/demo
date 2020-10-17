window.onload = function(){
  var yyy = document.getElementById('xxx');
  var context = yyy.getContext('2d');

  autoSetCanvasSize(yyy)

  listenToMouse(yyy)

// 橡皮擦开启 
  var eraserEnabled = false
  eraser.onclick = function() {
    eraserEnabled = !eraserEnabled;
    // 橡皮擦/画笔切换
    actions.className = 'actions x';
  
  }
  brush.onclick = function(){
    eraserEnabled = false;
    actions.className = 'actions';
  }


/******/

  function autoSetCanvasSize(canvas) {
    setCanvasSize()
    // 监听用户从新移动屏幕的宽高
    window.onresize = function() {
      setCanvasSize()
    }

    function setCanvasSize() {
    // 获取页面宽高
     var pageWidth = document.documentElement.clientWidth
     var pageHeight = document.documentElement.clientHeight
    // canvas等于页面的宽高
     canvas.width = pageWidth
     canvas.height = pageHeight
  }
 }
// 点
  function drawCircle(x, y, radius) {
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill()
 }

// 线
  function drawLine(x1, y1, x2, y2) {
    context.beginPath(); // 开始
    context.strokeStyle = 'orange' // 线的颜色
    context.moveTo(x1, y1) // 起点
    context.lineWidth = 5
    context.lineTo(x2, y2) // 终点
    context.stroke()  // 描边
    context.closePath() // 结束
 }

// 监听canvas事件
  function listenToMouse(canvas) {

  // 是否是绘画模式
  var using = false
  var lastPoint = {
    x: undefined,
    y: undefined
  }
  canvas.onmousedown = function(aaa) {
    var x = aaa.clientX
    var y = aaa.clientY
    // 开始画/擦 是否再用
    using = true
    // 判断是画笔还是橡皮擦
    if (eraserEnabled) {
      // 擦掉 按鼠标清 所以减5
      context.clearRect(x - 5, y - 5, 10, 10)
    } else {
      lastPoint = {
        // 最后的一个点
        "x": x,
        "y": y
      }
    }
  }
  // 得到新的点
  canvas.onmousemove = function(aaa) {
    var x = aaa.clientX
    var y = aaa.clientY
    // 如果没有按下直接退出
    if (!using) {return}
    // 开启橡皮擦  
    if (eraserEnabled) {
      context.clearRect(x - 5, y - 5, 10, 10)
    } else {
      var newPoint = {
        // 新的点
        "x": x,
        "y": y
      }
       // 旧的点和新的点连接起来
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
      // 告诉浏览器最新的点
      lastPoint = newPoint
    }

  }
  canvas.onmouseup = function(aaa) {
    // 结束画/擦
    using = false
  }
 }
}