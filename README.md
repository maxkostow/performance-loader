# performance-loader

Wraps modules in the browser performance API.

## Installation

`npm install performance-loader --save-dev`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Example config

``` javascript
module.exports = {
  module: {
    postLoaders: [
      { loader: "performance-loader" },
    ]
  }
};
```

### In browser

After initializing the page in a browser try:

```javascript
console.table(
    window.performance.getEntriesByType('measure')
        .filter(p => p.duration > 1) // only modules that took longer than 1ms
        .sort((a, b) => b.duration - a.duration) // sort by descending duration
        .map(p => [p.name, p.duration]) // map for the table
)
// table of modules that took longer than 1ms to run
```

## How it works

It wraps your modules in [`performance.mark`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark) and then calls [`performance.measure`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure).

```javascript
window.performance.mark('/path/to/module.js--start')
/*** module.js code here ***/
window.performance.mark('/path/to/module.js--end')
window.performance.measure('/path/to/module.js', '/path/to/module.js--start', '/path/to/module.js--end')
```
