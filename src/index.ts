#!/usr/bin/env npx ts-node --esm

import chalk from 'chalk'
import figlet from 'figlet'
import { program } from 'commander'
// import clear from 'clear'

// Clear previous input
// clear()

program.addHelpText(
    'before',
    chalk.yellowBright(figlet.textSync('CLI', { horizontalLayout: 'full' }))
)

program
    .version('0.0.1')
    .description(
        chalk.blueBright(`A simple CLI made with Node.js and TypeScript.`)
    )

program
    .command('hello <name>')
    .option('--e', 'with exclamation mark', false)
    .description('Say hello to someone')
    .action((name, options) => {
        console.log(chalk.blue(`Hello ${name}${options.e ? '!' : ''}`))
    })

program.parse(process.argv)
