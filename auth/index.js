let express=   require('express')
let app= express()
     let bcrypt=    require('bcrypt')
     let User=   require('./model/auth')
    // npm i cors
    let cors= require('cors')
let mongoose=   require('mongoose')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/auth')
.then(()=>{
    console.log('db comnneted')

}).catch((err)=>{
    console.log(err)
})
 
app.get('/',(req,res)=>{
    res.send('hello server')
})

app.post('/signup', async(req,res)=>{
    let user=req.body
    console.log(user,"rr")
    // res.send(user)
    let Email=  await  User.findOne({email:user.email})
    if(Email){
        res.send('user jinda aiii ')
    }
    else{
        // res.send('hehe')
     user.passWord=  await bcrypt.hash(user.passWord, 10)
    console.log(user,"rrrr")
    let dbUser=  new User({
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        passWord:user.passWord

    })
    // console.log(user,"rrrr");
  await  dbUser.save()

  res.send('user created  ')

          
    }

})





// login api 


app.post('/login',async(req,res)=>{
    let userInfo=req.body
    console.log(userInfo.passWord,"login password");
    let user
    try{

         user=   await User.findOne({email:userInfo.email})
         console.log(user.passWord,"signup passs");

    }catch{
        console.log('errr');

    }
    if(!user){
        res.send('user not found')
    }
    else{                                                                          
       let validPassoword=   await bcrypt.compare(userInfo.passWord,user.passWord)
            .catch((err)=>{
                console.log(err,'while matching passWord');
            })
            console.log(validPassoword,"valid");
            if(!validPassoword){
                res.send('Invalid passWord')
            }
            else{
                res.send('login ho gyaa')
            }
           
    }



    // res.send(userInfo)
    // console.log(userInfo,"rrr");

})









app.listen(4000,()=>{
    console.log('server running on port 4000')

})

