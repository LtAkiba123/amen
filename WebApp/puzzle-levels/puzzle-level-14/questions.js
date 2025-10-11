window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Declare an integer array of size 5.",
    codePrefix: "int nums[",
    codeSuffix: "];",
    answer: "5",
    choices: ["5", "nums", "int", "()"]
  },
  {
    id: 2,
    instruction: "Initialize an array with three elements.",
    codePrefix: "int a[] = ",
    codeSuffix: ";",
    answer: "{1, 2, 3}",
    choices: ["{1, 2, 3}", "(1, 2, 3)", "[1, 2, 3]", "{1;2;3}"]
  },
  {
    id: 3,
    instruction: "Access the first element.",
    codePrefix: "int first = a[",
    codeSuffix: "];",
    answer: "0",
    choices: ["0", "1", "a", "first"]
  },
  {
    id: 4,
    instruction: "Assign 42 to the third element.",
    codePrefix: "a[",
    codeSuffix: "] = 42;",
    answer: "2",
    choices: ["2", "3", "1", "0"]
  },
  {
    id: 5,
    instruction: "Pointer to the first element.",
    codePrefix: "int* p = ",
    codeSuffix: ";",
    answer: "&a[0]",
    choices: ["&a[0]", "a[0]", "a", "*a"]
  },
  {
    id: 6,
    instruction: "Range-based for element type deduction.",
    codePrefix: "for (",
    codeSuffix: " x : a) { }",
    answer: "auto",
    choices: ["auto", "int", "var", "let"]
  },
  {
    id: 7,
    instruction: "Zero-initialize all elements of b (size 4).",
    codePrefix: "int b[4] = ",
    codeSuffix: ";",
    answer: "{}",
    choices: ["{}", "{0}", "()", "[]"]
  },
  {
    id: 8,
    instruction: "Array length using sizeof trick (elements count).",
    codePrefix: "int n = sizeof(a) / ",
    codeSuffix: "(a[0]);",
    answer: "sizeof",
    choices: ["sizeof", "lengthof", "countof", "size"]
  }
];