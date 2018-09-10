define(['../dist/marked.bundle.js'], function (marked) {return function init(md){marked = marked.default;


(function () {
    const BREAK_LINE_REGEXP = /\r\n|\r|\n/g;
    function getLines (text) {
        if (text.length === 0) return [];
        return text.split(BREAK_LINE_REGEXP);
    }



    const Renderer = marked.Renderer;
    Renderer.prototype.line = function(text) {
        return '<div>'+text+'</div>';
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
})();


    const markdown = document.querySelector('.markdown pre code');
    $('.markdown .markdown-container').html(md);

    hljs.highlightBlock(markdown);
    hljs.lineNumbersBlock(markdown);


    // const html = marked(md);
    // $('.preview').html(html);

    // const mds2 = getLines (md);
    // const mds = [];
    // mds2.forEach(function (text, i) {
    //     // mds.push(_escape(text, true));
    //     mds.push(text+'[__:'+(i+1)+':__]');
    // });
    //
    // console.log(mds);
    //
    // function findLine(text) {
    //     let line = mds.indexOf(text);
    //     return line === -1?line:line + 1;
    // }
    //
    // const markdowns = mds.join('\n');


    const tokens = marked.lexer(md);





    // const lines = [];
    //
    // tokens.forEach(function (token) {
    //     lines.push( JSON.stringify(token, null, 4) );
    //     lines.push( '<br/>' );
    // });


    // console.log(tokens);

    //

    // let index = 1;

    // const newTokens = [];
    //
    // tokens.forEach(function (token) {
    //     // console.log(token);
    //
    //
    //     if( token.text ){
    //
    //         let index = token.text.indexOf('[__:');
    //         if(index !== -1){
    //             let line = token.text.substring(index+4);
    //             token.line = line.replace(':__]','');
    //             token.text = token.text.replace(/\[__\:\d+\:__\]/,'');
    //
    //
    //             newTokens.push({
    //                 type: 'line',
    //                 line: token.line
    //             });
    //
    //             newTokens.push(token);
    //
    //         }
    //
    //     }
    //
    //     // if( token.text ){
    //     //     let line = findLine(token.html);
    //     //     token.line = line;
    //     // }
    //     // lines.push( JSON.stringify(token, null, 4) );
    //     // lines.push( '<br/>' );
    //
    //
    // });
    //
    // newTokens.forEach(function (token) {
    //     lines.push( JSON.stringify(token, null, 4) );
    //     lines.push( '<br/>' );
    // });

    // const html = lines.join('');

    const html = marked.parser(tokens);

    $('.preview .preview-container').html(html);

}});




