//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
var str = ["hello i am bangladeshi"];
function capFirst(str) {
    var result = str[0].toUpperCase();
    console.log(result);
}

capFirst(str);