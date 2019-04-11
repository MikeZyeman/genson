import inquirer from 'inquirer';

import { Application } from "./application";

export class AppCLI extends Application {

    openEditor() {
        inquirer.prompt([
            {
                type: 'editor',
                name: 'editor',
                message: 'Build your scheme'
            }
        ]).then((data: any) => {
            this.generate()
        })
    }

}