### Basic structure of react application

```
.
+-- components/
|   +-- Button/
|   |    +-- __tests__/
|   |    |   +-- Button.spec.ts
|   |    |   +-- Button.stories.ts
|   |    |   +-- ButtonPrimary.spec.ts
|   |    +-- index.tsx
|   |    +-- ButtonPrimary.tsx
|   |    +-- ButtonNav.tsx
|   +-- DropDown/
|   |    +-- __tests__/
|   |    |   +-- DropDown.spec.ts
|   |    |   +-- DropDown.stories.ts
|   |    |   +-- DropDownItem.spec.ts
|   |    +-- index.tsx
|   |    +-- DropDownItem.tsx
|   +-- Spinner.tsx
+-- containers/
|   +-- __tests__/
|   |   +-- AppContainer.spec.ts
|   |   +-- RootContainer.spec.ts
|   +-- AppContainer.ts
|   +-- RootContainer.ts
+-- modules/
|   +-- ModuleOne
|   |   +-- components/
|   |   |   +-- __tests__/
|   |   |   |   +-- ModuleOneHeader.spec.ts
|   |   |   |   +-- ModuleOneHeader.stories.ts
|   |   |   +-- ModuleOneHeader.ts
|   |   |   +-- ModuleOneBody.ts
|   |   +-- containers/
|   |   |   +-- __tests__/
|   |   |   |   +-- ModuleOneContainer.spec.ts
|   |   |   +-- ModuleOneContainer.ts
|   |   +-- hooks/
|   |   |   +-- useModuleOneData.ts
|   |   +-- actions.ts
|   |   +-- reducer.ts
|   |   +-- reducer.ts
|   |   +-- saga.ts
|   |   +-- index.ts
|   +-- ModuleTwo
|   |   +-- components/
|   |   |   +-- __tests__/
|   |   |   |   +-- ModuleTwoHeader.spec.ts
|   |   |   |   +-- ModuleTwoHeader.stories.ts
|   |   |   +-- ModuleTwoHeader.ts
|   |   |   +-- ModuleTwoBody.ts
|   |   +-- containers/
|   |   |   +-- __tests__/
|   |   |   |   +-- ModuleTwoContainer.spec.ts
|   |   |   +-- ModuleTwoContainer.ts
|   |   +-- hooks/
|   |   |   +-- useModuleTwoData.ts
|   |   +-- actions.ts
|   |   +-- reducer.ts
|   |   +-- reducer.ts
|   |   +-- saga.ts
|   |   +-- index.ts
+-- hooks/
|   +-- useRoutes.ts
|   +-- useAppData.ts
+-- actions/
|   +-- index.ts
|   +-- spinner.ts
+-- routes/
|   +-- index.ts
|   +-- protected.ts
+-- saga/
|   +-- index.ts
|   +-- spinner.ts
+-- reducer/
|   +-- index.ts
|   +-- spinner.ts
+-- index.tsx
+-- store.ts
```