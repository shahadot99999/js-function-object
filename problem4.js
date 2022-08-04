// 4) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:// Has return + Has parameter  //No return + Has parameter

// Has return + Has parameter
// var num = 20;
// function oddOrEven(num) {
//     if (num % 2 == 0)
//         return "even";
//     return "odd";
// }

// var odd_even = oddOrEven(num);
// console.log('Your Value is : ', odd_even);

//No return + Has parameter

var nums = 15;
function oddOrEven(nums) {
    if (nums % 2 !== 0) {
        console.log("Odd number ");
    }
    else {
        console.log("Even number ");
    }

}
oddOrEven(nums);
