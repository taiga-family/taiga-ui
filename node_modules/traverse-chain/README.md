# traverse-chain

A simple asynchronous tool 

## Installation

```bash
$ npm install traverse-chain
```

## Example

```javascript

var Chain = require('traverse-chain');
var chain = new Chain();

chain.add(
  function() {
    setTimeout(function() {
      chain.next();
    }, 2000);
  },
  functin() {
    setTimeout(function() {
      chain.next();
    }, 1000); 
  }
)

chain.traverse(function() {
  // done
});
```

## License
MIT
