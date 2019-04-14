const {PI} = Math
const {pow} = Math
let sum = 0;
let initSum = 0;

let checkType = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== "number") {
            throw "please input Number data type";
        }
    }
}

let checkArgumentCount = function(arr, correctCount) {
    if (arr.length !== correctCount) {
        throw "please input correct number of arguments"
    }
}



let circleArea = function (...args) {
    args[1] = args[1] || args[0];

    checkArgumentCount(args, 2);

    checkType(arguments);

    sum += PI * pow(args[1], 2);
    if (args[0] == args[1]) {
        initSum = sum
        sum = 0
        return initSum
    } 
    return circleArea(1, args[1]-1); 
}

let squareArea = function(width, height) {
    checkArgumentCount(arguments, 2);
    checkType(arguments);
    return width * height;
}

let trapezoidArea = function(x1, x2, h) {
    checkArgumentCount(arguments, 3);
    checkType(arguments);
    return (x1 + x2) * h / 2
}

let cylinderArea = function(r, h) {
    checkArgumentCount(arguments, 2);
    checkType(arguments);
    return (2 * circleArea(r)) + 2 * PI * r * h
}

exports.polygon = {
    'circle' : circleArea,
    'rect' : squareArea,
    'trapezoid' : trapezoidArea, 
    'cylinder' : cylinderArea 
}
