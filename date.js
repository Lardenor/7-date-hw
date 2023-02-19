// !1
// !1

// !1

// !1

// !1

const first =document.querySelector(".first")
let newDate = Math.floor(Date.now() / 60 / 60 / 1000);
    first.innerHTML = 
 ` 
 <mark>Завдання 1: Кількість годин, що пройшло від початку відліку: ${newDate} годин</mark>`;


// *2
// *2
// *2
// *2
// *2
// *2


function countDays() {
  const birthday = new Date(document.getElementById("birthday").value);
  const today = new Date();
  birthday.setFullYear(today.getFullYear());
  if (birthday.getTime() < today.getTime()) {
    birthday.setFullYear(today.getFullYear() + 1);
  }
  const daysLeft = Math.floor((birthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  document.getElementById("result").innerHTML = "Кількість днів до дня народження: " + daysLeft ;
}
// 
// 
// 
// 

let dateNow = new Date();


let holidayStatus = document.getElementById("status");


if (dateNow.getDay() === 6 || dateNow.getDay() === 0) {

  holidayStatus.textContent = "Сьогодні вихідний";
} else {
  
  holidayStatus.textContent = "Сьогодні будній день";
}

