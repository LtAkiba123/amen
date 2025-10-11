window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Declare a compile-time constant N with value 10.",
    codePrefix: "",
    codeSuffix: " int N = 10;",
    answer: "const",
    choices: ["const", "constexpr()", "static", "final"]
  },
  {
    id: 2,
    instruction: "Prefer compile-time constant expression for AREA.",
    codePrefix: "",
    codeSuffix: " int AREA = 25;",
    answer: "constexpr",
    choices: ["constexpr", "const", "static", "mutable"]
  },
  {
    id: 3,
    instruction: "Make function local to this translation unit.",
    codePrefix: "",
    codeSuffix: " int helper(){ return 1; }",
    answer: "static",
    choices: ["static", "inline", "extern", "private"]
  },
  {
    id: 4,
    instruction: "Declare an external variable defined elsewhere.",
    codePrefix: "",
    codeSuffix: " int gCounter;",
    answer: "extern",
    choices: ["extern", "static", "mutable", "register"]
  },
  {
    id: 5,
    instruction: "Use scope resolution to access a global variable.",
    codePrefix: "",
    codeSuffix: "::gCounter = 0;",
    answer: "::",
    choices: ["::", ".", "->", ":"]
  },
  {
    id: 6,
    instruction: "Constant method qualifier: does not modify object state.",
    codePrefix: "int size() ",
    codeSuffix: " { return n; }",
    answer: "const",
    choices: ["const", "final", "override", "mutable"]
  },
  {
    id: 7,
    instruction: "Disallow modification through pointer (pointer to const int).",
    codePrefix: "const int* p = ",
    codeSuffix: ";",
    answer: "nullptr",
    choices: ["nullptr", "0", "&x", "new int(0)"]
  },
  {
    id: 8,
    instruction: "Allow modification of member even in const object (keyword).",
    codePrefix: "",
    codeSuffix: " int cache;",
    answer: "mutable",
    choices: ["mutable", "static", "volatile", "register"]
  }
];