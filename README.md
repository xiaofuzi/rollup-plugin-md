## Install

```node
# npm
npm install @cutting/rollup-plugin-md --save

# yarn
yarn add @cutting/rollup-plugin-md -D
```

## usage

```js
import md from './test.md';
console.log( `Template for render: ${md}` );
```

```js
import { rollup } from 'rollup';
import { md } from '@cutting/rollup-plugin-md';

rollup({
  entry: 'main.js',
  plugins: [
    md({
      marked: {
        //marked options
      }
    })
  ]
});
```
