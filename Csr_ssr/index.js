let express=    require('express')
let app=  express()
let todo=[1,2,3,4,5,56,'hello']

app.use(express.urlencoded({ extended: true }));
app.use( '/cat',express.static('public'))

app.get('/',(req,res)=>{
    res.send('hello')
})


app.get('/todo',(req,res)=>{
    res.json(todo)
})

app.post('/todo',(req,res)=>{
    console.log(req.body,"rrr")
    let {value}=req.body
    console.log(value)
    todo.push(value)
    res.send('helklk')

})

app.listen(3000,()=>{

    console.log('server runnning on port no 3000')

})