function math(a){
    var b = (a==1) ? true : false;
    var c = (a==1) ? true
                   : false;
    var d = (a==1) ? true : (a==2) ? null : false;
    if (a === 1) {
        return true;
    } else if (a === 2) {
        return null;
    } else {
        return false;
    }
}

var x = 5;
console.log(x);
console.log("a");
console.log("b");

exports.math = math;