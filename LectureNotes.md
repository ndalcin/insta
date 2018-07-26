# Testing in React

_This lecture is to introduce students to Test Driven Development in React, using Jest and Enzyme._

## SWBATs

* Use Test Driven Development to build a React App
* Understand the different roles that Enzyme and Jest play in React tests
* Test a React Application with Enzyme and Jest
  * Include and install Enzyme in a create-react-app application
  * Write unit tests for React components
  * Write tests to test for different user interactions
  * Utilize Snapshots

## Resources

* [Enzyme Docs](https://airbnb.io/enzyme/)
* [Jest Docs](https://jestjs.io/docs/en/getting-started)
* [Create React App Testing tips](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
* [Starter Code]()

## Outline

```text
 5m   What is TDD
 5m   What are Enzyme and Jest
 10m  Starter code, install Enzyme, app mock
20m   Writing Tests/Components
10m   Student Exercise
10m   Snapshots
===
 1h   Total
```

### What is TDD

* Development method that utilizes a short development cycle: red-green-refactor
  * Red: Write the test, run test suite, watch test fail
  * Green: Write the code to pass the test, run test suite, watch test pass
  * Refactor: Refactor.

- Pros:
  * forces you to design before implementing
  * increase confidence that code behaves as expected
  * intentional changes only
- Cons:
  * takes time
  * mocking data is hard
  * forces you to think about the expected outcome before implementing

### What is Jest? What is Enzyme?

* It is possible to test React components using testing tools built in to React
* React Team and community recommend Jest and Enzyme
* Jest

  * JS testing framework/test runner by Facebook
  * 'zero configuration' experience, ready to use as is
  * already configured in `create-react-app` applications
  * provides code coverage reports to determine how strongly tested your app is
  * powerful library for mocking functions

* Enzyme

  * JS testing framework by AirBnB
  * Provides higher levels tools to test React components
  * Easy to render components (specifically `shallow` rendering)
    * only render one level of components deep
  * Uses adapter based system and requires _some_ setup

### Starter Code + Install Enzyme

* Create React App uses Jest as its test runner, so its already installed
* run `npm test`
  * Jest launches in watch mode (like npm start), so every time you save a file, tests are re-run
  * interactive CLI for more options
* `npm install --save-dev enzyme enzyme-adapter-react-16`
* `npm test` again, read error
* set up adapter
  src/setupTests.js :

  ```import { configure } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  configure({ adapter: new Adapter() });
  ```

### Writing Tests/

* Jest words to know:
  *

### Student Exercise

### Snapshots
