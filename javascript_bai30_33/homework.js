'use strict'


// Bài 31 Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.

function findSumK(arr,k) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length;j++){
            for(let m = 2; m < arr.length;m++){
                if(arr[i] + arr[m] + arr[j] ===k) return true;
            }
        }
    }
    return false;
}
const list =[1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
const k = 30
console.log(findSumK(list,k));

//32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần

function inputKIncrease(arr,k) {
    for (let i= 0; i<arr.length; i++) {
        if(arr[i] <= k && arr[i+1] > k){
            arr.splice(i+1,0,k); // i+1 là tìm vị trí, 0 là xóa bao nhiêu phần tử, k là chèn vào vị trí đó
            break;
        }
    }
    return arr;
}

const a = [1,3,6,9,11,20]; 
const s = 15
console.log(inputKIncrease(a,s));
