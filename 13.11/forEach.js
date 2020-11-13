export const forEachSum = (array) => {
    let sum =  0;
    array.forEach(element => sum += element);
    return sum;
};

export const forEachReverse = (array) => {
    let sec = [];
    array.reverse().forEach(element => sec.push(element));
    return sec;
}

export const forEachSecond = (array) => {
    let sec = [];
    array.forEach((element, index) => {
        (index % 2 === 0)?  sec.push(element) : 1;
    });
    return sec;
}

 export const forEachString = (array) => {
    let stringArray = [];
    array.forEach((element, index) => {
        let string = `element num is = ${element}, element index is ${index}`;
        stringArray.push(string);
    })
    return stringArray;
}
