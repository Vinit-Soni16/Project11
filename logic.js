var btn=document.querySelector('button');
var h5=document.querySelector('h5');
var flag =0;

btn.addEventListener('click',function(){
    if(flag == 0){
    h5.innerHTML='Request Sending...';
    h5.style.color='gold';
    btn.innerHTML='Adding...'

    setTimeout(function(){
        h5.innerHTML="Legend";
        h5.style.color='red';
        btn.innerHTML='Remove Friends';
        flag=1
    },3000)

}
else{
    h5.innerHTML='Stranger';
    h5.style.color='red';
    btn.innerHTML='Add Friends';
    flag=0;
}
})