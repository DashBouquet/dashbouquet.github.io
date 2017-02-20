# Frontend  technical guidelines

1. Git commit message guidelines
2. Git flow guidelines
3. Minimal project documentation checklist
4. Minimal project setup
5. Configuration management
6. React Codebook Guidelines
7. Unit Testing Guideline
8. Code Style guideline (javascript, typescript)
9. Technical Policy -- Libraries, Approaches



## Minimal project setup

Every project *MUST* have following:
1. Readme file with project setup & build instructions
2. Automatic build on every push (use CircleCI as a default solution)
3. Automatic deployment on every push ( use CircleCI && Docker && ( Docker Cloud || Heroku ) ) as default solution


Key languages and technologies:
* Javascript ES6
* SASS 
* HTML5
* WebPack
* CircleCI
* Git
* BabelJS
* React or A2 as a primary framework
* OpenUI5 for SAP-related projects
* Loopback/express for backend

It's allowed to use other languages on support projects.

# Javascript

## Frameworks

We support following frameworks:
* AngularJS 2
* ReactJS 
* Loopback/strongloop

### AngularJS

Use following guidelines to build perfect apps:
* ToddMotto https://github.com/toddmotto/angularjs-styleguide

Angular-Material is preferred framework for building modern UI. Bootstrap 4 is also acceptable.

### ReactJS

* Use Immutable + Redux if possible

### Loopback

* Use loopback as a preferred backend framework
* Put most of the functionality into a separable components for later reuse

### 

# Marks and footnotes

[1] 'x => y'  means that we're using x now but start using y from next available project. No new project will use 'x' anymore.
