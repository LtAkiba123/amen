window.CPP_QUESTIONS = [
  {
    id: 1,
    instruction: "Declare a struct named Point.",
    codePrefix: "",
    codeSuffix: " Point { int x; int y; };",
    answer: "struct",
    choices: ["struct", "class", "enum", "typedef"]
  },
  {
    id: 2,
    instruction: "Declare a class named Person.",
    codePrefix: "",
    codeSuffix: " Person { public: int age; };",
    answer: "class",
    choices: ["class", "struct", "enum", "template"]
  },
  {
    id: 3,
    instruction: "Public access specifier.",
    codePrefix: "",
    codeSuffix: ":",
    answer: "public",
    choices: ["public", "private", "protected", "friend"]
  },
  {
    id: 4,
    instruction: "Private access specifier.",
    codePrefix: "",
    codeSuffix: ":",
    answer: "private",
    choices: ["private", "public", "protected", "friend"]
  },
  {
    id: 5,
    instruction: "Use this pointer to access a member.",
    codePrefix: "",
    codeSuffix: "value = 10;",
    answer: "this->",
    choices: ["this->", "self.", "->", "."]
  },
  {
    id: 6,
    instruction: "Construct an object dynamically.",
    codePrefix: "Person* p = ",
    codeSuffix: " Person();",
    answer: "new",
    choices: ["new", "malloc", "create", "make"]
  },
  {
    id: 7,
    instruction: "Release dynamically allocated object.",
    codePrefix: "",
    codeSuffix: " p;",
    answer: "delete",
    choices: ["delete", "free", "dispose", "release"]
  },
  {
    id: 8,
    instruction: "Constructor name same as class (fill the class name).",
    codePrefix: "",
    codeSuffix: "() : x(0), y(0) {}",
    answer: "Point",
    choices: ["Point", "point", "POINT", "Vertex"]
  }
];