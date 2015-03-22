### Log with FileSystem API(Chrome specific)

Implement `Logger` which will help us to add log entries to FileSystem PERSISTENT storage.

```js
var logger = new Logger('yournamespace');

logger.log('message text');
logger.warn('warning text');
logger.error('error text');

// creates `yournamespace` folder in PERSISTENT storage
// logs are stored in files with names like YYYY.MM.DD.log
// log-format is up to you
```
