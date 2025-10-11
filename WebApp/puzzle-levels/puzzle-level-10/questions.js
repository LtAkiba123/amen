window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Include the iomanip header.",
    codePrefix: "",
    codeSuffix: " <iomanip>",
    answer: "#include",
    choices: ["#include", "import", "module", "using"]
  },
  {
    id: 2,
    instruction: "Format floating output with fixed notation.",
    codePrefix: "std::cout << ",
    codeSuffix: " << 3.14159;",
    answer: "std::fixed",
    choices: ["std::fixed", "std::scientific", "std::hex", "std::oct"]
  },
  {
    id: 3,
    instruction: "Set precision to 2 digits.",
    codePrefix: "std::cout << ",
    codeSuffix: "(2) << 3.14159;",
    answer: "std::setprecision",
    choices: ["std::setprecision", "std::precision", "std::setw", "std::setfill"]
  },
  {
    id: 4,
    instruction: "Set width to 6.",
    codePrefix: "std::cout << ",
    codeSuffix: "(6) << x;",
    answer: "std::setw",
    choices: ["std::setw", "std::width", "std::setfill", "std::setbase"]
  },
  {
    id: 5,
    instruction: "Left alignment.",
    codePrefix: "std::cout << ",
    codeSuffix: " << x;",
    answer: "std::left",
    choices: ["std::left", "std::right", "std::internal", "std::center"]
  },
  {
    id: 6,
    instruction: "Right alignment.",
    codePrefix: "std::cout << ",
    codeSuffix: " << x;",
    answer: "std::right",
    choices: ["std::right", "std::left", "std::internal", "std::center"]
  },
  {
    id: 7,
    instruction: "Print bools as true/false.",
    codePrefix: "std::cout << ",
    codeSuffix: " << flag;",
    answer: "std::boolalpha",
    choices: ["std::boolalpha", "std::showbase", "std::showpos", "std::noboolalpha"]
  },
  {
    id: 8,
    instruction: "Always show the decimal point.",
    codePrefix: "std::cout << ",
    codeSuffix: " << 5.0;",
    answer: "std::showpoint",
    choices: ["std::showpoint", "std::showbase", "std::uppercase", "std::noshowpoint"]
  }
];