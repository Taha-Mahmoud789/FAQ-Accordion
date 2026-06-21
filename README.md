# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM manipulation, event listeners)
- [Font Awesome](https://fontawesome.com/) - for the plus/minus toggle icons

### What I learned

This project was split into a clear CSS architecture instead of one big stylesheet:

```
css/
├── variables.css   → colors, fonts, spacing as CSS custom properties
├── base.css        → resets and global element styles
├── styles.css       → component-specific styles
├── responsive.css   → media queries (mobile-first)
└── all.css          → imports all the files above
```

The accordion logic toggles a single `active` class per item, and only one item stays open at a time:

```js
header.addEventListener("click", () => {
  const isActive = item.classList.contains("active");

  accordionItems.forEach((otherItem) => {
    otherItem.classList.remove("active");
  });

  if (!isActive) {
    item.classList.add("active");
  }
});
```

### Continued development

- Add full keyboard navigation support (arrow keys between questions)
- Add ARIA attributes (`aria-expanded`, `aria-controls`) for better screen reader support

## Author

- Frontend Mentor - [@Taha-Mahmoud789](https://www.frontendmentor.io/profile/Taha-Mahmoud789)
