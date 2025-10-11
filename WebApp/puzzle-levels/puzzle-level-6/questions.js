window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Declare a function that returns nothing.",
    codePrefix: "",
    codeSuffix: " greet() { }",
    answer: "void",
    choices: ["void", "int", "auto", "main"]
  },
  {
    id: 2,
    instruction: "Return the integer 42.",
    codePrefix: "",
    codeSuffix: " 42;",
    answer: "return",
    choices: ["return", "break", "continue", "yield"]
  },
  {
    id: 3,
    instruction: "Provide the parameter type for x.",
    codePrefix: "int add(",
    codeSuffix: " x, int y) { return x + y; }",
    answer: "int",
    choices: ["int", "double", "char", "auto()"]
  },
  {
    id: 4,
    instruction: "Call the function named add.",
    codePrefix: "",
    codeSuffix: "(2, 3);",
    answer: "add",
    choices: ["add", "sum", "plus", "call"]
  },
  {
    id: 5,
    instruction: "Use a trailing return to specify int.",
    codePrefix: "auto square(int x) -> ",
    codeSuffix: " { return x*x; }",
    answer: "int",
    choices: ["int", "void", "auto", "double"]
  },
  {
    id: 6,
    instruction: "Forward declare a function.",
    codePrefix: "",
    codeSuffix: " foo();",
    answer: "int",
    choices: ["int", "void", "auto", "main"]
  },
  {
    id: 7,
    instruction: "Keyword to inline a tiny function (hint: suggests inline expansion).",
    codePrefix: "",
    codeSuffix: " int add1(int x){ return x+1; }",
    answer: "inline",
    choices: ["inline", "constexpr", "static", "virtual"]
  },
  {
    id: 8,
    instruction: "Mark a function that must not throw exceptions.",
    codePrefix: "int f() ",
    codeSuffix: " { return 0; }",
    answer: "noexcept",
    choices: ["noexcept", "throw()", "override", "final"]
  }
];