create indent stack = require './indentStack':create indent stack

exports: create parser context =
    create parser context, terms = object =>
        :terms = terms

        :indent stack = create indent stack!

        :tokens @tokens =
            :lexer:tokens = tokens
            tokens:shift?

        :set indentation @text =
            :indent stack:set indentation @text

        :unset indentation! =
            :indent stack:unset indentation!

        :indentation @text =
            tokens = :indent stack:tokens for new line @text
            :tokens @tokens

        :eof! =
            :tokens (:indent stack:tokens for eof?)