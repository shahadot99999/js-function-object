//2) Write a function called make_avg() which will take an three integers and return the average of those values.


function getAverage(num1, num2, num3) {
    const total = num1 + num2 + num3;
    const average = total / 3;
    return average;
}

const num1 = 160;
const num2 = 158;
const num3 = 159;

var make_avg = getAverage(num1, num2, num3);
console.log('my average so far: ', make_avg);

