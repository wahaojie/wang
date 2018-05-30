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
			Ajax("json/menu.json",foo);
			
			function foo(data){
			var oul = document.getElementById("nav2")
			var oli = oul.children; 
			console.log(oli);
			var data=JSON.parse(data);
            for(var i=0;i<data.length;i++){
            	var odiv = document.createElement("div");
            	var odl=document.createElement("dl");
            	for(j in data[i]){
				odl.innerHTML+="<dt>"+j+"</dt>"
				for(var k=0;k<data[i][j].length;k++){
					odl.innerHTML+="<dd>"+data[i][j][k]+"</dd>"
				}
			}
            odiv.appendChild(odl)
			
			oli[i].appendChild(odiv);
          }
	}
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
 
