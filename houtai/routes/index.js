var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/zhengzhou"
var ObjectId=require('mongodb').ObjectId;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

//tables
router.get('/tables',(req,res)=>{
  mongodb.connect(db_str,(err,database)=>{
		database.collection('houtai',(err,coll)=>{
			coll.find({}).sort({_id:-1}).toArray((err,data)=>{
				res.render('tables',{data:data})
				database.close()
			})
		})
	})	
});

//forms
router.get('/forms',(req,res)=>{
	var id=ObjectId(req.query.id)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('houtai',(err,coll)=>{
			coll.find({_id:id}).sort({_id:-1}).toArray((err,data)=>{
				res.render('forms',{result:data[0]})
				database.close()
			})
		})
	})	
})

//login
router.get('/login',(req,res)=>{
	res.render('login',{})
})
module.exports = router;
