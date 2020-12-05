//document.documentElement.style.setProperty('--animate-duration', '2s');
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
                    <h2 class="name animate__animated animate__backInDown">${userData.name}</h2>
                    <h3 class="userId animate__animated animate__backInLeft">@${userData.login}</h3>
                    <div class="user_info">
                        <h4 class="animate__animated animate__backInLeft animate__delay-1s"><i class="material-icons">work</i> ${userData.bio}</h4>
                        <h4 class="animate__animated animate__backInLeft animate__delay-2s"><i class="material-icons">location_on</i> ${userData.location}</h4>
                        <h4 class="animate__animated animate__backInLeft animate__delay-3s"><i class="material-icons">rss_feed</i><a href="https://${userData.blog}" target="_blank"> ${userData.blog}</a></h4>
                        <h4 class="animate__animated animate__backInLeft animate__delay-4s"><i class="material-icons">supervisor_account</i> Follower : ${userData.followers}</h4>
                        <h4 class="animate__animated animate__backInLeft animate__delay-5s"><i class="material-icons">follow_the_signs</i> Following : ${userData.following}</h4>
                    </div>
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
            <div class="repo_item shadow1 animate__animated animate__backInUp">
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
