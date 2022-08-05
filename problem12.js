//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

let mark = 97;
function myGrading(mark) {

    if (mark <= 100 && mark >= 90) {
        console.log("Gread A+");
    }

    else if (mark <= 89 && mark >= 80) {
        console.log("Gread A");
    }

    else if (mark <= 79 && mark >= 70) {
        console.log("Gread B");
    }

    else if (mark <= 69 && mark >= 60) {
        console.log("Gread C");
    }

    else if (mark < 60) {
        console.log("Gread F");
    }

}
myGrading(mark);
