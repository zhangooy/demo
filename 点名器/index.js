
    // 获取所有td
    var tds = document.querySelectorAll('td');
    // 创建定时器的名称
    var timer;
    // 1. 获取事件源 -- 按钮
    var btn = document.querySelector('input');
    // 2. 添加事件类型 -- click
    btn.onclick = function (){
    // 3. 添加事件处理程序
      if(btn.value  == '开 始'){
      // 事情A
      // 1) 背景闪动
         // 获取随机数
         changeCellbg();
      // 2) 修改按钮内容 -- '结 束'
        this.value = '结 束';
        
      }else{
      // 事情B
      // 1) 背景闪动停止
        clearInterval(timer);
      // 2) 修改按钮内容 -- '开 始'
        this.value = '开 始';
      }
    }
   
    // 封装函数：动态随机设置td的背景
    function changeCellbg () {
      timer = setInterval(function(){
        var index = parseInt(Math.random()*(tds.length-1 - 0 + 1 )+ 0);
        for(var i = 0;i<tds.length;i++){
          tds[i].style.backgroundColor = '#fff';
        }
        tds[index].style.backgroundColor = getColor();
      },30)
    }

    // 封装函数：获取随机颜色
    function getColor () {
      var R = parseInt(Math.random()*(255 - 0 +1)+0);
      var G = parseInt(Math.random()*(255 - 0 +1)+0);
      var B = parseInt(Math.random()*(255 - 0 +1)+0);
      return 'rgb('+R+','+G+','+B+')'
    }
