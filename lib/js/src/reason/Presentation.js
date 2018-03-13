'use strict';

var React = require("react");
var History = require("history");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Deck$BsSpectacle = require("bs-spectacle/lib/js/src/components/Deck.js");
var Notes$BsSpectacle = require("bs-spectacle/lib/js/src/components/Notes.js");
var Slide$BsSpectacle = require("bs-spectacle/lib/js/src/components/Slide.js");
var Theme$BsSpectacle = require("bs-spectacle/lib/js/src/Theme.js");
var Appear$BsSpectacle = require("bs-spectacle/lib/js/src/components/Appear.js");
var Heading$BsSpectacle = require("bs-spectacle/lib/js/src/components/Heading.js");

var theme = Theme$BsSpectacle.createTheme(/* record */[
      /* primary */"#000000",
      /* secondary */"#aaaaaa",
      /* tertiary */"white",
      /* quarternary */"#c43333"
    ], /* record */[
      /* primary : record */[
        /* name */"-apple-system, BlinkMacSystemFont",
        /* googleFont : false */0,
        /* styles : array */["900"]
      ],
      /* secondary : record */[
        /* name */"SF Mono",
        /* googleFont : false */0,
        /* styles : array */["100"]
      ],
      /* tertiary */Theme$BsSpectacle.simpleFont("monospace")
    ]);

function s(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("Presentation");

var history = History.createBrowserHistory({
      basename: "reasonml",
      forceRefresh: false,
      keyLength: 6
    });

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Deck$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* Some */[history], /* None */0, /* Some */[theme], /* Some */[/* array */[/* Slide */0]], /* None */0, /* None */0, /* None */0, /* array */[
                      ReasonReact.element(/* None */0, /* None */0, Slide$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                ReasonReact.element(/* None */0, /* None */0, Notes$BsSpectacle.make(/* array */[React.createElement("ol", undefined, React.createElement("li", undefined, "Clap your hands"), React.createElement("li", undefined, "Say yeah"))])),
                                ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* array */["A Reason "])),
                                ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* array */["to be excited"]))
                              ])),
                      ReasonReact.element(/* None */0, /* None */0, Slide$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                ReasonReact.element(/* None */0, /* None */0, Notes$BsSpectacle.make(/* array */[React.createElement("ol", undefined, React.createElement("li", undefined, "*look at slides*"), React.createElement("li", undefined, "Questions"), React.createElement("li", undefined, "20-30 minutes"), React.createElement("li", undefined, "Hope you walk away with the feeling you want to check out Reason"))])),
                                ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* array */["What is ReasonML?"])),
                                ReasonReact.element(/* None */0, /* None */0, Appear$BsSpectacle.make(/* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* array */["What makes it exciting?"]))])),
                                ReasonReact.element(/* None */0, /* None */0, Appear$BsSpectacle.make(/* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* array */["What does the future hold?"]))]))
                              ])),
                      ReasonReact.element(/* None */0, /* None */0, Slide$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                ReasonReact.element(/* None */0, /* None */0, Notes$BsSpectacle.make(/* array */[React.createElement("ol", undefined, React.createElement("li", undefined, "Hope you walk away with the feeling you want to check out Reason"))])),
                                ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* array */["Jordan Walke at Facebook"])),
                                ReasonReact.element(/* None */0, /* None */0, Appear$BsSpectacle.make(/* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* array */["A new syntax and toolchain built on top of OCaml"]))]))
                              ]))
                    ]));
    });
  return newrecord;
}

exports.theme = theme;
exports.s = s;
exports.component = component;
exports.history = history;
exports.make = make;
/* theme Not a pure module */
