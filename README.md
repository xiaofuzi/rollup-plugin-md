## Install

```node
npm install rollup-plugin-md --save
```

## usage

```js
import md from './test.md';
console.log( `Template for render: ${md}` );
```

```js
import { rollup } from 'rollup';
import md from 'rollup-plugin-md';

rollup({
    entry: 'main.js',
    plugins: [
        md({
            // to disable marked set to false
            marked: {
                //marked options
            }
        })
    ]
});
```
