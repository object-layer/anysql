# AnySQL [![Build Status](https://travis-ci.org/object-layer/anysql.svg?branch=master)](https://travis-ci.org/object-layer/anysql)

Modern minimal API for any SQL database.

### Features

- Unified API for several database engines.
- No need to manage connections, just query the database.
- Easy transactions with automatic begin/commit/rollback.
- Asynchronous functions return promises, feel free to handle them with ES7 async/await feature.

### Supported databases

- MySQL
- WebSQL (Chrome and Safari)
- SQLite (via [CordovaSQLitePlugin](https://www.npmjs.com/package/cordova-sqlite-plugin))
- More to come (PR welcome!)

## Installation

```
npm install --save anysql
```

## Usage

### Simple query

```javascript
import AnySQL from 'anysql';

let anysql = new AnySQL('mysql://test@localhost/test');
let rows = await anysql.query('SELECT ? + ? AS solution', [2, 3]);
console.log(rows[0].solution); // => 5
```

### Transactions

```javascript
import AnySQL from 'anysql';

let anysql = new AnySQL('mysql://test@localhost/test');
await anysql.transaction(async function(transaction) {
  let rows = await transaction.query('SELECT ...');
  // ...
  await transaction.query('UPDATE ...');
  // ...
  // if no error has been thrown, the transaction is automatically committed
});
```

## License

MIT
