const info = {
    "name": "Rishi",
     age: "19",
    "gender":"male"
}

//console.log(info["name"])

//JSON.parse , JSON.stringify

// stringify -> convert object to string... sending out data as string 
// parse -> opposite of stringify... recieving data and converting to object

const user = {
    name: "rishi",
    cgpa: "9.25"
}

const String = JSON.stringify(user)
console.log(String) // {"name":"rishi","cgpa":"9.25"}