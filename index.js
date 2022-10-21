
const jest = require('jest')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { appendFile } = require('fs')
const Manager = require('./lib/Manager')


const path = require('path');


console.log('Welcome to the team generator!')
const teamMembers =[]
const idArray=[]
function appMenu(){
    function createManager(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message:"what is the manager's name?"
                },
                {
                    type:'input',
                    name: 'managerId',
                    message: "what is the managers ID?",
                },
                {
                    type:'input',
                    name: 'managerEmail',
                    message: "what is the managers Email?",
                },
                {
                    type:'input',
                    name: 'managerOfficeNumber',
                    message: "what is the managers Office number?",
                },
            ])
            .then((answers)=>{
                const manager =new Manager(
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

    function createTeam(){
        inquirer
            .prompt([
                {
                    type:'list',
                    name:'memberChoice',
                    message:'Which role would you like to add?',
                    choices:['Engineer','Intern','Nobody']
                }
            ])
            .then((userChoices)=>{
                switch(userChoices.memberChoice){
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

    function addEngineer(){

    }
    function addEngineer(){

    }
    function addEngineer(){

    }
}


appMenu()