# TSQuery

[![npm version](https://img.shields.io/npm/v/@phenomnomnominal/tsquery.svg)](https://img.shields.io/npm/v/@phenomnomnominal/tsquery.svg)
[![Code Climate](https://codeclimate.com/github/phenomnomnominal/tsquery/badges/gpa.svg)](https://codeclimate.com/github/phenomnomnominal/tsquery)
[![Test Coverage](https://codeclimate.com/github/phenomnomnominal/tsquery/coverage.svg)](https://codeclimate.com/github/phenomnomnominal/tsquery/coverage)

TSQuery is a port of the ESQuery API for TypeScript! TSQuery allows you to query a TypeScript AST for patterns of syntax using a CSS style selector system. 

[Check out the ESQuery demo](https://estools.github.io/esquery/) - note that the demo requires JavaScript code, not TypeScript

[You can also check out the TSQuery Playground](https://tsquery-playground.firebaseapp.com) - Lovingly crafted by [Uri Shaked]( https://github.com/urish)

## Installation

```sh
npm install @phenomnomnominal/tsquery --save-dev
```

## Examples

Say we want to select all instances of an identifier with name "Animal", e.g. the identifier in the `class` declaration, and the identifier in the `extends` declaration.

We would do something like the following:

```ts
import { tsquery } from '@phenomnomnominal/tsquery';

const typescript = `

class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

`;

const ast = tsquery.ast(typescript);
const nodes = tsquery(ast, 'Identifier[name="Animal"]');
console.log(nodes.length); // 2
```

[Try running this code in StackBlitz](https://stackblitz.com/edit/tsquery-examples)!

### Selectors

The following selectors are supported:

* AST node type: `ForStatement` (see [common node types](#common-ast-node-types))
* [wildcard](http://dev.w3.org/csswg/selectors4/#universal-selector): `*`
* [attribute existence](http://dev.w3.org/csswg/selectors4/#attribute-selectors): `[attr]`
* [attribute value](http://dev.w3.org/csswg/selectors4/#attribute-selectors): `[attr="foo"]` or `[attr=123]`
* attribute regex: `[attr=/foo.*/]`
* attribute conditons: `[attr!="foo"]`, `[attr>2]`, `[attr<3]`, `[attr>=2]`, or `[attr<=3]`
* nested attribute: `[attr.level2="foo"]`
* field: `FunctionDeclaration > Identifier.id`
* [First](http://dev.w3.org/csswg/selectors4/#the-first-child-pseudo) or [last](http://dev.w3.org/csswg/selectors4/#the-last-child-pseudo) child: `:first-child` or `:last-child`
* [nth-child](http://dev.w3.org/csswg/selectors4/#the-nth-child-pseudo) (no ax+b support): `:nth-child(2)`
* [nth-last-child](http://dev.w3.org/csswg/selectors4/#the-nth-last-child-pseudo) (no ax+b support): `:nth-last-child(1)`
* [descendant](http://dev.w3.org/csswg/selectors4/#descendant-combinators): `ancestor descendant`
* [child](http://dev.w3.org/csswg/selectors4/#child-combinators): `parent > child`
* [following sibling](http://dev.w3.org/csswg/selectors4/#general-sibling-combinators): `node ~ sibling`
* [adjacent sibling](http://dev.w3.org/csswg/selectors4/#adjacent-sibling-combinators): `node + adjacent`
* [negation](http://dev.w3.org/csswg/selectors4/#negation-pseudo): `:not(ForStatement)`
* [matches-any](http://dev.w3.org/csswg/selectors4/#matches): `:matches([attr] > :first-child, :last-child)`
* [has](https://drafts.csswg.org/selectors-4/#has-pseudo): `IfStatement:has([name="foo"])`
* class of AST node: `:statement`, `:expression`, `:declaration`, `:function`, or `:pattern`

### Common AST node types

* `Identifier` - any identifier (name of a function, class, variable, etc)
* `IfStatement`, `ForStatement`, `WhileStatement`, `DoStatement` - control flow
* `FunctionDeclaration`, `ClassDeclaration`, `ArrowFunction` - declarations
* `VariableStatement` - var, const, let.
* `ImportDeclaration` - any `import` statement
* `StringLiteral` - any string
* `TrueKeyword`, `FalseKeyword`, `NullKeyword`, `AnyKeyword` - various keywords
* `CallExpression` - function call
* `NumericLiteral` - any numeric constant
* `NoSubstitutionTemplateLiteral`, `TemplateExpression` - template strings and expressions
