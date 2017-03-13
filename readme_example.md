OUTERNETS
---------

In order to quickly start writing code please run

```
npm i
npm run setup
npm start 
or
npm run storybook
```

Additionally video preview generation requires both imagemagick and ffmpeg installed. On MacOSX you may run
```
brew install ffmpeg
brew install imagemagick
```

PROJECT DOCUMENTATION
-----------------------
What's outernets ? Outernets is a cool way to deliver actionable ads to storefront displays
[Demo](http://outernets.co/wp-content/uploads/outernets-bg-intro-video-20160613.webm), http://outernets.co

This project is an interface allowing customers to manage storefront displays and deliver content to it. 

- [Outernets](docs/outernets)
  - [**Coding Styles**](docs/outernets/codingstyles.md)
  - [**Vocabulary**](docs/outernets/vocabulary.md)
  - [**ER**](docs/outernets/ER.md)
  - [**Deployment**](docs/outernets/deployment.md)
  - [**Issues**](docs/outernets/issues.md)
  - [**Project setup**](project_setup.md)



RESPONSIBILITY MATRIX
----------------------

- Tech Lead, Architect @shaleynikov
- Lead Dev @morfmorf
- Frontend Dev @K-AA
- Backend Dev @shaleynikov
- QA @GeorgeChukhley


INFRASTRUCTURE
------------------

# Development

 - Issue Tracking: https://bugless.myjetbrains.com/youtrack/agiles/92-2/96-25
 - CirleCI: https://circleci.com/gh/DashBouquet/outernets-webapp
 - Build status: [![CircleCI](https://circleci.com/gh/DashBouquet/outernets-webapp.svg?style=svg&circle-token=3f477703e983e3bede85160314b8aa3dbbf9d674)](https://circleci.com/gh/DashBouquet/outernets-webapp)
 - Dev Landscape: https://cloud.docker.com/app/shaleynikov/nodecluster/8f524b65-0a5e-47d3-b0d3-3fb5b16608c3/general
 - Infrastructure: http://digitalocean.com (@shaleynikov)
 - Dev Docker images: http://hub.docker.com/shaleynikov
 - Wireframes: https://app.zeplin.io/project.html#pid=580e55c52cc0e36301b9d184
 - Specs: [specs](docs/outernets/specs.md)

# Staging

 - CirleCI: https://circleci.com/gh/DashBouquet/outernets-webapp
 - Infrastructure: http://digitalocean.com (@shaleynikov)
 - Dev Docker images: http://hub.docker.com/shaleynikov

# Production

 - CirleCI: https://circleci.com/gh/DashBouquet/outernets-webapp

Need to be defined by @shaleynikov

BOILER PLATE NOTES
------------------

## Documentation

- [Intro](docs/general): What's included and why
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
