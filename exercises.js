// ----- Exercise1 ----- //

// let obj = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
// ]);

// Map.prototype.deleteMany = function () {
//   let tempObj = {};
//   let values = Object.values(arguments);
//   for (let el of obj) {
//     if (!values.includes(el[0])) {
//       tempObj[el[0]] = el[1];
//     }
//   }
//   return tempObj;
// };

// let res = obj.deleteMany("a", "c", "d");
// console.log(res);

// ----- Exercise2 ----- //

// obj = new Map([
//   ["a", 2],
//   ["b", 5],
//   ["c", 3],
// ]);

// Map.prototype.mapSum = function () {
//   let sum = 0;
//   for (let el of obj) {
//     sum += el[1];
//   }
//   return sum;
// };

// let res = obj.mapSum(obj);
// console.log(res);

// ----- Exercise3 ----- //

// let map1 = new Map([
//   ["apple", 1],
//   ["banana", 2],
//   ["orange", 3],
// ]);

// let map2 = new Map([
//   ["apple", 4],
//   ["orange", 5],
//   ["grape", 6],
// ]);

// function getMapIntersection() {
//   let innerRes = new Map();

//     for (let key of map1.keys()) {
//       if (!map2.has(key)) {
//         innerRes.set(key, map1.get(key));
//       }
//     }

//     for (let key of map2.keys()) {
//       if (!map1.has(key)) {
//         innerRes.set(key, map2.get(key));
//       }
//     }

//     return innerRes;
// }

// let res = getMapIntersection(map1, map2);

// console.log(res);

// ----- Exercise4 ----- //

// let obj = new WeakMap([[key, 'John'], [{id: 2}, 'Jane'], [{id: 3}, 'Alice']]);

// WeakMap.prototype.size = function () {

// }

// console.log(obj.size());

// ----- Exercise5 ----- //

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// function setUnion(...rest) {
//   let tempArr = [];
//   for (let el of rest) {
//     for (let j of el) {
//       tempArr.push(j);
//     }
//   }

//   let newSet = new Set(tempArr);
//   return newSet;
// }

// let res = setUnion(set1, set2);
// console.log(res);

// ----- Exercise6 ----- //

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// function setIntersection(...rest) {
//   let tempArr = [];
//   for (let el of rest) {
//     let arr = [...el];
//     for (let j of arr) {
//       if ([...set1].includes(j) && [...set2].includes(j)) {
//         tempArr.push(j);
//       }
//     }
//   }
//   let newSet = new Set(tempArr);
//   return newSet;
// }

// let res = setIntersection(set1, set2);
// console.log(res);

// ----- Exercise7 ----- //

// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);

// function checkSetSubset() {
//   let res;
//   let arr1 = [...(set1.keys())];
//   let arr2 = [...set2.keys()];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] == arr2[i]) {
//       res = true;
//     } else {
//       res = false;
//     }
//   }
//   return res;
// }

// let res = checkSetSubset(set1, set2);
// console.log(res);



// ----- Exercise8 ----- //

// let arr = [1, 2, 2, 3, 4, 4, 5];

// function removeDuplicates(arr) {
//   let arrSet = new Set(arr);
//   return [...arrSet];
// }

// let res = removeDuplicates(arr);
// console.log(res);

// ----- Exercise9 ----- //

// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];

// function mergerArr() {
//   let arr = Object.values(arguments);
//   let newArr = [];
//   for (let argument of arguments) {
//     for (let j of argument) {
//       newArr.push(j);
//     }
//   }
//   return newArr;
// }

// let res = mergerArr(arr1, arr2);
// console.log(res);



// ----- Exercise10 ----- //

// function concatArrays(...rest) {
//   let arr = [];
//   for (let el of rest) {
//     for (let j of el) {
//       arr.push(j);
//     }
//   }
//   return arr;
// }


// let res = concatArrays([1, 2], [3, 4], [5, 6]);
// console.log(res);
