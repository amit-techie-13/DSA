var x=10;
 var y=18; 
var res=eval("x+y");
 console.log(res);

var x = 10, y = 20;
let obj = {
    x: 11
};

with (obj) {
    console.log(y);
}