// Global scope
var globalName = "Joe";

function someThing() {
    var globalName = "Jack";
    console.log(globalName);
}
someThing();

console.log(globalName);