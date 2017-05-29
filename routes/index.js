var express = require('express');
var router = express.Router();

var app=express()
//mongo服务
var mongodb=require('mongodb').MongoClient;
//数据库地址
var db_str='mongodb://localhost:27017/register'


/* GET home page. */
router.get('/', function(req, res, next) {
//					res.render('index',{user:req.session.user})
	
	var findData=function(db,callback){
			//找到要查询的集合
			var coll=db.collection('message')
			coll.find({}).toArray(function(err,result){
		 		callback(result)		 		
			})
		}
  mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result){
					res.render('index',{result:result,user:req.session.user})
					console.log(req.session.user)
				})
			}
		})
});


router.get('/conten1', function(req, res, next) {
	var findData=function(db,callback){
			//找到要查询的集合
			var coll=db.collection('message')
			
			coll.find({}).toArray(function(err,result){
				var coll1=db.collection('liuyan1')
				coll1.find({}).toArray(function(err,result1){
					var coll2=db.collection('regi')
					coll2.find({}).toArray(function(err,result3){
			 		callback(result,result1,result3);
			 		})
				})
		 		
			})			
			
		}
  mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result,result1,result3){
					res.render('conten1',{result:result,result1:result1,result3:result3,user:req.session.user})

				})
			}
		})
});


router.get('/conten2', function(req, res, next) {
	var findData=function(db,callback){
			//找到要查询的集合
			var coll=db.collection('message')
			coll.find({}).toArray(function(err,result){
				var coll1=db.collection('liuyan2')
		 		coll1.find({}).toArray(function(err,result1){
		 			var coll2=db.collection('regi')
		 			coll2.find({}).toArray(function(err,result3){
			 		callback(result,result1,result3);
			 		})
				})
			})
		}
  mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result,result1,result3){
					res.render('conten2',{result:result,result1:result1,result3:result3,user:req.session.user})
//					console.log(result)
				})
			}
		})
});

router.get('/conten3', function(req, res, next) {
	var findData=function(db,callback){
			//找到要查询的集合
			var coll=db.collection('message')
			coll.find({}).toArray(function(err,result){
				var coll1=db.collection('liuyan3')
		 		coll1.find({}).toArray(function(err,result1){
		 			var coll2=db.collection('regi')
		 			coll2.find({}).toArray(function(err,result3){
			 		callback(result,result1,result3);
			 		})
				})
			})
		}
  mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result,result1,result3){
					res.render('conten3',{result:result,result1:result1,result3:result3,user:req.session.user})
//					console.log(result)
				})
			}
		})
});

router.get('/conten4', function(req, res, next) {
	var findData=function(db,callback){
			//找到要查询的集合
			var coll=db.collection('message')
			coll.find({}).toArray(function(err,result){
				var coll1=db.collection('liuyan4')
		 		coll1.find({}).toArray(function(err,result1){
		 			var coll2=db.collection('regi')
		 			coll2.find({}).toArray(function(err,result3){
			 		callback(result,result1,result3);
			 		})
				})
			})
		}
  mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result,result1,result3){
					res.render('conten4',{result:result,result1:result1,result3:result3,user:req.session.user})
//					console.log(result)
				})
			}
		})
});

router.get('/conten5', function(req, res, next) {
	var findData=function(db,callback){
			//找到要查询的集合
			var coll=db.collection('message')
			coll.find({}).toArray(function(err,result){
				var coll1=db.collection('liuyan5')
		 		coll1.find({}).toArray(function(err,result1){
		 			var coll2=db.collection('regi')
		 			coll2.find({}).toArray(function(err,result3){
			 		callback(result,result1,result3);
			 		})
				})
			})
		}
  mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result,result1,result3){
					res.render('conten5',{result:result,result1:result1,result3:result3,user:req.session.user})
//					console.log(result)
				})
			}
		})
});

router.get('/conten6', function(req, res, next) {
	var findData=function(db,callback){
			//找到要查询的集合
			var coll=db.collection('message')
			coll.find({}).toArray(function(err,result){
				var coll1=db.collection('liuyan6')
		 		coll1.find({}).toArray(function(err,result1){
		 			var coll2=db.collection('regi')
		 			coll2.find({}).toArray(function(err,result3){
			 		callback(result,result1,result3);
			 		})
				})
			})
		}
  mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result,result1,result3){
					res.render('conten6',{result:result,result1:result1,result3:result3,user:req.session.user})
//					console.log(result)
				})
			}
		})
});

//router.get('/login', function(req, res, next) {
//	var findData=function(db,callback){
//			//找到要查询的集合
//			var coll=db.collection('regi')
//			coll.find({}).toArray(function(err,result){
//				
//			 		callback(result);
//				
//			})
//		}
//mongodb.connect(db_str,function(err,db){
//			if(err){
//				console.log(err)
//			}else{
//				console.log('链接成功11111')
//				//调用查询函数
//				findData(db,function(result){
//					res.render('/',{result:result})
////					console.log(result)
//				})
//			}
//		})
//});


router.get('/login',function(req,res,next){
	res.render('login',{})
})

router.get('/regi', function(req, res, next) {

					res.render('regi',{})


});


router.get('/relogin',function(req,res,next){
	//销毁session对象
	req.session.destroy(function(err){
		if(err){
			console.log(err)
		}else{
			res.redirect('/')
		}
	})
})

module.exports = router;
