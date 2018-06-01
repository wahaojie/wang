window.onload = function(){
function setCookie(name, value, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + value + ";expires=" + oDate + ";path=/";
}

function getCookie(name) {
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var newArr = arr[i].split("=");
		if(newArr[0] === name) {
			return newArr[1];
		}
	}
}
//购物车加减
function removeCookie(name) {
	setCookie(name, 1, -1);
}

   var str = location.search;
   
   var id1 = str.split("=")[0];
   var id2 = str.split("=")[1];
   var data = {"10001":{id:0,name:"华夏长城干红葡萄酒 750ml",imgs:"img/1_350(12).png",jiage: "￥191.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10002":{id:1,name:"52°汾酒集团清典荣耀 850ml",imgs:"img/1_350(11).png",jiage: "￥192.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10003":{id:2,name:"53°茅台镇一道泓酱香传奇",imgs:"img/1_350(23).png",jiage: "￥193.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10003":{id:3,name:"52°夜光之恋魅影起泡葡萄酒",imgs:"img/1_350(64).png",jiage: "￥194.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10004":{id:4,name:"龙船康帝波尔多红酒 750ml",imgs:"img/1_350(48).png",jiage: "￥195.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10005":{id:5,name:"42度 天佑德青稞酒 海拔2600",imgs:"img/1_350(31).png",jiage: "￥196.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10006":{id:6,name:"58°百年牛栏山清香白酒",imgs:"img/1_350(5).png",jiage: "￥197.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10007":{id:7,name:"张裕干红葡萄酒 750ml",imgs:"img/1_350(39).png",jiage: "￥198.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10008":{id:8,name:"56°红星二锅头 750ml",imgs:"img/1_350(6).png",jiage: "￥199.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "10009":{id:9,name:"42°西藏天佑德青稞酒-加持 500",imgs:"img/1_350.png",jiage: "￥188.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "100010":{id:10,name:"45°天佑德生态三星 500ml",imgs:"img/1_350(4).png",jiage: "￥187.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "100011":{id:11,name:"52°洋河梦之蓝M3梦3 500ml",imgs:"img/1_350(25).png",jiage: "￥186.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	 "100012":{id:12,name:"52°洋河天之蓝 500ml",imgs:"img/1_350(24).png",jiage: "￥185.00",leiname:"白酒",lei:"五粮液",letter:"五粮液原厂出品，优质浓香型白酒，精选五粮酿造，经典水晶盒包装"},
	}

   for(var attr in data){
   	if(id2==data[attr].id){
   		var oh2 = document.getElementsByTagName("h2")[0];
   		var ospan = document.getElementsByTagName("mark")[0];
   		var oimg = document.getElementById("imgs");
   		oh2.innerHTML = data[attr].name;
   		ospan.innerHTML = data[attr].jiage;
   		
   	}
   }
      
	  
  } 