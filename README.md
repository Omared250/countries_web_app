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

En este poryecto me pude familiarizar mas con las bases de JS y usar VANILLA JS, ya que al no utilizar ningun framework toda aquella parte dificil del codigo, que normalmente
utilizamos un framework para solucionarlo requeria mas atencion y trabajo fuerte para brindar una solucion a todos aquellos desafios que se presentan
mientras construimos un proyecto.

Asi mismo puedo decir que me he familiarizado mas con la DOM y como se manejas sus eventos y su comportamiento ayudandome a entender a mas profundidad
como funcionan todo detras de escena usando JS.

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
