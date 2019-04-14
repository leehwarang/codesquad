let utils = require("./STEP2_2_utils")
let log = "<계산수행순서 > \n";
let result = 0;

let getArea = (func_name, ...args) => {
    switch (func_name){
        case 'circle':
            result = utils.polygon.circle(...args);
            break;
        case 'rect': 
            result = utils.polygon.rect(...args);
            break;
        case 'trapezoid':
            result = utils.polygon.trapezoid(...args);
            break;
        case 'cylinder':
            result = utils.polygon.cylinder(...args);
            break;
    }
    log += `${func_name} : ${result} \n`;
};

let printExecutionSequence = () => {
    console.log(log.substr(0, log.length - 2))
}

getArea('circle', 3)
getArea('circle', 1, 3);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
getArea('cylinder', 3, 7);
printExecutionSequence();