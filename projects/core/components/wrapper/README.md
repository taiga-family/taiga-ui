Wrapper is organized with 2 layers:

1. element itself, that serves as a background
2. :after pseudo element that serves as overlay

Overlay is click-through and typically used for focus ring

The state is determined with following attributes:

1. `[data-state]` — hovered | pressed | readonly | disabled
2. `[data-mode]` — light | dark
3. `_invalid` — class for invalid state (not applicable to readonly | disabled state)
4. `_focused` — class for focused state (not applicable to disabled state)

This allows you to create custom appearances and set styles
for them based on the interactive state.
