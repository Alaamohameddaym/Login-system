       var logout=document.getElementById('logout')
       var username=localStorage.getItem('name')
       logout.onclick=out
       var cartona=`<p class="words-page text-center my-5 py-5">Welcome ${username}</p>`
       document.getElementById('show').innerHTML=cartona
       function out(){
        location.href='./index.html'
       }