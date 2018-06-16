var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/zhengzhou"
var ObjectId=require('mongodb').ObjectId;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//tables
router.post('/tables',(req,res)=>{
	mongodb.connect(db_str,(err,database)=>{
		database.collection('houtai',(err,coll)=>{
			coll.save(req.body,()=>{
				res.send('1')
				database.close()
			})
		})
	})
})

//forms删除
router.post('/forms',(req,res)=>{
	var id=ObjectId(req.body.id)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('houtai',(err,coll)=>{
			coll.remove({_id:id},()=>{
				res.send('1')
				database.close()
			})
		})
	})
})
//forms修改
router.post('/zhengzhou',(req,res)=>{
	var id=ObjectId(req.body.pid)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('houtai',(err,coll)=>{
coll.update({_id:id},{id:req.body.id,name:req.body.name,tel:req.body.tel},()=>{
				res.send('2')
				database.close()
			})
		})
	})
})
module.exports = router;
