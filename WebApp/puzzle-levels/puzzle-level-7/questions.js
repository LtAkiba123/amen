window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Declare a reference parameter.",
    codePrefix: "void inc(int ",
    codeSuffix: " x){ x++; }",
    answer: "&",
    choices: ["&", "*", "&&", "const"]
  },
  {
    id: 2,
    instruction: "Declare a pointer to int.",
    codePrefix: "int ",
    codeSuffix: " p = nullptr;",
    answer: "*",
    choices: ["*", "&", "**", "ptr"]
  },
  {
    id: 3,
    instruction: "Address-of operator to get p pointing to x.",
    codePrefix: "int x = 7; int* p = ",
    codeSuffix: "x;",
    answer: "&",
    choices: ["&", "*", "->", "."]
  },
  {
    id: 4,
    instruction: "Dereference p to assign 42.",
    codePrefix: "",
    codeSuffix: "p = 42;",
    answer: "*",
    choices: ["*", "&", "->", "."]
  },
  {
    id: 5,
    instruction: "Null pointer literal.",
    codePrefix: "int* p = ",
    codeSuffix: ";",
    answer: "nullptr",
    choices: ["nullptr", "NULL", "0", "void*"]
  },
  {
    id: 6,
    instruction: "Member access through pointer.",
    codePrefix: "ptr",
    codeSuffix: "value;",
    answer: "->",
    choices: ["->", ".", "::", ":"]
  },
  {
    id: 7,
    instruction: "Member access through object.",
    codePrefix: "obj",
    codeSuffix: "value;",
    answer: ".",
    choices: [".", "->", "::", ":"]
  },
  {
    id: 8,
    instruction: "Constant pointer to int (pointer cannot change).",
    codePrefix: "int* ",
    codeSuffix: " const p = &x;",
    answer: "",
    choices: ["", "*", "&", "const"]
  }
];