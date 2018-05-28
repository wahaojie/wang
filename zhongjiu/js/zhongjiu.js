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
//$(function(){
//		$(".main2-center").css("visibility","hidden");
//		$(".main2-right").css("visibility","hidden");
//	})
	

