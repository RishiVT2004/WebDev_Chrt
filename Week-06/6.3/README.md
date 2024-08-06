## Some inportant learnings 

# Reconcilation 
-: react takes the curr state , finding the diff b/w prev and curr state and modifing the dom accordingly ,(this re rendering occures continiously )
Eg : We need a CA to manage huge amount of money instead managing it ourself 

# ReactDOM -:
contails all the libraries that helps to update and re render the DOM

# useEffect -:
dependenct arr = [] => null -> rerender happens only once , else [n] ; n no. of rerendering ,used to prevent infinte re rendering from backend / database 

# useCallBack 
-> Non necessary , can be performed by use Memo , used for not rendering a child component if funv dosen't need to change across

# UseMemo
-> we want the crypto and mf returns to not re render{a certain segment of code} when bank data re renders{second segment of code}

# UseRef -: 
Helps to access & change dom element access , not to be used in ideal cases 
