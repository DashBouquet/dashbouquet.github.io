# How to benefit from code review

## Background

`Code review` has been proven to be a good tool for 
1. Education
2. Reducing complexity
3. Reducing technical debt

So it's a good idea to implement it in any project, with small differences.

## Flow description

Prerequesites:
1. The newly created team is informed that code review flow is being implemented in a specific project.
2. Every team member can stick to `git workflow`

Here are few simple steps:
1. After submitting a PR a team member `may` ask `any` team member to review his PR in order to get a feedback
2. After receiving a code review request a team member should perform it best he can. A result should be 
   either approval or decline with comments.
3. If something has left unclear then two parties need to resolve the issues in a friendly conversation.

## How to perform code review

You must be friendly and precise in what is need to be improved if you leave a comment. Please refer to a 
specific rule you're mentioning while asking people to fix something. Make sure you make it clear `WHY`.

Which flaws should be noticed:
1. Naming conventions violated / vocabulary ignored
2. Build errors
3. Left `debugger` and `console.log` statements
4. Obvious flaws in code formatting

Which things is good to mention:
1. More common ways of handling things
2. Useful components allowing to avoid code duplications
3. Styleguide violations

## How to respond to code review

Ask question if something is unclear. Do it in person. 
Respond with commits with fixes.
