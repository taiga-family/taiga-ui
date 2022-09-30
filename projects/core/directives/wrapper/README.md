Wrapper is organized with 2 layers:

1. element itself, that serves as a background
2. `:after` pseudo element that serves as overlay

Overlay is click-through and typically used for focus ring

To apply styles use following mixins from

```less
@import '~@taiga-ui/core/styles/taiga-ui-local';
```

1. `.wrapper-hover(@ruleset)`
2. `.wrapper-active(@ruleset)`
3. `.wrapper-readonly(@ruleset)`
4. `.wrapper-disabled(@ruleset)`
5. `.wrapper-focus(@ruleset)`
6. `.wrapper-invalid(@ruleset)`

Use `[data-mode='onDark']/[data-mode='onLight']` selectors to account for _mode_
