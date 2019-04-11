#!/usr/bin/env node

import program from 'commander';
import chalk from "chalk";

const pkg = require('../package.json');

import { AppCLI } from "./app/app-cli";


const appcli = new AppCLI();

export class CLI {

    initCLI() {
        program
            .version(pkg.version, '-v, --version')
            .option('-g, --generate [src]', 'generates json with random data')
            .option('-o, --output [out]', 'outputs the generated json')
            .option('-f, --format [form]', 'outputs in a certain format')
            .option('-e, --editor', 'opens ')
            .parse(process.argv);


        if (program.generate) console.log(program);
        if (program.editor) appcli.openEditor();
    }

}

const cli = new CLI();
cli.initCLI();