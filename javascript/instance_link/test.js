// function A() {}

// function B(a) {
//   this.a = a;
// }

// function C(a) {
//   if (a) {
//     this.a = a;
//   }
// }

// A.prototype.a = 1;
// B.prototype.a = 1;
// C.prototype.a = 1;

// console.log(new A().a); // 1
// console.log(new B().a); // undefined
// console.log(new C(2).a); // 2

// ==============================

// var foo = {},
// F = function(){};
// Object.prototype.a = 'value a';
// Function.prototype.b = 'value b';

// console.log(foo.a); // a
// console.log(foo.b); // undefined

// console.log(F.a); // a
// console.log(F.b); // b

// ========================================

// var A = function() {};

// A.prototype.n = 1;

// var b = new A();

// // b.__proto__.n = 1

// A.prototype = {
//   n: 2,
//   m: 3
// }

// var c = new A();

// // c.__proto__.n = 2
// // c.__proto__.m = 3

// console.log(b.n);
// console.log(b.m);

// console.log(c.n);
// console.log(c.m);

// ========================================

// var F = function() {};

// Object.prototype.a = function() {
//   console.log('a');
// };

// Function.prototype.b = function() {
//   console.log('b');
// }

// var f = new F();

// // f.a(); // a   f.__proto__.a = Object.prototype.a

// // f.b(); // not a function

// // F.a(); // a   F.prototype.__proto__.a = Object.prototype.a
// // F.b();  // b
