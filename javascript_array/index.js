'use strict';

//21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
let sum = 0

const baitong = function(array) {
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }  
    console.log(sum)
}

baitong(a)

//22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5

let b = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
let tong = 0
const averNumber = function(array) {
    for (let i = 0; i< array.length; i++){
        tong +=array[i]
    } return sum/array.length
}
console.log(averNumber(b));
let sortArray = b.sort()
let c = b[0]
let d = b[b.length-1]

console.log(`Số min của dãy ${c} và số max của dãy ${d}`);

//23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất và số đó xuất hiện bao nhiêu lần?
//VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 9

let aarr = [4, 3, 5, 3, 4, 2, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 8, 8, 3, 2, 1, 1];
let tansuat = 1;
let count = 0;
let item;
for (let i = 0; i < aarr.length; i++) {
    for (let j = i; j < aarr.length; j++) {
        if (aarr[i] == aarr[j]) {
            count++;
        }
        if (tansuat < count) {
            tansuat = count;
            item = aarr[i];
        }
    }
    count = 0;
}
console.log("tần suất: ", tansuat);
console.log("số có tần suất nhiều nhất: ", item);