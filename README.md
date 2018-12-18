# LogLVL
Use query strings to select the log level you want to see in your console.
e.g `?loglevel=error` will show only the console.error logs from your code.

## How to use
```
npm install loglvl
# or
yarn add loglvl
```

```js
import console from 'loglvl'

// as usual use your console
console.log()
console.error()
console.warn()
// or any other console methods
```

### ?loglevel
will show all `console.log` calls

### ?loglevel=warn
will show all `console.warn` calls

### ?loglevel=error
will show all `console.error` calls

### ?loglevel=verbose
will show all (log, error, warn) calls
