Blue Book of Frontend. React stack
------------------------------------

Here is experience we've gathered in DashBouquet being frontend developers 
for 4 years and aiming to build best software for best teams.

Basic stack:
 - **React** is acting as a view layer for all apps we're building
 - **Redux** is a predictable state management container
 - **Redux-Saga** is a way we manage side effects

# React

 - Use `modules` approach rather than component/container
 - Keep all your components a pure functions
 - Keep components small and function-specific
 - No `recompose`, only recent React with hooks
 - Reusability is important, so keep creation of new components to the minimum required
 - Consolidate duplicate code – DRY your code
 - Put CSS in JavaScript (use `emotion`or `styled-components`)
 - Keep your components props structure typed with interfaces
 - Comment only where necessary
 - Move business logic to a separate folder named `businessLogic`. 100% of
   code in that folder should be covered with unit tests

# Redux

Key components for each redux app are following:

 - Reducers
 - Actions / Action creators
 - Selectors
 - Store structure / Initial Store

## Reducers
 
 - Use smaller reducers. You may decouple it using `combineReducers` function 
   from standard redux library.
 - Use selectors to deliver immutable changes. Don't write immutable code yourself -- 
   it's better to combine selectors.
 - 100% of reducers code should be covered with unit tests

Sample:
```typescript
  createReducer({
    [doLoginInitActionType]:
      (state) => set(loadingLens, true, state),

    [doLoginDoneActionType]:
      (state, payload: ILoginPayload) =>
        compose(
          set(usersLens, payload),
          set(isAuthLens, true),
          set(loadingLens, false)
        )(state),

    [doLoginErrorActionType]:
      (state, payload : ILoginErrorPayload) =>
        compose(
          set(isAuthLens, false),
          set(errorLens, payload),
          set(loadingLens, false)
        )(state)

  }, initialState)
```

## Actions
 - Support FSA (https://github.com/acdlite/flux-standard-action) in actions
 - Don't try to use typed actions as before variadic generics is implemented 
   in Typescript it gives more effort spend rather than benefits.
 - You may not use string literals to define actions, especially when
   you're writing code in Typescript.

```javascript
const createAction = scopedCreator('auth');

export const doLoginInit = createAction('DO_LOGIN_INIT');
export const doLoginDone = createAction('DO_LOGIN_DONE');
export const doLoginError = createAction('DO_LOGIN_ERROR');
export const requestAccess = createAction('REQUEST_ACCESS');
```   

## Store structure / Initial Store

 - 100% of store / initial store should be typed. Keep it structured by introducing 
   named interfaces. 

```typescript
export
declare interface ILoginState {
  user: ILoginPayload;
  isAuthenticated: boolean;
  error: ILoginErrorPayload;
  loading: boolean;
}
```

## Selectors

 - Use ramda `lenses` to create selectors for both reading and writing values
 - Create base selector for a root of a reducer
 - Compose selectors to create a selector you need, e.g. `set(compose(authLens, loadingLens), false, state)`
 
```typescript
export
const baseKey = 'auth';
export const authLens = lensProp(baseKey);
export const usersLens = lensProp('users');
export const loadingLens = lensProp('loading');
export const errorLens = lensProp('error');
```

# Saga

Saga is used to manage side-effects. So if it's changing store then it's redux thing,
otherwise it should come to saga.

 - Keep full flow in saga
 - Keep saga 100% covered with unit tests 
 - Use `redux-saga-testing`
 - Use `generators` in saga and `async/await` everywhere else

# Other Recommendations

## redux-saga-testing

Use `redux-saga-testing` package to get your saga tested

## jest 

Use jest to run your unit tests.

## date-fns

`date-fns` is an immutable and composable replacement for `moment` library.

# Not recommended 

## LoDash and Ramda

No! **LoDash** No! **Ramda**. Use pure JS as much as possible.

## Moment

Moment is a date-operations library. It's replaced with `date-fns`

# Helpful Sources

## React

### Books

- [Learning React. O'Reilly](https://drive.google.com/file/d/129d5xERO0heJ7eSqUCkIXHse1_Y572qW/view?usp=sharing)
- [React and React Native. Adam Boduch and Roy Derks](https://drive.google.com/file/d/1rtzcYPG849giSS4OagG7lPyC78j34DAy/view?usp=sharing)

**NOTE:** *The sources are presented for informational purposes only.*

### Tutorials And Articles

- [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/)
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/)
- [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)



