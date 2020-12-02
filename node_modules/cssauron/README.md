# cssauron

build a matching function in CSS for any nested object structure!

```javascript
var language = require('cssauron')({
    tag: 'tagName'
  , contents: 'innerText'
  , id: 'id'
  , class: 'className'
  , parent: 'parentNode'
  , children: 'childNodes'
  , attr: 'getAttribute(attr)'
})

var selector = language('body > #header .logo')
  , element = document.getElementsByClassName('logo')[0]

if(selector(element)) {
  // element matches selector
} else {
  // element does not match selector
}
```

It's easy to use with your favorite nested tree structures!
Delicious with HTML! Digestable with JSON!

| HTML | JSON | GLSL AST | JS AST (Esprima) |
|------|------|----------|------------------------|
| [cssauron-html](http://npm.im/cssauron-html) | [cssauron-json](http://npm.im/cssauron-json) | [cssauron-glsl](http://npm.im/cssauron-glsl) | [cssauron-falafel](http://npm.im/cssauron-falafel) |


# API

### require('cssauron')(options) -> selector factory

Import `cssauron` and configure it for the nested object structure you'll
want to match against.

#### options

`options` are an object hash of lookup type to string attribute or `function(node)` lookups for queried
nodes. You only need to provide the configuration necessary for the selectors you're planning on creating.
(If you're not going to use `#id` lookups, there's no need to provide the `id` lookup in your options.)

* `tag`: Extract tag information from a node for `div` style selectors.
* `contents`: Extract text information from a node, for `:contains(xxx)` selectors.
* `id`: Extract id for `#my_sweet_id` selectors.
* `class`: `.class_name`
* `parent`: Used to traverse up from the current node, for composite selectors `body #wrapper`, `body > #wrapper`.
* `children`: Used to traverse from a parent to its children for sibling selectors `div + span`, `a ~ p`.
* `attr`: Used to extract attribute information, for `[attr=thing]` style selectors.

### selector_factory('some selector') -> match function

Compiles a matching function.

### match(node) -> false | node | [subjects, ...]

Returns false if the provided node does not match the selector. Returns truthy if the provided
node *does* match. Exact return value is determined by the selector, based on
the [CSS4 subject selector spec](http://dev.w3.org/csswg/selectors4/#subject): if only
a single node is matched, only that node is returned. If multiple subjects are matched,
a deduplicated array of those subjects are returned.

For example, given the following HTML (and `cssauron-html`):

```html
<div id="gary-busey">
    <p>
        <span class="jake-busey">
        </span>
    </p>
</div>
```

Checking the following selectors against the `span.jake-busey` element yields:

 - `#gary-busey`: `false`, no match.
 - `#gary-busey *`: `span.jake-busey`, a single match.
 - `!#gary-busey *`: `div#gary-busey`, a single match using the `!` subject selector.
 - `#gary-busey *, p span`: `span.jake-busey`, a single match, though both selectors match.
 - `#gary-busey !* !*, !p > !span`: `[p, span.jake-busey]`, two matches.

## Supported pseudoclasses 

 - `:first-child`
 - `:last-child`
 - `:nth-child`
 - `:empty`
 - `:root`
 - `:contains(text)`
 - `:any(selector, selector, selector)`

## Supported attribute lookups

 - `[attr=value]`: Exact match
 - `[attr]`: Attribute exists and is not false-y.
 - `[attr$=value]`: Attribute ends with value
 - `[attr^=value]`: Attribute starts with value
 - `[attr*=value]`: Attribute contains value
 - `[attr~=value]`: Attribute, split by whitespace, contains value.
 - `[attr|=value]`: Attribute, split by `-`, contains value.


