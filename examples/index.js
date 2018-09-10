define(['../dist/marked.bundle.js'], function (marked) {return function init(md){marked = marked.default;

    var TABLE_NAME = 'hljs-ln',
        LINE_NAME = 'hljs-ln-line',
        CODE_BLOCK_NAME = 'hljs-ln-code',
        NUMBERS_BLOCK_NAME = 'hljs-ln-numbers',
        NUMBER_LINE_NAME = 'hljs-ln-n',
        DATA_ATTR_NAME = 'data-line-number',
        BREAK_LINE_REGEXP = /\r\n|\r|\n/g;

    function getLines (text) {
        if (text.length === 0) return [];
        return text.split(BREAK_LINE_REGEXP);
    }

    function _escape(html, encode) {
        return html
            .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }



    const markdown = document.querySelector('.markdown pre code');
    $('.markdown .markdown-container').html(md);

    hljs.highlightBlock(markdown);
    hljs.lineNumbersBlock(markdown);


    // const html = marked(md);
    // $('.preview').html(html);

    const mds2 = getLines (md);
    const mds = [];
    mds2.forEach(function (text) {
        mds.push(_escape(text, true));
    });

    console.log(mds);
    
    function findLine(text) {
        let line = mds.indexOf(text);
        return line === -1?line:line + 1;
    }


    const tokens = marked.lexer(md);

    // console.log(tokens);

    const lines = ['<pre><code>'];

    let index = 1;
    tokens.forEach(function (token, i) {
        // console.log(token);



        if( token.text ){
            let line = findLine(token.html);
            token.line = line;
        }


        lines.push( JSON.stringify(token, null, 4) );
        lines.push( '<br/>' );
    });

    lines.push( '</code></pre>' );


    const html = lines.join('');
    $('.preview').html(html);

}});




