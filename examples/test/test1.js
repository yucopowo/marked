const sim = require('./sim');
//
// console.log(sim('## Goal','Goal'));
const fs = require('fs');

const md = fs.readFileSync('./test.md','utf-8');




const BREAK_LINE_REGEXP = /\r\n|\r|\n/g;
function getLines (text) {
    if (text.length === 0) return [];
    return text.split(BREAK_LINE_REGEXP);
}

const lines = getLines(md);

const tokens = require('./tokens');

let lastFindIndex = 0;
function findLine(text) {

    for(var i=lastFindIndex;i<lines.length;i++) {

        let line = lines[i];

        const per = sim(text, line);

        if(per>90){
            lastFindIndex = i;
            return line;
        }

    }

    return null;

}


tokens.forEach(function (token) {

    if(!token.text) return;

    console.log('===========================');
    console.log(token.text);

    let line = findLine(token.text);
    console.log(line);
});