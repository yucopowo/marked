define([
    'marked',
    '../plugins/marked-anchor-line-number'
], function (marked) {return function init(md){

    // (function () {
    //
    //     const BREAK_LINE_REGEXP = /\r\n|\r|\n/g;
    //     function getLines (text) {
    //         if (text.length === 0) return [];
    //         return text.split(BREAK_LINE_REGEXP);
    //     }
    //
    //     const mds2 = getLines (md);
    //     const mds = [];
    //     mds2.forEach(function (text, i) {
    //         mds.push(text+'[__:'+(i+1)+':__]');
    //     });
    //     md = mds.join('\n');
    // })();


    $('.markdown .markdown-container').html((md.replace(/`/g,'')));

    const markdown = document.querySelector('.markdown pre code');
    hljs.highlightBlock(markdown);
    hljs.lineNumbersBlock(markdown);

    const tokens = marked.lexer(md);
    // const html = marked.parser(tokens);
    $('.tokens-container').html(tokens.map(function (token) {
        return JSON.stringify(token, null, 4)+'\n';
    }));

    // const html = marked(md);
    const html = marked.parser(tokens);

    $('.preview .preview-container').html(html);


    function scrollLine() {
        for(var i=1;i<198;i++){

            let isVisable = $('[data-line-number='+i+']').isVisable();

            if(isVisable){

                // console.log( i );
                // // scrollLine(i);
                // line = i;
                // debounced();
                $('.preview.markdown-body').scrollTo('#anchor-line-number-'+i, 100);

                break;
            }

        }


    }
    setTimeout(function () {
        // $('.markdown-container .hljs-ln-numbers .hljs-ln-line').css({
        //     cursor: 'pointer'
        // }).on('click', function () {
        //     var line = $(this).data('line-number');
        //     console.log(line)
        //     scrollLine(line);
        // });


        // $('.markdown-container .hljs-ln-numbers .hljs-ln-line').bind('inview', function (event, visible, topOrBottomOrBoth) {
        //
        //
        //     console.log(this);
        //
        //     // if (visible == true) {
        //     //     // element is now visible in the viewport
        //     //     if (topOrBottomOrBoth == 'top') {
        //     //         // top part of element is visible
        //     //     } else if (topOrBottomOrBoth == 'bottom') {
        //     //         // bottom part of element is visible
        //     //     } else {
        //     //         // whole part of element is visible
        //     //     }
        //     // } else {
        //     //     // element has gone out of viewport
        //     // }
        // });


    }, 1000);

    // var debounced = _.debounce(scrollLine, 100, { 'maxWait': 1000 });
    //
    // var line = 0;

    $('.panel.markdown').scroll(_.debounce(scrollLine, 100, { 'maxWait': 1000 }));
    // $('.panel.markdown').scroll(function () {
    //
    //     // console.log( $('[data-line-number=1]').isVisable() );
    //
    //     for(var i=1;i<198;i++){
    //
    //         let isVisable = $('[data-line-number='+i+']').isVisable();
    //
    //         if(isVisable){
    //
    //             console.log( i );
    //             // scrollLine(i);
    //             line = i;
    //             debounced();
    //             break;
    //         }
    //
    //     }
    //
    //
    // });



    // setTimeout(function () {
    //
    //     // debugger
    //     $('.preview.markdown-body').scrollTo('#line-number-anchor-19', 1000);
    //
    // }, 5000)
}});




