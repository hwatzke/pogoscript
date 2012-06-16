((function() {
    var self;
    self = this;
    module.exports = function(terms) {
        var self, newOperatorTerm, newOperator;
        self = this;
        newOperatorTerm = terms.term({
            constructor: function(fn) {
                var self;
                self = this;
                self.isNewOperator = true;
                return self.functionCall = fn;
            },
            generateJavaScript: function(buffer, scope) {
                var self;
                self = this;
                buffer.write("new ");
                if (self.functionCall.isVariable) {
                    return self.cg.functionCall(self.functionCall, []).generateJavaScript(buffer, scope);
                } else if (self.functionCall.isFunctionCall && self.functionCall.hasSplatArguments()) {
                    self.functionCall.passThisToApply = true;
                    return self.cg.block([], self.cg.statements([ self.functionCall ]), {
                        returnLastStatement: false
                    }).generateJavaScript(buffer, scope);
                } else {
                    return self.functionCall.generateJavaScript(buffer, scope);
                }
            }
        });
        return newOperator = function(fn) {
            if (fn.isFunctionCall && fn.hasSplatArguments()) {
                var statements, constructor, constructorVariable;
                statements = [];
                fn.passThisToApply = true;
                constructor = terms.block([], terms.statements([ fn ]), {
                    returnLastStatement: false
                });
                constructorVariable = terms.generatedVariable([ "c" ]);
                statements.push(terms.definition(constructorVariable, constructor));
                statements.push(terms.definition(terms.fieldReference(constructorVariable, [ "prototype" ]), terms.fieldReference(fn.function, [ "prototype" ])));
                statements.push(terms.newOperator(constructorVariable));
                return terms.statements(statements, {
                    expression: true
                });
            } else {
                return newOperatorTerm(fn);
            }
        };
    };
})).call(this);