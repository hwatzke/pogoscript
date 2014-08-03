---
layout: doc
guide: Functions
weight: 2
---

Variables are the building blocks, but functions have all the fun. In Pogoscript functions are called by passing arguments. Arguments can be numbers, strings or other expressions like variables or indeed the results of other functions.

    is (windSpeed) strongEnoughForMyKite

Here we called a function named `isStrongEnoughForMyKite`, but we passed the `windSpeed` argument in the _middle_ of the function, between the `is` and the `strong`. This is possible because we can also write the function like this:

    is (windSpeed) strong enough for my kite

Identifiers in Pogoscript can be written in both **space-case** and **camel-case**. The actual position of the arguments does not matter, just the order. In fact, we could call the same function like this:

    (windSpeed) isStrongEnoughForMyKite

Or

    isStrongEnoughForMy (windSpeed) kite

Neither of which read as well as the first, but are nevertheless effectively the same thing.

Eventually, you'll want to define your own functions too. Like variables, we use equals `=`, like this:

    is (windSpeed) tooStrongForMyKite = windSpeed > 30

We can also drop the function's body onto an indented line like this:

    is (windSpeed) tooStrongForMyKite =
        windSpeed > 30

The last statement in a function is the functions ultimate value.

These are simple functions, but there are other ways functions can be called, and it's all to do with how the arguments are written. For example, lets imagine we have a function called `sum`, it returns the sum of the numbers you pass to it.

    sum 1 2 3
    => 6

Notice how the numbers didn't need parenthesis? Numbers and strings don't need to be in parenthesis, but there's nothing stopping you from using them:

    sum (1) (2) (3)
    => 6

In fact, you can use brackets for some arguments and not for others:

    sum (1) 2 (3)
    => 6

If two arguments are next to each other, they can be in the same parantheses and separated by commas:

    sum (1, 2) 3
    => 6

Or

    sum (1, 2, 3)
    => 6

Now all of the above is true if there is a name, in this case `sum`. It's time to introduce some new terminology to help us: all of the examples you've seen so far are *forms*. A form is a list of words, numbers, strings and expressions in parentheses. (They can also contain blocks and parameters, but we'll get to that soon.) A form has a name if it contains some words, like our `sum` example above. If a form doesn't have a name, for example, if it's all arguments like this:

    (sum, 1, 2, 3)

Then the *first* argument is taken as the function and the remaining arguments the arguments to that function. So the following forms are functionally identical:

    (sum, 1, 2, 3)
    sum 1 2 3
    (sum) 1 2 3

If there's only *one* argument and no name, then that argument is taken as a value, not a function, and it's not called. So the following are identical:

    (windSpeed)
    windSpeed