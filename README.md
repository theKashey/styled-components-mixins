This project is a part of `*-mixins`, with goal to provide better __CSS__ expirence
 to __React__ infected people.

Includes: 
 - https://github.com/twbs/bootstrap
 - https://github.com/turretcss/turretcss
 - https://github.com/monarkee/beard
 - https://github.com/basscss/basscss
 - https://github.com/tachyons-css/tachyons/


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

 
Idea was found here - https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
This is just an adoptation for a different style of CSS generation.

![idea](http://kashey.ru/img/classMixins.gif)
