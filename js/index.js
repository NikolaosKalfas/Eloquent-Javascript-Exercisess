// Eloquent Javascript exercises

// Events
//Balloon

// const balloonInflation = () => {
//   const balloonResize = (event) => {
//     const balloon = document.querySelector(".events__balloon");
//     const style = window
//       .getComputedStyle(balloon, null)
//       .getPropertyValue("font-size");
//     const fontSize = parseFloat(style);

//     let updatedFontSize;

//     if (event.key == "ArrowUp") {
//       event.preventDefault();
//       balloon.style.fontSize = fontSize + 10 + "px";
//       updatedFontSize = fontSize + 10;
//     }
//     if (event.key == "ArrowDown") {
//       event.preventDefault();
//       balloon.style.fontSize = fontSize - 10 + "px";
//     }

//     if (updatedFontSize > 100) {
//       balloon.innerHTML = balloon.innerHTML.replace("🎈", "💥");
//       window.removeEventListener("keydown", balloonResize);
//     }
//   };

//   window.addEventListener("keydown", balloonResize);
// };

// balloonInflation();

//Quoting Style
// let text = "'I'm the cook,' he said, 'it's my job.'";

// console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));

// Regexp Gold
// let carCat = /ca[rt]/;
// let popProp = /pr?op/;
// let ferryFerrary = /ferr(et|y|ari)/;
// let wordIous = /ious\b/;
// let spaceSpecial = /\s[.,:;]/;
// let moreThanSix = /\w{7}/;
// let noEs = /\b[^We]+\b/i;

// console.log(carCat.test("cat"));
// console.log(popProp.test("pop"));
// console.log(ferryFerrary.test("ferrari"));
// console.log(wordIous.test("delicious"));
// console.log(spaceSpecial.test(" ;"));
// console.log(moreThanSix.test("Sezqweqweqwig"));
// console.log(noEs.test("mac"));

// The Locked Box
// const box = {
//   locked: true,
//   unlock() {
//     this.locked = false;
//   },
//   lock() {
//     this.locked = true;
//   },
//   _content: [],
//   get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this._content;
//   },
// };

// function withBoxUnlocked(body) {
//   if (box.locked) {
//     box.unlock();
//   }
//   try {
//     return body();
//   } finally {
//     if (!box.locked) {
//       box.lock();
//     }
//   }
// }

// withBoxUnlocked(function () {
//   box.content.push("gold piece");
// });

// try {
//   withBoxUnlocked(function () {
//     throw new Error("Pirates on the horizon! Abort!");
//   });
// } catch (e) {
//   console.log("Error raised: " + e);
// }
// console.log(box.locked);
// → true

// Retry
// class InputError extends Error {}

// const primitiveMultiply = (a, b) => {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new InputError("Error!");
//   }
// };

// const properMultiply = (a, b) => {
//   for (;;) {
//     try {
//       return primitiveMultiply(a, b);
//     } catch (e) {
//       if (!(e instanceof InputError)) throw e;
//     }
//   }
// };

// console.log(properMultiply(2, 3));

//Borrowing a Method
// let map = { one: true, two: true, hasOwnProperty: true };

// console.log(map);
// console.log(Object.prototype.hasOwnProperty.call(map, "one"));

// // Groups & Iterable Groups
// class GroupIterator {
//   constructor(group) {
//     this.group = group;
//     this.currentPosition = 0;
//   }

//   next() {
//     if (this.currentPosition >= this.group.members.length) {
//       return { done: true };
//     }.

//     let value = {
//       value: this.group.members[this.currentPosition],
//     };

//     this.currentPosition++;
//     return { value, done: false };
//   }
// }

// class Group {
//   constructor() {
//     this.members = [];
//   }
//   add(value) {
//     if (this.members.includes(value)) {
//       return;
//     }
//     this.members.push(value);

//     return this.members;
//   }
//   delete(value) {
//     if (!this.members.includes(value)) {
//       return;
//     }

//     return (this.members = this.members.filter((item) => item !== value));
//   }
//   has(value) {
//     if (this.members.indexOf(value) > 0) {
//       return true;
//     }
//     return false;
//   }

//   static from(objectNew) {
//     let tempGroup = new Group();
//     for (let item of objectNew) {
//       tempGroup.add(item);
//     }
//     return tempGroup;
//   }
// }

// Group.prototype[Symbol.iterator] = function () {
//   return new GroupIterator(this);
// };

// let newGroup = new Group();

// console.log(newGroup.members);
// console.log(newGroup.add("Mimi"));
// console.log(newGroup.add("Viny"));
// console.log(newGroup.add("Lydia"));
// console.log(newGroup.members);
// console.log(newGroup.delete("Mimi"));
// console.log(newGroup.members);
// console.log(newGroup.has("Mimi"));
// console.log(newGroup.has("Lydia"));

// for (let member of newGroup) {
//   console.log(member);
// }

// let awesomeNewGroup = Group.from(["Chrysi", "Vassilis"]);
// console.log(awesomeNewGroup.members);

// // A Vector Type
// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   plus(otherVec) {
//     let addedX = this.x + otherVec.x;
//     let addedY = this.y + otherVec.y;

//     return new Vec(addedX, addedY);
//   }
//   minus(otherVec) {
//     let minusX = this.x - otherVec.x;
//     let minusY = this.y - otherVec.y;

//     return new Vec(minusX, minusY);
//   }

//   get length() {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// }

// let newVector = new Vec(20, 5);

// console.log(newVector.plus(new Vec(5, 5)));
// console.log(newVector.minus(new Vec(5, 3)));
// console.log(newVector.length);

// Dominant Writing Direction
// const characterScript = (code) => {
//   for (let script of SCRIPTS) {
//     if (
//       script.ranges.some(([from, to]) => {
//         return code >= from && code < to;
//       })
//     ) {
//       return script;
//     }
//   }
//   return null;
// };

// const countBy = (items, groupName) => {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex((c) => c.name == name);
//     if (known == -1) {
//       counts.push({ name, count: 1 });
//     } else {
//       counts[known].count++;
//     }
//   }
// };

// const dominantScriptDirection = (text) => {
//   let scripts = countBy(text, (char) => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({ name }) => name != "none");

//   if (scripts.length == 0) return "ltr";

//   return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
// };
// dominantScriptDirection("qweqwewq");

// Everything
// const every = (arr, test) => {
//   !arr.some((element) => !test(element));
// };

// const every = (arr, test) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (!test(arr[i])) {
//       return;
//     }
//     return true;
//   }
// };

//Your Own Loop
// function loop(value, test, update, body) {
//   for (let i = value; test(i); i = update(i)) {
//     body(i);
//   }
// }

//Flattening
// let testArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
// ];

// console.log(testArr.reduce((a, b) => a.concat(b)));

// Deep Comparison
// const deepEqual = (a, b) => {
//   if (a != null && typeof a == "object" && b != null && typeof b == "object") {
//     if (Object.keys(a).length != Object.keys(b).length) {
//       return false;
//     }
//     for (let key in a) {
//       if (!deepEqual(a[key], b[key])) {
//         return false;
//       }
//     }
//   } else if (a != b) {
//     return false;
//   }
//   return true;
// };

// console.log(deepEqual({ a: 1, b: 3 }, { a: 1, b: 3 }));
// console.log(deepEqual({ a: 1, b: 3 }, { a: 1, b: 3, c: 5 }));
// console.log(deepEqual("A", "A"));

// A List
// let testList = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };

// const testArray = [1, 2, 3, 4, 5];

// const arrayToList = (arr) => {
//   let list = {};
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list = { value: arr[i], rest: list };
//   }
//   return list;
// };

// const listToArray = (list) => {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// };

// const prepend = (element, list) => {
//   const newArr = listToArray(list);
//   newArr.unshift(element);
//   return arrayToList(newArr);
// };

// const nth = (list, index) => {
//   if (!list) {
//     return undefined;
//   } else if (index == 0) {
//     return list.value;
//   } else {
//     return nth(list.rest, index - 1);
//   }
// };

// console.log(nth(arrayToList(testArray), 2));

// prepend(10, testList);

// listToArray(testList);

// arrayToList(array);

// Reversing an Array
// const reverseArrayInPlace = (arr) => {
//   for (let i = 1; i <= arr.length; i++) {
//     arr.pop();
//     arr.unshift(i);
//   }
// };

// const array = [1, 2, 3, 4, 5];

// console.log(array);
// reverseArrayInPlace(array);
// console.log(array);

// const reverseArray = (arr) => {
//   let reversed = [];
//   for (let item of arr) {
//     reversed.unshift(item);
//   }
//   console.log(reversed);
//   return reversed;
// };

// reverseArray(["A", "B", "C"]);

// The Sum of a Range
// const range = (start, end, step) => {
//   const range = [];
//   if (!step) {
//     step = 1;
//   }
//   for (let count = start; count <= end; count += step) {
//     range.push(count);
//   }

//   console.log(range);
//   return range;
// };

// const sum = (arr) => {
//   let sum = 0;
//   for (let number of arr) {
//     sum += number;
//   }
//   return sum;
// };

// console.log(sum(range(1, 10, 2)));

// Bean Counting
// const countChar = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const countBs = (str, char) => {
//   console.log(countChar(str, char));
// };

// countBs("BBasdadBBasdaC", "B");

// Recursion
// const isEven = (num) => {
//   if (num === 0) {
//     return true;
//   } else if (num === 1) {
//     return false;
//   } else {
//     return isEven(num - 2);
//   }
// };

// console.log(isEven(50));
// console.log(isEven(75));

// Minimum
// const minimum = (a, b) => {
//   if (a < b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// };

// minimum(1, 2);

// Chessboard
// let size = 8;
// let line = "";

// for (row = 1; row <= size; row++) {
//   for (col = 1; col <= size; col++) {
//     (row + col) % 2 == 0 ? (line += " ") : (line += "#");
//   }
//   line += "\n";
// }
// console.log(line);

// FizzBuzz
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// Looping a triangle
// for (let i = "#"; i.length < 8; i += "#") {
//   console.log(i);
// }
