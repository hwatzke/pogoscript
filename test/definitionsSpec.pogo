script = require './scriptAssertions'

should output = script.should output
evaluate script = script.evaluate script

describe 'definitions'
    describe 'definitions cannot shadow other definitions'
        it '@wip throws when an inner scope defines a variable of the same name as defined in outer scope'
            @{evaluate script 'a = 1
                      
                               f () =
                                   a = 2'}.should.throw 'shadow'

        it 'can assign to a variable after it has been defined'
            'a = 1
             print (a)

             a := 2
             print (a)' should output "1
                                       2"
        