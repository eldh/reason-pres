'use strict';

var React = require("react");
var History = require("history");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Cite$BsSpectacle = require("bs-spectacle/lib/js/src/components/Cite.js");
var Deck$BsSpectacle = require("bs-spectacle/lib/js/src/components/Deck.js");
var Notes$BsSpectacle = require("bs-spectacle/lib/js/src/components/Notes.js");
var Quote$BsSpectacle = require("bs-spectacle/lib/js/src/components/Quote.js");
var Slide$BsSpectacle = require("bs-spectacle/lib/js/src/components/Slide.js");
var Theme$BsSpectacle = require("bs-spectacle/lib/js/src/Theme.js");
var Heading$BsSpectacle = require("bs-spectacle/lib/js/src/components/Heading.js");
var BlockQuote$BsSpectacle = require("bs-spectacle/lib/js/src/components/BlockQuote.js");

var theme = Theme$BsSpectacle.createTheme(/* record */[
      /* primary */"#000000",
      /* secondary */"white",
      /* tertiary */"#505050",
      /* quarternary */"white"
    ], /* record */[
      /* primary : record */[
        /* name */"-apple-system, BlinkMacSystemFont",
        /* googleFont : false */0,
        /* styles : array */["300"]
      ],
      /* secondary : record */[
        /* name */"SF Mono",
        /* googleFont : true */1,
        /* styles : array */["100"]
      ],
      /* tertiary */Theme$BsSpectacle.simpleFont("monospace")
    ]);

function s(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("Extras");

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
                                ReasonReact.element(/* None */0, /* None */0, Heading$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["secondary"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["A Reason to be excited"]))
                              ])),
                      ReasonReact.element(/* None */0, /* None */0, Slide$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["secondary"], /* Some */["secondary"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["It will be overwritten"], /* None */0, /* None */0, /* Some */[/* array */[/* Slide */0]], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                ReasonReact.element(/* None */0, /* None */0, Notes$BsSpectacle.make(/* array */["Overwriting notes from props"])),
                                ReasonReact.element(/* None */0, /* None */0, BlockQuote$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                          ReasonReact.element(/* None */0, /* None */0, Quote$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["It’s easy, see..."])),
                                          ReasonReact.element(/* None */0, /* None */0, Cite$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Unknown"]))
                                        ]))
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
