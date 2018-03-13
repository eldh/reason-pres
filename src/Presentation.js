// Import React
import React from 'react'

// Import Spectacle Core tags
import { Text, Deck, Heading, Appear, Notes, Slide, Markdown, List, ListItem, CodePane, Code, Image } from 'spectacle'

import { createBrowserHistory } from 'history'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
// require("normalize.css");

const theme = createTheme(
  {
    primary: '#000000',
    secondary: '#cccccc',
    tertiary: 'white',
    quarternary: '#444444',
  },
  {
    primary: {
      name: '-apple-system, BlinkMacSystemFont',
      googleFont: false,
      styles: ['900'],
    },
    secondary: {
      name: 'SF Mono',
      googleFont: false,
      styles: ['100'],
    },
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        history={createBrowserHistory({
          forceRefresh: false,
          keyLength: 6,
        })}
        theme={theme}
        transition={['slide']}
      >
        <Slide
          notes={
            <Markdown
              source={`
- I'm Andreas Eldh
- I've been building web stuff for... a while
- Last four years mostly React
- Today: ReasonML
          `}
            />
          }
        >
          <Heading caps fit>
            A Reason
          </Heading>
          <Heading caps fit>
            to be excited
          </Heading>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- 20-30 minutes
- Questions whenever!
- How many have heard of Reason?
- How many have used Reason?
- This talk: *slides*
- Goal: Walk away feeling you want to try out Reason
          `}
            />
          }
        >
          <Appear>
            <Heading caps fit>
              What is ReasonML?
            </Heading>
          </Appear>
          <Appear>
            <Heading caps fit>
              What makes it exciting?
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Notes>
            <Markdown
              source={`
- Four years ago I talked at sthlm.js about a new frontend framework by Jordan Walke at Facebook
  - React.js has helped us build large apps with less complexity.
  - React is a programming model that's longing for a better language.
  - Reason was also created by Jordan Walke
`}
            />
          </Notes>
          <Appear>
            <Heading fit>{'𝄆Jordan Walke at Facebook𝄇'}</Heading>
          </Appear>
        </Slide>
        <Slide notes="- We need to break this down.<br> - We'll start from the end.<br> - Specifically targeting js.">
          <Heading>
            <Text textColor="secondary" textSize="50">
              A
            </Text>
            <Text caps textColor="tertiary" textSize="100">
              syntax
            </Text>
            <Text textColor="secondary" textSize="50">
              and
            </Text>
            <Text caps textColor="tertiary" textSize="100">
              toolchain
            </Text>
            <Text textColor="secondary" textSize="50">
              built on top of
            </Text>
            <Text caps textColor="tertiary" textSize="100">
              OCaml
            </Text>
          </Heading>
        </Slide>
        <Slide>
          <Image src="./architecture.jpg" />
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- OCaml is the result of a lot of research into compilers and type system
- Multi-paradigm: OO, inperative & functional
- Popular in financial sector
- Flow, Hack, WebAssembly interpreter are built in OCaml
            `}
            />
          }
        >
          <Heading>OCaml</Heading>
          <List>
            <Appear>
              <ListItem textSize="45">Invented in 1996</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Multi-paradigm. Focus on functional</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Strict, strong, sound, inferred types</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Garbage collected</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading fit>Toolchain</Heading>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Compiles OCaml to Javascript
- Lightning fast, single-digit milliseconds to recompile, ~300ml to compile full app. 
  - Finished before node has started
- Comes with bindings to javascript api:s
  - Decorator API for writing bindings to javascript
- Produces very readable, optimized javascript
              `}
            />
          }
        >
          <Heading>Bucklescript</Heading>
          <List>
            <Appear>
              <ListItem textSize="45">Compiles OCaml to Javascript</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Lightning fast</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Bindings to javascript</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Outputs optimized, readable javascript</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Package manager: npm
    - You can use all js packages with reason
    - Bindings are easy to write
- refmt: prettier for reason
`}
            />
          }
        >
          <Appear>
            <Heading>npm</Heading>
          </Appear>
          <Appear>
            <Heading>refmt</Heading>
          </Appear>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Immutable by default
- Opt-in mutation (managed refs)
- Auto-curry
- Extendable with "decorators"
- No null or undefined is actually A REALLY GREAT THING
- JS interop is great
`}
            />
          }
        >
          <Heading textColor="quarternary">Syntax</Heading>
          <Appear>
            <Heading>Immutable</Heading>
          </Appear>
          <Appear>
            <Heading>Extendable</Heading>
          </Appear>
          <Appear>
            <Heading fit>No null or undefined</Heading>
          </Appear>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Syntax
- "es2030"
- Reads like javascript
- No automatic type casting
              `}
            />
          }
        >
          <CodePane
            lang="reason"
            source={`let rec fact = x => (x <= 1) ? 1 : x * fact(x - 1); 
/* let fact: (int) -> int = <fun>; */
fact(5); 
/* - : int = 120 */
`}
            textSize="25"
          />
          <br />
          <CodePane
            lang="javascript"
            source={`let fact = x => (x <= 1) ? 1 : x * fact(x - 1);
fact(5); 
// 120
`}
            textSize="25"
          />
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Syntax
- "es2030"
- Reads like javascript
- No automatic type casting
              `}
            />
          }
        >
          <CodePane
            lang="reason"
            source={`let square = x => x * x; 
/* let square: (int) => int = <fun>; */
square(3); 
/* - : int = 9 */
square(0.5);
/* Error: This expression has type float but an expression was expected of type int */
let square = x => x *. x;
/* let square: (float) => float = <fun>; */
square(0.5);
/* - : float = 0.25 */
`}
            textSize="25"
          />
          <br />
          <CodePane
            lang="javascript"
            source={`let square = x => x * x;
square(3); 
// 9
square(0.5); 
// 0.25
`}
            textSize="25"
          />
        </Slide>
        <Slide notes={`Allows for incremental learning & codebase conversion`}>
          <Heading>JS Interop</Heading>
          <CodePane
            lang="reason"
            source={`
[@bs.val] [@bs.scope "Math"]
external jsRandom : unit => float = "random";
jsRandom();
/* - : float = 0.9138003876174057 */
          `}
            textSize="30"
          />
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- No imports
- Each file is a module
- Generated types from graphql
- Enforced switch exhaustion
                      `}
            />
          }
        >
          <Heading caps fit>
            Demo
          </Heading>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Go back to thinking about Javascript
- Javascript is a great platform but it's not a great language
- Compare to Typescript and Flow, but that's  is selling it short
  - Much better type system
  - Compile to anything: assembly, bytecode, javascript, (WebAssembly coming)...
- Two main things for me
`}
            />
          }
        >
          <Heading caps fit>
            Why is this exciting?
          </Heading>
        </Slide>
        <Slide>
          <Code bold textColor="tertiary" textSize="30">
            {"Array(16).join('wat' - 1) + ' Batman!'"}
          </Code>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Go back to thinking about Javascript
- Javascript is a great platform but it's not a great language
- Compare to Typescript and Flow, but that's  is selling it short
  - Much better type system
  - Compile to anything: assembly, bytecode, javascript, (WebAssembly coming)...
- Two main things for me
`}
            />
          }
        >
          <Image src="./javascript-error-graph.png" />
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Reason will evolve a lot
  - Javascript will be Javascript
  - Developer experience, error messages etc, is really good, going to be great
- Ecosystem is still in its infancy
  - Much like React in the beginning
  - Patterns are still emerging
        `}
            />
          }
        >
          <Heading caps fit>
            Future is bright
          </Heading>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Rich Hickey, creator of Clojure, held a talk named "Simple made easy"
  - I highly encourage you to watch it if you haven't.
  - Makes the case for prioritizing simple, as in "not complex", instead of easy, as in "convinient".
  - Javascript is easy, convenient
  - OCaml ticks a lot of the boxes for "simple", but not easy for most
  - Reason is simple made easy
        `}
            />
          }
        >
          <Heading caps fit>
            Simple made easy
          </Heading>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- ReasonML is a great language that works well together with Javascript
- Incremental learning & codebase conversion
        `}
            />
          }
        >
          <Heading caps>Summary</Heading>
          <List>
            <Appear>
              <ListItem textSize="45">Great language with great tooling</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Integrates with existing Javascript code</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Target any environment</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Helps you produce less complex systems</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          notes={
            <Markdown
              source={`
- Not a lot of production use yet, but growing community
  - Facebook Messenger
  - Cross-platform games (Gravitron)
  - React Native apps
 `}
            />
          }
        >
          <Heading caps fit>
            Questions?
          </Heading>
        </Slide>
        <Slide>
          <Heading caps fit>
            Thank you!
          </Heading>
          <Appear>
            <Heading textColor="secondary">@eldh</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading caps fit>
            Getting started
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="45">reasonml.github.io</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">reason.chat</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">Discord channel</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="45">ReasonTown podcast</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    )
  }
}
