// import inquirer and mysql
const mysql = require('mysql2');
const inquirer = require('inquirer');

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
  },
  console.log('Connected to the employee_db database.')
);

const init = () => {
  const questions = inquirer;
  questions
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'View All Employees By Department',
        'View All Employees By Manager',
        'Add Employee',
        'Remove Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'View All Roles',
        'Add Role',
        'Remove Role',
        'View All Departments',
        'Add Department',
        'Remove Department',
        'Quit',
      ],
    })
    .then((answer) => {
      if (answer.action === 'View All Employees') {
        db.query('SELECT * FROM employee', (err, employee) => {
          if (err) throw err;
          console.table(employee);
        });
      } else if (answer.action === 'View All Employees By Department') {
        viewAllEmployeesByDepartment();
      } else if (answer.action === 'View All Employees By Manager') {
        viewAllEmployeesByManager();
      } else if (answer.action === 'Add Employee') {
        addEmployee();
      } else if (answer.action === 'Remove Employee') {
        removeEmployee();
      } else if (answer.action === 'Update Employee Role') {
        updateEmployeeRole();
      } else if (answer.action === 'Update Employee Manager') {
        updateEmployeeManager();
      } else if (answer.action === 'View All Roles') {
        viewAllRoles();
      } else if (answer.action === 'Add Role') {
        addRole();
      } else if (answer.action === 'Remove Role') {
        removeRole();
      } else if (answer.action === 'View All Departments') {
        viewAllDepartments();
      } else if (answer.action === 'Add Department') {
        addDepartment();
      } else if (answer.action === 'Remove Department') {
        removeDepartment();
      } else if (answer.action === 'Quit') {
        db.end();
      }
    });
};

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();

init();
