define(['marked', '../plugins/marked-plugin-line-number'], function (marked) {return function init(md){

    $('.markdown .markdown-container').html(md);

    const markdown = document.querySelector('.markdown pre code');
    hljs.highlightBlock(markdown);
    hljs.lineNumbersBlock(markdown);

    const tokens = marked.lexer(md);
    const html = marked.parser(tokens);

    $('.preview .preview-container').html(html);

}});




