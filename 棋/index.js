var TICK = "O";
		var CROSS = "X";

		var model = []; // 用于存放数据 0表示未点击,1表示x,2 表示o
		var cells = []; // 存放dom中a标签

		var flag; // 用于表示轮到谁
		// 初始化二维数组
		
		var newGame = function () {
			for (var i=0;i<3;i++) 
				for (var j=0; j < 3; j++) {
					model[i][j] = 0;
					cells[i][j].text = '';
				}
				flag = 1;
				// 1表示0开始,0表示x开始
			}
		// 每次新游戏都需要清空a标签显示的字符
        var freshView = function() {
        	var i, j;

        	for(i=0;i<3;i++)
        	 for(j=0;j<3;j++)
        	 	if (model[i][j]==1) 
        	 		cells[i][j].text = CROSS;
        	 	  else if (model[i][j] == 2)
        	 	  	cells[i][j].text = TICK;
        }

      // 判断胜利
      var checkWin = function(x,y){
      	// 检查 x 方向
      	if(model[x][y] != 0 && model[0][y] == model[1][y] && model[0][y] == model[2][y])
      		return 1;
       // y轴 方向
      	if(model[x][y] != 0 && model[x][0] == model[x][1] && model[x][0] == model[x][2])
      		return 1;
       // \方向
      	if(x == y)
      		if(model[0][0] != 0 && model[0][0] == model[1][1] && model[0][0] == model[2][2])
      		return 1;
      	// / 方向
      	if((x==2&&y==0)||(x==0&&y==2)||(x==1&&y==1))
      		if(model[2][0]!=0&&model[2][0]==model[1][1]&&model[2][0]==model[0][2])
      			return 1;

      		return 0;
      }

      window.onload = function(){
      	var i, j;

      	for(i=0; i<3;i++){
      		model[i] = [];
      		cells[i] = [];
      	}
       
       // 需要像每个a标签绑定一个函数用来修改数据模型
      	for(i=0;i<3;i++)
      		for(j=0;j<3;j++){
      			cells[j][i] = document.getElementById('cell-'+ i + '-' + j);
      		
        // 批量绑定onclick事件
      		(function(j,i){
      			cells[i][j].onclick = function(){
      				model[i][j] = flag + 1;
      				if(flag)
      					flag = 0;
      				else
      					flag = 1;

      				freshView();

      				if(checkWin(i,j)){
      					if (flag) 
      						alert("用" + CROSS + "选手胜利" );
      					else 
      						alert("用" + TICK + "选手胜利");
      					
      					newGame();
      				}
      			}
      		})(i,j);
      }
      newGame();
      }