const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5, 6];
let names = ['raju', 'yennam', 'teju'];
let employees = [
  { employeeId: 101, employeeName: 'raju' },
  { employeeId: 102, employeeName: 'yennam' },
  { employeeId: 103, employeeName: 'teju' },
];

let users = [
  { username: 'raju007', name: 'raju', score: 800 },
  { username: 'yennam111', name: 'yennam', score: 780 },
  { username: 'teju777', name: 'teju', score: 880 },
];

let contacts = [
  { phonenumber: '123456', name: 'raju', score: 800 },
  { phonenumber: '234567', name: 'yennam', score: 780 },
  { phonenumber: '345678', name: 'teju', score: 880 },
];
function findNumber(numbers, num) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === num) return num;
  }
}

app.get('/numbers/find/:num', (req, res) => {
  let num = parseInt(req.params.num);
  res.json(findNumber(numbers, num));
});

function findNumber1(ele, num) {
  return ele === num;
}

app.get('/numbers/find1/:num', (req, res) => {
  let num = parseInt(req.params.num);
  let result = numbers.find((ele) => findNumber1(ele, num));
  res.json(result);
});

function findName(ele, name) {
  return ele === name;
}

app.get('/Name/find/:name', (req, res) => {
  let name = req.params.name;
  res.json(names.find((ele) => findName(ele, name)));
});

function findEmployeeById(employee, employeeId) {
  return employee.employeeId === employeeId;
}

app.get('/employees/find/:employeeId', (req, res) => {
  let employeeId = parseInt(req.params.employeeId);
  let result = employees.find((emp) => findEmployeeById(emp, employeeId));
  res.json(result);
});

function findUsersByName(user, userid) {
  return user.username === userid;
}

app.get('/users/find/:username', (req, res) => {
  let username = req.params.username;
  let result = users.find((user) => findUsersByName(user, username));
  res.json(result);
});

function findUsersByContact(contact, phonenumber) {
  return contact.phonenumber === phonenumber;
}

app.get('/contacts/find/:phonenumber', (req, res) => {
  let phonenumber = req.params.phonenumber;
  let result = contacts.find((contact) =>
    findUsersByContact(contact, phonenumber)
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
