module.exports = [
    {
        "type": "heading",
        "depth": 1,
        "text": "function qualityGuide () {"
    },
    {
        "type": "blockquote_start"
    },
    {
        "type": "paragraph",
        "text": "A **quality conscious** and _organic_ JavaScript quality guide"
    },
    {
        "type": "blockquote_end"
    },
    {
        "type": "paragraph",
        "text": "This style guide aims to provide the ground rules for an application's JavaScript code, such that it's highly readable and consistent across different developers on a team. The focus is put on quality and coherence across the different pieces of your application."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Goal"
    },
    {
        "type": "paragraph",
        "text": "These suggestions aren't set in stone, they aim to provide a baseline you can use in order to write more consistent codebases. To maximize effectiveness, share the styleguide among your co-workers and attempt to enforce it. Don't become obsessed about code style, as it'd be fruitless and counterproductive. Try and find the sweet spot that makes everyone in the team comfortable developing for your codebase, while not feeling frustrated that their code always fails automated style checking because they added a single space where they weren't supposed to. It's a thin line, but since it's a very personal line I'll leave it to you to do the drawing."
    },
    {
        "type": "space"
    },
    {
        "type": "blockquote_start"
    },
    {
        "type": "paragraph",
        "text": "Use together with [bevacqua/css][32] for great good!"
    },
    {
        "type": "blockquote_end"
    },
    {
        "type": "paragraph",
        "text": "Feel free to fork this style guide, or better yet, send [Pull Requests][33] this way!"
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Table of Contents"
    },
    {
        "type": "list_start",
        "ordered": true,
        "start": 1,
        "loose": false
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Modules](#modules)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Strict Mode](#strict-mode)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Spacing](#spacing)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Semicolons](#semicolons)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Style Checking](#style-checking)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Linting](#linting)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Strings](#strings)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Variable Declaration](#variable-declaration)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Conditionals](#conditionals)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Equality](#equality)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Ternary Operators](#ternary-operators)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Functions](#functions)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Prototypes](#prototypes)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Object Literals](#object-literals)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Array Literals](#array-literals)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Regular Expressions](#regular-expressions)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`console` Statements](#console-statements)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Comments](#comments)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Variable Naming](#variable-naming)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Polyfills](#polyfills)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[Everyday Tricks](#everyday-tricks)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[License](#license)"
    },
    {
        "type": "space"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_end"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Modules"
    },
    {
        "type": "paragraph",
        "text": "This style guide assumes you're using a module system such as [CommonJS][1], [AMD][2], [ES6 Modules][3], or any other kind of module system. Modules systems provide individual scoping, avoid leaks to the `global` object, and improve code base organization by **automating dependency graph generation**, instead of having to resort to manually creating multiple `<script>` tags."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "Module systems also provide us with dependency injection patterns, which are crucial when it comes to testing individual components in isolation."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Strict Mode"
    },
    {
        "type": "paragraph",
        "text": "**Always** put [`'use strict';`][4] at the top of your modules. Strict mode allows you to catch nonsensical behavior, discourages poor practices, and _is faster_ because it allows compilers to make certain assumptions about your code."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Spacing"
    },
    {
        "type": "paragraph",
        "text": "Spacing must be consistent across every file in the application. To this end, using something like [`.editorconfig`][5] configuration files is highly encouraged. Here are the defaults I suggest to get started with JavaScript indentation."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "ini",
        "text": "# editorconfig.org\nroot = true\n\n[*]\nindent_style = space\nindent_size = 2\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[*.md]\ntrim_trailing_whitespace = false"
    },
    {
        "type": "paragraph",
        "text": "Settling for either tabs or spaces is up to the particularities of a project, but I recommend using 2 spaces for indentation. The `.editorconfig` file can take care of that for us and everyone would be able to create the correct spacing by pressing the tab key."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "Spacing doesn't just entail tabbing, but also the spaces before, after, and in between arguments of a function declaration. This kind of spacing is **typically highly irrelevant to get right**, and it'll be hard for most teams to even arrive at a scheme that will satisfy everyone."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function () {}"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function( a, b ){}"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function(a, b) {}"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function (a,b) {}"
    },
    {
        "type": "paragraph",
        "text": "Try to keep these differences to a minimum, but don't put much thought to it either."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "Where possible, improve readability by keeping lines below the 80-character mark."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Semicolons`;`"
    },
    {
        "type": "paragraph",
        "text": "The majority of JavaScript programmers [prefer using semicolons][6]. This choice is done to avoid potential issues with Automatic Semicolon Insertion _(ASI)_. If you decide against using semicolons, [make sure you understand the ASI rules][7]."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "Regardless of your choice, a linter should be used to catch unnecessary or unintentional semicolons."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Style Checking"
    },
    {
        "type": "paragraph",
        "text": "**Don't**. Seriously, [this is super painful][8] for everyone involved, and no observable gain is attained from enforcing such harsh policies."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Linting"
    },
    {
        "type": "paragraph",
        "text": "On the other hand, linting is sometimes necessary. Again, don't use a linter that's super opinionated about how the code should be styled, like [`jslint`][9] is. Instead use something more lenient, like [`jshint`][10] or [`eslint`][11]."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "A few tips when using JSHint."
    },
    {
        "type": "space"
    },
    {
        "type": "list_start",
        "ordered": false,
        "start": "",
        "loose": false
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "Declare a `.jshintignore` file and include `node_modules`, `bower_components`, and the like"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "You can use a `.jshintrc` file like the one below to keep your rules together"
    },
    {
        "type": "space"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_end"
    },
    {
        "type": "code",
        "lang": "json",
        "text": "{\n  \"curly\": true,\n  \"eqeqeq\": true,\n  \"newcap\": true,\n  \"noarg\": true,\n  \"noempty\": true,\n  \"nonew\": true,\n  \"sub\": true,\n  \"undef\": true,\n  \"unused\": true,\n  \"trailing\": true,\n  \"boss\": true,\n  \"eqnull\": true,\n  \"strict\": true,\n  \"immed\": true,\n  \"expr\": true,\n  \"latedef\": \"nofunc\",\n  \"quotmark\": \"single\",\n  \"indent\": 2,\n  \"node\": true\n}"
    },
    {
        "type": "paragraph",
        "text": "By no means are these rules the ones you should stick to, but **it's important to find the sweet spot between not linting at all and not being super obnoxious about coding style**."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Strings"
    },
    {
        "type": "paragraph",
        "text": "Strings should always be quoted using the same quotation mark. Use `'` or `\"` consistently throughout your codebase. Ensure the team is using the same quotation mark in every portion of JavaScript that's authored."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var message = 'oh hai ' + name + \"!\";"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var message = 'oh hai ' + name + '!';"
    },
    {
        "type": "paragraph",
        "text": "Usually you'll be a happier JavaScript developer if you hack together a parameter-replacing method like [`util.format` in Node][12]. That way it'll be far easier to format your strings, and the code looks a lot cleaner too."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Better"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var message = util.format('oh hai %s!', name);"
    },
    {
        "type": "paragraph",
        "text": "You could implement something similar using the piece of code below."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function format () {\n  var args = [].slice.call(arguments);\n  var initial = args.shift();\n\n  function replacer (text, replacement) {\n    return text.replace('%s', replacement);\n  }\n  return args.reduce(replacer, initial);\n}"
    },
    {
        "type": "paragraph",
        "text": "To declare multi-line strings, particularly when talking about HTML snippets, it's sometimes best to use an array as a buffer and then join its parts. The string concatenating style may be faster but it's also much harder to keep track of."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var html = [\n  '<div>',\n    format('<span class=\"monster\">%s</span>', name),\n  '</div>'\n].join('');"
    },
    {
        "type": "paragraph",
        "text": "With the array builder style, you can also push parts of the snippet and then join everything together at the end. This is in fact what some [string templating engines like Jade][13] prefer to do."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Variable Declaration"
    },
    {
        "type": "paragraph",
        "text": "Always declare variables in **a consistent manner**, and at the top of their scope. Keeping variable declarations to _one per line is encouraged_. Comma-first, a single `var` statement, multiple `var` statements, it's all fine, just be consistent across the project, and ensure the team is on the same page."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var foo = 1,\n    bar = 2;\n\nvar baz;\nvar pony;\n\nvar a\n  , b;"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var foo = 1;\n\nif (foo > 1) {\n  var bar = 2;\n}"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "paragraph",
        "text": "<sub>Just because they're consistent with each other, not because of the style</sub>"
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var foo = 1;\nvar bar = 2;\n\nvar baz;\nvar pony;\n\nvar a;\nvar b;"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var foo = 1;\nvar bar;\n\nif (foo > 1) {\n  bar = 2;\n}"
    },
    {
        "type": "paragraph",
        "text": "Variable declarations that aren't immediately assigned a value are acceptable to share the same line of code."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Acceptable"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var a = 'a';\nvar b = 2;\nvar i, j;"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Conditionals"
    },
    {
        "type": "paragraph",
        "text": "**Brackets are enforced**. This, together with a reasonable spacing strategy will help you avoid mistakes such as [Apple's SSL/TLS bug][14]."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (err) throw err;"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (err) { throw err; }"
    },
    {
        "type": "paragraph",
        "text": "It's even better if you avoid keeping conditionals on a single line, for the sake of text comprehension."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Better"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (err) {\n  throw err;\n}"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Equality"
    },
    {
        "type": "paragraph",
        "text": "Avoid using `==` and `!=` operators, always favor `===` and `!==`. These operators are called the \"strict equality operators,\" while [their counterparts will attempt to cast the operands][15] into the same value type."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function isEmptyString (text) {\n  return text == '';\n}\n\nisEmptyString(0);\n// <- true"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function isEmptyString (text) {\n  return text === '';\n}\n\nisEmptyString(0);\n// <- false"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Ternary Operators"
    },
    {
        "type": "paragraph",
        "text": "Ternary operators are fine for clear-cut conditionals, but unacceptable for confusing choices. As a rule, if you can't eye-parse it as fast as your brain can interpret the text that declares the ternary operator, chances are it's probably too complicated for its own good."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "jQuery is a prime example of a codebase that's [**filled with nasty ternary operators**][16]."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function calculate (a, b) {\n  return a && b ? 11 : a ? 10 : b ? 1 : 0;\n}"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function getName (mobile) {\n  return mobile ? mobile.name : 'Generic Player';\n}"
    },
    {
        "type": "paragraph",
        "text": "In cases that may prove confusing just use `if` and `else` statements instead."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Functions"
    },
    {
        "type": "paragraph",
        "text": "When declaring a function, always use the [function declaration form][17] instead of [function expressions][18]. Because [hoisting][19]."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var sum = function (x, y) {\n  return x + y;\n};"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function sum (x, y) {\n  return x + y;\n}"
    },
    {
        "type": "paragraph",
        "text": "That being said, there's nothing wrong with function expressions that are just [currying another function][20]."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var plusThree = sum.bind(null, 3);"
    },
    {
        "type": "paragraph",
        "text": "Keep in mind that [function declarations will be hoisted][21] to the top of the scope so it doesn't matter the order they are declared in. That being said, you should always keep functions at the top level in a scope, and avoid placing them inside conditional statements."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (Math.random() > 0.5) {\n  sum(1, 3);\n\n  function sum (x, y) {\n    return x + y;\n  }\n}\n"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (Math.random() > 0.5) {\n  sum(1, 3);\n}\n\nfunction sum (x, y) {\n  return x + y;\n}"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function sum (x, y) {\n  return x + y;\n}\n\nif (Math.random() > 0.5) {\n  sum(1, 3);\n}"
    },
    {
        "type": "paragraph",
        "text": "If you need a _\"no-op\"_ method you can use either `Function.prototype`, or `function noop () {}`. Ideally a single reference to `noop` is used throughout the application."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "Whenever you have to manipulate an array-like object, cast it to an array."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var divs = document.querySelectorAll('div');\n\nfor (i = 0; i < divs.length; i++) {\n  console.log(divs[i].innerHTML);\n}"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var divs = document.querySelectorAll('div');\n\n[].slice.call(divs).forEach(function (div) {\n  console.log(div.innerHTML);\n});"
    },
    {
        "type": "paragraph",
        "text": "However, be aware that there is a [substantial performance hit][22] in V8 environments when using this approach on `arguments`. If performance is a major concern, avoid casting `arguments` with `slice` and instead use a `for` loop."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 4,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var args = [].slice.call(arguments);"
    },
    {
        "type": "heading",
        "depth": 4,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var i;\nvar args = new Array(arguments.length);\nfor (i = 0; i < args.length; i++) {\n    args[i] = arguments[i];\n}"
    },
    {
        "type": "paragraph",
        "text": "Don't declare functions inside of loops."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var values = [1, 2, 3];\nvar i;\n\nfor (i = 0; i < values.length; i++) {\n  setTimeout(function () {\n    console.log(values[i]);\n  }, 1000 * i);\n}"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var values = [1, 2, 3];\nvar i;\n\nfor (i = 0; i < values.length; i++) {\n  setTimeout(function (i) {\n    return function () {\n      console.log(values[i]);\n    };\n  }(i), 1000 * i);\n}"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var values = [1, 2, 3];\nvar i;\n\nfor (i = 0; i < values.length; i++) {\n  setTimeout(function (i) {\n    console.log(values[i]);\n  }, 1000 * i, i);\n}"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var values = [1, 2, 3];\nvar i;\n\nfor (i = 0; i < values.length; i++) {\n  wait(i);\n}\n\nfunction wait (i) {\n  setTimeout(function () {\n    console.log(values[i]);\n  }, 1000 * i);\n}"
    },
    {
        "type": "paragraph",
        "text": "Or even better, just use `.forEach` which doesn't have the same caveats as declaring functions in `for` loops."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Better"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "[1, 2, 3].forEach(function (value, i) {\n  setTimeout(function () {\n    console.log(value);\n  }, 1000 * i);\n});"
    },
    {
        "type": "paragraph",
        "text": "Whenever a method is non-trivial, make the effort to **use a named function declaration rather than an anonymous function**. This will make it easier to pinpoint the root cause of an exception when analyzing stack traces."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function once (fn) {\n  var ran = false;\n  return function () {\n    if (ran) { return };\n    ran = true;\n    fn.apply(this, arguments);\n  };\n}"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function once (fn) {\n  var ran = false;\n  return function run () {\n    if (ran) { return };\n    ran = true;\n    fn.apply(this, arguments);\n  };\n}"
    },
    {
        "type": "paragraph",
        "text": "Avoid keeping indentation levels from raising more than necessary by using guard clauses instead of flowing `if` statements."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (car) {\n  if (black) {\n    if (turbine) {\n      return 'batman!';\n    }\n  }\n}"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (condition) {\n  // 10+ lines of code\n}"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (!car) {\n  return;\n}\nif (!black) {\n  return;\n}\nif (!turbine) {\n  return;\n}\nreturn 'batman!';"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (!condition) {\n  return;\n}\n// 10+ lines of code"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Prototypes"
    },
    {
        "type": "paragraph",
        "text": "Hacking native prototypes should be avoided at all costs, use a method instead. If you must extend the functionality in a native type, try using something like [poser][23] instead."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "String.prototype.half = function () {\n  return this.substr(0, this.length / 2);\n};"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function half (text) {\n  return text.substr(0, text.length / 2);\n}"
    },
    {
        "type": "paragraph",
        "text": "**Avoid prototypical inheritance models** unless you have a very good _performance reason_ to justify yourself."
    },
    {
        "type": "space"
    },
    {
        "type": "list_start",
        "ordered": false,
        "start": "",
        "loose": false
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "Prototypical inheritance boosts puts need for `this` through the roof"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "It's way more verbose than using plain objects"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "It causes headaches when creating `new` objects"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "Needs a closure to hide valuable private state of instances"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "Just use plain objects instead"
    },
    {
        "type": "space"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_end"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Object Literals"
    },
    {
        "type": "paragraph",
        "text": "Instantiate using the egyptian notation `{}`. Use factories instead of constructors, here's a proposed pattern for you to implement objects in general."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function util (options) {\n  // private methods and state go here\n  var foo;\n\n  function add () {\n    return foo++;\n  }\n\n  function reset () { // note that this method isn't publicly exposed\n    foo = options.start || 0;\n  }\n\n  reset();\n\n  return {\n    // public interface methods go here\n    uuid: add\n  };\n}"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Array Literals"
    },
    {
        "type": "paragraph",
        "text": "Instantiate using the square bracketed notation `[]`. If you have to declare a fixed-dimension array for performance reasons then it's fine to use the `new Array(length)` notation instead."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "It's about time you master array manipulation! [Learn about the basics][24]. It's way easier than you might think."
    },
    {
        "type": "space"
    },
    {
        "type": "list_start",
        "ordered": false,
        "start": "",
        "loose": false
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.forEach`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)"
    },
    {
        "type": "space"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_end"
    },
    {
        "type": "paragraph",
        "text": "Learn and abuse the functional collection manipulation methods. These are **so** worth the trouble."
    },
    {
        "type": "space"
    },
    {
        "type": "list_start",
        "ordered": false,
        "start": "",
        "loose": false
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.filter`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.map`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.reduce`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.reduceRight`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.some`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.every`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.sort`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_item_start",
        "task": false,
        "loose": false
    },
    {
        "type": "text",
        "text": "[`.reverse`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)"
    },
    {
        "type": "space"
    },
    {
        "type": "list_item_end"
    },
    {
        "type": "list_end"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Regular Expressions"
    },
    {
        "type": "paragraph",
        "text": "Keep regular expressions in variables, don't use them inline. This will vastly improve readability."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "if (/\\d+/.test(text)) {\n  console.log('so many numbers!');\n}"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var numeric = /\\d+/;\nif (numeric.test(text)) {\n  console.log('so many numbers!');\n}"
    },
    {
        "type": "paragraph",
        "text": "Also [learn how to write regular expressions][25], and what they actually do. Then you can also [visualize them online][26]."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "`console` statements"
    },
    {
        "type": "paragraph",
        "text": "Preferably bake `console` statements into a service that can easily be disabled in production. Alternatively, don't ship any `console.log` printing statements to production distributions."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Comments"
    },
    {
        "type": "paragraph",
        "text": "Comments **aren't meant to explain what** the code does. Good **code is supposed to be self-explanatory**. If you're thinking of writing a comment to explain what a piece of code does, chances are you need to change the code itself. The exception to that rule is explaining what a regular expression does. Good comments are supposed to **explain why** code does something that may not seem to have a clear-cut purpose."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "// create the centered container\nvar p = $('<p/>');\np.center(div);\np.text('foo');"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var container = $('<p/>');\nvar contents = 'foo';\ncontainer.center(parent);\ncontainer.text(contents);\nmegaphone.on('data', function (value) {\n  container.text(value); // the megaphone periodically emits updates for container\n});"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var numeric = /\\d+/; // one or more digits somewhere in the string\nif (numeric.test(text)) {\n  console.log('so many numbers!');\n}"
    },
    {
        "type": "paragraph",
        "text": "Commenting out entire blocks of code _should be avoided entirely_, that's why you have version control systems in place!"
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Variable Naming"
    },
    {
        "type": "paragraph",
        "text": "Variables must have meaningful names so that you don't have to resort to commenting what a piece of functionality does. Instead, try to be expressive while succinct, and use meaningful variable names."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Bad"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function a (x, y, z) {\n  return z * y / x;\n}\na(4, 2, 6);\n// <- 3"
    },
    {
        "type": "heading",
        "depth": 5,
        "text": "Good"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function ruleOfThree (had, got, have) {\n  return have * got / had;\n}\nruleOfThree(4, 2, 6);\n// <- 3"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Polyfills"
    },
    {
        "type": "paragraph",
        "text": "Where possible use the native browser implementation and include [a polyfill that provides that behavior][27] for unsupported browsers. This makes the code easier to work with and less involved in hackery to make things just work."
    },
    {
        "type": "space"
    },
    {
        "type": "paragraph",
        "text": "If you can't patch a piece of functionality with a polyfill, then [wrap all uses of the patching code][28] in a globally available method that is accessible from everywhere in the application."
    },
    {
        "type": "space"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "Everyday Tricks"
    },
    {
        "type": "paragraph",
        "text": "Use `||` to define a default value. If the left-hand value is [falsy][29] then the right-hand value will be used. Be advised, that because of loose type comparison, inputs like `false`, `0`, `null` or `''` will be evaluated as falsy, and converted to default value. For strict type checking use `if (value === void 0) { value = defaultValue }`."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function a (value) {\n  var defaultValue = 33;\n  var used = value || defaultValue;\n}"
    },
    {
        "type": "paragraph",
        "text": "Use `.bind` to [partially-apply][30] functions."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function sum (a, b) {\n  return a + b;\n}\n\nvar addSeven = sum.bind(null, 7);\n\naddSeven(6);\n// <- 13"
    },
    {
        "type": "paragraph",
        "text": "Use `Array.prototype.slice.call` to cast array-like objects to true arrays."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var args = Array.prototype.slice.call(arguments);"
    },
    {
        "type": "paragraph",
        "text": "Use [event emitters][31] on all the things!"
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "var emitter = contra.emitter();\n\nbody.addEventListener('click', function () {\n  emitter.emit('click', e.target);\n});\n\nemitter.on('click', function (elem) {\n  console.log(elem);\n});\n\n// simulate click\nemitter.emit('click', document.body);"
    },
    {
        "type": "paragraph",
        "text": "Use `Function()` as a _\"no-op\"_."
    },
    {
        "type": "space"
    },
    {
        "type": "code",
        "lang": "js",
        "text": "function (cb) {\n  setTimeout(cb || Function(), 2000);\n}"
    },
    {
        "type": "heading",
        "depth": 2,
        "text": "License"
    },
    {
        "type": "paragraph",
        "text": "MIT"
    },
    {
        "type": "space"
    },
    {
        "type": "blockquote_start"
    },
    {
        "type": "paragraph",
        "text": "Fork away!"
    },
    {
        "type": "blockquote_end"
    },
    {
        "type": "heading",
        "depth": 1,
        "text": "}"
    }
]