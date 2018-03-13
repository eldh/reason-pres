'use strict';

var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var List$BsSpectacle = require("bs-spectacle/lib/js/src/components/List.js");
var Notes$BsSpectacle = require("bs-spectacle/lib/js/src/components/Notes.js");
var Slide$BsSpectacle = require("bs-spectacle/lib/js/src/components/Slide.js");
var ListItem$BsSpectacle = require("bs-spectacle/lib/js/src/components/ListItem.js");

function s(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("Introduction");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Slide$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                      ReasonReact.element(/* None */0, /* None */0, Notes$BsSpectacle.make(/* array */[React.createElement("ol", undefined, React.createElement("li", undefined, "*look at slides*"), React.createElement("li", undefined, "Questions"), React.createElement("li", undefined, "20-30 minutes"), React.createElement("li", undefined, "Hope you walk away with the feeling you want to check out Reason"))])),
                      ReasonReact.element(/* None */0, /* None */0, List$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                ReasonReact.element(/* None */0, /* None */0, ListItem$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["What is ReasonML?"])),
                                ReasonReact.element(/* None */0, /* None */0, ListItem$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["What makes Reason exciting?"])),
                                ReasonReact.element(/* None */0, /* None */0, ListItem$BsSpectacle.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["What does the future hold?"]))
                              ]))
                    ]));
    });
  return newrecord;
}

exports.s = s;
exports.component = component;
exports.make = make;
/* component Not a pure module */
