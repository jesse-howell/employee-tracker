INSERT INTO
    department (id, name)
VALUES
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal'),
    (5, 'Marketing'),
    (6, 'Customer Service'),
    (7, 'Human Resources'),
    (8, 'Operations');

INSERT INTO
    role (id, title, salary, department_id)
VALUES
    (1, 'Sales Lead', 100000, 1),
    (2, 'Salesperson', 80000, 1),
    (3, 'Lead Engineer', 150000, 2),
    (4, 'Software Engineer', 120000, 2),
    (5, 'Account Manager', 160000, 3),
    (6, 'Accountant', 125000, 3),
    (7, 'Legal Team Lead', 250000, 4),
    (8, 'Lawyer', 190000, 4),
    (9, 'Marketing Lead', 150000, 5),
    (10, 'Marketing Specialist', 100000, 5),
    (11, 'Customer Service Lead', 125000, 6),
    (12, 'Customer Service Specialist', 115000, 6),
    (13, 'HR Manager', 175000, 7),
    (14, 'HR Specialist', 150000, 7),
    (15, 'Operations Manager', 200000, 8),
    (16, 'Operations Specialist', 175000, 8);

INSERT INTO
    employee (
        id,
        'first_name',
        'last_name',
        role_id,
        manager_id
    )
VALUES
    (1, 'John', 'Doe', 1, 3),
    (2, 'Mike', 'Chan', 2, 1),
    (3, 'Ashley', 'Rodriguez', 3, NULL),
    (4, 'Kevin', 'Tupik', 4, 3),
    (5, 'Kunal', 'Singh', 5, NULL),
    (6, 'Malia', 'Brown', 6, 5),
    (7, 'Sarah', 'Lourd', 7, NULL),
    (8, 'Tom', 'Allen', 8, 7),
    (9, 'Christian', 'Eckenrode', 9, NULL),
    (10, 'Jennifer', 'Lopez', 10, 9),
    (11, 'Carl', 'Sagan', 11, NULL),
    (12, 'Angela', 'Martin', 12, 11),
    (13, 'Kelly', 'Chu', 13, NULL),
    (14, 'Sarah', 'Tomlin', 14, 13),
    (15, 'Tammy', 'Wilson', 15, NULL),
    (16, 'Samantha', 'Rivera', 16, 15);