function mul(a,b,...c) {
//    var x={...c};//it treate as parameter 
   console.log(c);
    return a * b ;
}

console.log("Multiplication is: "+mul(2,3,4,5,6));