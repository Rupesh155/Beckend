let mongoose=  require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myDataBase')
.then(()=>{
    console.log('db conneted')

}).catch((err)=>{ 
    console.log(err)
})

   

  let   userData= new mongoose.Schema({
      id:Number,
       name:String,
      isBool:Boolean

          })


     let User=     mongoose.model('User', userData)
       let  UserData =   new  User({id:1,name:'helloo', isBool:true})
       UserData.save()
    //  console.log(ser,"rrrr")




    


        




