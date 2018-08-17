# Styling

This file is oriented towards react-based project.

### Common

If you just starting a project and it has no special performance requirements, it is recommended to choose css-in-js solution,
as it integrates and scales better with React (no need for webpack loaders, including css files in html, processing them, easier to use external libraries with components).

- https://cssguidelin.es/ (recommended!) - the base resource that would be useful for any kind of project.
- you can also read [this](https://github.com/chris-pearce/css-guidelines) as an extension to the one above (provides some good/bad examples)

### Scss

- https://sass-guidelin.es/ - scss-specific guide. (You can ignore `Architecture` part for now)

### Scss/css/css-modules

#### Where to store them

At first, try to mimick your file path, so it would be easy to find a style for appropriate React component.
I.e., in case of scss, if React component is placed on `src/components/Button.js`, put scss in `styles/components/button.scss`.
In case of css/css-modules it is best to place css files in the same folder as React component, and import it in javascript code.

#### Utility classes

It is best to make utility classes first (doesn't mean you shouldn't make classes for components). Bootstrap is a good example for it.
Good candidates for utilities - grid system, layout (text-align, etc.), colors, background-colors, borders, margins, paddings, text styles (bold, underline, etc.).
It might even have a positive impact at the overall UX due to the more consistent colors, margins, etc (if you create margins separately for each component, there are more chances they would be different, thus creating inconsistency).

- https://adamwathan.me/css-utility-classes-and-separation-of-concerns/ - (recommended!)
- https://getbootstrap.com/docs/4.0/utilities/ 

Depending on a project it might be useful to reuse existing library (https://css-tricks.com/need-css-utility-library/, http://basscss.com/#basscss-flexbox, etc.)

#### Architecture

For complex/unique(hard to reuse) component/layout styles, it is recommended to stick with BEM methodology (always using the same methodology, even if it too complex for current project, might be beneficial in a long run, as you don't have to learn a new one each time you switch projects).

- https://en.bem.info/methodology/quick-start/

### CSS-in-JS

https://www.styled-components.com/ is currently a de facto standard for css-in-js. It has a big community, frequent update, and since recently [supports object styles](https://github.com/styled-components/styled-components/pull/1732).
PS. Make sure use use [babel-plugin](https://www.styled-components.com/docs/tooling#babel-plugin) for styled-components.

While css-in-js solution doesn't need utility classes, it's still best to reuse the same colors/padding and margin sizes/breakpoints, etc.
Most of these can be stored as a theme (https://www.styled-components.com/docs/advanced#theming), but can be just plain js modules with constants.

- https://github.com/jxnblk/grid-styled - great library for layouts in css-in-js. Together with [styled-space] https://github.com/jxnblk/grid-styled#styled-space it also handles paddings/margins.
