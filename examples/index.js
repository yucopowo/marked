(async() => {




    const BREAK_LINE_REGEXP = /\r\n|\r|\n/g;
    function getLines (text) {
        if (text.length === 0) return [];
        return text.split(BREAK_LINE_REGEXP);
    }

    function getMd() {
        return new Promise(function (resolve, reject) {
            $.get('./initial.md', function (md) {
                // let lines = getLines(md);
                resolve(md);
            });
        });
    }






    const editor = ace.edit("editor");

    editor.setOptions({
        autoScrollEditorIntoView: true,
        wrap: "free",
        showGutter: true,
        showLineNumbers: true,
    });
    editor.setFontSize(16);
    editor.setTheme("ace/theme/github");
    const Mode = ace.require("ace/mode/markdown").Mode;
    editor.session.setMode(new Mode());


    const md = await getMd();

    editor.setValue(md);


    const lines = editor.renderer.session.doc.$lines;


    const mds = [];
    lines.forEach(function (line, i) {

        // if(!line || line.length===0 ){
        //     mds.push(line);
        // }
        //
        // mds.push(line+''+(i+1)+'');
        //
        // if(!line || line.length===0 ){
        //     mds.push(line);
        // }

        // if(line.length > 2){
        //
        //     mds.push(line.substring(0,1)+'<'+(i+1)+'>'+line.substring(1));
        //
        // }
        mds.push(line);
    });

    const mdsText = mds.join('\n');
    console.log(mdsText);


    const tokens = marked.lexer(mdsText);
    // const tokensHTML = tokens.map(function (token) {
    //     return JSON.stringify(token, null, 4)+'\n';
    // }).join(',');
    // $('.tokens-container').html(
    //     tokensHTML
    // );

    (function () {

        console.log(lines);
        console.log(tokens);

    })();

    const tokensHTML = JSON.stringify(tokens, null, 4);


    (function () {
        const tokensEditor = ace.edit("tokens");
        tokensEditor.setOptions({
            autoScrollEditorIntoView: true,
            wrap: "free",
            showGutter: true,
            showLineNumbers: true,
        });
        tokensEditor.setFontSize(16);
        tokensEditor.setTheme("ace/theme/github");
        const Mode = ace.require("ace/mode/json").Mode;
        tokensEditor.session.setMode(new Mode());
        tokensEditor.setValue(tokensHTML);
    })();

    const html = marked.parser($.extend(true, [], tokens));
    $('.preview-container').html(html);


})();


// define([
//     'marked',
//     'ace',
//     'ace-theme-github',
//     'ace-mode-markdown',
//     // , '../plugins/marked-anchor-line-number'
// ], function (marked, ace) {return function init(md){
//
//
//
//
//
//
//
//
//     // const markdown = document.querySelector('.markdown pre code');
//     // hljs.highlightBlock(markdown);
//     // hljs.lineNumbersBlock(markdown);
//     //
//     // const tokens = marked.lexer(md);
//     // // const html = marked.parser(tokens);
//     // $('.tokens-container').html(tokens.map(function (token) {
//     //     return JSON.stringify(token, null, 4)+'\n';
//     // }));
//     //
//     // // const html = marked(md);
//     // const html = marked.parser(tokens);
//     //
//     // $('.preview .preview-container').html(html);
//
// }});




