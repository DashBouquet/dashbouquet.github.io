Unit testing guidelines
------------------------

The rules are simple:

  - Customer **must** benefit from unit testing
  - 100% of business logic should be covered with unit tests
  - Any complicated flow should be covered with unit tests
  - Unit tests **must** run on every build run
  - PR's which break unit tests won't be accepted 
  - On `javascript` stack you're free to use `mocha`, `jest` or `ava`
  - Code coverage should be measured on every project. PR's which 
    greatly reduce code coverage should not be accepted
