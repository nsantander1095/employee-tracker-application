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
            name: 'deptName',
            type: 'input',
            message: 'What is the name of the department?',
        }
    ],
    addRole: [
        {
            name: 'roleName',
            type: 'input',
            message: 'What is the name of the role?',
        },
        {
            name: 'roleSalary',
            type: 'number',
            message: 'What is the salary of the role?',
        },
        {
            name: 'roleDept',
            type: 'rawlist',
            message: 'Which department does the role belong to?',
            choices: []
        },
    ],
    appEmp: [
        {
            name: 'empFirst',
            type: 'input',
            message: 'What is the employee\'s first name?',
        },
        {
            name: 'empLast',
            type: 'input',
            message: 'What is the employee\'s last name?',
        },
        {
            name: 'empRole',
            type: 'rawlist',
            message: 'What is the employee\'s role?',
            choices: []
        },
        {
            name: 'empMngr',
            type: 'rawlist',
            message: 'Who is the employee\'s manager?',
            choices: []
        }
    ],
    updateEmpRole: [
        {
            name: 'empName',
            type: 'rawlist',
            message: 'Which employee\'s role do you want to update?',
            choices: []
        },
        {
            name: 'newEmpRole',
            type: 'rawlist',
            message: 'Which role do you want to assign to the employee?',
            choices: []
        }
    ]
}

module.exports = questions;