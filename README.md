# Space Tourism

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

### Links

## Process

### Built with

- CSS
- CSS Modules
- JavaScript
- TypeScript
- Next.js
- React.js
- JSX

### What I Learnt

How to use custom properties in a smart way.

```css
:root {
  /* colors */
  --clr-dark: 230 35% 7%;
  --clr-white: 0 0% 100%;
  --clr-light: 231 77% 90%;

  /* font-sizes */
  --fs-200: 0.875rem; /* d */
  --fs-300: 0.875rem; /* m */
  --fs-400: 0.9375rem; /* m */
  --fs-500: 1rem; /* m */
  --fs-600: 1.25rem; /* m */
  --fs-700: 3.5rem; /* d */
  --fs-800: 6.25rem; /* d */
  --fs-900: clamp(5rem, 10vw + 1rem, 9.375rem);

  /* font-families */
  --ff-serif: var(--ff-bellefair), serif;
  --ff-sans-cond: var(--ff-barlow-condensed), sans-serif;
  --ff-sans-normal: var(--ff-barlow-normal), sans-serif;
}

@media (min-width: 40em) {
  :root {
    --fs-400: 1rem;
    --fs-500: 1.25rem;
    --fs-600: 2rem;
    --fs-900: 9.375rem;
  }
}

@media (min-width: 58em) {
  :root {
    /* font-sizes */
    --fs-300: 1rem;
    --fs-400: 1.125rem;
    --fs-500: 1.75rem;
  }
}
```

Use of the `em` unit in media queries for browser normalization. With media queries set in `em`, zooming in and out will behave the same in all browsers.

```css
@media (min-width: 40em) {
  /* evetything goes here */
}
```

Changing the `transform` property is better than changing width and height as the browser does not have to recalculate everything and repaint the screen multiple times. And also transitions using `transform` is gpu-intensive, so we have smoother transitions.

```css
.largeButton:hover::after,
.largeButton:focus::after {
  transform: scale(1.5);
  opacity: 1;
}
```

`:where()` has no specificity.

```css
.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-space, 1rem);
}
```

Better way to use color custom properties:

```css
:root {
  --clr-dark: 230 35% 7%;
  --clr-white: 0 0% 100%;
  --clr-light: 231 77% 90%;
}
```

Some form elements do not inherit font families:

```css
input,
button,
textarea,
select {
  font: inherit;
}
```

Removing animations for accessibility

```css
/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Use of `rem` values together with viewport units to prevent zoom problems. Viewport units do not react to zooming in and out, so the font-size would be the same regardless of the zoom level. And also I learnt about the `vmax` and `vmin` units. The addition of the `rem` unit is primarily useful for typography as while the user is zoomming in and out, they probably want the text to grow or shrink together.

```css
:root {
  --fs-900: clamp(5rem, 10vmax + 1rem, 9.375rem); /* m */
}
```

The `max()` function takes the biggest value.

```css
.gridContainer {
  /* pushing it down to the bottom */
  padding-block: 15rem max(7rem, 30vh);
}
```

`ch` is roughly the width of the zero (0) character.

```css
.gridContainer * {
  max-width: 50ch;
}
```

### Useful Resources

- [Space Travel course with Kevin Powell](https://scrimba.com/learn/spacetravel)
- [How to define css variables in style attribute in React and TypeScript](https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript)
- [TypeScript Error : Unexpected token `div`. Expected jsx identifier](https://stackoverflow.com/questions/75213927/typescript-error-unexpected-token-div-expected-jsx-identifier)
- [Why margin on child element moves the parent element in CSS ?](https://www.geeksforgeeks.org/why-margin-on-child-element-moves-the-parent-element-in-css/)
- [How to Load Data from a File in Next.js](https://vercel.com/guides/loading-static-file-nextjs-api-route)
- [Escape string for use in Javascript regex [duplicate]](https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex)
- [ARIA: tablist role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [Naming CSS Stuff Is Really Hard](https://sparkbox.com/foundry/naming_css_stuff_is_really_hard)
- [CSS Naming Conventions that Will Save You Hours of Debugging](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)

## Author

<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
