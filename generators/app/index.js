"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the smashing ${chalk.red(
          "generator-python-kamino"
        )} generator!`
      )
    );

    // see https://github.com/SBoudrias/Inquirer.js#objects
    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "Your project description",
      },
      {
        type: "confirm",
        name: "runPipEnv",
        message: "Would you like to install the pipenv?",
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("Pipfile"),
      this.destinationPath("Pipfile")
    );
    this.fs.copy(
      this.templatePath("pyproject.toml"),
      this.destinationPath("pyproject.toml")
    );
    this.fs.copyTpl(
      this.templatePath("setup.cfg"),
      this.destinationPath("setup.cfg"),
      {
        name: this.props.name,
        description: this.props.description
      }
    );
    this.fs.copy(
      this.templatePath("__init__.py"),
      this.destinationPath(this.props.name + "/" + "__init__.py")
    );
    this.fs.copy(
      this.templatePath("main.py"),
      this.destinationPath(this.props.name + "/" + "main.py")
    );
  }

  install() {
    if (this.props.runPipEnv) {
      this.spawnCommand("pipenv", ["install", "--dev"]);
    }
  }
};
