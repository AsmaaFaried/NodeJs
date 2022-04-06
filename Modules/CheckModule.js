var name='',dataOfBirth=new Date(),errorDate="Please enter any year except 2020";

function UserDate(name,dataOfBirth){

    if(dataOfBirth.getFullYear() =='2020'){
        console.error(errorDate);
    }
    else{
        console.log('Your name is '+name,' and Your agen '+dataOfBirth);
    }
}
module.exports = {User:UserDate};