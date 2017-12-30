# node-cryptonight-lite
> node bindings for cryptonight-lite hashing

### Installation

    npm install --save node-cryptonight-lite

### Testing

Code is linted with [standard](https://github.com/standard/standard) and tested with [Jest](https://github.com/facebook/jest). Run `npm test` to lint and run tests.

### Usage Examples

##### Synchronous Hashing

```js
const cryptonightLight = require('node-cryptonight-lite').hash
const hash = cryptonightLight(Buffer.from('This is a test'))
console.log(hash) // <Buffer 88 e5 e6 84 db 17 ..>
```

##### Asynchronous Hashing

```js
const cryptonightLight = require('node-cryptonight-lite').asyncHash
cryptonightLight(Buffer.from('This is a test'), hash => {
  console.log(hash) // <Buffer 88 e5 e6 84 db 17 ..>
})
```

##### Promise Wrapper Example

```js
function cryptonightLight(data) {
  return new Promise((resolve, reject) => {
    require('node-cryptonight-lite').asyncHash(data, hash => {
      resolve(hash)
    })
  })
}

cryptonightLight(Buffer.from('This is a test'))
  .then(console.log) // <Buffer 88 e5 e6 84 db 17 ..>
```

### See Also

* [node-cryptonight](https://github.com/ExcitableAardvark/node-cryptonight)

### License

Released under the 3-Clause BSD License. Contains code from the AEON and Monero project. See `LICENSE` for more information.
