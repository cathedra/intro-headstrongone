export const mapMulti = (array) => {
    return  array.map(elem => elem * 2);
}

export const mapString = (array) =>  {
    let stringArray = [];
    array.map((element, index) => {
            let string = `element num is = ${element}, element index is ${index}`;
            stringArray.push(string);
        })
        return stringArray;
}
