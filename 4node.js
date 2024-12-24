// What is the result of 10 + '5'?
let a = 10;
b = "5";
console.log(a + b)


//. What is the value of x after x = 10; x += 5;?
let x = 10;
x += 5;
console.log(x)


// What is the result of 10 - null?
let q = 10;
let s = null;
console.log(q - s)


//4. What is the value of x after x = 10; x *= 2;?
let p = 10;
p *= 2;
console.log(p)


//5. What is the result of 10 / '2'?
let c = 10;
c /= 2;
console.log(c)


//6. What is the result of 10 % 3?
let d = 10;
d %= 3;
console.log(d)


//7. What is the value of x after x = 10; x = x ** 2;?
let e = 10;
e = e ** 2;
console.log(e)


//8. What is the result of 10 > 5 && 5 < 10?
let f = 10;
let g = 5;
console.log(f > g && g < f)


//9. What is the result of 10 === '10'?
let h = "10";
let i = 10;
console.log(h === i)


//10. What is the result of null ?? 'default'?
let j= "null";
console.log(j ??"default")


//11. What is the result of 10 || 'default'?
let k = 10;
let l = "default";
let result = k || l;
console.log(result)


//12. What is the result of !true?
let m = "2";
let m2 = 2;
console.log(m !== m2)


//13. What is the result of 10 & 5?
let n = 10;
let n2 = 5;
console.log(n & n2)


//14. What is the result of 10 | 5?
let o = 10;
let o2 = 5;
console.log(o | o2)


//15. What is the result of 10 ^ 5?
let r = 10;
let r2 = 5;
console.log(r ^ r2)


//What is the result of x = 10; y = x++;? 
//What are the values of x and y?
let s2 = 10;
let s3 = s2++;
console.log(s2)
console.log(s3)


//What is the result of x = 10; y = ++x;? 
//What are the values of x and y?
let s4 = 10;
let s5 = ++s4;
console.log(s4)
console.log(s5)


//3. What is the result of x = 10; console.log(++x);?
let s6 = 10;
console.log(++s6)


//4. What is the result of x = 10; console.log(x++);?
let s7 = 10;
console.log(s7++)


//5. What is the result of x = 10; y = --x;?
//What are the values of x and y?
let s8 = 10;
s9 = --s8;
console.log(s8)
console.log(s9)


//6. What is the result of x = 10; y = x--;? What are the values of x and y?

let s10 = 10;
s11 = s10--;
console.log(s10)
console.log(s11)

//Ternary Operators:

//1. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? 

let a2=10;
let a3= a2 > 5;
a2 == 10  &&
a3 == a2 > 5 ?
console.log("yes"):
console.log("no");

//2. What is the value of y?

console.log(a3)


//3. What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';?

let y1 = 10;
let y2 = y1>5;
y2 = y1>5? "yes": y2>3 ? "maybe":"no"

//4. What is the value of y?

console.log(y2)

//Optional Chaining:

 let obj={
  a:{
    b:'c'
  }
 }
 //1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?

 console.log(obj?.a?.b);

 //2. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);?

console.log(obj?.a?.c); 

 //3. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);?

 console.log(obj?.b?.c);


