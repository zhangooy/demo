
  // 分析：

  //  1.获取DOM节点？
  var btn = document.querySelector('.weibo-btn');
  var textarea = document.querySelector('.weibo-text');
  var ul = document.querySelector('.weibo-list');
  
  //多条数据
  var list = [];

  btn.onclick = function(){
 // 姑且认为：唯一：
    var my_id = Date.now() + "_" + Math.random();
         if(textarea.value === ""){
      		  alert("文本域内容为空!");
      	     return;
         }else{

          var time = new Date; // 获取现在的时间（点击留言按钮时的）
          var dat = `${time.getFullYear()}年${time.getMonth()}月${time.getDate()}日${time.getHours()}时${time.getMinutes()}分${time.getSeconds()}秒`; // 获取年月日时分秒 并拼接
      // 发布到li里
      // 新建li
          var li = document.createElement('li')
          li.innerHTML = `<p>${textarea.value}</p><div>${dat}</div><span>删除</span>`

      // 添加到ul 最前面（DOM节点）ul的第一个子元素;
        var fist = ul.children[0];
        // 设置自定义：
    li.setAttribute("my_id", my_id);
        ul.insertBefore(li,fist)

      //一条数据的格式不是一条数据进行本地存储,把一条数据放在一个列表[]
        var one = {}
        one.info = textarea.value;
         // 数据ID；
    one.my_id = my_id;
        // 从前添加和HTML结构相对应
        list.unshift(one);
        // 存在本地 复杂类型转换为JSON 变量重新被赋值不是数组
        var str = JSON.stringify(list);
        localStorage.setItem('list',str);
        
        textarea.value = "";
       }

    }

// 点击页面刷新页面没有
 
 // 把本地数据拿出来:JSON字符串
  var str = localStorage.getItem('list');
 // 优化本地没数据先存入[]
    if (str == null) {
     localStorage.setItem("list", "[]");
    // "[]"
     str = localStorage.getItem("list");
   }

// 把JSON字符串转化为数组;全局list被重新赋值
  list = JSON.parse(str);
// 把每一条数据显示在页面上
 for(var i=0; i<list.length;i++){

    var li = document.createElement('li');
    var time = new Date; // 获取现在的时间（点击留言按钮时的）
    var dat = `${time.getFullYear()}年${time.getMonth()}月${time.getDate()}日${time.getHours()}时${time.getMinutes()}分${time.getSeconds()}秒`; 
     li.innerHTML = `<p>${list[i].info}</p><div>${dat}</div><span>删除</span>`
     // 新增一个自定义属性
     li.setAttribute("my_id",list[i].my_id);

    // 从前添加？从后添加？看数组的顺序  3 2 1
    ul.appendChild(li);
 } 


    // --------------------------------------------------------------------组合键发布
  textarea.onkeydown = function(e) {
    // 同时按下？发布？
    // e.ctrlkey :undefined;---->false;
    if (e.ctrlKey && e.keyCode == 13) {

      // 调用 onclick 本质就是个方法
      btn.onclick();
    }
  };


// target
// parentNode
 ul.onclick = function(e){
    /* 当前点击的是哪个？ 事件对象
     DOM节点 点谁是谁的DOM节点；

     nodeName：节点的大写名称；
     找到span 的父级；*/
   if(e.target.nodeName === 'SPAN'){

    var li = e.target.parentNode;
    var my_id = li.getAttribute("my_id");
    ul.removeChild(li);
   }

  
    // ----------------------------------------------------------找删除哪个ID；
      // 同找到的my_id 把数组中那个数据删除：
      for (var i = 0; i < list.length; i++) {
        // list[i]
        if (list[i].my_id == my_id) {
          list.splice(i, 1);
          break;
        }
      }

      // 修改的list重新存回去；
      var str = JSON.stringify(list);
      localStorage.setItem("list", str);

      // 删除；
    
 }
