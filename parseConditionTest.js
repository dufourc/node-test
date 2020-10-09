const Parser = require('expr-eval').Parser;

const parser = new Parser();
let expr = parser.parse('deviceType == "SNMP"');
console.log(expr.evaluate({ deviceType: "SNMP" })); // True
console.log(expr.evaluate({ deviceType: "MYSQL" })); // False