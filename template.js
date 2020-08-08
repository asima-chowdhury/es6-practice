const firstName = "Asima";
const lastName = "Chowdhury";
const fullName = firstName + ' ' + lastName + " is a good girl!";
console.log(fullName); 

/*---- using backtick --------*/ 
const fullName2 = `${firstName} ${20+30+40} is a good girl.`; 
console.log(fullName2);

/*---- using \n for multiple line--------*/ 
const multiLine1 = "I am Asima\n" + "I am a Student\n" + "Want to be a best Web developer!\n";
console.log(multiLine1);

/*---- using backtick (ES6) for multiple line --------*/ 
const multiLine2 =  `I am Asima
                    I love Maa
                    My world is Maa! `;
console.log(multiLine2);