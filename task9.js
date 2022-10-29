//call
var obj = {num :2};

var addToThis = function(a,b,c){
    return this.num+a+b+c;
}
console.log(addToThis.call(obj,3,4,5));

//apply
var arr = [1,2,3];
console.log(addToThis.apply(obj,arr));

// bind
 var bound = addToThis.bind(obj);
 console.log(bound(2,3,4));
 //Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
// Dont pass in args. Read from 'this' and use BIND
var obj2 = {student:20};
var newfun = function(){
    return this.student;
}
var newbound = newfun.bind(obj2);
console.log(newbound());

//currying using bind method

// let multiply = function(x,y){
//     console.log(x*y);
// }
// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3);
// let multiplyByThree = multiply.bind(this,3);
// multiplyByTwo(5);

//currying using closure
let multiply = function (x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);
let multiplyByThree = multiply(3);
multiplyByThree(10);


