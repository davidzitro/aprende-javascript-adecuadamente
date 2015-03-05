#1

var str = "";
for (var i=1;i<=7;i++ ){

    str+="#";
    console.log(str);

}


#2

for (var i=1;i<=100;i++ ){

    if (i%3==0) {
        console.log("fizz");
    } else if (i%5==0) {
        console.log("buzz")
    } else {
        console.log(i);
    }

}

#3

var size = 8,
    str="";

for (var i=1;i<=size;i++){

    for (var j=1;j<=size;j++) {

        if ((i+j)%2==0) {
            str+=" ";
        } else {
            str+="#";
        }

        if (j%size==0) {
            str+="\n";
            console.log(str);
            str = "";
        }
    }

}