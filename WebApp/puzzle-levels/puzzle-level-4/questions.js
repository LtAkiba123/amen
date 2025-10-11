window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Start an if statement.",
    codePrefix: "",
    codeSuffix: " (x > 0) {",
    answer: "if",
    choices: ["if", "while", "for", "switch"]
  },
  {
    id: 2,
    instruction: "Add an else clause.",
    codePrefix: "} ",
    codeSuffix: " {",
    answer: "else",
    choices: ["else", "case", "default", "break"]
  },
  {
    id: 3,
    instruction: "Use an else-if.",
    codePrefix: "",
    codeSuffix: " (x == 0) {",
    answer: "else if",
    choices: ["else if", "elseif", "elif", "if else"]
  },
  {
    id: 4,
    instruction: "Return from the function early.",
    codePrefix: "",
    codeSuffix: " 1;",
    answer: "return",
    choices: ["return", "break", "continue", "exit"]
  },
  {
    id: 5,
    instruction: "Use the ternary operator symbol for 'then'.",
    codePrefix: "auto res = cond ",
    codeSuffix: " 1 : 0;",
    answer: "?",
    choices: ["?", ":", "::", "->"]
  },
  {
    id: 6,
    instruction: "Use the ternary operator symbol for 'else'.",
    codePrefix: "auto res = cond ? 1 ",
    codeSuffix: " 0;",
    answer: ":",
    choices: [":", "?", "::", ";"]
  },
  {
    id: 7,
    instruction: "Check inequality.",
    codePrefix: "if (a ",
    codeSuffix: " b) {",
    answer: "!=",
    choices: ["!=", "==", "=", "!=="]
  },
  {
    id: 8,
    instruction: "Use logical OR.",
    codePrefix: "if (x == 0 ",
    codeSuffix: " y == 0) {",
    answer: "||",
    choices: ["||", "&&", "|", "&"]
  }
];