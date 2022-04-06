var num1=0.0,num2=0.0;
var errorMsg="Error,Please send numbers only"
function Add(num1,num2){
    var sum=0.0;
    if(isNaN(num1) || isNaN(num2) ){
        console.error(errorMsg);
    }
    else{
        sum=num1+num2;
        console.log("Sum = ",sum)
    }
   
}
function Sub(num1,num2){
    var sub=0.0;
    if(isNaN(num1) || isNaN(num2) ){
        console.error(errorMsg);
    }else{
        sub=num1-num2;
        console.log("Sub = ",sub)
    
    }
 
}
function Multi(num1,num2){
    var multi=0.0;
    if(isNaN(num1) || isNaN(num2) ){
        console.error(errorMsg);
    }
    else{
        multi=num1*num2;
        console.log("Multi = ",multi)
    }
    

}
module.exports = {
    addNumbers:Add,
    subNumbers:Sub,
    multiNumbers:Multi
}