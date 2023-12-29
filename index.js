
let express = require('express')
let app = express()
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
  arr.push({userName,comment})
  res.redirect('/blog')
})

let port = 3000
app.listen(port, () => {
  console.log(`server running on port  ${port}`)
})
