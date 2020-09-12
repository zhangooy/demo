    var yy = document.getElementById('xx');
     var context = yy.getContext('2d');

     var flag = false
    

     // 记录 点的前一个点 旧的点
     var lastPoint = {x:undefined,y:undefined} 
      



    /*  
        onmousedown  第一个点
        onmousemove  第二个点.....第n个点
        
    */
     yy.onmousedown = function(aaa){
         flag = true
         var x = aaa.clientX;
         var y = aaa.clientY;
         // 当前x
         lastPoint = {"x":x,"y":y} 
         console.log(lastPoint)
         drawCircle(x,y,1)
     }

     yy.onmousemove = function(aaa){
        if(flag){
         var x = aaa.clientX;
         var y = aaa.clientY;
         // 新的点
         var  newPoint = {"x":x,"y":y}
         drawCircle(x,y,1)
         // 旧的点 加 新的点
         drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
         // 获取最新的点
         lastPoint = newPoint
        }
     }

     yy.onmouseup = function(aaa){
        flag = false
     }


    // 画圆
     function drawCircle(x,y,radius) {
        context.beginPath()
        context.fillStyle = 'black'
        context.arc(x,y,radius,0,Math.PI*2);
        context.fill()
     }

    //划线
    function drawLine(x1, y1, x2, y2) {
        context.beginPath(); // 开始
        context.strokeStyle = 'black'
        context.moveTo(x1, y1) // 起点
        context.lineWidth = 5
        context.lineTo(x2, y2) // 终点
        context.stroke()  // 填充
        context.closePath() // 结束
      }
    /* function drawCircle(x1,y1,x2,y2){
        context.beginPath();
        context.moveTo(x1,y1) // 起点
        context.lineWidth = 5
        context.lineTo(x2,y2) // 终点
        context.stroke()
        context.closePath()
    }
    */








/*
      var div = document.querySelector('.canvas');

      var flag = false;
      // 鼠标按下
      div.onmousedown = function(a){

        flag = true;
        // 获取鼠标在视图上的x,y
        var x = a.clientX
        var y = a.clientY
        // 生成一个div
        var divA = document.createElement('div')
        divA.style = "width:6px; height: 6px;" +
        "background: black; border-radius: 3px;" +
        "position: absolute; left: " + (x-3) + "px;" +
        "top: " + (y-3) + "px;"
        div.appendChild(divA)
      }

      // 移动鼠标
      div.onmousemove = function(a){
        if(flag){
            // 获取鼠标在视图上的x,y
            var x = a.clientX
            var y = a.clientY
            // 生成一个div
            var divA = document.createElement('div')
            divA.style = "width:6px; height: 6px;" +
            "background: black; border-radius: 3px;" +
            "position: absolute; left: " + (x-3) + "px;" +
            "top: " + (y-3) + "px;"
            div.appendChild(divA)
            }else{


            }
      }

      // 松开鼠标
      div.onmouseup = function(){
        flag = false;
      }

      */