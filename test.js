var jsonParseArray = require('./jsonparsearray.js');


console.log('--- store json objects in array');

var p = new jsonParseArray();

var json = '{"queryType":"create_account","accountId":"bb15992e5ba7"}{"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":10,"warningCount":0,"message":"","protocol41":true,"changedRows":0}{"fieldCount":0,"affectedRows":0,"insertId":0,"serverStatus":10,"warningCount":0,"message":"","protocol41":true,"changedRows":0}{"fieldCount":0,"affectedRows":0,"insertId":0,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}';
p.write(json);

console.log(p.get());
