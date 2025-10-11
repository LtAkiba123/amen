window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Include the iostream header.",
    codePrefix: "",
    codeSuffix: " <iostream>",
    answer: "#include",
    choices: ["#include", "import", "module", "using"]
  },
  {
    id: 2,
    instruction: "Start the main function.",
    codePrefix: "",
    codeSuffix: "() {",
    answer: "int main",
    choices: ["int main", "void main", "main()", "std::main"]
  },
  {
    id: 3,
    instruction: "Print Hello using the standard output stream.",
    codePrefix: "",
    codeSuffix: " << \"Hello\";",
    answer: "std::cout",
    choices: ["std::cout", "std::cin", "printf", "cout"]
  },
  {
    id: 4,
    instruction: "End the line and flush output.",
    codePrefix: "std::cout << \"Done\" << ",
    codeSuffix: ";",
    answer: "std::endl",
    choices: ["std::endl", "std::cin", "std::cerr", "return"]
  },
  {
    id: 5,
    instruction: "Declare an integer variable named x.",
    codePrefix: "",
    codeSuffix: " x;",
    answer: "int",
    choices: ["int", "char", "float", "auto()"]
  },
  {
    id: 6,
    instruction: "Assign 5 to x.",
    codePrefix: "int x ",
    codeSuffix: " 5;",
    answer: "=",
    choices: ["=", "==", "+=", "-="]
  },
  {
    id: 7,
    instruction: "Declare a boolean variable named ok.",
    codePrefix: "",
    codeSuffix: " ok = true;",
    answer: "bool",
    choices: ["bool", "int", "char", "bit"]
  },
  {
    id: 8,
    instruction: "Finish the program with a success status.",
    codePrefix: "",
    codeSuffix: "",
    answer: "return 0;",
    choices: ["return 0;", "exit;", "break;", "continue;"]
  }
];