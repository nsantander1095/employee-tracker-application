const questions = {
    menu: [{
        name: 'value',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit',
        ],
    }],
    addDept: [
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?',
        }
    ],
    addRole: [
        {
            name: 'title',
            type: 'input',
            message: 'What is the name of the role?',
        },
        {
            name: 'salary',
            type: 'number',
            message: 'What is the salary of the role?',
        },
        {
            name: 'department_id',
            type: 'rawlist',
            message: 'Which department does the role belong to?',
            choices: []
        },
    ],
    addEmp: [
        {
            name: 'first_name',
            type: 'input',
            message: 'What is the employee\'s first name?',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'What is the employee\'s last name?',
        },
        {
            name: 'role_id',
            type: 'rawlist',
            message: 'What is the employee\'s role?',
            choices: []
        },
        {
            name: 'manager_id',
            type: 'rawlist',
            message: 'Who is the employee\'s manager?',
            choices: []
        }
    ],
    updateEmpRole: [
        {
            name: 'id',
            type: 'rawlist',
            message: 'Which employee\'s role do you want to update?',
            choices: []
        },
        {
            name: 'role_id',
            type: 'rawlist',
            message: 'Which role do you want to assign to the employee?',
            choices: []
        }
    ]
}

module.exports = questions;