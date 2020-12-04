$(document).ready(() => {
    $('#searchBtn').on('keyup', (e) => {
       let userName = e.target.value;

       $.ajax({
           url:'http://api.github.com/users/' + userName,
           data: {
               client_id:'dcf11212b3ca6f446fb5',
               client_secret:'a6efddb76f0c4b0abf344628de097de4537db043'
           }
       }).done((userData) => {
           console.log(userData);
       })
    })
})