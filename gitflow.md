<div>
    <a href="https://dashbouquet.com">
        <img src="assets/dashbouquet-logo.svg" alt="Dashbouquet" width="120"/>
    </a>
    <br/>
</div>

<h1 align="center">GitFlow</h1>

| Branches | Commits |  
| --- | --- |  
| **`develop`** | **`<task_id> - <FE/BE> - [<subject>] <short-description>`** |  
| This is your main development branch. The **develop** branch serves as an integration branch for features. | DB-231 - FE - [Home Screen] update logo. |  
| **`main`** | **`<Infrastructure> - <FE/BE> - [<subject>] <short-description>`** |  
| This branch represents the latest released/deployed codebase. Only updated by merging other branches into it. | For infrastructure changes (gem updates, configs, e.g.) and there is no task in bug tracking system. Example: Infrastructure - FE - [ESLINT] update code style rules | 
| **`feature/<task_id>-<short-description>`** | **`<FIX> - <FE/BE> - [<subject>] <short-description>`** |  
| When you start work on anything non-trivial, you create a feature branch. When finished, you’ll merge this branch back into the development branch to queue it for the next release. (e.g: feature/DB-100-sign-up-page) | When it is a hotfix and there is no task in bug tracking system. Example: FIX - FE - [Home Screen] fix logo position. | 
| **`hotfix/<task_id>-<short-description>`** | **_NOTES:_** |  
| For bugfixes in an already released version. | - don't be afraid to split a change into multiple commits (or even multiple PRs) if it promotes readability and would ease the review burden; |  
| **`bugfix/<task_id>-<short-description>`** | - **TODO**'s should generally not appear in committed code. If that is completely unavoidable then create a GitHub issue to track resolving the TODO. If it is a hack, use HACKHACK instead (for easier searchability); |
| For bugfixes. | - don't leave out commented code or `console.log` statements; |
| **`release/<sprint_number>.<dd-mm-yyyy>.<version_number>`** | - `<short-descripton>` should explain what was done in commit; |
| When you’re about to package a new release, you create a release branch from the development branch. You can commit to it during your preparation for a release, and when it’s ready to be deployed, you merge it into both the development branch and the master branch (to indicate that the release has been deployed). | - test code and require reviews (after finishing of feature `pull request` should be created).


