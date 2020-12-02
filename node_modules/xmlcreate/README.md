# xmlcreate #

[![Build Status](https://travis-ci.org/michaelkourlas/node-xmlcreate.svg?branch=master)](https://travis-ci.org/michaelkourlas/node-xmlcreate)
[![npm version](https://badge.fury.io/js/xmlcreate.svg)](https://badge.fury.io/js/xmlcreate)

## Overview ##

xmlcreate is a Node.js module that can be used to easily build XML using a
simple API.

## Features ##

xmlcreate uses a DOM-style API to build XML. Each construct in XML, including
elements, attributes, and even the document itself, is represented as a node
in a tree with a document node at the root.

Each node has a set of properties corresponding to the node's properties in
XML. For example, the element node has a name property, while the CDATA node
has a character data property.

Each node also has a set of children corresponding to the node's value,
children or attributes in XML, depending on the context. For example, the XML
declaration and document type declaration are represented as child nodes of the
root document node, while sub-elements and element attributes are represented
as child nodes of element nodes.

xmlcreate performs some basic validation during tree building to ensure that
the resulting XML is well-formed. Nodes can only have certain types or
quantities of nodes as children, while node properties are checked to ensure
that they do not contain characters disallowed in XML for that node or in
general.

However, xmlcreate does not perform comprehensive validation. For example, it
does not match the tree structure against a schema or confirm that entity
references are valid. You should use a XML parser for this purpose instead.

Once the tree is built, the tree itself or any of its subtrees can be
serialized to text. The formatting of the text is customizable.

## Installation ##

The easiest way to install xmlcreate is using npm:

```
npm install xmlcreate
```

You can also build xmlcreate from source using npm, gulp, and typings: 

```
git clone https://github.com/michaelkourlas/node-xmlcreate.git
npm install
gulp
```

You'll need to install gulp first if you don't have it:

```
npm install -g gulp
```

You can then copy the folder into your node_modules directory.

The `default` target will build the production variant of xmlcreate, run all
tests, and build the documentation.

You can build the production variant without running tests using the target
`prod`. You can also build the development version using the target `dev`. At
the moment, the only difference between the two is that the development version
includes source maps.

## Usage ##

The documentation for the current version is available [here](http://www.kourlas.com/node-xmlcreate/docs/1.0.2/).

You can also build the documentation using gulp:

```
gulp docs
```

## Examples ##

The following example illustrates the basic usage of xmlcreate:

```javascript
var xmlcreate = require("xmlcreate");

var document = xmlcreate.document("html");
document
    .decl({encoding: "UTF-8"})
        .up()
    .dtd("html", "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd",
         "-//W3C//DTD XHTML 1.0 Strict//EN")
        .up()
    .root()
        .attribute("xmlns", "http://www.w3.org/1999/xhtml")
            .up()
        .attribute("xml:lang", "en")
            .up()
        .attribute("lang", "en")
            .up()
        .element("head")
            .element("title")
                .charData("My page title")
                    .up()
                .up()
            .up()
        .element("body")
            .element("h1")
                .charData("Welcome!")
                    .up()
                .up()
            .element("p")
                .charData("This is some text on my website.");

console.log(document.toString({doubleQuotes: true}));
```

This example produces the following XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>My page title</title>
    </head>
    <body>
        <h1>Welcome!</h1>
        <p>This is some text on my website.</p>
    </body>
</html>
```

Additional examples can be found in examples/example.js.

## Tests ##

xmlcreate includes a set of tests to verify core functionality. You can run
the tests using gulp:

```
gulp test
```

The `test` target builds the production variant of xmlcreate before running
the tests. The `test-prod` target does the same thing, while the `test-dev`
target builds the development variant first instead.

## License ##

xmlcreate is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0). 
Please see the LICENSE.md file for more information.
