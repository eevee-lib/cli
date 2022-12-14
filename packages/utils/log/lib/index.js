'use strict';


const log = require('npmlog');

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : "info";//判断debug模式
log.heading = 'eevee';
log.addLevel('success', 2000, { fg: 'green', bold: true });
log.addLevel('notice', 2000, { fg: 'blue', bg: 'black' });

module.exports = log;
