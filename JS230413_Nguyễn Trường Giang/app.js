// Bài 1
// function findMaxNumber(arr) {
//   let maxNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// }
// let arr = [1, 5, 10, 7, 23];
// console.log(findMaxNumber(arr));

// Bài 2
// function text(str) {
//   let textNew = str.split(" ");
//   let textPush = [];

//   for (let i = 0; i < textNew.length; i++) {
//     let textNew1 = textNew[i].toLowerCase();
//     let textPush1 = textNew1.charAt(0).toUpperCase() + textNew1.slice(1);
//     textPush.push(textPush1);
//   }

//   return textPush.join(" ");
// }

// console.log(text("heLlo riKkei academy"));

// Bài 4
// Cách 1: Dùng sort()
// function numbers(arr) {
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   return arr;
// }
// let arr = [12, 3, 45, 2, 8, 1, 88];
// console.log(numbers(arr));

// Cách 2: không dùng sort()
// function numbers(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let isBigger = arr[i];
//         arr[i] = arr[j];
//         arr[j] = isBigger;
//       }
//     }
//   }
//   return arr;
// }

// let arr = [12, 3, 45, 2, 8, 1, 88];
// console.log(numbers(arr));

// Bài 3
// function checkDay(month, year) {
//   let day;
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       day = 31;
//       break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       day = 30;
//       break;

//     case 2:
//       if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//         day = 29;
//       } else {
//         day = 28;
//       }
//       break;
//   }
//   return day;
// }

// let month = +prompt("Nhập tháng mà bạn muốn kiểm tra:");
// let year = +prompt("Nhập năm mà bạn muốn kiểm tra:");

// let day = checkDay(month, year);
// if (month > 0 && month % 1 == 0 && year > 0 && year % 1 == 0) {
//   alert(`Tháng ${month} năm ${year} có ${day}`);
// } else {
//   alert(false);
// }
