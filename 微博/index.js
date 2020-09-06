
  // 需求：同时按钮 ctrl+enter 等于 发布；
  // 需求：点击发布，把发布的内容，发布在列表最前面；


  // 分析：

  //  1.获取DOM节点？
  var btn = document.querySelector(".weibo-btn");
  var textarea = document.querySelector('.weibo-text');
  var ul = document.querySelector('.weibo-list');
  // 2. 注册（设置）点击事件，不调用；用户才觉得什么时候调用；



  // ------------------------------------------------------------------新增发布；
  var list = [];
  // 本是就是个方法名（不是我们起，但是JS可以调用的）
  btn.onclick = function() {

    // 姑且认为：唯一：
    var my_id = Date.now() + "_" + Math.random();

    // -------------------------------------------------DOM操作
    // 3.点击之后：
    // 3.1 新建li 
    var li = document.createElement("li");

    // 3.2 把文本框的内容 设置到li 内部（结构）;

    li.innerHTML = `<p>${textarea.value}</p><span>删除</span>`;

    // 3.3 添加到ul 最前面（DOM节点）;
    // var first = document.querySelector("ul li:first-child");  
    // 属性获取第一个孩子
    var first = ul.children[0];

    // 设置自定义：
    li.setAttribute("my_id", my_id);

    ul.insertBefore(li, first);

    // -----------------------------------------------数据储存在本地（小U盘）
    // 一条数据的格式：
    var one = {};
    one.info = textarea.value;

    // 数据ID；
    one.my_id = my_id;
    list.unshift(one);
    var str = JSON.stringify(list);
    localStorage.setItem("list", str);

    textarea.value = "";
  }



  // ------------------------------------------------------------------列表展示
  // 需求：真实数据已经存入本地了；但是：再次刷新，页面没有；
  // 分析：
  //  1.把本地数据拿出来；JSON 字符串
  var str = localStorage.getItem("list");
  // list = JSON.parse(str);  // 不符合 逻辑

  // 看下有没有数据？如果 本地没有数据，先存入空 []
  if (str == null) {
    localStorage.setItem("list", "[]");
    // "[]"
    str = localStorage.getItem("list");
  }

  //  2.把JSON 字符串 转化为数组；全局list 被重新赋值；
  list = JSON.parse(str);
  // console.log(list);

  // console.log(list);

  //  3.循环遍历，
  for (var i = 0; i < list.length; i++) {
    // list[i]  {info:"xxx"}
    var li = document.createElement("li");
    li.innerHTML = `<p>${list[i].info}</p><span>删除</span>`;

    // 新增一个自定义属性
    li.setAttribute("my_id", list[i].my_id);

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

  // ------------------------------------------------------------------- 删除功能：
  // 新增：
  //   1.DOM操作：新增
  //   2.数据新增：新增一条；

  // 删除：
  //   1.DOM操作：删除；li 在HTML结构上；事件委托！
  //   2.数据删除；
  //      2.1 数据新增的出生的时候，给每条数据发一个身份证ID：唯一性；
  //      2.2 ID 一一绑定在 DOM节点上（自定义属性），数据存在本地也要有ID；
  //      2.3 页面刷新：读取本地数据，转化数组（每条数据都有ID），渲染到HTML里面，ID 一一绑定在 DOM节点上

  //     2.4 找到父级的li, 与LI一一绑定的ID找到；
  //     if (arr[i].id == 找到ID) {
  //        arr.splice(i, 1);
  //        break;
  //     }

  //     2.5 重新存回去；

  // 
  ul.onclick = function(e) {
    // console.log(e.target);  DOM节点
    if (e.target.nodeName == "SPAN") {
      // console.log(e.target);

      // -----------------------------------------------------------DOM操作
      // 1.e.target  ： span 
      var li = e.target.parentNode;
      var my_id = li.getAttribute("my_id");
      ul.removeChild(li);



      // ----------------------------------------------------------找删除哪个ID；
      // 同找到的my_id 把数组中那个数据删除：
      for (var i = 0; i < list.length; i++) {
        // list[i]
        if (list[i].my_id == my_id) {
          list.splice(i, 1);
          break;
        }
      }


      // console.log(list);


      // 修改的list重新存回去；
      // 只是在JS层面 ，修改数据，小U盘 没有跟着变，需要重新存回去；
      var str = JSON.stringify(list);
      localStorage.setItem("list", str);




    }
  }
