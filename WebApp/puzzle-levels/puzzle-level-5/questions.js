window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Start a for-loop header.",
    codePrefix: "",
    codeSuffix: " (int i = 0; i < n; ++i) {",
    answer: "for",
    choices: ["for", "while", "if", "do"]
  },
  {
    id: 2,
    instruction: "Start a while-loop header.",
    codePrefix: "",
    codeSuffix: " (count > 0) {",
    answer: "while",
    choices: ["while", "for", "do", "if"]
  },
  {
    id: 3,
    instruction: "Start a do-while loop.",
    codePrefix: "",
    codeSuffix: " { i++; } while (i < 5);",
    answer: "do",
    choices: ["do", "while", "for", "loop"]
  },
  {
    id: 4,
    instruction: "Exit the nearest loop immediately.",
    codePrefix: "",
    codeSuffix: ";",
    answer: "break",
    choices: ["break", "continue", "return", "exit"]
  },
  {
    id: 5,
    instruction: "Skip to the next iteration.",
    codePrefix: "",
    codeSuffix: ";",
    answer: "continue",
    choices: ["continue", "break", "return", "skip"]
  },
  {
    id: 6,
    instruction: "Range-based for: deduce element type.",
    codePrefix: "for (",
    codeSuffix: " x : nums) {",
    answer: "auto",
    choices: ["auto", "int", "var", "let"]
  },
  {
    id: 7,
    instruction: "Loop increment expression.",
    codePrefix: "for (int i = 0; i < n; ",
    codeSuffix: ") {",
    answer: "++i",
    choices: ["++i", "i--", "i=0", "i+++"]
  },
  {
    id: 8,
    instruction: "Condition to keep looping while items remain.",
    codePrefix: "while (!q.",
    codeSuffix: "()) { /* ... */ }",
    answer: "empty",
    choices: ["empty", "size", "top", "pop"]
  }
];