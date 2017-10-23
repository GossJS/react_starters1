# react_starters1
gentle introduction to react

in this branch we have

`onButtonClick = e=>{
  alert(e.target.nodeName);
}`

and

`<button onClick={this.onButtonClick}>Click me!</button>`

and use babel-preset-stage-0 here

because it's public fields proposal

https://github.com/tc39/proposal-class-fields

Arrow function preserves context in which it was defined and thus we set handler directly as a class field
