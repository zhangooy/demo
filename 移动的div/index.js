var div  = document.createElement('div');
		div.className = 'demo'
		document.body.appendChild(div);

		var dragging = false;

		// 两个e 不能同时访问
		var lastX
		var lastY

		div.onmousedown = function (e) {
			// 赋值
			lastX = e.clientX
			lastY = e.clientY
			dragging = true;
		}

		document.body.onmousemove = function (e) {
				if (dragging === true ) {
					var chazhiX =  e.clientX - lastX
					var chazhiY = e.clientY - lastY
					// 得到最新的坐标
					// top和left的值的
					var top = parseInt(div.style.top) || 0
					var left = parseInt(div.style.left) || 0
					// 阻止div移出
					var zcY = top + chazhiY
					var zcX = left + chazhiX
					if (zcY < 0 ) {
						zcY = 0
					} else if(zcX < 0) {
						zcX = 0
					}
					div.style.top = zcY + 'px'
					div.style.left = zcX + 'px'
					// 每次移动要和上一次做对比
					lastX = e.clientX
					lastY = e.clientY
				} 
		}
	   
	   div.onmouseup = function(){
	   		dragging = false;
	   }

