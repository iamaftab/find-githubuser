$(document).ready(function() {
    $('#searchBtn').on('click', function() {
       let userName = $('#searchKey').val();

       $.ajax({
           url:'http://api.github.com/users/' + userName,
           data: {
               //add your github client details
           }
       }).done(function(userData) {
           //console.log(userData);
           $('#profile').html(`
           <div class="shadow2">
               <div class="avatar">
                    <img src="${userData.avatar_url}" class="shadow" alt="avatar">
                </div>
                <div class="username">
                    <h2 class="name">${userData.name}</h2>
                    <p class="userId">@${userData.login}</p>
                    <p>
                        <h4>${userData.bio}</h4>
                        <h4>${userData.location}</h4>
                        <h4>Blog: <a href="https://${userData.blog}" target="_blank">${userData.blog}</a></h4>
                    </p>
                </div>
                </div>
           `);
       });

       $.ajax({
        url:'http://api.github.com/users/' + userName +'/repos',
        data: {
            //add your github client details
        }
       }).done((repos) => {
           //console.log(repos);
           $('.repos').html("");
           $.each(repos, (index, repo) =>{
            $('.repos').append(`
            <div class="repo_item shadow1">
                 <div class="details">
                     <h2 class="repo_title">${repo.name}</h2>
                     <p class="repo_desc">${repo.description}</p>
                 </div>
                 <a href="${repo.html_url}" target="_blank" class="repo_link">Goto Repo</a>
             </div>
            `)
           });
       });
    });
});
