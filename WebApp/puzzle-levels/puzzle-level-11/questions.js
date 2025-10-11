window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Start a switch statement.",
    codePrefix: "",
    codeSuffix: " (code) {",
    answer: "switch",
    choices: ["switch", "if", "case", "default"]
  },
  {
    id: 2,
    instruction: "Label for value 1.",
    codePrefix: "",
    codeSuffix: " 1:",
    answer: "case",
    choices: ["case", "default", "label", "goto"]
  },
  {
    id: 3,
    instruction: "Fallback label when no case matches.",
    codePrefix: "",
    codeSuffix: ":",
    answer: "default",
    choices: ["default", "else", "otherwise", "case 0"]
  },
  {
    id: 4,
    instruction: "Terminate the current case block.",
    codePrefix: "",
    codeSuffix: ";",
    answer: "break",
    choices: ["break", "continue", "return", "exit"]
  },
  {
    id: 5,
    instruction: "Declare an unscoped enumeration named Color.",
    codePrefix: "",
    codeSuffix: " Color { Red, Green, Blue };",
    answer: "enum",
    choices: ["enum", "class", "struct", "typedef"]
  },
  {
    id: 6,
    instruction: "Scoped enumeration keyword.",
    codePrefix: "",
    codeSuffix: " class Status { Ok, Fail };",
    answer: "enum",
    choices: ["enum", "class", "struct", "signed"]
  },
  {
    id: 7,
    instruction: "Use scope resolution to access enum member for scoped enum.",
    codePrefix: "Status s = Status",
    codeSuffix: "::Ok;",
    answer: "",
    choices: ["", "::", ".", "->"]
  },
  {
    id: 8,
    instruction: "Return 0 at the end of main.",
    codePrefix: "",
    codeSuffix: "",
    answer: "return 0;",
    choices: ["return 0;", "exit;", "break;", "continue;"]
  }
];