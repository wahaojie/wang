function tab(){
		Ajax("get","../json/menu.json",{},foo);
		
		
		function foo(data){
			var data=JSON.parse(data);
			var count=1000;
			for(var num=0;num<4;num++){
				var otop=document.getElementsByClassName("main2-top")[num];
				var oli=otop.getElementsByTagName("ul")[0].getElementsByTagName("li");
				var oright=document.getElementsByClassName("main2-right")[num];
				//console.log(oright)
				for(var i=0;i<oli.length-1;i++){
					count++;
					var odiv=document.createElement("div");
					
					odiv.className="main2-content";
					
					//console.log(data[count]);
					for(var j=0;j<data[count].length;j++){
						var odl=document.createElement("dl");
						//console.log(data[count][j]);
						odl.innerHTML+="<dt><a href='shopping-cart.html?shoppid="+data[count][j].id+"'><img src='../img/"+data[count][j].imgs+"'></a></dt><span>"+data[count][j].jiage+"</span><dd>"+data[count][j].name+"</dd>";
						odiv.appendChild(odl)
					}
					
					oright.appendChild(odiv);
				}
			}