window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Use the std namespace (not recommended for large programs, but common in examples).",
    codePrefix: "",
    codeSuffix: " std;",
    answer: "using namespace",
    choices: ["using namespace", "namespace std", "std::", "using std"]
  },
  {
    id: 2,
    instruction: "Read a value into x.",
    codePrefix: "",
    codeSuffix: " >> x;",
    answer: "std::cin",
    choices: ["std::cin", "std::cout", "scanf", "getline"]
  },
  {
    id: 3,
    instruction: "Write x to standard output.",
    codePrefix: "",
    codeSuffix: " << x;",
    answer: "std::cout",
    choices: ["std::cout", "std::cerr", "std::cin", "printf"]
  },
  {
    id: 4,
    instruction: "Write an error message to standard error.",
    codePrefix: "",
    codeSuffix: " << \"error\\n\";",
    answer: "std::cerr",
    choices: ["std::cerr", "std::cout", "std::cin", "stderr"]
  },
  {
    id: 5,
    instruction: "Insert the stream insertion operator.",
    codePrefix: "std::cout ",
    codeSuffix: " \"Hi\";",
    answer: "<<",
    choices: ["<<", ">>", "<", ">"]
  },
  {
    id: 6,
    instruction: "Insert the stream extraction operator.",
    codePrefix: "std::cin ",
    codeSuffix: " value;",
    answer: ">>",
    choices: [">>", "<<", ">=", "<="]
  },
  {
    id: 7,
    instruction: "Include the string header.",
    codePrefix: "",
    codeSuffix: " <string>",
    answer: "#include",
    choices: ["#include", "import", "using", "module"]
  },
  {
    id: 8,
    instruction: "Bring std::cout into scope (declaration).",
    codePrefix: "using ",
    codeSuffix: "cout;",
    answer: "std::",
    choices: ["std::", "namespace", "::", "cout::"]
  }
];