
	function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}
				return getComputedStyle(obj, null)[attr]
			}
			//定义一个运动封装函数sportive,传入三个参数，obj=>运动封装的对象，json=>以对象的形式传入想要属性和属性值，（属性值是对象要达到的目标值），fn=>是可以再传一个函数为参数，让obj的json中的对象执行完再执行fn。
			function sportive(obj,json,fn){
				var cont = false;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var count1=0;	//定义两个计数器
					var count2=0;		
					
					//用for in 来获取json中的attr的属性的属性值，
					for(var attr in json){
						count1++;//for in 执行的话就++，也就是for in 里的若没有变量也就是没有定义;
						//判断for in 中的attr有没有opacity属性
						if(attr=="opacity"){
							//若有opacity属性,则定义yzhi获取obj对象本来的attr（）
							var yzhi=Math.round(getStyle(obj,attr)*100);//若attr 是opacity那么，他的值为获取的对象的opacity*100
						}else{
							var yzhi=parseInt(getStyle(obj,attr));//若attr不为opacity，那么直接获取对象的属性值。
						}
						//用josn中的attr值（也就是目标值）减去对象的原有值yzhi，也就是原有值到目标值之间的值，除以10是把之间的值除以10，（10次就是你想让他这个定时器执行10次就能达到目标，10可以自己随便定义）,也就是除以时相当于iSpeed为中间值的10分之一，
						var iSpeed=(json[attr]-yzhi)/10;
						
						//用三目运算符判断iSpeed>0? 大于零让他向上取整，小于零让他向下取整
						iSpeed=iSpeed>0? Math.ceil(iSpeed):Math.floor(iSpeed);
						//console.log(yzhi,iSpeed);
						if(attr=="opacity"){
							//如果attr是opacity，那么设置obj对象的style的opacity的属性为：yzhi加上中间值ispeed的10分之一，因为是opacity  所以除以100；第一个兼容火狐
							obj.style.opacity=(yzhi+iSpeed)/100;
							obj.style.filter="alpha(opacity="+(yzhi+iSpeed)+")"
						}else{
							//如果attr不是opacity，那么取正常的值带像素单位
							obj.style[attr]=yzhi+iSpeed+"px";
						}
						//若原有的值（原有的值在定时器上在不断增长或减少），等于json[attr]（设置的目标的值，也就是边界）
						if(yzhi==json[attr]){
//							//那么清楚定时器
//							clearInterval(obj.timer)
							count2++//当到达边界是 count2++；
						}
					}
					//当多条josn传进去的值都执行完了，（也就是count1，count2都加加了）
					if(count1==count2){
						//当多条条件都达到了目标值，那么清楚定时器
						clearInterval(obj.timer);
						//function sportive(obj,json,fn){fn=>是可以再传一个函数为参数，让obj的json中的对象执行完再执行fn。(语句都执行完了，那么就可以执行后面传的第三个参数fn了)
							if(fn){//若fn可以获取（if（fn）若传入参数有fn的，那么if(fn==true)则执行if的语句，若没有传入参数fn，那么if(fn==false),所以就不执行了）
								fn();
							}
					}
				},30)
				
			}
	
	
	
	
	//定义一个封装函数Ajax（），形参type=>传入GET 或  POST，url=>地址对象，data=>ajax要验证的对象，fn1=>传入的是函数，函数为回调函数用来表示ahax验证成功或失败的表现形式的输出方式，fn2=>和fn1一样，一般和前者相对（fn1代表验证成功的话，fn2就代表验证失败）
function Ajax(type, url, data, fn1, fn2) {
	//用三目运算法创建XMLHttpRequest的对象
	var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	//定义一个变量str，为空字符串，用于下面的字符串连接
	var str = "";
	//传入的参数data为对象类型(格式如：{"name":"john1","age":20})
	for(var i in data) {
	//用for in 便利对象data，再吧便利的data用字符串连接成我们要获取的字符串（'?name=jhon1&age=20&'）
		str += i + "=" + data[i] + "&";
	}
	//上面的字符串连接会把name=jhon1&age=20& ，最后会多一个&符，用正则表达式删除了最后的一个&。
	str=str.replace(/&$/, "");
	//判断你传的参数type的值是GET  还是  POST
	if(type.toUpperCase() == "GET") {
		//最后的结果是  一个连接地址加上 ?name=jhon1&age=20
		xhr.open(type, url + "?" + str, true);
		//发送请求
		xhr.send();
	}
	if(type.toUpperCase() == "POST") {
		xhr.open(type, url, true);
		//表单post数据时，会发送content-type，所以我们在ajax中就要制定该字段值为application/x-www-form-urlencoded，并且对字段名称和值进行编码处理再发送
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		//发送请求，GET的请求设置为null,POST的为数据name=jhon1&age=20
		xhr.send(str);
	}
	//xhr通过onreadystatechange属性指定的readystate属性改变时
	xhr.onreadystatechange = function() {
		//判断数据是否接收成功为：xhr.readyState == 4 和  xhr.status == 200。xhr.readyState == 4的话是数据接收完毕，xhr.status == 200的话是文档找到了并正确返回，也可能是304 和 403 和404，但是xhr.readyState == 4的话是必须要完成的 
		if(xhr.readyState == 4) {
			//若xhr.status == 200的话是文档找到了并正确返回，
			if(xhr.status == 200) {
				//若正确找到了文档则获取响应的信息作为字符串返回
				var dat = xhr.responseText;
				//判断是否给fn1传参，若传参了则 调用回调函数fn1
				if(fn1) {
					fn1(dat);
				}
			} else {
				//若xhr.status ！= 200，那么也就是文档没有找到，所以验证失败 则调用回调函数fn2
				if(fn2) {
					fn2();
				}
			}
		}
	}

}
	
	
	//ajax
	 
	
	
	//轮播
	
			
	
	
	
	
	
	
	
	
	

