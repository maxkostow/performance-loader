# performance-loader

Wraps modules in the browser performance API.

## installation

`npm install performance-loader --save-dev`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Example config

``` javascript
module.exports = {
  module: {
    loaders: [
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
