//Extra.  ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

var num = 13

function multiplication(num) {

    for (var i = 1; i <= 10; i++) {
        result = i * num;
        console.log("Your number is " + result);

    }
    return result;
}
multiplication(num);