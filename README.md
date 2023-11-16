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
[Live Site](https://space-tourism-zeta-sable.vercel.app/)

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

I built a Tabbed Interface to make the tabs easier to implement.

```jsx
import { useRef, useEffect } from "react";
import { ArrowKeys } from "../typescript/types";

export function Tab({
  children,
  active,
  pos,
  controls,
  onClick,
  id,
  className = "tab",
}: {
  children: React.ReactNode;
  active: boolean;
  controls: string;
  pos: number;
  id: string;
  onClick: () => void;
  className?: string;
}) {
  const tabRef = useRef<null | HTMLButtonElement>(null);

  useEffect(() => {
    if (active) {
      tabRef.current!.focus();
    }
  }, [active]);

  if (active) className += " active";

  return (
    <button
      role="tab"
      ref={tabRef}
      id={id}
      className={className}
      aria-selected={active}
      aria-posinset={pos}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabList({
  className = "tablist",
  children,
  label = "Tabs",
  orientation = "horizontal",
  style = {},
  onArrowDown,
  onHomeDown = () => {},
  onEndDown = () => {},
}: {
  className?: string;
  children: React.ReactNode;
  label?: string;
  orientation?: "horizontal" | "vertical";
  style?: React.CSSProperties
  onArrowDown: (key: ArrowKeys) => void;
  onHomeDown: () => void;
  onEndDown: () => void;
}) {
  return (
    <div
      role="tablist"
      className={className}
      aria-label={label}
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowDown":
          case "ArrowUp": {
            if (orientation === "vertical") {
              e.preventDefault();
            }
          }
          case "ArrowLeft":
          case "ArrowRight": {
            onArrowDown(e.key);
            break;
          }
          case "Home": {
            e.preventDefault();
            onHomeDown();
            break;
          }
          case "End": {
            e.preventDefault();
            onEndDown();
            break;
          }
        }
      }}
      aria-orientation={orientation}
      style={style}
    >
      {children}
    </div>
  );
}

export function TabPanel({
  className = "tabpanel",
  id,
  labelledBy,
  children,
  active,
}: {
  className?: string;
  id: string;
  labelledBy: string;
  children: React.ReactNode;
  active: boolean;
}) {
  /* #################################################### */
  /* maybe you need tabIndex={-1} instead, look for it */
  /* maybe you also need to style the tabpanel when it has focus */
  /* #################################################### */
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={className}
      id={id}
      aria-labelledby={labelledBy}
      hidden={!active}
    >
      {children}
    </div>
  );
}

```

I can use `matchMedia()` to test the document with a media query and watch changes in it.

```js
useEffect(() => {
    /* 
      every time the change event is fired, 
      we create a new mql object, and because of that we
      have to remove the event handler on the previous mql and
      assign an updated remove function to this variable 
    */

    let remove: null | (() => void) = null;

    const updateOrientation = () => {
      if (remove !== null) remove();

      /* create a MediaQueryList object */
      const mql = window.matchMedia(
        "(min-width: 50em) and (orientation: landscape)"
      );

      /* register change event handler */
      mql.addEventListener("change", updateOrientation);

      /* update `remove()` function */
      remove = () => {
        mql.removeEventListener("change", updateOrientation);
      };

      /* check matching and set orientation */
      if (mql.matches) setOrientation("vertical");
      else setOrientation("horizontal");
    };

    updateOrientation();

    return () => {
      if (remove !== null) remove();
    };
  });
```

### Useful Resources

- [Space Travel course with Kevin Powell](https://scrimba.com/learn/spacetravel)
- [How to define css variables in style attribute in React and TypeScript](https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript)
- [TypeScript Error : Unexpected token `div`. Expected jsx identifier](https://stackoverflow.com/questions/75213927/typescript-error-unexpected-token-div-expected-jsx-identifier)
- [Why margin on child element moves the parent element in CSS ?](https://www.geeksforgeeks.org/why-margin-on-child-element-moves-the-parent-element-in-css/)
- [How to Load Data from a File in Next.js](https://vercel.com/guides/loading-static-file-nextjs-api-route)
- [Escape string for use in Javascript regex [duplicate]](https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex)
- [ARIA: `tablist` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [Naming CSS Stuff Is Really Hard](https://sparkbox.com/foundry/naming_css_stuff_is_really_hard)
- [CSS Naming Conventions that Will Save You Hours of Debugging](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)
- [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- [Window: `matchMedia()` method](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [Window: `devicePixelRatio` property](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) - The example using `matchMedia()` was useful.
- [`<picture>`: The Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [ChatGPT](https://chat.openai.com/chat)

## Author
- Instagram
- Portfolio
- Twitter
- Linkedin
