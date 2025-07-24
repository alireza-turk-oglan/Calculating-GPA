/** @format */

document.getElementById("addRowBtn").addEventListener("click", function () {
  const table = document
    .getElementById("gradesTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td><input type="text" placeholder="نام درس"></td>
    <td><input type="number" placeholder="نمره"></td>
    <td><input type="number" placeholder="واحد"></td>
    <td><button class="delete-btn">حذف</button></td>
  `;

  const deleteBtn = newRow.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    newRow.remove();
  });
});

document.getElementById("calculateBtn").addEventListener("click", function () {
  const rows = document.querySelectorAll("#gradesTable tbody tr");
  let totalPoints = 0;
  let totalUnits = 0;

  rows.forEach((row) => {
    const grade = parseFloat(row.cells[1].querySelector("input").value);
    const units = parseFloat(row.cells[2].querySelector("input").value);

    if (!isNaN(grade) && !isNaN(units)) {
      totalPoints += grade * units;
      totalUnits += units;
    }
  });

  const gpa = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : 0;
  document.getElementById("result").innerText = `معدل شما : ${gpa}`;
});

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.closest("tr").remove();
  });
});

const telegramIcon = document.getElementById("telegram");
const instagramIcon = document.getElementById("instagram");

telegramIcon.addEventListener("click", () => {
  window.open("https://t.me/AlirezaHosseinzade", "_blank");
});

instagramIcon.addEventListener("click", () => {
  window.open("https://www.instagram.com/alirezahosseinzadeh__", "_blank");
});
