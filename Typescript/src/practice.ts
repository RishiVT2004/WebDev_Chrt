function greet(Name : any){
    console.log('Hello',Name)
}

greet("Rishi")

function CalcSum(a:number , b:number , c:number) :number{ // not necessary but helps for better outpurt checking
    return a+b-c;
}

let value = (CalcSum(10,20,30))

function isValid(age : number) :boolean {
    if(age > 18) return true;
    return false;
}

function RunAfterXseconds(fn: ()=> void){
    setTimeout(fn,1000);
}

RunAfterXseconds(function(){
    console.log('hello')
});