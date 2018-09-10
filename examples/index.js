define(['marked', '../plugins/marked-plugin-line-number'], function (marked) {return function init(md){

    $('.markdown .markdown-container').html(md);

    const markdown = document.querySelector('.markdown pre code');
    hljs.highlightBlock(markdown);
    hljs.lineNumbersBlock(markdown);

    const tokens = marked.lexer(md);
    const html = marked.parser(tokens);

    $('.preview .preview-container').html(html);


    setTimeout(function () {
        $('.markdown-container .hljs-ln-numbers .hljs-ln-line').css({
            cursor: 'pointer'
        }).on('click', function () {

            var line = $(this).data('line-number');
            console.log(line)
            $('.preview.markdown-body').scrollTo('#line-number-anchor-'+line, 1000);

        });
    }, 1000);



    // setTimeout(function () {
    //
    //     // debugger
    //     $('.preview.markdown-body').scrollTo('#line-number-anchor-19', 1000);
    //
    // }, 5000)
}});




