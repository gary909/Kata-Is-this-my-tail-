function correctTail(body, tail) {
    var sub = body.substr(body.length - (tail.length))
    if (sub == tail) {
        return true;
    } else {
        return false;
    }
}

console.log(correctTail("Fox", "x")); // true
console.log(correctTail("Rhino", "o")); // true
console.log(correctTail("Meerkat", "t")); // true