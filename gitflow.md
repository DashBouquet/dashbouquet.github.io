# GIT FLOW

# Commit message
* **Commit messages** should be descriptive and useful to anyone at any point in time. Avoid "respond to comments" which only makes sense in the immediate context of the PR, prefer "style fixes + better naming" which is accurate and helpful.
* **Code comments** should attempt to explain _why_ a change was made, instead of _what_ the change is. Let the code speak for itself.

commit message format: `[REFACROR/FEAT/CHORE/FIX/TASK-000]: <message>`

message should explain what was done in commit
```
TASK-152: now it's possible to select a widget in widgets list 
REFACTOR: WidgetComponent was refactored as a pure function to eliminate possible side effects
FIX: button hover styles now in accordance with design spec
CHORE: removed bogus console.log statements
```

* Don't be afraid to split a change into multiple commits (or even multiple PRs) if it promotes readability and would ease the review burden.
* **TODO**s should generally not appear in committed code. If that is completely unavoidable then create a GitHub issue to track resolving the TODO. If it is a hack, use HACKHACK instead (for easier searchability).
* Don't leave out commented code or `console.log` statements


### Branches
* We use **master** only to deliver stable builds. You are not allowed to push to it directly. Now branch `master` is a current state of application on stage
* We use **dev** as a current development branch
* While developing a feature you should create **feature/feature-name**
* For each task/fix/feature should be created separate branch. You may concat several tasks into a bigger feature. Name branches properly.
* After finishing of feature `pull request` should be created. Ask for [Code review](code_review.md) if you want to.
* Notify lead developer or team lead to put a code review on it
* After code review feature branch should be merged to `master`
* On `master` updating CI service starting deployment to stage 
