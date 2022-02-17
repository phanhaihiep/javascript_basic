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
  document.write(`Tổng từ 1 đến ${n} là ${sum}`)

}

total(3)
document.write("</br>")

// 6.  Viết chương trình tính tổng bình phương của các số từ 1 đến n?
function totalOfSquare(n) {
  let sum = 0;
  for (let i = 1; i<=n; i++) {
    sum += i *i;
  }
  document.write(`Tổng bình phương của ${n} là ${sum}`)
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
  document.write(`Tổng các số lẻ trong khoảng 1 đến ${n} là ${sum}`)
}

totalOddNumber(5)