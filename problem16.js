//৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 
function start() {
    var c;
    for (c = 50; c <= 80; c++) {
        if (c % 2 == 1)
            console.log(c);
    }
}
start();