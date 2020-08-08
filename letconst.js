const hubby = "Elias Kanchon";
// hubby = "Omar Sunny";
console.log(hubby);

// const for array
const numbers = [12, 45];
console.log(numbers);

numbers[1] = 88;//update value of position 1
console.log(numbers);

numbers.push(12);//push new number in array
console.log(numbers);

// numbers = ["omar sunny", "salman shah"];//cannot change number type array to string type in this way
console.log(numbers);

const nayok = {name:"sakib khan", phone:12345};
console.log(nayok);

let patientName = "Rahim Chacha";
patientName = "Fatema KHala";
console.log(patientName);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;  
}
console.log(i);//here 'i' is a scope variable so outside the loop cannot access it 