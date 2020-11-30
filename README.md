# Notesharing  
This application allows students to upload their notes onto a shared platform for others to access, review, rate and comment on.  

## Features of the application include:
*	Uploading your notes
*	Downloading notes
*	Choosing a specific note based on the course and course number
*	Choosing a specific note based on the professor
*	Choosing a specific note based on the student
*	Identifying notes which have the highest ratings

## Project workflow
* No code should be pushed to the `master branch`. 
* Implemented feature branches should be pushed to the `feature branch` then to the `develop branch`.
* New pages should be created from the `develop branch` ONLY.(see how below).
* A page feature branch should be named as `page/feature-name` (e.g.home/signin-impl or courses/card-ui-impl).
* A generic feature liked database setup should be named as `featurename`.
* After any new feature development, create a pull request to be reviewed by a team member.
* Add helpful links in the helpful link section.

## Creating a new page
* Switch your branch to the `develop branch`
* Create a new component using `ng generate component pages/page_name` 

## Adding a new feature to an existing page
* If you're already on a branch, either shelf or commit and add changes to your feature branch.
* Checkout to the `develop branch`.
* Create the page feature branch using the naming convention `page/feature-name` (e.g.home/signin-impl or courses/card-ui-impl).
* Implement your feature.
* Commit and add your changes.
* Create a pull request from the current `page/feature-name` to `develop`.
* Have it reviewed by a team memmber.
* Have the team member approve and merge the changes.

## Helpful Links
* Link to trello board: https://trello.com/b/iRyaiiGu/notesharing

## Help with Angular CLI

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.  
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
* Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.  
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).  
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).  
* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).  
