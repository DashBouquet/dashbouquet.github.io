# Testing policy

### While development

 - Linting (eslint/tslint) - **required**
 - Complexity (coverage with [eslint rule](https://eslint.org/docs/rules/complexity)) - **required**

### Pre production

 - Linting (eslint/tslint) - **required**
 - Complexity (coverage with [eslint rule](https://eslint.org/docs/rules/complexity)) - **required**
 - Unit test, Fuzz (jest) - **required**
 - Component test (snapshots/storybook) - **required**
 - Coverage (jest)

### Production

 - E2E (Cypress.io/Protractor) - **required**
 - Integration (jest)
 - Contract test (Pact-js)
 - Chaos test
