// import and require express and mysql
const express = require('express');
const mysql = require('mysql2');

// create express app
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee_db',
  },
  console.log('Connected to the employee_db database.')
);

// get all employees
app.get('/api/employees', (req, res) => {
  db.query('SELECT * FROM employee', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// get employee by id
app.get('/api/employees/:id', (req, res) => {
  db.query('SELECT * FROM employee WHERE id =?', req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
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
app.put('/api/employees/:id', (req, res) => {
  db.query(
    'UPDATE employee SET first_name =?, last_name =?, role_id =?, manager_id =? WHERE id =?',
    [
      req.body.first_name,
      req.body.last_name,
      req.body.role_id,
      req.body.manager_id,
      req.params.id,
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

// delete employee
app.delete('/api/employees/:id', (req, res) => {
  db.query('DELETE FROM employee WHERE id =?', req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// get all roles
app.get('/api/roles', (req, res) => {
  db.query('SELECT * FROM role', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// get role by id
app.get('/api/roles/:id', (req, res) => {
  db.query('SELECT * FROM role WHERE id =?', req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
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

// get all departments
app.get('/api/departments', (req, res) => {
  db.query('SELECT * FROM department', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// get department by id
app.get('/api/departments/:id', (req, res) => {
  db.query(
    'SELECT * FROM department WHERE id =?',
    req.params.id,
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// create department
app.post('/api/departments', (req, res) => {
  db.query(
    'INSERT INTO department (name) VALUES (?)',
    req.body.name,
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// update department
app.put('/api/departments/:id', (req, res) => {
  db.query(
    'UPDATE department SET name =? WHERE id =?',
    [req.body.name, req.params.id],
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// delete department
app.delete('/api/departments/:id', (req, res) => {
  db.query('DELETE FROM department WHERE id =?', req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
