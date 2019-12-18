
var
    GREEN = "rgba(0,255,150,0.8)",
    RED = "rgba(255,50,0,0.8)",
    BLUE = "rgba(0,150,255,0.8)",
    ORANGE = "orange";

// create an array with nodes
// 0: Statistical Software
// 1: Testing
//
var nodes = new vis.DataSet([
  { id: 0,
    group: 0,
    shape: "circle",
    label: "Statistical Software",
    title: "Statistical software, \"refers to any package that<br>implements statistical/machine learning algorithms,<br>even if that is not the primary purpose of the package\"<br>(Pharmar White Paper, 2019)",
    URL: "https://github.com/pharmaR/white_paper"
  },
  {
    id: 1,
    group: 1,
    shape: "circle",
    label: "Statistical Packages",
    title: "\"Statistical packages present a greater degree<br>of risk than Non-statistical packages.\"<br>(Pharmar White Paper, 2019)",
    URL: "https://github.com/pharmaR/white_paper"
  },
  {
    id: 2,
    group: 2,
    shape: "box",
    label: "Testing",
    title: "\"The more exposure a package has had to the user<br>community, the more ad-hoc testing it has been<br>exposed to.\" (Pharmar White Paper, 2019)",
    URL: "https://github.com/pharmaR/white_paper"
  }
]);

// ********* EDGES ********
// dash patterns are consecutive [on, off] [on, off]
var edges = new vis.DataSet([
  { from: 1, to: 0, arrows: "to", value: 1 },
  { from: 2, to: 0, arrows: "to", value: 1 }
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
network.on("click", function(params) {
    var node = nodes.get(params.nodes[0]);
    if (typeof node.URL != 'undefined') {
        window.open(node.URL,'_blank');
    }
});


