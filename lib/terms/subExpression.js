(function() {
    var self = this;
    module.exports = function(terms) {
        var self = this;
        return terms.term({
            constructor: function(expression) {
                var self = this;
                self.isSubExpression = true;
                return self.expression = expression;
            },
            generateJavaScript: function(buffer, scope) {
                var self = this;
                return self.codeIntoBuffer(buffer, function(buffer) {
                    buffer.write("(");
                    buffer.write(self.expression.generate(scope));
                    return buffer.write(")");
                });
            }
        });
    };
}).call(this);