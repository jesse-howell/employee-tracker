SELECT
    *
FROM
    department,
    role,
    employee;

SELECT
    department,
    COUNT(id)
FROM
    employee
GROUP BY
    department;

SELECT
    role,
    COUNT(id)
FROM
    employee
GROUP BY
    role;

SELECT
    department,
    role,
    COUNT(id)
FROM
    employee
GROUP BY
    department,
    role;

SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    role.title,
    role.salary,
    department.name
FROM
    employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id;