const methodChain = (array) => {
    let sum = 0;
    array.sort((a, b) => b - a).filter(element => element < 5).map( element => element *  2).forEach(elem => sum += elem);
    return sum;
}

export default methodChain;