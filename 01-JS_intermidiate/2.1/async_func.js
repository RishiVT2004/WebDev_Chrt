// synchrounos func -> run on js thread... 
/*
function file_rishi(contents){
    console.log(contents)
}

readFile("async.txt",file_rishi) // async call

console.log("hello")

as js is single threaded in nature it can only execute 1 command at a time..
in operartion readFile() js is reading a file present in system , but i dosen't has direct permission
first the OS needs to approve then js can execte readFile()
during this time of approval js execte other codes in the file and when OS approves it reaches back 
and executes the readFile() function 
This is called Async Calls .... thread is not stuck at fileRead()

to visualise -> loupe.com 
*/


function command(){
    console.log('command executed...')
    console.log('async call ends')
}

console.log('async call started')
setTimeout(command,5000);// -> clock is stored in WEB API and then pushed to callback queue then prints on call stack

console.log('loop call started')
function run_loop(){
    for(let i = 0;i<5;i++){
        console.log(i)
    }
    console.log('loop call ended')
}

setTimeout(run_loop,2000)


// ReadFile -: 

/*
const fs = require("fs");

fs.readFile("rishi.txt","utf-8", 
    function(err,data){
        console.log('readfile started ')
        // console.log(err); // returns null -> no error
        console.log(data);
        console.log('readFile ended.. ')
});

console.log('start loop execution....')
for(let i = 0;i<10;i++){
    if(i%2==0){
        console.log(i)
    }
}
console.log('loop execution ended .... ')

*/
