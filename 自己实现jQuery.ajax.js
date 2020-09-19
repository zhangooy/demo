
		// 声明 jQuery
		 window.jQuery = function(nodeOrSelector){
		 	 let nodes = {};
		 	 nodes.addClass =  function() {};
		 	 nodes.html = function() {};
		 	 return nodes
		 }	 

		window.$ = window.jQuery


		window.jQuery.ajax = function(options){
			let url 
			// 接收两种参数
			if (arguments.length === 1) {
				url = options.url
			} else if(arguments.length === 2){
				url = arguments[0]
				options = arguments[1]
			}

			// 给参数命名
			let method = options.method  // 请求方式
			let body = options.body // get请求没有 post有
			let successFn = options.successFn // 成功执行
			let failFn = options.failFn  // 失败执行
			let headers = options.headers

			let request = new XMLHttpRequest()

			request.open(method,url) // 配置request
			request.onreadystatechange = ()=>{
				if(request.readyState === 4){
					if (request.status >= 200 && request.status < 300) {
						// callback
						successFn.call(undefined,request.responseText) 
					}else if(request.status >= 400) {
						failFn.call(undefined,request)
					}
				}
			}
			request.send(body)
		}

		myButton.addEventListener('click',(e)=>{
			window.jQuery.ajax({
				url:'/xxx',
				method:'get',
				successFn: ()=>{}, // 回调
				failFn:() => {}
			})
		})
