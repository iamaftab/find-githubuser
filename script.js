$(document).ready(() => {
    $('#searchBtn').on('keyup', (e) => {
       let userName = e.target.value;

       $.ajax({
           url:'http://api.github.com/users/' + userName,
           data: {
               client_id:'',
               client_secret:''
           }
       }).done((userData) => {
           console.log(userData);
       })
    })
})
