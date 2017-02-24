[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)



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

## Classes

<dl>
<dt><a href="#Log">Log</a></dt>
<dd><p>Log Class</p>
</dd>
</dl>

## Log
Log Class

**Kind**: global class

* [Log](#Log)
    * [new Log(ToolName, PID, toFile)](#new_Log_new)
    * [.error(msg)](#Log+error)
    * [.warn(msg)](#Log+warn)
    * [.log(msg)](#Log+log)

<a name="new_Log_new"></a>

### new Log(ToolName, PID, toFile)

| Param | Type | Description |
| --- | --- | --- |
| ToolName | <code>string</code> | Name of our Plugin |
| PID | <code>string</code> | Process ID (get via process.pid) |
| toFile | <code>boolean</code> | Should we save your messages to a LOG File? |

<a name="Log+error"></a>

### log.error(msg)
Prints ERROR Message

**Kind**: instance method of <code>[Log](#Log)</code>

| Param | Description |
| --- | --- |
| msg | Message to be printed |

<a name="Log+warn"></a>

### log.warn(msg)
Prints WARN Message

**Kind**: instance method of <code>[Log](#Log)</code>

| Param | Description |
| --- | --- |
| msg | Message to be printed |

<a name="Log+log"></a>

### log.log(msg)
Prints LOG Message

**Kind**: instance method of <code>[Log](#Log)</code>

| Param | Description |
| --- | --- |
| msg | Message to be printed |

