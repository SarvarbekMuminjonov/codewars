/**This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */
function zero() {
    if (arguments[0])
      return parseInt(eval(0 + arguments[0]["1"] + arguments[0]["0"]))
    else return 0
  }
  function one() {
    if(arguments[0])
      return parseInt(eval(1 + arguments[0]["1"] + arguments[0]["0"]))
    else return 1
  }
  function two() {
    if(arguments[0])
      return parseInt(eval(2 + arguments[0]["1"] + arguments[0]["0"]))
    else return 2
  }
  function three() {
    if(arguments[0])
      return parseInt(eval(3 + arguments[0]["1"] + arguments[0]["0"]))
    else return 3
  }
  function four() {
    if(arguments[0])
      return parseInt(eval(4 + arguments[0]["1"] + arguments[0]["0"]))
    else return 4
  }
  function five() {
    if(arguments[0])
      return parseInt(eval(5 + arguments[0]["1"] + arguments[0]["0"]))
    else return 5
  }
  function six() {
    if(arguments[0])
      return parseInt(eval(6 + arguments[0]["1"] + arguments[0]["0"]))
    else return 6
  }
  function seven() {
    if(arguments[0])
      return parseInt(eval(7 + arguments[0]["1"] + arguments[0]["0"]))
    else return 7
  }
  function eight() {
    if(arguments[0])
      return parseInt(eval(8 + arguments[0]["1"] + arguments[0]["0"]))
    else return 8
  }
  function nine() {
    if(arguments[0])
      return parseInt(eval(9 + arguments[0]["1"] + arguments[0]["0"]))
    else return 9
  }
  
  function plus() {
    arguments[1] = "+"
    return arguments
  }
  function minus() {
    arguments[1] = "-"
    return arguments
  }
  function times() {
    arguments[1] = "*"
    return arguments
  }
  function dividedBy() {
    arguments[1] = "/"
    return arguments
  }
  console.log(seven(times(four())))
//   consoleparseInt(.log(1.2))
// //best solution
// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return a / b; }; };