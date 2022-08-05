//৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 3.   Simple  interest: principal, interest rate, time….> interest amount 4. Complex Interest

var p = 1000;
var t = 12;
var r = 8;

function simple_interest() {

    si = parseInt((p * t * r) / 100);
    amount = p * Math.pow((1 + r / 100), t);
    ci = amount - p;

    console.log("Simple interest : " + si);
    console.log("Compound interest : " + ci);

}

simple_interest();



