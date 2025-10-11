window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Compare x to 10 for equality.",
    codePrefix: "if (x ",
    codeSuffix: " 10) {",
    answer: "==",
    choices: ["==", "=", "!=", ">"]
  },
  {
    id: 2,
    instruction: "Use logical AND to combine two conditions.",
    codePrefix: "if (x > 0 ",
    codeSuffix: " y > 0) {",
    answer: "&&",
    choices: ["&&", "||", "&", "|"]
  },
  {
    id: 3,
    instruction: "Increment i in-place.",
    codePrefix: "i",
    codeSuffix: ";",
    answer: "++",
    choices: ["++", "--", "+=", "-="]
  },
  {
    id: 4,
    instruction: "Add 5 to total using compound assignment.",
    codePrefix: "total ",
    codeSuffix: " 5;",
    answer: "+=",
    choices: ["+=", "-=", "*=", "/="]
  },
  {
    id: 5,
    instruction: "Check if y is less than or equal to 20.",
    codePrefix: "if (y ",
    codeSuffix: " 20) {",
    answer: "<=",
    choices: ["<=", ">=", "<", ">"]
  },
  {
    id: 6,
    instruction: "Logical NOT on flag.",
    codePrefix: "if (",
    codeSuffix: "flag) {",
    answer: "!",
    choices: ["!", "~", "not", "!!"]
  },
  {
    id: 7,
    instruction: "Remainder of a divided by b.",
    codePrefix: "int r = a ",
    codeSuffix: " b;",
    answer: "%",
    choices: ["%", "/", "*", "&"]
  },
  {
    id: 8,
    instruction: "Divide a by b using integer division.",
    codePrefix: "int q = a ",
    codeSuffix: " b;",
    answer: "/",
    choices: ["/", "*", "+", "-"]
  }
];