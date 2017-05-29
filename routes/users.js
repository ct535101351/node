var express = require('express');
var router = express.Router();
//mongo服务
var mongodb=require('mongodb').MongoClient;
//数据库地址
var db_str='mongodb://localhost:27017/register'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/list',function(req,res,next){
		
//	res.send('注册成功')
		//获取表单数据
		var myDate=new Date()
		var time=myDate.toLocaleString( );
		var user=req.body['user']
		var email=req.body['email']
		var con=req.body['con']

//		res.send(p2)
		//插入函数
		var insertdata=function(db,callback){
			//找到要插入的集合
			var coll=db.collection('liuyan1')
			//设置需要插入集合的文档数据
			var data=[{user:user,email:email,con:con,time:time}]
			coll.insert(data,function(err,result){
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
		}
		
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功')
				//调用插入函数
				insertdata(db,function(result){
					console.log(result)
					res.redirect('/conten1')
								
				})
//				res.send('恭喜你，注册成功')
				//关闭数据库
				
				db.close()
			}
						
		})

})

router.post('/list1',function(req,res,next){
		
//	res.send('注册成功')
		//获取表单数据
		var myDate=new Date()
		var time=myDate.toLocaleString( );
		var user=req.body['user']
		var email=req.body['email']
		var con=req.body['con']

//		res.send(p2)
		//插入函数
		var insertdata=function(db,callback){
			//找到要插入的集合
			var coll=db.collection('liuyan2')
			//设置需要插入集合的文档数据
			var data=[{user:user,email:email,con:con,time:time}]
			coll.insert(data,function(err,result){
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
		}
		
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功')
				//调用插入函数
				insertdata(db,function(result){
					console.log(result)
					res.redirect('/conten2')
								
				})
//				res.send('恭喜你，注册成功')
				//关闭数据库
				
				db.close()
			}
						
		})

})

router.post('/list2',function(req,res,next){
		
//	res.send('注册成功')
		//获取表单数据
		var myDate=new Date()
		var time=myDate.toLocaleString( );
		var user=req.body['user']
		var email=req.body['email']
		var con=req.body['con']

//		res.send(p2)
		//插入函数
		var insertdata=function(db,callback){
			//找到要插入的集合
			var coll=db.collection('liuyan3')
			//设置需要插入集合的文档数据
			var data=[{user:user,email:email,con:con,time:time}]
			coll.insert(data,function(err,result){
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
		}
		
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功')
				//调用插入函数
				insertdata(db,function(result){
					console.log(result)
					res.redirect('/conten3')
								
				})
//				res.send('恭喜你，注册成功')
				//关闭数据库
				
				db.close()
			}
						
		})

})

router.post('/list3',function(req,res,next){
		
//	res.send('注册成功')
		//获取表单数据
		var myDate=new Date()
		var time=myDate.toLocaleString( );
		var user=req.body['user']
		var email=req.body['email']
		var con=req.body['con']

//		res.send(p2)
		//插入函数
		var insertdata=function(db,callback){
			//找到要插入的集合
			var coll=db.collection('liuyan4')
			//设置需要插入集合的文档数据
			var data=[{user:user,email:email,con:con,time:time}]
			coll.insert(data,function(err,result){
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
		}
		
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功')
				//调用插入函数
				insertdata(db,function(result){
					console.log(result)
					res.redirect('/conten4')
								
				})
//				res.send('恭喜你，注册成功')
				//关闭数据库
				
				db.close()
			}
						
		})

})

router.post('/list4',function(req,res,next){
		
//	res.send('注册成功')
		//获取表单数据
		var myDate=new Date()
		var time=myDate.toLocaleString( );
		var user=req.body['user']
		var email=req.body['email']
		var con=req.body['con']

//		res.send(p2)
		//插入函数
		var insertdata=function(db,callback){
			//找到要插入的集合
			var coll=db.collection('liuyan5')
			//设置需要插入集合的文档数据
			var data=[{user:user,email:email,con:con,time:time}]
			coll.insert(data,function(err,result){
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
		}
		
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功')
				//调用插入函数
				insertdata(db,function(result){
					console.log(result)
					res.redirect('/conten5')
								
				})
//				res.send('恭喜你，注册成功')
				//关闭数据库
				
				db.close()
			}
						
		})

})

router.post('/list5',function(req,res,next){
		
//	res.send('注册成功')
		//获取表单数据
		var myDate=new Date()
		var time=myDate.toLocaleString( );
		var user=req.body['user']
		var email=req.body['email']
		var con=req.body['con']

//		res.send(p2)
		//插入函数
		var insertdata=function(db,callback){
			//找到要插入的集合
			var coll=db.collection('liuyan6')
			//设置需要插入集合的文档数据
			var data=[{user:user,email:email,con:con,time:time}]
			coll.insert(data,function(err,result){
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
		}
		
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功')
				//调用插入函数
				insertdata(db,function(result){
					console.log(result)
					res.redirect('/conten6')
								
				})
//				res.send('恭喜你，注册成功')
				//关闭数据库
				
				db.close()
			}
						
		})

})




router.post('/regi',function(req,res,next){
		
//	res.send('注册成功')
		//获取表单数据
		var myDate=new Date()
		var time=myDate.toLocaleString( );
		var user=req.body['user']
		var pwd=req.body['pwd']

//		res.send(p2)
		//插入函数
		var insertdata=function(db,callback){
			//找到要插入的集合
			var coll=db.collection('regi')
			//设置需要插入集合的文档数据
			var data=[{user:user,pwd:pwd}]
			coll.insert(data,function(err,result){
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
		}
		
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功')
				//调用插入函数
				insertdata(db,function(result){
					console.log(result)
					res.redirect('/')
						db.close()		
				})
//				res.send('恭喜你，注册成功')
				//关闭数据库
				
				
			}
						
		})

})

router.post('/login',function(req,res,next){
		//查询函数
		var findData=function(db,callback){
			//找到要查询的集合
			var coll1=db.collection('regi')
			//数据查询
			var data={user:req.body['user'],pwd:req.body['pwd']}
			coll1.find(data).toArray(function(err,result){
				callback(result)
			})
		}
		//链接数据库 
		mongodb.connect(db_str,function(err,db){
			if(err){
				console.log(err)
			}else{
				console.log('链接成功11111')
				//调用查询函数
				findData(db,function(result){
					if(result.length>0){
//						res.send('登陆成功')
						//设置session／／index中获取传入到index。ejs中
//						 console.log(result);
//						 console.log(req.session);
						 
						req.session.user=result[0].user
//				console.log(req.session.user)
//						res.send(result)
						res.redirect('/');
						db.close()
						
					}else{
						res.redirect('/')
						res.send('账号密码错误')
						
					}			
				})
			}
		})
})



module.exports = router;
