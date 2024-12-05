var username=document.getElementById('name')
var email=document.getElementById('email')
var password=document.getElementById('password')
var sign=document.getElementById('btnsign')
var list=[]
sign.onclick=signup
function signup(){
    var info={
        name:username.value,
        email:email.value,
        password:password.value
    }
    if(username.value&&email.value&&password.value){
        let y=false;
        for(var i=0;i<list.length;i++)
        {
            if(list[i].email==email.value)
            {
                y=true;
                break;
            }
        }
            
            if(y)
            {
                var cartona=`<p class='text-danger text-center py-3'>Email already exist</p>`
                document.getElementById('show').innerHTML=cartona;

            }
            else{
                 var cartona=`<p class='text-success text-center py-3'>success</p>`
                 document.getElementById('show').innerHTML=cartona;
                 list.push(info)
                 localStorage.setItem('signup',JSON.stringify(list) )
            }
        
    }
    else{
        var cartona=`<p class='text-danger text-center py-3'>All inputs is required</p>`
        document.getElementById('show').innerHTML=cartona;
    }
}