function R(fn: ()=> void){
    setTimeout(fn,1000);
}

R(function(){
    console.log('hello')
});