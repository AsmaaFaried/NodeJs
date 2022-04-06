const CalculateMethods=require('./Modules/myModule');
const UserMethods=require('./Modules/CheckModule');


CalculateMethods.addNumbers(1,3);
CalculateMethods.addNumbers('A',3);


var correctDate = new Date('December 27, 1999');
var wrongDate = new Date('December 27, 2020');


UserMethods.User('Asmaa Faried',correctDate);
UserMethods.User('Asmaa',wrongDate);