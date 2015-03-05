/**
 * Created by david.pastor on 03/03/2015.
 */

//1

function min(x,y) {

    return x<y? x : y;

}

console.log(min(0,0));

//2

function isEven(x) {

    return (x%2==0 || x==0 ) && x!=1;

}

console.log(isEven(-3));

//3

var countBs = function(searchIn) {

    for (var i=0,found=0;i<searchIn.length;i++) {

        if (searchIn.charAt(i)=="B") found++;

    }

    return found;

}

var countChar = function (searchIn, char) {

    for (var i=0,found=0;i<searchIn.length;i++) {

        if (searchIn.charAt(i)==char) found++;

    }

    return found;

}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4