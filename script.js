function calculate() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const resultBmi = (weight / Math.pow(height, 2)) * 10000;
  const roundedBmi = resultBmi.toFixed(2);
  const conclusion = "";
  if (roundedBmi < 16) conclusion = "Острый дефицит массы";
  else if (roundedBmi > 16 && roundedBmi < 18.5)
    conclusion = "Острый дефицит массы";
  else if (roundedBmi > 16 && roundedBmi < 18.5)
    conclusion = "Острый дефицит массы";
  else if (roundedBmi > 18.6 && roundedBmi < 25)
    conclusion = "Острый дефицит массы";
  document.getElementById(
    "result"
  ).innerHTML = `Ваш индекс массы тела ${roundedBmi} + ${conclusion}`;
}

// Категория	ИМТ
// Острый дефицит массы	< 16
// Недостаточная масса тела	16 - 18.5
// Норма	18.6 - 25
// Избыточная масса тела	25.1 - 30
// Ожирение первой степени	30.1 - 35
// Ожирение второй степени	35.1 - 40
// Ожирение третьей степени	> 40.1
