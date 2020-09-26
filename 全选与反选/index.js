  // 需求：点击全选或全不选，子项跟着动；

  // 功能1：点击全选，子选跟着它；
 
 window.onload = function() {

// 分析：
  //  1.获取DOM节点？
  var all = document.getElementById("checkAll");
  var cks = document.getElementsByClassName("ck"); // 伪数组 遍历；

  //  2.设置交互：！！！只是设置，不执行；
  all.onclick = function() {
    // 3.点击之后。子项跟着动；
    // var zt = all.checked;
    for (var i = 0; i < cks.length; i++) {
      cks[i].checked = all.checked;
    }
  }

  // 功能2：点击子项；
  //      如果子项中全部都选择了，all被全选；
  //      如果子项中至少有一个没有选中，all不能被选择；

  // 分析：

  // 1.cks
  // 2.注册点击:每个cks都要点击；
  for (var i = 0; i < cks.length; i++) {
    cks[i].onclick = function() {
      // 判断 cks 兄弟之间 有没有哪个子ck没有选择：怎么看？每一个ck都要检查；


      for (var j = 0; j < cks.length; j++) {
        // 检查状态？有没有选择中？checked
        if (cks[j].checked == false) {
          break;
        }
      }


      // all要不要被选：看j 是不是 cks.length

      // 循环结束？意味着没有 break？意味，三个兄弟cks[j].checked 都是true（选中） ,cks[j].checked == false 不进入分支；
      if (j == cks.length) {
        all.checked = true;
      }
      // j != cks.length  结束被break ，兄弟中至少有一个 cks[j].checked  false(没有选中)
      else {
        all.checked = false;
      }
    }

  }





 }
 
 

  