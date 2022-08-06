//১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে।
// let [variable1, variable2, variable3] = ["Hello, World!", "Testing...", 42];

// console.log(variable1); // Hello, World!
// console.log(variable2); // Testing...
// console.log(variable3); 

var str = ["hello i am bangladeshi", "I am hungry to learn code ", "I like javascript codding"];
function capFirst(str) {
    for (var i = 0, n = str.length; i < n; i++) {
        var e = str[i];
        console.log(e);
    }

}

capFirst(str);
