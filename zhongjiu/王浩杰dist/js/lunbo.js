var i = 0;
			var timer = null;
			$(function(){
				//鼠标划过btn显示隐藏
				$("#box").hover(function(){$(".btn").show();},function(){$(".btn").hide();})
				//默认显示第一张
				$(".list").eq(0).show().siblings().hide();
				show()
				//划过数字
				$(".num").hover(function(){
					clearInterval(timer)
					i = $(this).index();
					move();
					
				})
				//鼠标划过
				$("#box").mouseover(function(){
					clearInterval(timer)
				})	
				//鼠标离开	
				$("#box").mouseout(function(){
					show()
				})
				//点击换图	
				function move(){
					
					$(".list").eq(i).fadeIn(300).siblings(300).fadeOut();
					$(".num").eq(i).addClass("bg").siblings().removeClass("bg")
				}
				
				
				function show(){
					timer = setInterval(function(){
				 	i++;
					if(i==8){
						i=0
					}
					move();
				},2000);
			}
		})