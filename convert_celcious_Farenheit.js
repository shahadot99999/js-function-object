//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 


var celsius = 30;
function convertToF(celsius) {

    let fahrenheit = celsius * 9 / 5 + 32;
    console.log("Your fahrenheight result is" + " " + fahrenheit);

}
convertToF(celsius);

var fahrenheit = 86;
function convertToC(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log("Your celsious result is" + " " + celsius);

}
convertToC(fahrenheit);
