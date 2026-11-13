# Breakpoints

- **Type**: markup

Breakpoints are widths that determine how your responsive layout behaves across different viewport sizes.

Our library includes the following breakpoints:

Copy

## Usage

- Add import to your file with styles (SCSS file also has the same variables):

```less
@import '@taiga-ui/styles/utils.less';
```

- Use breakpoints inside media queries:

```less
.image {
  width: 300px;

  @media @tui-mobile {
    width: 100%;
  }
}
```

### Usage Examples

#### Usage

**Template:**
```html
<div class="wrapper"> @for (breakpoint of breakpoints; track breakpoint) { <span [class]="`item ${breakpoint}`">&#64;{{ breakpoint }}</span> } </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected breakpoints = [
        'tui-mobile',
        'tui-mobile-min',
        'tui-mobile-interval',
        'tui-tablet',
        'tui-tablet-min',
        'tui-tablet-interval',
        'tui-desktop',
        'tui-desktop-min',
        'tui-desktop-interval',
        'tui-desktop-lg-min',
    ] as const;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.wrapper {
    display: grid;
    inline-size: 100%;
    gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    font: var(--tui-typography-body-xs);

    @media @tui-desktop-min {
        font: var(--tui-typography-body-s);
        inline-size: 31.25rem;
    }
}

.item {
    display: flex;
    block-size: 6.25rem;
    background: var(--tui-background-neutral-1);
    color: var(--tui-text-primary);
    justify-content: center;
    align-items: center;
}

@breakpoints: tui-mobile, tui-mobile-min, tui-mobile-interval, tui-tablet, tui-tablet-min, tui-tablet-interval,
    tui-desktop, tui-desktop-min, tui-desktop-interval, tui-desktop-lg-min;

each(@breakpoints, {
    .@{value} {
        @media @@value {
            background: var(--tui-background-accent-1);
            color: var(--tui-text-primary-on-accent-1);
        }
    }
});

.tui-desktop-lg-min {
    grid-column: span 3;
}
```
