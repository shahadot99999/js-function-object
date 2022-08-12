//৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো


var num = [10, 30, 60, 80, 90]

function make_sum(num) {
    var total = 0;
    for (var i = 0; i < num.length; i++) {
        total += num[i];


    }
    return total;
}

var make_sum2 = make_sum(num);
console.log('my total number is: ', make_sum2);