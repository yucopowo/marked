define(['../dist/marked.bundle.js'], function (marked) {return function init(md){

    const markdown = document.querySelector('.markdown pre code');
    $('.markdown .markdown-container').html(md);
    const html = marked.default(md);
    $('.preview').html(html);
    hljs.highlightBlock(markdown);
    hljs.lineNumbersBlock(markdown);

}});




