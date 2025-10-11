window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Define a macro MAX with value 100.",
    codePrefix: "",
    codeSuffix: " MAX 100",
    answer: "#define",
    choices: ["#define", "#include", "#ifdef", "#pragma"]
  },
  {
    id: 2,
    instruction: "Header guard start: check if not defined.",
    codePrefix: "",
    codeSuffix: " MY_HEADER_H",
    answer: "#ifndef",
    choices: ["#ifndef", "#ifdef", "#endif", "#pragma"]
  },
  {
    id: 3,
    instruction: "Header guard define symbol.",
    codePrefix: "",
    codeSuffix: " MY_HEADER_H",
    answer: "#define",
    choices: ["#define", "#ifdef", "#endif", "#pragma once"]
  },
  {
    id: 4,
    instruction: "Header guard end.",
    codePrefix: "",
    codeSuffix: "",
    answer: "#endif",
    choices: ["#endif", "#end", "#stop", "#fi"]
  },
  {
    id: 5,
    instruction: "Include vector header.",
    codePrefix: "",
    codeSuffix: " <vector>",
    answer: "#include",
    choices: ["#include", "import", "module", "use"]
  },
  {
    id: 6,
    instruction: "Once-only header inclusion directive.",
    codePrefix: "",
    codeSuffix: "",
    answer: "#pragma once",
    choices: ["#pragma once", "#include once", "#once", "#pragma"]
  },
  {
    id: 7,
    instruction: "Conditional compilation: compile only if DEBUG is defined.",
    codePrefix: "",
    codeSuffix: " DEBUG",
    answer: "#ifdef",
    choices: ["#ifdef", "#ifndef", "#if", "#endif"]
  },
  {
    id: 8,
    instruction: "End conditional compilation block.",
    codePrefix: "",
    codeSuffix: "",
    answer: "#endif",
    choices: ["#endif", "#end", "#fi", "#stop"]
  }
];