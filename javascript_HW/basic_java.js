// 1.Viết chương trình in ra các số từ 1 đến n?
function displayNumber(n) {
  for (let i = 1; i<=n; i++) {
    document.write(i + ' ')
  }
}

displayNumber(10);
document.write("</br>")


// 2.Viết chương trình in ra các số lẻ từ 1 đến n?
function displayOddNumber(n) {
  for (let i = 1; i<=n; i++) {
      if (i%2==1)
      document.write(i + " ")

  }
}

displayOddNumber(15);
document.write("</br>");


//3. Viết chương trình in ra các số chẳn từ 1 đến n?
function displayEvenNumber(n) {
  for (let i = 1; i<=n; i++) {
    if (i%2==0)
      document.write(i + " ")
  }
}

displayEvenNumber(20);
document.write("</br>")


//4. Viết chương trình in ra số là nguyên tố trong khoảng 1 đến n?
function checkPrime(n) {
  let flag= true;
  if (n<2) {
    flag = false;
  } else if (n ==2) {
    flag = true
  } else if (n% 2== 0){
    flag = false;
  } else {
    for (let i = 3; i <= Math.sqrt(n); i +=2) {
      if (n % i ==0) {
        flag= false;
        break;
      }
    }
  }

  if (flag==true){
    document.write(`${n} là số nguyên tố`)
  } else {
    document.write(`${n} không phải là số nguyên tố`)
  }
}

checkPrime(13)
document.write("</br>")
checkPrime(20)
document.write("</br>")

// 5. Viết chương trình tính tổng từ 1 đến n?

function total(n) {
  let sum = 0
  for (let i = 1; i<=n;i++){
    sum +=i;
  }
  document.write(`Bài 5: Tổng từ 1 đến ${n} là ${sum}`)

}

total(3)
document.write("</br>")

// 6.  Viết chương trình tính tổng bình phương của các số từ 1 đến n?
function totalOfSquare(n) {
  let sum = 0;
  for (let i = 1; i<=n; i++) {
    sum += i *i;
  }
  document.write(`Bài 6: Tổng bình phương của ${n} là ${sum}`)
}

totalOfSquare(3)
document.write("</br>")


//7. Tính tổng các số lẻ trong khoảng 1 đến n?
function totalOddNumber(n) {
  let sum = 0;
  for ( let i = 1; i<=n; i++) {
    if (i%2 !==0) {
      sum +=i;
    }
  }
  document.write(`Bài 7: Tổng các số lẻ trong khoảng 1 đến ${n} là ${sum}`)
}

totalOddNumber(5)
document.write("</br>")

// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3


function countBlank(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count ++;
    }
  }
  document.write(`Bài 11: Khoảng cách giữa các khoảng trống trong chuỗi ${str} là: ${count}`)
}

countBlank(' Hello  world')
document.write("</br>")


// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”
function cleanData(str) {
  for (let i = 0; i < str.length; i++){
    if (str[i]===" "){
     strNew= str.replace(" ","")
    }
  }
  document.write(`Bài 12: Xóa tất cả khoảng trắng của một chuỗi: ${str} và output là ${strNew}`)
}

cleanData('	Hello world   ')
document.write("</br>")


// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”
function stringConvert(str){
  let strNew = ""
  for (i = str.length-1; i>=0; i--){
     strNew+=str[i]
  }
  document.write(`Bài 13: Đảo ngược của chuỗi ${str} là ${strNew}`)

}
stringConvert('This is a beautiful day')
document.write("</br>")

// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 2
let s2 ="is"
function findLocation(str){

  for (let i =0; i < str.length; i++){
    solution = str.indexOf(s2)
  }
  document.write(`Bài 14: Vị trí xuất hiện của ${s2} trong chuỗi: ${str} là: ${solution}`)
}

findLocation('This is a beautiful day')
document.write("</br>")

// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”

function convertName(name) {
  name = name.toLowerCase()
  for (i = 0; i <name.length; i++){
    if (i == 0 || name[i-1] == " "){
      name = name.slice(0,i) +name[i].toUpperCase() + name.slice(i+1);
    }

  }
  document.write(`Bài 15: Chuyển lại tên cho đúng chính tả: ${name}`)
}
convertName("NguyeN THI tho tHu hA")
document.write("</br>")
// 16. Viết chương trình lấy  id name của fb.
// VD:https://www.facebook.com/tung.nguyenthac.1/, output: “tung nguyen thac”

// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7
