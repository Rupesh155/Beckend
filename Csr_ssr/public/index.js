  function send(){
console.log('helllo')
$('#list').empty();
    $.get('/todo',(data)=>{
        console.log(data)
        for(let todo of data){
            $('#list').append(`<li>${todo}</li>  `)
        }  

    })

  }

  send()



  $('#btn').on('click',()=>{
    console.log('helllo')
    let value=   $('#inp').val()
console.log(value,"rrr")
$.post('/todo',{value},()=>{  
  $('#inp').val('')
  send()
})
// console.log(value,"valuewwwww")
})





 






 







   

$('btn').on('click',function(){
    console.log('hello')

})