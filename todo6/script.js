const data = [
  {
    Id: 1,
    name: "Satinder Singh",
    gender: "Male",
    city: "Bombay",
  },
  {
    Id: 2,
    name: "Leslie Mac",
    gender: "Female",
    city: "Queensland",
  },
  {
    Id: 3,
    name: "Andrea ely",
    gender: "Female",
    city: "Rio",
  },
  {
    Id: 4,
    name: "Amit Sarna",
    gender: "Male",
    city: "Navi Mumbai",
  },
  {
    Id: 2,
    name: "David Miller",
    gender: "Male",
    city: "Scouthe",
  },
];

function addRow(tbody, name, gender, city) {
  let row = tbody.insertRow();
  let nameCell = row.insertCell(0);
  let genderCell = row.insertCell(1);
  let cityCell = row.insertCell(2);
  let deleteCell = row.insertCell(3);
  nameCell.innerHTML = name;
  genderCell.innerHTML = gender;
  cityCell.innerHTML = city;
  deleteCell.innerHTML =
    "<button class='delete-btn' onclick='deleteRow(this)'>Delete</button>";
}

function deleteRow(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

window.onload = function () {
  let table = document.getElementById("tableBody");
  for (let i = 0; i < data.length; i++) {
    addRow(table, data[i].name, data[i].gender, data[i].city);
  }
};
