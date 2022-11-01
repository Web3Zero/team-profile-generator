
const inquirer = require('inquirer')
const { appendFile } = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/intern')
const fs = require('fs')
//var fs = require('browserfs')

const path = require('path');
const DIST_DIR = path.resolve(__dirname,'dist')
const distPath=path.join(DIST_DIR,'team.html')

const render = require("./src/page-template.js")

const { create } = require('domain')



console.log('Welcome to the team generator!')
const teamMembers = []
const idArray = []

function appMenu() {
    function createManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "what is the manager's name?"
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "what is the managers ID?",
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "what is the managers Email?",
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: "what is the managers Office number?",
                },
            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                )
                teamMembers.push(manager)
                idArray.push(answers.managerId)
                createTeam()
            })
    }

    function createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'memberChoice',
                    message: 'Which role would you like to add?',
                    choices: ['Engineer', 'Intern', 'Nobody']
                }
            ])
            .then((userChoices) => {
                switch (userChoices.memberChoice) {
                    case 'Engineer':
                        addEngineer()
                        break
                    case 'Intern':
                        addIntern()
                        break
                    default:
                        buildTeam()
                }
            })
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'Engineers name?',
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: 'Engineers ID?',
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Engineers Email?',
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: 'Engineers GitHub?',
                },
            ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub
                )
                teamMembers.push(engineer)
                idArray.push(answers.engineerId)
                createTeam()
            })
    }
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'Interns name?',
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: 'Intern ID?',
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Interns Email?',
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'Interns School?',
                },
            ])
            .then((answers) => {
                const intern = new Intern(
                    answers.internName,
                    answers.internId,
                    answers.internEmail,
                    answers.internSchool
                )
                teamMembers.push(intern)
                idArray.push(answers.internId)
                createTeam()
            })
    }
    function buildTeam() {
        fs.writeFileSync(distPath, render(teamMembers), 'utf-8')
    }
    createManager()
}


appMenu()