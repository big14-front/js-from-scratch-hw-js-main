/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
// 

// 1) use the `while` loop ...
// ----------------------------------------------
// while () {}

// 2) ... for finding the sum of numbers between 1 and 20 ...
// ----------------------------------------------
// let sum = 0
// let num = 1
// while (num <= 20) {
//     sum += num
//     num++
// }
// console.log(sum)

// 3) ... but we must consider only odd numbers.
// ----------------------------------------------
// let sum = 0
// let num = 1
// while (num <= 20) {
//     if (num % 2 == 0)
//         sum += num
//     num++
// }
// console.log(sum)

// But the above solution making too much iterations :(
// Let's reduce number of iterations from 20 to 10 like this:
// sum = 0
// num = 2  // First non-zero odd number above 1.
// while (num <= 20) {
//     sum += num
//     num += 2
// }
// console.log(sum)

// // But the best solution for this is by utilizing the math formula for finding sum of sequence.
// // As I remember the formula is: (max_num + min_num) / 2 * count_of_elements
// sum = (2 + 20) / 2 * 10
// console.log(sum)

let sum = 0;
let num = 1;
while (num <= 20) {
    if (num % 2 == 0) {
        sum = sum + num
    }
    num++
}
console.log(sum)

