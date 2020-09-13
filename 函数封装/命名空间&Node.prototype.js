 


/* 
 封装函数
 function fn(x){
       var allClildren = x.parentNode.children;
       var array = {
      length: 0
        };
      for(var i =0;i<allClildren.length;i++){
        if (allClildren[i] !== x) {
          array[array.length] = allClildren[i]
          array.length += 1
        }
        }
          return array
      }
     console.log(fn(item3))
  
    */

  /* function addClass(node,a){

      for(var key in a){
        var value = a[key];

        var methodName = value ? 'add':'remove'; //true add false remove
        //console.log(methodName)
        console.log(node.classList)
        // console.log(node.classList.add)
        // console.log(node.classList[methodName])

        node.classList[methodName](key)

      /*对象调方法
        obj.x
        obj['x']
      */
     /*
      if (value) {
          node.classList.add(key)
        }else {
          node.classList.remove(key)
        }

      */
     // }
   // }

   // addClass(item1,{'a':true})
   // 

  // 公有属性
  Node.prototype.getSiblings = function(){  
       //this是输入的id值
        var allClildren = this.parentNode.children;

        var array = {
        length: 0
          };

        for(var i =0;i<allClildren.length;i++){
          if (allClildren[i] !== this) {
            array[array.length] = allClildren[i]
            array.length += 1
          }
          };
          return array
      };

      Node.prototype.addClass = function (classes) {
        classes.forEach((value)=>this.classList.add(value))
        // this就是.addClass前面的
      }
      console.log(item3.getSiblings());
      item3.addClass(['a']);




  








 