/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */

const SMSClient = require('./../index')
const express=require('express');
const mongodb=require('mongodb').MongoClient;
const db_str="mongodb://localhost:27017/zhengzhou"
var bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIZ36Q6ycVvFJT'
const secretAccessKey = 'GWfY14DjVSYCM8lbmrZWPnHAOjBWV8'

//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName,不用填最后面一段
const queueName = 'Alicom-Queue-1092397003988387-'

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})

//短信回执报告
smsClient.receiveMsg(0, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
//      console.log(body)
    }
}, function (err) {
//  console.log(err)
})

//短信上行报告
smsClient.receiveMsg(1, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
//      console.log(body)
    }
}, function (err) {
//  console.log(err)
})


//查询短信发送详情
smsClient.queryDetail({
    PhoneNumber: '17629370815',
    SendDate: '20180612',
    PageSize: '10',
    CurrentPage: "1"
}).then(function (res) {
    let {Code, SmsSendDetailDTOs}=res
    if (Code === 'OK') {
        //处理发送详情内容
//      console.log(SmsSendDetailDTOs)
    }
}, function (err) {
    //处理错误
//  console.log(err)
})


//发送短信
function send(phonenum,yzm){
	smsClient.sendSMS({
	    PhoneNumbers: phonenum,
	    SignName: '限量版',
	    TemplateCode: 'SMS_137400069',
	    TemplateParam: `{"code":${yzm}}`
	}).then(function (res) {
	    let {Code}=res
	    if (Code === 'OK') {
	        //处理返回参数
	//      console.log(res)
	    }
	}, function (err) {
	//  console.log(err)
	})
}


//随机验证码
var yzmcode;
function suiji(){
	yzmcode=Math.floor(Math.random()*10000)
	return yzmcode;
}


app.post('../../views/register',(req,res)=>{
	res.header('Access-Control-Allow-Origin','*')
	var id=req.body.id;
	var phonenum=req.body.phonenum;
	
	if(id==1){
		suiji()
		console.log(yzmcode)
		send(phonenum,yzmcode)
	}else{
		var yzm=req.body.yzm;
		if(yzm==yzmcode){			
			mongodb.connect(db_str,(err,database)=>{
				database.collection('yzm',(err,coll)=>{
					coll.save({phonenum:phonenum},()=>{
						database.close()
						res.send('注册成功')
					})
				})
			})	
		}else{
			res.send('验证码错误')
		}
		
		
	}
	
	
	
	
	
	
})





app.listen(3000)
