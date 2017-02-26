JAVASCRIPT CODESTYLE
----------------------

We use [Airbnb’s styleguide](https://github.com/airbnb/javascript#strings) for Javascript
code and Palantir one for Typescript.

As a code style checker we use [TSLint](https://palantir.github.io/tslint/), if it throws an
error your pull-request wouldn't be approved, sorry.

# GENERAL RULES

 * Do not commit commented code
 * Do not commit logs in code
 * Keep your functions pure. Again. KEEP YOUR FUNCTIONS PURE. JUST KEEP IT PURE
 * Use `connect`/`compose` to dispatch your actions
 * Use `components` directory for dummy components
 * Use `modules` directory as your main development workground
 * Use `postcss` styles instead of simple `css`
 * Keep calm and stay awesome :)
 * Cover your business logic with unit tests

# DEVELOPMENT WORKFLOW

 * Pick up a task in BTS
 * Assign it to yourself if it's not
 * Put it to `In progress` state
 * Create a branch TASK-XXX, where TASK is a project name and XXX is an issue number in BTS
 * Create beautiful code
 * Check if tests are passing. Don't forget to create new ones
 * Check if you don't break anything
 * Create pull request, check if tests passed on CI
 * Let know team lead or lead dev that there's a PR waiting
 * Test yourself once again it's really fixed
 * Put task card into `Fixed` status
 * Move to #1

## TypeScript

* Prefer explicit, static language constructs over implicit, dynamic ones. This makes the code base easier to approach for newcomers. Generally follow the advice of *JavaScript: The Good Parts*. 
* Avoid implicit type coercion, particularly when testing existence.
    ```ts
    // bad
    if (x) { ... }
    // good
    if (x != null) { ... }
    ```

* Leverage the type system to push as many possible programming errors as possible from *runtime* to *compile time*. TypeScript is not strongly-typed (rather, it is a gradually typed language with very high interoperability with regular JavaScript), so you can't go all the way with this. You will still have to rely on good unit test coverage to verify your code.
    * Use the `--noImplicitAny` compiler option.
    * Should go without saying, but try to avoid casting to `any`.
* Become familiar with type inference. Leverage it to make your code more expressive and readable while retaining type safety.
* Source files should be `camelCased.ts`.
* Prefer __user-defined type guards__ instead of __explicit type assertions__ (either the `<>` or `as` syntax). While these constructs are similar in strictness, type guards are easier to read. See the [TSLint rule suggestion](https://github.com/palantir/tslint/issues/1228).
* Our source files are written as modules in various folders. Exports from these modules are funneled through `index.ts`, which re-exports the public API of a package (for example, see `app/modules/KitManagement/index.ts`).

## React

* Leverage the type system to check your JSX as much as possible. Prefer defining stricter props interfaces over runtime validation of props. Do not use React's built-in runtime type checking mechanism of `propTypes` — it is redundant in TypeScript.
* Bind component class methods upon declaration, not in the `render()` method. The latter approach is less performant and results in greater garbage collection than is necessary.
    ```tsx
    class Button {
      public render() {
        return <button onClick={this.handleClick} />;
      }
    
      // good
      private handleClick = (e: React.SyntheticEvent) => {
        ...
      }
    }
    ```

* Use callback-based refs on components instead of string-based refs.
  * React is deprecating string-based refs soon.
  * Callback-based refs are strongly typed. See [this blog post](https://medium.com/@basarat/strongly-typed-refs-for-react-typescript-9a07419f807).
  * Enforced by the [tslint-react](https://github.com/palantir/tslint-react) rule `jsx-no-string-ref`.


# CSS

_Which selectors are OK? Which are too slow? Which cause problems in the long run?_

-  We rely _heavily_ on [Stylelint](http://stylelint.io) to ensure consistent formatting across our stylesheets. If your stylesheed don't pass your PR won't get approved
- The worst thing you can do for CSS performance and maintainability is mimic the HTML structure. Instead, use clear namespaced class names that are specific enough to target an element with minimal nesting.
- Avoid universal selectors (those without a tag, class, or ID) if there's any other option.
- Avoid qualifying classes with a tag, like `span.pt-icon-standard`. This ties your rule to HTML structure and makes it less flexible for the user.
- Direct descendant `>` selectors make your HTML markup more strict. It reduces flexibility of the styles. Often this hurts consumers when they want to add a wrapper layer between A and B in a `.class-a > .class-b`. Try to avoid them unless the alternative would make the API extremely verbose.
- Brush up on [some CSS tips from Mozilla](https://hacks.mozilla.org/2016/05/css-coding-techniques/)
