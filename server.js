// import and require express and mysql
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

// create express app
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    // password: 'root',
    database: 'employee_db',
  },
  console.log('Connected to the employee_db database.')
);

// query department table in database
db.query('SELECT * FROM department', function (err, results) {
  console.log(results);
});

// create department
db.query('INSERT INTO department (name) VALUES (?)', ['Sales'], (err, data) => {
  if (err) {
    res.send(err);
  } else {
    res.send(data);
  }
});

// update department
db.query(
  'UPDATE department SET name =? WHERE id =?',
  ['Sales', 1],
  (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  }
);

// delete department
db.query('DELETE FROM department WHERE id =?', [1], (err, data) => {
  if (err) {
    res.send(err);
  } else {
    res.send(data);
  }
});
// query role table in database
db.query('SELECT * FROM role', function (err, results) {
  console.log(results);
});

// create role
db.query(
  'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)',
  ['Sales Lead', 100000, 1],
  (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  }
);

// update role
db.query(
  'UPDATE role SET title =?, salary =?, department_id =? WHERE id =?',
  ['Sales Lead', 100000, 1, 1],
  (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  }
);

// delete role
db.query('DELETE FROM role WHERE id =?', [1], (err, data) => {
  if (err) {
    res.send(err);
  } else {
    res.send(data);
  }
});

// query employee table in database
db.query('SELECT * FROM employee', function (err, results) {
  console.log(results);
});

// create employee
app.post('/api/employees', (req, res) => {
  db.query(
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
    [
      req.body.first_name,
      req.body.last_name,
      req.body.role_id,
      req.body.manager_id,
    ],
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// update employee
db.query(
  'UPDATE employee SET first_name =?, last_name =?, role_id =?, manager_id =? WHERE id =?',
  [
    req.body.first_name,
    req.body.last_name,
    req.body.role_id,
    req.body.manager_id,
    req.body.id,
  ],
  (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  }
);

// delete employee
db.query('DELETE FROM employee WHERE id =?', [1], (err, data) => {
  if (err) {
    res.send(err);
  } else {
    res.send(data);
  }
});

// create role
app.post('/api/roles', (req, res) => {
  db.query(
    'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)',
    [req.body.title, req.body.salary, req.body.department_id],
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// update role
app.put('/api/roles/:id', (req, res) => {
  db.query(
    'UPDATE role SET title =?, salary =?, department_id =? WHERE id =?',
    [req.body.title, req.body.salary, req.body.department_id, req.params.id],
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// delete role
app.delete('/api/roles/:id', (req, res) => {
  db.query('DELETE FROM role WHERE id =?', req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
