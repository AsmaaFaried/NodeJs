var name='',dataOfBirth=new Date(),errorDate="Please enter valid data or any year except 2020";

function UserDate(name,dataOfBirth){
    if(name==='' || dataOfBirth===''){
        console.error("Please send your name and age");
    }
    if(dataOfBirth.getFullYear() =='2020'){
        console.error(errorDate);
    }
    if(name.length <3 || typeof name !=='string'){
        console.error("Please enter valid name");
    }
    else{
        console.log('Your name is '+name,' and Your agen '+dataOfBirth);
    }
}
module.exports = {User:UserDate};