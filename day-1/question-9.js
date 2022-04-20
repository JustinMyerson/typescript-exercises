// Question 9: Enums
// Create an enum for the main 4 cardinal directions
// e.g. NORTH, EAST, SOUTH, WEST
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 3] = "South";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
