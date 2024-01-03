
let express = require('express')
let app = express()
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
let arr = [
  {
    id: 0,
    userName: "chetan",
    comment: "mai singer hu"
  },
  {
    id: 1,
    userName: "aashish",
    comment: "mai singer nhi hu"
  }, {
    id: 2,
    userName: "Ram",
    comment: "mandir whi banega"
  }, {
    id: 3,
    userName: "sanjh",
    comment: "ab se daily aaungi"
  }, {
    id: 4,
    userName: "aniket",
    comment: " sir doubt solve nii ho rhaa"
  }, {
    id: 5,
    userName: "poonam",
    comment: " mai kaha bolti hu"
  },

]



app.get('/', (req, res) => {
  res.send('this is home file')
})


app.get('/blog',(req,res)=>{
  res.render('index',{arr})

})

app.get('/blog/new',(req,res)=>{
  res.render('new')
})

app.post('/blog',(req,res)=>{
  console.log(req.body)
  let{ userName,comment}=req.body
  arr.push({userName,comment,id:arr.length})
  res.redirect('/blog')
})

app.get('/blog/:id',(req,res)=>{

  console.log(req.params,"rrrr")

  let {id}=req.params

   

   let SearchC=   arr.filter((key)=>{
        return key.id==id
      })
      console.log(SearchC)



  // res.send('idddd')
  res.render('show',{SearchC})
})

app.get('/blog/:id/edit',(req,res)=>{
  let {id}=req.params

    let upatedData=  arr.find((key)=>{
      return key.id==id
    })

    console.log(upatedData,"updateddd")

  res.render('edit',{upatedData})

})


   app.patch('/blog/:id',(req,res)=>{
    console.log(req.body," data aa gyaaa")
    let {id}=req.params
   let editedData=    arr.find((k)=>{
        return k.id==id
       })
       console.log(editedData,"ee")
       let {comment}=req.body
       editedData.comment=comment
        res.redirect('/blog')

   })

   app.delete('/blog/:id',(req,res)=>{
    let {id}=req.params
     let newArr=  arr.filter((d)=>{
        return d.id!=id
       })
       arr=newArr
       res.redirect('/blog')
    // res.send('delet ho gyaaaaa ')

   })




let port = 3000
app.listen(port, () => {
  console.log(`server running on port  ${port}`)
})



