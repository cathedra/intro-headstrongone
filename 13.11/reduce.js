export const reduceSum = (array) => {
    return array.reduce((acc, cv) => acc + cv);
};

export const reduceReverse = (array) => {
    return array.reverse().reduce((acc, cv) =>  [].concat(acc, cv));
};

export const reduceEverySecond = (array) => {
    return array.reduce((acc, cv, index) => {
        return (index % 2)? [].concat(acc, cv) : [].concat(acc);
    }).slice(1);
};
