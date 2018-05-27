This project is a part of `*-mixins`, with goal to provide a better __CSS__ experience
 to the __React__ infected people.
## Install
[![NPM](https://nodei.co/npm/styled-components-mixins.png?downloads=true&stars=true)](https://nodei.co/npm/styled-components-mixins/)

## Use
```js
 // import classes you need from the library you need.
 import {class1, class2} from 'styled-components-mixins/{LIBRARY}';
 // use them as mixins
 const Component = styled.div`
    ${class1}
    z-index: 1;
 `;
```

## Includes:
 - https://github.com/tachyons-css/tachyons/
 - https://github.com/twbs/bootstrap
 - https://github.com/turretcss/turretcss
 - https://github.com/Dogfalo/materialize
 - https://github.com/monarkee/beard
 - https://github.com/basscss/basscss
 
 
if you need more - raise an issue, open a PR, or use webpack`s [css-to-js-loader](https://github.com/theKashey/css-to-js-loader).
 
# Demo 
[![Edit Styled Components](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/qkv82lk6l6) [![Greenkeeper badge](https://badges.greenkeeper.io/theKashey/styled-components-mixins.svg)](https://greenkeeper.io/)

# Theory
Atomic (or Functional) css is quite good methodology, 
but as long it solves many issues - it also introduces a new one.

You can create a Button, and you can describe how it must look like.
```js
<button class="bg-purple f6 br3 ph3 pv2 white hover-bg-light-purple">
  Button Text
</button>
```  
But you will soil HTML code with details of behavior. Both css driven by html or html driven by css is bad.
Something in the middle - BEM - is also not very usable.

You can use LESS to combine all modificators, to have single control point 
```less
.bg-purple{
  .f6;
  .br3; 
  .ph3; 
  .pv2; 
  .white;  
  .hover-bg-light-purple;
}
```
But result CSS will be HUGE.

But you can use client-side CSS framework, to do the same. To get a `Component`. And you will love the result.
```js
const Button = styled.button`
  ${f6};
  ${br3}; 
  ${ph3}; 
  ${pv2}; 
  ${white};  
  ${hover-bg-light-purple};
`
```

# Limitations
 *-Mixins can provide only __mixins__. A single class, style, or an atom.
 
 If some library has selector like:
```css
  .someclass .someanotherClass
```
 *-Mixins will provide only .someclass, and adding .someanotherClass to the html markup - is your duty.
 No magic.

# Naming conversion
 One cannot use real `css` names in js, so we have to convert names to a js-friendly format:
 - ".class" becomes class
 - "tag" becomes tag_tag
 - "#id" becomes $id
 - "hover-bg" becomes hover_bg
 - "block--element" becomes block$$element
 - ".class.anotherclass" becomes class_and_anotherclass  

# Prior art
 
Idea was found here - https://adamwathan.me/css-utility-classes-and-separation-of-concerns/

This is just an adoptation for a different style of CSS generation.

![idea](http://kashey.ru/img/classMixins.gif)

# Licence
 MIT