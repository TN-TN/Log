const Log = require('./Log');
const index = new Log('INDEX', process.pid, true);

index.log('ALLES GEHT KAPUTT');