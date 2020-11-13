import methodChain from "../chaining.js"
import {filterSumElements, filterIndex} from "../filter.js";
import {forEachString, forEachSecond, forEachReverse, forEachSum} from "../forEach.js"
import {reduceEverySecond, reduceReverse, reduceSum} from "../reduce.js";
import {mapString, mapMulti} from "../map.js";

// const array1 = [0, 1, 2, 5, 7, 1, 7, 9, 156];
// const array1 = [1,2,3,4,5,6,7,8,9,0];

test('get', () => {
    expect(methodChain([1,2,3,4,5,6,7,8,9,0])).toEqual(20);

    expect(filterSumElements([1,2,3,4,5,6,7,8,9,0])).toEqual([ 5, 6, 7, 8, 9 ]);

    expect(filterIndex([1,2,3,4,5,6,7,8,9,0])).toEqual([ 6, 7, 8, 9, 0 ]);

    expect(forEachString([1,2,3,4,5,6,7,8,9,0])).toEqual([
            'element num is = 1, element index is 0',
            'element num is = 2, element index is 1',
            'element num is = 3, element index is 2',
            'element num is = 4, element index is 3',
            'element num is = 5, element index is 4',
            'element num is = 6, element index is 5',
            'element num is = 7, element index is 6',
            'element num is = 8, element index is 7',
            'element num is = 9, element index is 8',
            'element num is = 0, element index is 9',
        ]
    );

    expect(forEachSecond([1,2,3,4,5,6,7,8,9,0])).toEqual([1, 3, 5, 7, 9]);
    expect(forEachReverse([1,2,3,4,5,6,7,8,9,0])).toEqual([
            0, 9, 8, 7, 6,
            5, 4, 3, 2, 1
        ]
    );
    expect(forEachSum([1,2,3,4,5,6,7,8,9,0])).toEqual(45);

    expect(reduceEverySecond([1,2,3,4,5,6,7,8,9,0])).toEqual([2, 4, 6, 8, 0]);
    expect(reduceReverse([1,2,3,4,5,6,7,8,9,0])).toEqual([
        0, 9, 8, 7, 6,
        5, 4, 3, 2, 1
    ]);
    expect(reduceSum([1,2,3,4,5,6,7,8,9,0])).toEqual(45);

    expect(mapString([1,2,3,4,5,6,7,8,9,0])).toEqual( [
        'element num is = 1, element index is 0',
        'element num is = 2, element index is 1',
        'element num is = 3, element index is 2',
        'element num is = 4, element index is 3',
        'element num is = 5, element index is 4',
        'element num is = 6, element index is 5',
        'element num is = 7, element index is 6',
        'element num is = 8, element index is 7',
        'element num is = 9, element index is 8',
        'element num is = 0, element index is 9',
    ]);

    expect(mapMulti([1,2,3,4,5,6,7,8,9,0])).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 0]);
});