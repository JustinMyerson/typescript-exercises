"use strict";
// Question 5: Union
// Create a union for id so that it is either a
//    string or number
exports.__esModule = true;
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
