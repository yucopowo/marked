const levenshtein = require('./levenshtein.js');

var a = 'aaaa';
var b = 'bbbb aaaa';

var distArray = levenshtein(a, b);

var dist = distArray[ distArray.length - 1 ][ distArray[ distArray.length - 1 ].length - 1 ];

console.log(
    dist
)