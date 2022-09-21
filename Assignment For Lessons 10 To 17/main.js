// Add Variables Here
let number_one = 10; 
let number_two = 20; 

// Output
console.log(""+number_one+number_two); // Normal Concatenate => 1020
console.log(typeof (""+number_one+number_two)); // Normal Concatenate => String
console.log(`${number_one}${number_two}`); // Template Literals Way => 1020
console.log(typeof `${number_one}${number_two}`); // Template Literals Way => String

console.log(number_two + "\n" + number_one);
/*
    Normal Concatenate
    20
    10
*/

console.log(`${number_two}
${number_one}`);
/*
    Template Literals Way
    20
    10
*/

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log("`I'm In \n\\\\\nLove \\\\ \"\"\" \'\'\' \n++ with ++\n\\\"\"\" \\\"\"\" \n\"\"JavaScript\"\"``")

let a = 21;
let b = 20;

console.log("_"+a+"_"+b+a+"_"+b+a+"_"+b+a+"_"+b+"_"); // _21_2021_2021_2021_20_