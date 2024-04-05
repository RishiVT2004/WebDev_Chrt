// project -: let people sign in to your website and then show the backend for it

/*
authentication -: login -> uname,password
things to understand prior -:
1. Hashing
2. Encryption
3. JWTs **
4. Local Storage

1. Hashing 
-> when password is stored in databases, they are hashded first(to prevent repeatation of password)
-> if a password "pass" is entered it must always return the hash of pass (which is stored in database)
-> converting a string to a complicated messgage.
-> for validation the hashed password is converted to stored password and compared to the entered password
-> 1 way in nature (given an hash it cant tell string)

2.Encryption 
-> 2 way in nature(provided you have a key)
-> biggest diff from hashing is that hashing dosen't require password to access it

3.JSON Web Tokens (JWT):
-> JSON : JavaScript Object Notation
-> Only works for JSON inputs.
-> Web Tokens : It takes the JSON input and converts it to Token
-> ** if for a given input, it generates an output, and if anyone has access to output , they can view the input(no protection).
-> if one passes a function jwt.decode(data) -> prior to being encoded the websites use jwt.verify(data(token),password(hashed)) -> get decoded data to access
-> |-> works vice-versa too
** anyone can decode,but whoever want to verify, they need the password,hence backend server always validate password
-> ** when you sign in successfully to an website, it returns you the JWT

4.Local Storage

-> JWTs(tokens) are stored here(locally in the browser). 
-> once a user gains jwt, he sends jwts instead of u_name,password to the server for authentication

Q] Create a website with 2 end point -:
1. POST/sign -> Give uname,password -> return a jwt with u_name encrypted
2. GET/users -> Takes Auth header in input -> returns array of users if user is signed in(correct token) -> else return 403 status code

*/

