window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Declare a 2x3 integer matrix.",
    codePrefix: "int m[2][",
    codeSuffix: "];",
    answer: "3",
    choices: ["3", "2", "6", "m"]
  },
  {
    id: 2,
    instruction: "Initialize a 2-element array with brace-init.",
    codePrefix: "int p[2] = ",
    codeSuffix: ";",
    answer: "{10, 20}",
    choices: ["{10, 20}", "(10, 20)", "[10, 20]", "{10;20}"]
  },
  {
    id: 3,
    instruction: "Access the last element of arr with index.",
    codePrefix: "int last = arr[",
    codeSuffix: "]; // assume arr has 5 elements",
    answer: "4",
    choices: ["4", "5", "arr.size()-1", "end(arr)"]
  },
  {
    id: 4,
    instruction: "Pointer arithmetic: second element via pointer p.",
    codePrefix: "int second = *(",
    codeSuffix: " + 1);",
    answer: "p",
    choices: ["p", "&p", "*p", "arr"]
  },
  {
    id: 5,
    instruction: "Get an iterator to the beginning of arr (C++11).",
    codePrefix: "auto it = ",
    codeSuffix: "(arr);",
    answer: "std::begin",
    choices: ["std::begin", "std::start", "begin", "arr.begin"]
  },
  {
    id: 6,
    instruction: "Get an iterator to the end of arr.",
    codePrefix: "auto it2 = ",
    codeSuffix: "(arr);",
    answer: "std::end",
    choices: ["std::end", "std::finish", "end", "arr.end"]
  },
  {
    id: 7,
    instruction: "Use std::array (fixed-size array type).",
    codePrefix: "",
    codeSuffix: "<int, 5> a{};",
    answer: "std::array",
    choices: ["std::array", "std::vector", "array", "std::list"]
  },
  {
    id: 8,
    instruction: "Index into a 2D array (row 1, col 2).",
    codePrefix: "int val = m[1][",
    codeSuffix: "];",
    answer: "2",
    choices: ["2", "1", "0", "3"]
  }
];