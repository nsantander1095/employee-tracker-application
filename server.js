const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const questions = require('./assets/src/questions');


const db = mysql.createConnection({
    user: 'root',
    database: 'employees',
});

const prompt = inquirer.createPromptModule();

const showAllEmps = () => {
    db.query(`
    SELECT
      e.id,
      CONCAT(e.first_name, ' ', e.last_name) AS name,
      role.title,
      role.salary,
      CONCAT(m.first_name, ' ', m.last_name) AS manager_name
    FROM employee e
    LEFT JOIN role
    ON e.role_id = role.id
    LEFT JOIN employee m
    ON e.manager_id = m.id
    `, (err, employees) => {
      if (err) console.log(err);
      console.table(employees);
      init();
    })
};

const addEmp = () => {
    db.query(`
        SELECT CONCAT(first_name, ' ', last_name) AS name, id AS value 
        FROM employee 
        WHERE manager_id IS NULL
    `, (err, mgnrOptions) => {
        if(err) throw err;
        const options = [...mgnrOptions, { name: 'none', value: 0 }];
        questions.addEmp[3].choices = options;
        db.query('SELECT title AS name, id AS value FROM role', async (err, roleOptions) => {
            if(err) throw err;
            questions.addEmp[2].choices = roleOptions;
            const input = await prompt(questions.addEmp);
            if (input.manager_id === 0) delete input.manager_id;
            db.query('INSERT INTO employee SET ?', input, (err) => {
                if(err) throw err;
                console.log(`Added new employee`);
                init();
            })
        })
    })
};

const updateEmpRole = () => {
    db.query('SELECT CONCAT(first_name, \' \', last_name) AS name, id AS value FROM employee', (err, empOptions) => {
        if(err) throw err;
        questions.updateEmpRole[0].choices = empOptions;
        db.query('SELECT title AS name, id AS value FROM role', async (err, roleOptions) => {
            if(err) throw err;
            questions.updateEmpRole[1].choices = roleOptions;
            const input = await prompt(questions.updateEmpRole);
            db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [input.role_id, input.id], (err) => {
                if(err) throw err;
                console.log('Updated role');
                init();
            })
        })
    })
};

const showAllRoles = () => {
    db.query('SELECT role.id, title, salary, name AS dept FROM role JOIN department ON role.department_id = department.id', (err, role) => {
        if(err) throw err;
        console.table(role);
        init();
    })
};

const addRole =  () => {
    db.query('SELECT name, id AS value FROM department', async (err, options) => {
        if(err) throw err;
        questions.addRole[2].choices = options;
        const input = await prompt(questions.addRole);
        db.query('INSERT INTO role SET ?', input, (err) => {
            if(err) throw err;
            console.log(`Added ${input.title}`);
            init();
        })
    })
};

const showAllDept = () => {
    db.query('SELECT * FROM department', (err, department) => {
        if(err) throw err;
        console.table(department);
        init();
    })
};

const addDept = async () => {
    const input = await prompt(questions.addDept);
    db.query('INSERT INTO department SET ?', input, (err) => {
        if(err) throw err;
        console.log(`Added ${input.name}`);
        init();
    })
};

const init = async () => {
    const answers = await prompt(questions.menu);
    switch(answers.value) {
        case 'View All Employees': {
            return showAllEmps();
        }
        case 'Add Employee': {
            return addEmp();
        }
        case 'Update Employee Role': {
            return updateEmpRole();
        }
        case 'View All Roles': {
            return showAllRoles();
        }
        case 'Add Role': {
            return addRole();
        }
        case 'View All Departments': {
            return showAllDept();
        }
        case 'Add Department': {
            return addDept();
        }
        case 'Quit': {
            return process.exit();
        }
    }
};

init();