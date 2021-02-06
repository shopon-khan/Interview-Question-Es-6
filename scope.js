function sum(first, second) {
    let result = first + second;
    return result;
}

const outPut = sum(3, 7);
console.log(outPut);

function sum(first, second) {
    let result = first + second;
    console.log(result);
    return result;
    
}

const outPut = sum(3, 7);
console.log(outPut);

let bonus = 20;
function sum(first, second) {
    let result = first + second + bonus;
    console.log(bonus);
    return result;
    
}

const outPut = sum(3, 7);
console.log(bonus);
console.log(outPut);

let bonus = 20;
function sum(first, second) {
    let result = first + second + bonus;
    if (result > 9) {
        const mood = "Happy";
        console.log(mood);
    }
    console.log(bonus);
    return result;
    
}

const outPut = sum(3, 7);
console.log(bonus);
console.log(outPut);

// block scope
// block scope ar ketre ler or const takle teke call korle output error dekabe but jokon var declear kora hoy tokon ar error show kore na

let bonus = 20;
function sum(first, second) {
    let result = first + second + bonus;
    if (result > 9) {
        let mood = "Happy";
        mood = "letty";
        mood = "kamronnahar";
        mood = "active";
        console.log(mood);
    }
    console.log(mood);
    return result;
    
}

const outPut = sum(3, 7);
console.log(bonus);
console.log(outPut);

let bonus = 20;
function sum(first, second) {
    let result = first + second + bonus;
    if (result > 9) {
       var mood = "Happy";
        mood = "letty";
        mood = "kamronnahar";
        mood = "active";
        console.log(mood);
    }
    console.log(mood);
    return result;
    
}
const outPut = sum(3, 7);
console.log(mood);
console.log(outPut);