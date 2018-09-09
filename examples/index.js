function init(md){
    const markdown = document.querySelector('.markdown pre code');
    $('.markdown .markdown-container').html(md);
    const html = marked(md);
    $('.preview').html(html);
    hljs.highlightBlock(markdown);
    hljs.lineNumbersBlock(markdown);
}

$(function () {
    $.get('./initial.md', function (md) {
        init(md);
    });
});

