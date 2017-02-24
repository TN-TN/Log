/**
 * Created by dunklesToast on 24.02.2017.
 */
const colors = require('colors');
const fs = require('fs');
class Log {
    constructor(ToolName, PID, toFile) {
        this._stringBuilder = this._stringBuilder.bind(this);
        this.ToolName = ToolName;
        this.PID = PID;
        this.toFile = toFile;
    }

    error(msg) {
        this._stringBuilder(msg.red, msg, 'error');
    }

    warn(msg) {
        this._stringBuilder(msg.red, msg, 'warn');
    }

    log(msg) {
        this._stringBuilder(msg.green, msg, 'log');
    }
    _stringBuilder(msg, msgnc, LogType) {
        switch (LogType.toLowerCase()) {
            case 'error':
                this.type = 'ERROR'.red;
                this.typenc = 'ERROR';
                break;
            case 'log':
                this.type = 'INFO'.white;
                this.typenc = 'INFO';
                break;
            case 'warn':
                this.type = 'WARN'.red;
                this.typenc = 'WARN';
                break;
            case 'FATAL':
                this.type = 'FATAL'.red;
                this.typenc = 'FATAL';
                break;
            case 'debug':
                this.type = 'debug'.blue;
                this.typenc = 'debug';
                break;
            default:
                break;
        }
        const d = new Date();
        let month = d.getMonth();
        let date = d.getDate();
        let minutes = d.getMinutes();
        let hours = d.getHours();
        let seconds = d.getSeconds();
        if (d.getDate() < 10) date = "0" + d.getDate();
        if (d.getMonth() < 10) month = "0" + (d.getMonth() + 1);
        if (d.getHours() < 10) hours = "0" + d.getHours();
        if (d.getMinutes() < 10) minutes = "0" + d.getMinutes();
        if (d.getSeconds() < 10) seconds = "0" + d.getSeconds();
        this._pipe(`[${date}.${month}.${d.getFullYear()}-${hours}:${minutes}:${seconds}]`.blue + `[${this.PID}][${this.ToolName}] `.green + `${this.type}: ` + msg,
            `[${date}.${month}.${d.getFullYear()}-${hours}:${minutes}:${seconds}]` + `[${this.PID}][${this.ToolName}] ` + `${this.typenc}: ` + msgnc)
    }
    _pipe(msg, msgnocolor) {
        if (this.toFile) {
            fs.appendFile('LOG.log', msgnocolor + '\n', function () {

            })
        }
        process.stdout.write(msg + '\n');
    }
}
module.exports = Log;