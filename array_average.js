//3) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

var num = [10, 30, 60, 80, 90]

function make_avg(num) {
    var total = 0;
    for (var i = 0; i < num.length; i++) {
        total += num[i];

    }
    return total / num.length;
}

var make_avg2 = make_avg(num);
console.log('my average so far: ', make_avg2);