terms = require '../lib/parser/codeGenerator'.code generator ()
should = require 'should'

(term) should generate (source) generated by (generate) (print: false) =
    code = generate (term, new (terms.Symbol Scope))

    if (print)
        console.log (code)

    should.equal (code, source)
    

global.(term) should generate expression (source, options) =
    (term) should generate (source) generated by @(term, scope)
        term.generate (scope)
    (options)

global.(term) should generate statement (source, options) =
    (term) should generate (source) generated by @(term, scope)
        term.generate statement (scope)
    (options)

global.(term) should generate statements (source, options) =
    (term) should generate (source) generated by @(term, scope)
        term.generate statements (scope, in closure: true)
    (options)

global.(term) should generate global statements (source, options) =
    (term) should generate (source) generated by @(term, scope)
        term.generate statements (scope, global: true)
    (options)

global.(term) should generate module (source, options) =
    (term) should generate (source) generated by @(term)
        term.generate module ()
    (options)