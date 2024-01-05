
function refreshList(){
    $.get('/todos' , function(data){
        // console.log(data);
        for(let todo of  data){
            $('#list').append(`<li>${todo} </li>`)
        }
    })
}
refreshList();