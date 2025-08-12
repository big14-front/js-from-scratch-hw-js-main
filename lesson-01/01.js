// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
// let sum = 0;
// let i = 1;
// while (i <= 20){
//     sum = i + sum;
//     i++
// }
//     console.log(sum);

//                                 ---lesson 4---


// let array = [1, 2, 567, 3, 4, 5, 6];

// console.log(array.length);
// console.log(array.indexOf(4));
// console.log(array[5]);

// array.push(7)
// // console.log('array:', array);

// array.splice(3, 2)
// console.log('array:', array);


let scores = [67, 90, 56, 34, 92, 81, 24];


function calculateAverage(scoresArray) {
    let sum = 0;
    for(let i = 0; i < scoresArray.lenght; i++){
        sum = sum + scoresArray[i]
    }
    return sum
}


let scoresAvarahe = calculateAverage(scores)