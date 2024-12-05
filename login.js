
var email = document.getElementById('email')
var password = document.getElementById('password')
var log = document.getElementById('log')
log.onclick=loginn

var list2= JSON.parse(localStorage.getItem('signup'))

function loginn() {
    var mail=email.value;
    var pass=password.value;
    if (email.value && password.value) {
        let y=false;
        for (var i = 0; i < list2.length; i++) {
            if (list2[i].email ===mail && list2[i].password=== pass){
                y=true
                localStorage.setItem('name',list2[i].name)
                break;
            }
    }
    if(y){
            window.location.href='./index3.html'
      
    }else{
        var cartona=`<p class='text-danger text-center py-3'>incorrect email or password</p>`
            document.getElementById('show').innerHTML=cartona;
    }
}
else{
    var cartona=`<p class='text-danger text-center py-3'>All inputs is required</p>`
    document.getElementById('show').innerHTML=cartona;
}
}