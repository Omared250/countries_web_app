# countries_web_app - REST Countries API with color theme switcher solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:
- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on modal window
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![Design](https://github.com/Omared250/countries_web_app/blob/master/src/design/Final-Design.png)

### Links

- Solution URL: [https://github.com/Omared250/countries_web_app]
- Live Site URL: [https://omared250.github.io/countries_web_app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Design
- [Vanilla JS]
- [Architecture - MVC]

### What I learned

In this project I was able to become more familiar with the basics of JS and use VANILLA JS, since by not using any framework all that difficult part of the code, which normally
we used a framework to solve it, it required more attention and hard work to provide a solution to all those challenges that arise
while we build a project.

Likewise, I can say that I have become more familiar with the DOM and how its events and behavior are handled, helping me to understand it more deeply.
how everything works behind the scenes using JS.

```js proud-of-this: 
  const controlInfoCountry = function(name) {
    try {
        renderInfoCountry(model.state.countries.filter(cty => cty.name === name));
        const borders = document.querySelectorAll('.country__row__border');
        borders.forEach(b => b.addEventListener('click', e => {
            const borderName = model.state.countries.filter(br => br.countryCode === e.target.innerHTML);
            controlInfoCountry(borderName[0].name);
        }));
    } catch (err) {
        console.error(err);
    }
};
```

## Author

- Github - [Omar Ascanio](https://github.com/Omared250)
- Frontend Mentor - [@omared250](https://www.frontendmentor.io/profile/Omared250)
