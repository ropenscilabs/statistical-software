
var
    GREEN = "rgba(0,255,150,0.8)",
    RED = "rgba(255,50,0,0.8)",
    BLUE = "rgba(0,150,255,0.8)",
    ORANGE = "orange";

// create an array with nodes
// 0: Validation & Verification
// 1: Testing
// 101: Testing: Property-based
// 102: Testing: Design
// 11: Testing: Execution
// 12: Integration Testing
// 121: Coverage
// 13: Unit Testing
// 131: R CMD check and grep parsing
// 132: linter
// 133: URL domain checks (new on CRAN
// 140: Black box testing
// 141: Black box testing
// 142: Static testing
// 143: Dynamic testing
// 144: Exhaustive testing
// 150: How many testers/users?
//
// 2: Review
// 21: Start and End
// 22: Code Inpsection
// 3: Software Life Cycles
// 31: Retirement
// 32: Transfer
// 4: Metrics
// 41: Documentation
// 42: Meta
// 421: Reputation
// 422: Breadth of Use
// 5: Design
// 51: Planning
var nodes = new vis.DataSet([
  { id: 0,
    group: 0,
    shape: "circle",
    label: "Validation & Verification"
  },
  { id: 1,
    group: 1,
    label: "Testing",
    shape: "circle",
    title: "A validation program that depends on testing alone for<br>a defect-free device is depending on perfection in testing."
  },
  { id: 101, group: 1, label: "Testing: Property-Based", title: "Current not possible / not implemented" },
  { id: 102, group: 1, label: "Testing: Design", title: "'When you test a program, you want to add value to it' (Meyers &c 2011)<br>Currently only informally done" },

  { id: 11,
    group: 1,
    label: "Testing: Execution",
    shape: "circle",
    title: "A validation program that depends on testing alone for<br>a defect-free device is depending on perfection in testing."
  },
  { id: 12,
    group: 1,
    label: "Integration Testing",
    shape: "circle",
    title: "Testing of control across a program's internal and external interfaces"
  },
  { id: 121, group: 1, label: "Coverage" },
  { id: 13,
    group: 1,
    label: "Unit Testing",
    shape: "circle",
    title: "Testing of sub-program functionality that is not visible"
  },
  { id: 131, group: 1, label: "R CMD check and grep parsing" },
  { id: 132, group: 1, label: "linter" },
  { id: 133, group: 1, label: "URL domain checks (new on CRAN)",
    widthConstraint: {
      maximum: 175
    }
  },

  { id: 140, group: 11, label: "Black Box Testing" },
  { id: 141, group: 11, label: "White Box Testing" },
  { id: 142, group: 11, label: "Static Testing" },
  { id: 143, group: 11, label: "Dynamic Testing" },
  { id: 144, group: 11, label: "Exhaustive Testing", title: "When you finish module-testing a program,<br>you have really only just begun the testing process<br>(Meyers &c, 2011)" },

  { id: 150, group: 1, label: "How Many Users / Testers?", title: "Empirical formula from Meyers &c (2011):<br>Generally not so many" },

  { id: 2, label: "Review", group: 2},
  { id: 21, label: "Start and End", group: 2, title: "A critical component that is a fundmental part of<br>the FDA's 'Good Practices in Software Validation'"},
  { id: 22, label: "Code Inpsection", group: 2},

  { id: 3, label: "Software Life Cycles", group: 3, shape: "circle" },
  { id: 31, label: "Retirement", group: 3},
  { id: 32, label: "Transfer", group: 3},

  { id: 4, label: "Metrics", group: 4, title: "Project metrics are probably of most value ... [but] these are<br>generally metrics for how much of the source code is exercised.<br>They are not indicative of how well the tests are designed.<br>These metrics are a measure of the breadth of coverage, not<br>the depth or quality of coverage. (Vogel 2011)" },
  { id: 41, label: "Documentation", group: 4 },
  { id: 42, label: "Meta", group: 4 },
  { id: 421, label: "Reputation", group: 4 },
  { id: 422, label: "Breadth of Use", group: 4 },

  { id: 5, label: "Design", group: 5},
  { id: 51, label: "Planning", group: 5}

  /*
   {
    id: 101,
    group: 1,
    x: -mynetwork.clientWidth / 1 + 50,
    y: -mynetwork.clientHeight / 2 + 50,
    label: "Validation", 
    shape: "box",
    fixed: true,
    physics: false
  },
  {
    id: 102,
    group: 2,
    x: -mynetwork.clientWidth / 1 + 50,
    y: -mynetwork.clientHeight / 2 + 150,
    label: "Verification", 
    shape: "box",
    fixed: true,
    physics: false
  },
  */
]);

// ********* EDGES ********
// dash patterns are consecutive [on, off] [on, off]
// 0: Validation & Verification
// 1: Testing
// 101: Testing: Property-based
// 102: Testing: Design
// 11: Testing: Execution
// 12: Integration Testing
// 121: Coverage
// 13: Unit Testing
// 131: R CMD check and grep parsing
// 132: linter
// 133: URL domain checks (new on CRAN
// 140: Black box testing
// 141: Black box testing
// 142: Static testing
// 143: Dynamic testing
// 144: Exhaustive testing
// 150: How many testers/users?
//
// 2: Review
// 21: Start and End
// 22: Code Inpsection
// 3: Software Life Cycles
// 31: Retirement
// 32: Transfer
// 4: Metrics
// 41: Documentation
// 42: Meta
// 421: Reputation
// 422: Breadth of Use
// 5: Design
// 51: Planning
var edges = new vis.DataSet([
  { from: 1, to: 0, arrows: "to", value: 1 },
  { from: 101, to: 1, arrows: "to" },
  { from: 102, to: 1, arrows: "to" },

  { from: 11, to: 1, value: 1, arrows:
    { to: true,
      scaleFactor: 3
    }
  },
  { from: 121, to: 12, arrows: "to" },
  { from: 121, to: 13, arrows: "to" },

  { from: 143, to: 11, arrows: "to", value: 1 },
  { from: 142, to: 2, arrows: "to", dashes: [10, 10] },
  { from: 1, to: 22, arrows: "to, from", dashes: [10, 10] },

  { from: 131, to: 13, arrows: "to" },
  { from: 132, to: 13, arrows: "to" },
  { from: 133, to: 13, arrows: "to" },
  { from: 131, to: 4, arrows: "to" },
  { from: 132, to: 4, arrows: "to" },
  { from: 133, to: 4, arrows: "to" },

  { from: 13, to: 12, arrows: "to" },
  { from: 12, to: 1, arrows: "to", value: 1 },

  { from: 150, to: 1, arrows: "to" },

  { from: 142, to: 143, arrows: "to, from" },
  { from: 140, to: 141, arrows: "to, from" },
  { from: 140, to: 142, arrows: "to, from", dashes: [10, 10] },
  { from: 140, to: 143, arrows: "to, from", dashes: [10, 10] },
  { from: 141, to: 142, arrows: "to, from", dashes: [10, 10] },
  { from: 141, to: 143, arrows: "to, from", dashes: [10, 10] },
  { from: 144, to: 140, arrows: "to" },
  { from: 144, to: 143, arrows: "to" },

  { from: 21, to: 2, arrows: "to" },
  { from: 22, to: 2, arrows: "to" },
  { from: 21, to: 3, arrows: "to" },
  { from: 2, to: 0, arrows: "to", value: 1 },
  { from: 2, to: 5, arrows: "to, from", value: 1 },
  { from: 2, to: 4, dashes: [10, 10], arrows: "to, from", value: 1 },
  { from: 2, to: 102, arrows: "to" },


  {
      from: 3,
      to: 31,
      dashes: [10, 10],
      arrows: "to",
      title: "yep",
      label: "one way street"
  },
  {
      from: 3,
      to: 32,
      dashes: [10, 10],
      arrows: "to",
      title: "yep",
      label: "one way street"
  },
  { from: 32, to: 2, arrows: "to" },
  { from: 32, to: 5, arrows: "to" },
  { from: 3, to: 2, arrows: "to, from", value: 1 },
  { from: 3, to: 0, arrows: "to", value: 1 },

  { from: 41, to: 4, arrows: "to" },
  { from: 42, to: 4, arrows: "to" },
  { from: 421, to: 42, arrows: "to" },
  { from: 422, to: 42, arrows: "to" },

  { from: 51, to: 5, arrows: "to", dashes: [10, 10] }
]);

var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
  nodes: {
    shape: "box",
    margin: 10,
    widthConstraint: {
      maximum: 200
    },
    shadow: true
  },
  edges: {
    shadow: true,
    smooth: true
  },
  physics: {
    barnesHut: { gravitationalConstant: -20000 },
    stabilization: { iterations: 2500 }
  }
};

var network = new vis.Network(container, data, options);

