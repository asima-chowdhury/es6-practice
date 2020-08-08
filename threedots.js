/* ----- old system -----*/
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [ages, ages2, 5, ages3]; //output = [ [ 12, 14, 16, 13, 17 ], [ 15, 16, 12 ], 5, [ 25, 36, 22, 29 ] ]

/* ----- using Threedots -----*/
const allAges3 = [...ages, ...ages2, 5, ...ages3];//output = [12, 14, 16, 13, 17, 15,16, 12, 5, 25, 36, 22,29]
console.log(allAges);
console.log(allAges2);
console.log(allAges3);


/* ----- find maximum value -----*/
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum); //output = 650

/* ----- find maximum value from array-----*/
const maxMan = [650,450, 250];
const max = Math.max(maxMan);//output will be 'NaN' because "Math.max" cannot access values of array
console.log(max);//output = NaN

const max2 = Math.max(...maxMan);//now output will be maximum value 
console.log(max2);//output = 650