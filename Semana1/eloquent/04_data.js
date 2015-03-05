
// 1 - Sum of a range

var range = function (start,end,step) {
    var rs = []
    step = step || 1;

    for (i=start;i<=end;i+step){
        rs.push(i);
    }

    return rs;
}

var sum = function(values) {
    var rs = 0;

    for (var i=0, len = values.length; i < len; i++) {
        rs+= values[i];
    }

    return rs;

}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// 2 - Reversing an array

var reverseArray = function(sourceArray) {
    var rs = [];

    for (var i=sourceArray.length-1;i>=0;i--) {

        rs.push(sourceArray[i]);
    }

    return rs
}

var reverseArrayInPlace = function(sourceArray) {

    for (var i=0, len = sourceArray.length-1;i<(len/2);i++)
    {

        var tmpValue = sourceArray[len - i];
        sourceArray[len - i] = sourceArray[i];
        sourceArray[i] = tmpValue;

    }

    return sourceArray;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// 3 - Linked list

function createListItem(value) {
    return { value: value,
        rest: null
    }
}

function arrayToList(dataArray) {

    if (dataArray.length>0) {
        var list = createListItem(dataArray[0]);
    }

    if (dataArray.length==1) return;

    var listTail = list;

    for (var i=1;i<dataArray.length;i++) {
        listTail.rest = createListItem(dataArray[i]);
        listTail = listTail.rest;
    }

    return list;

}

function listToArray(list) {
    var tail = list;
    var rs = [];

    while(tail.rest!=null) {
        rs.push(tail.value);
        tail = tail.rest;
    }

    return rs;
}

function prepend(value,listItem) {
    var list = createListItem(value);
    list.rest = listItem;

    return list;
}

function nth(list,position) {

    for (var node = list, currentIndex=0; node; node = node.rest) {

        if (position==currentIndex) return node.value;
        currentIndex++;

    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// 4 DEEP EQUAL

function deepEqual(obj1,obj2) {

    if (checkValidObject(obj1) && checkValidObject(obj2))
    {

        for (prop in obj1) {
            if (checkValidObject(obj1[prop]) && checkValidObject(obj2[prop])) {
                deepEqual(obj1[prop],obj2[prop])
            } else {
                if (obj2[prop]==null || obj1[prop]!=obj2[prop]) return false;
            }
        }
    } else {
        return obj1 === obj2;
    }

    return true;
}

function checkValidObject(obj) {

    return typeof obj == "object" && obj != null;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true