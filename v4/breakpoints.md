# Breakpoints

- **Package**: `CORE`
- **Type**: markup

Breakpoints are widths that determine how your responsive layout behaves across different viewport sizes. Our library includes the following breakpoints: column Copy breakpoint.name

```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';
```

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
<div class="wrapper">
<span *ngFor="let breakpoint of breakpoints" [class]="'item ' + breakpoint" > &#64;{{ breakpoint }} </span>
</div>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
@import '@taiga-ui/core/styles/taiga-ui-local';

.wrapper {
    display: grid;
    inline-size: 100%;
    gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    font: var(--tui-font-text-xs);

    @media @tui-desktop-min {
        font: var(--tui-font-text-s);
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

- Add import to your file with styles:

- Use breakpoints inside media queries:
