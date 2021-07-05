#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')


const createPassword = require('./utils/createPassword')
const savePassword =require('./utils/savePassword')

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password','8')
    .option('-s, --save', 'Save Password to password.txt')
    .option('-nn, --no-numbers', 'Remove numbers')
    .option('-ns, --no-symbols', 'Remove symbols')
    .parse()


const {length, save, numbers, symbols} = program.opts()


//get generated password
const generatedPassword = createPassword(length,numbers,symbols)

//save to file
if(save){
    savePassword(generatedPassword)
}

//copy to clipboard
clipboardy.writeSync(generatedPassword)
//output generated
console.log(chalk.bgYellow('password copied to clipboard'))

console.log(chalk.bgBlue('Generated Password: ')+ chalk.bold( generatedPassword))