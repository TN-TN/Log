## LOG
LogTool with File Output

### How to use:
1. Require Log:
```
const Log = require('./Log');
```
2. Register your plugin - example Name: Database:
```
const Database = new Log('Database', process.pid, true)
```
3. Test it:
```
Database.log('Connected to Database! Wohooo');
Database.fatal('Connection Lost');
Database.error('Failed');
```