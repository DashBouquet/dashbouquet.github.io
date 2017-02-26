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
 - Keep event handlers away from components using `recompose`
 - Keep dispatch function handlers away from components using `recompose` 
   and `mapDispatchToProps`
 - Keep your components props structure typed with interfaces
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

## Ramda

**Ramda** is a functional-style library we're using to build awesome software. It 
comes as a replacement to well-known *LoDash* which is considered to be deprecated
since 2017

### Migration from LoDash

#### Selectors

Using lenses abstration over getters abstraction allows us to 

1. Compose lenses (for both get and set)
1. Create functional immutable setters 

#### Simple Value

Lodash:
```javascript
_.get(state, 'users');
```

Ramda:
```javascript
view(lensProp('users'), state);
```

#### Deep Value

Lodash:
```javascript
_.get(state, 'users.name');
```

Ramda:
```javascript
view(lensPath(['users','name']), state);
```

#### Default Value

Lodash:
```javascript
_.get(state, 'username', 'anonymous');
```

Ramda:
```javascript
const userNameLens = lens(propOr('username', 'anonymous'), assoc('username'));
view(userNameLens, state);
```

#### Setting a value (immutable way)

Lodash:
```javascript
const newstate = _.assign({}, state, _.set('username.name', 'newName'));
```

Ramda:
```javascript
const userNameLens = lensPath(['username','name']);
const newstate = set(userNameLens, 'newName', state);
```

## redux-saga-testing

Use `redux-saga-testing` package to get your saga tested


## jest 

Use jest to run your unit tests.

## date-fns

`date-fns` is an immutable and composable replacement for `moment` library.

# Not recommended 

## LoDash

**LoDash** is underscode-like library aiming to be all-in one toolbelt to manage
data and utilities in different environments.

## Moment

Moment is a date-operations library. It's replaced with `date-fns`
