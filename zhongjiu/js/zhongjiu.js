function Ajax(url,fn){
				if(window.XMLHttpRequest){
					var xhr = new XMLHttpRequest();
				}else{
					var xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
				
				xhr.open("GET",url,true);
				
				xhr.send();
				
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						var data = xhr.responseText;
						fn(data)						
					}
				}
				
			}
    //#nav #nav2
			
//main页面主题内容
$(function(){  
	    $(".main2-top ul li").mouseenter(function(){
	    	console.log("aa");
	    	var i = $(this).index(".main2-top ul li")
		    $(".main2-right").eq(i).show().siblings("#this1").hide();
	    })
	     $(".main3-top ul li").mouseenter(function(){
	    	console.log("aa");
	    	var i = $(this).index(".main3-top ul li")
		    $(".main3-right").eq(i).show().siblings("#this2").hide();
	    })
	     $(".main4-top ul li").mouseenter(function(){
	    	console.log("aa");
	    	var i = $(this).index(".main4-top ul li")
		    $(".main4-right").eq(i).show().siblings("#this3").hide();
	    })
	      $(".main5-top ul li").mouseenter(function(){
	    	console.log("aa");
	    	var i = $(this).index(".main5-top ul li")
		    $(".main5-right").eq(i).show().siblings("#this4").hide();
	    })
	})
//main6-center
	$(function(){
		$("#ri").click(function(){
			$("#list2").css("display","block").animate({left: "340px"}, "slow").siblings("#list1").hide();
		})
		$("#le").click(function(){
			$("#list1").css("display","block").siblings("#list2").hide();
		})
	})
 
