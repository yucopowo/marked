import block from './block';
import { noop, edit, merge, escape } from './helper';

/**
 * Inline-Level Grammar
 */

var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noop,
    tag: '^comment'
        + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
        + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
        + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
        + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
        + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong: /^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
    code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noop,
    text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
};

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
    .replace('scheme', inline._scheme)
    .replace('email', inline._email)
    .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
    .replace('comment', block._comment)
    .replace('attribute', inline._attribute)
    .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
    .replace('label', inline._label)
    .replace('href', inline._href)
    .replace('title', inline._title)
    .getRegex();

inline.reflink = edit(inline.reflink)
    .replace('label', inline._label)
    .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: edit(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', inline._label)
        .getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', inline._label)
        .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace('])', '~|])').getRegex(),
    url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
        .replace('email', inline._email)
        .getRegex(),
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: edit(inline.text)
        .replace(']|', '~]|')
        .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
        .getRegex()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace('{2,}', '*').getRegex(),
    text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
        throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.pedantic) {
        this.rules = inline.pedantic;
    } else if (this.options.gfm) {
        if (this.options.breaks) {
            this.rules = inline.breaks;
        } else {
            this.rules = inline.gfm;
        }
    }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
    var out = '',
        link,
        text,
        href,
        title,
        cap,
        prevCapZero;

    while (src) {
        // escape
        if (cap = this.rules.escape.exec(src)) {
            src = src.substring(cap[0].length);
            out += cap[1];
            continue;
        }

        // autolink
        if (cap = this.rules.autolink.exec(src)) {
            src = src.substring(cap[0].length);
            if (cap[2] === '@') {
                text = escape(this.mangle(cap[1]));
                href = 'mailto:' + text;
            } else {
                text = escape(cap[1]);
                href = text;
            }
            out += this.renderer.link(href, null, text);
            continue;
        }

        // url (gfm)
        if (!this.inLink && (cap = this.rules.url.exec(src))) {
            do {
                prevCapZero = cap[0];
                cap[0] = this.rules._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);
            src = src.substring(cap[0].length);
            if (cap[2] === '@') {
                text = escape(cap[0]);
                href = 'mailto:' + text;
            } else {
                text = escape(cap[0]);
                if (cap[1] === 'www.') {
                    href = 'http://' + text;
                } else {
                    href = text;
                }
            }
            out += this.renderer.link(href, null, text);
            continue;
        }

        // tag
        if (cap = this.rules.tag.exec(src)) {
            if (!this.inLink && /^<a /i.test(cap[0])) {
                this.inLink = true;
            } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
                this.inLink = false;
            }
            src = src.substring(cap[0].length);
            out += this.options.sanitize
                ? this.options.sanitizer
                    ? this.options.sanitizer(cap[0])
                    : escape(cap[0])
                : cap[0]
            continue;
        }

        // link
        if (cap = this.rules.link.exec(src)) {
            src = src.substring(cap[0].length);
            this.inLink = true;
            href = cap[2];
            if (this.options.pedantic) {
                link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

                if (link) {
                    href = link[1];
                    title = link[3];
                } else {
                    title = '';
                }
            } else {
                title = cap[3] ? cap[3].slice(1, -1) : '';
            }
            href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
            out += this.outputLink(cap, {
                href: InlineLexer.escapes(href),
                title: InlineLexer.escapes(title)
            });
            this.inLink = false;
            continue;
        }

        // reflink, nolink
        if ((cap = this.rules.reflink.exec(src))
            || (cap = this.rules.nolink.exec(src))) {
            src = src.substring(cap[0].length);
            link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
            link = this.links[link.toLowerCase()];
            if (!link || !link.href) {
                out += cap[0].charAt(0);
                src = cap[0].substring(1) + src;
                continue;
            }
            this.inLink = true;
            out += this.outputLink(cap, link);
            this.inLink = false;
            continue;
        }

        // strong
        if (cap = this.rules.strong.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
            continue;
        }

        // em
        if (cap = this.rules.em.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
            continue;
        }

        // code
        if (cap = this.rules.code.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.codespan(escape(cap[2].trim(), true));
            continue;
        }

        // br
        if (cap = this.rules.br.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.br();
            continue;
        }

        // del (gfm)
        if (cap = this.rules.del.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.del(this.output(cap[1]));
            continue;
        }

        // text
        if (cap = this.rules.text.exec(src)) {
            src = src.substring(cap[0].length);
            out += this.renderer.text(escape(this.smartypants(cap[0])));
            continue;
        }

        if (src) {
            throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
    }

    return out;
};

InlineLexer.escapes = function(text) {
    return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
}

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
    var href = link.href,
        title = link.title ? escape(link.title) : null;

    return cap[0].charAt(0) !== '!'
        ? this.renderer.link(href, title, this.output(cap[1]))
        : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
    if (!this.options.smartypants) return text;
    return text
    // em-dashes
        .replace(/---/g, '\u2014')
        // en-dashes
        .replace(/--/g, '\u2013')
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
        .replace(/'/g, '\u2019')
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        // closing doubles
        .replace(/"/g, '\u201d')
        // ellipses
        .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
    if (!this.options.mangle) return text;
    var out = '',
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
        ch = text.charCodeAt(i);
        if (Math.random() > 0.5) {
            ch = 'x' + ch.toString(16);
        }
        out += '&#' + ch + ';';
    }

    return out;
};


export default InlineLexer;