#### Strictly typed languages -: type conversion and type safety are very strict (C++ , C , Rust , Java)

easier to write,low learning curve

#### Loosely typed languages -: Python , Javascript

less runtime error , easier to catch errors at compile time , stricter codebase

### Typescript = javascript + stricter syntactical superset 

### How does TS code runs -:
1. TS never runs in your browser or ever
2. JS is the runtime language which runs in browser
3. TS is something that compiles to JS and then runs in browser
4. upon converting a TS file to JS file , if there is an error the conversion dosen't happen

#### tsc is the official TS compiler (converts TS to JS files)


#### format of declaring variables 

JS -: let a = 10
TS -: let a:number = 10

### while running a file(let index) always run index.js not index.ts

#### Types of inputs -:
String,number,boolean,null,undefined,any

### Function in TS

function CalcSum(a:number , b:number , c:number) :number{ // not necessary but helps for better outpurt checking
    return a+b-c;
}

### another example of how to assign type to function -: 

function RunAfterXseconds(fn: ()=> void){
    setTimeout(fn,1000);
}

RunAfterXseconds(function(){
    console.log('hello')
});

### Important TS.config files function

1. target -> specifies ECMAScript version 
2. rootDir -> where does compiler looks for TS files(usually set to src)
3. outDir -> where does compiler looks for JS files(usually set to dist -> never commit to github)
4. noImplicitAny -> removes some strictness regarding typecasting
