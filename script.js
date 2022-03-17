let dayRef = document.getElementById("day");
let DaysOfWeek = [
  "Domingo",
  "Segunda-Feira",
  "Terca-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sabado",
];
let dateToday = new Date();
let dayToday = dateToday.getDay();
dayRef.innerHTML = `Hoje e <span>${DaysOfWeek[dayToday]}</span>`;
