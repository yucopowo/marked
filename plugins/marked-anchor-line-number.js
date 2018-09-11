(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['marked'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(requiire('marked'));
    } else {
        root.returnExports = factory(window.marked);
    }
}(this, function (marked) {

    const BREAK_LINE_REGEXP = /\r\n|\r|\n/g;
    function getLines (text) {
        if (text.length === 0) return [];
        return text.split(BREAK_LINE_REGEXP);
    }

    const Renderer = marked.Renderer;
    Renderer.prototype.line = function(line) {
        return '<div id="anchor-line-number-'+line+'" style="height: 0;"></div>';
    };

    const Lexer = marked.Lexer;
    Lexer.prototype.lex = function(src) {

        const mds2 = getLines (src);
        const mds = [];
        mds2.forEach(function (text, i) {
            mds.push(text+'[__:'+(i+1)+':__]');
        });
        src = mds.join('\n');



        src = src
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ')
            .replace(/\u00a0/g, ' ')
            .replace(/\u2424/g, '\n');

        // return this.token(src, true);
        const tokens = this.token(src, true);

        console.log(tokens)

        const newTokens = [];
        tokens.forEach(function (token) {
            if( token.text ){
                let index = token.text.indexOf('[__:');
                if(index !== -1){
                    let line = token.text.substring(index+4).replace(':__]','');
                    // token.line = line.replace(':__]','');
                    token.text = token.text.replace(/\[__\:\d+\:__\]/,'');
                    newTokens.push({
                        type: 'line',
                        line: line
                    });
                    newTokens.push(token);
                }
            }

        });
        newTokens.links = {};
        return newTokens;
    };

    marked.setOptions({
        renderer: new Renderer()
    });

    return {};
}));


