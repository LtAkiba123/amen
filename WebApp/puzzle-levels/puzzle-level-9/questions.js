window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Include the string header.",
    codePrefix: "",
    codeSuffix: " <string>",
    answer: "#include",
    choices: ["#include", "import", "module", "using"]
  },
  {
    id: 2,
    instruction: "Declare a string named name.",
    codePrefix: "",
    codeSuffix: " name;",
    answer: "std::string",
    choices: ["std::string", "string", "char[]", "std::text"]
  },
  {
    id: 3,
    instruction: "Read a full line into name.",
    codePrefix: "",
    codeSuffix: "(std::cin, name);",
    answer: "std::getline",
    choices: ["std::getline", "getline", "std::get", "std::line"]
  },
  {
    id: 4,
    instruction: "Append '!' to name using operator.",
    codePrefix: "name ",
    codeSuffix: " \"!\";",
    answer: "+=",
    choices: ["+=", "=", "==", "append"]
  },
  {
    id: 5,
    instruction: "Get the length of name.",
    codePrefix: "auto len = name.",
    codeSuffix: "();",
    answer: "size",
    choices: ["size", "length()", "count", "capacity"]
  },
  {
    id: 6,
    instruction: "Character literal for capital A.",
    codePrefix: "char ch = ",
    codeSuffix: ";",
    answer: "'A'",
    choices: ["'A'", "\"A\"", "A", "65"]
  },
  {
    id: 7,
    instruction: "Access the first character.",
    codePrefix: "char first = name[",
    codeSuffix: "];",
    answer: "0",
    choices: ["0", "1", "first", "len-1"]
  },
  {
    id: 8,
    instruction: "Concatenate hello and name using stream.",
    codePrefix: "std::cout << \"Hello, \" ",
    codeSuffix: " name << \"!\\n\";",
    answer: "<<",
    choices: ["<<", ">>", "+", "&"]
  }
];