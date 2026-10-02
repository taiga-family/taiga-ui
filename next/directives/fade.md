# Fade

- **Package**: `KIT`
- **Type**: directives

Directive that uses masking to fade out overflown content

### Example

```html
<div tuiFade class="fade" [tuiFadeHeight]="lineHeight" [tuiFadeOffset]="offset" [tuiFadeSize]="size" > I am a very long text with <code>white-space: nowrap</code> that fades </div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiFade] | `TuiOrientation` | orientation of the fade |
| [tuiFadeHeight] | `string` | line height (required for multiline text fade) |
| [tuiFadeOffset] | `string` | offset from the edge for the fade to start |
| [tuiFadeSize] | `string` | size of the fade |

### Usage Examples

#### Basic

Single scrollable line with automatic fade on the edges.

**Template:**
```html
<div tuiFade class="fade" > I am a very long text that overflows with a single line fade </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiFade],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.fade {
    .scrollbar-hidden();

    inline-size: 20rem;
    block-size: 2rem;
    font: var(--tui-typography-heading-h6);
    white-space: nowrap;
    overflow: auto;
}
```

#### Multiline

Fade on the last line. When applying custom line height, keep in mind that accessible font scaling can be applied. You can account for it using `--tui-font-offset` CSS variable or `TUI_FONT_OFFSET` signal DI token.

**Template:**
```html
<div class="wrapper">
<div tuiFade tuiFadeHeight="calc(1.25rem + var(--tui-font-offset))" tuiFadeOffset="4.5rem" class="fade" [class.fade_expanded]="expanded" > Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons. @if (expanded) { <button tuiLink type="button" (click)="toggle()" > Show less </button> } </div>
<button tuiLink type="button" class="expand" [class.expand_hidden]="expanded" (click)="toggle()" > Read more </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiFade, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected expanded = false;

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.wrapper {
    position: relative;
}

.fade {
    .transition(max-block-size);

    max-block-size: calc(3 * (1.25rem + var(--tui-font-offset)));

    &_expanded {
        max-block-size: 15rem;
    }
}

.expand {
    .transition(opacity, visibility);

    position: absolute;
    inset-block-end: 0;
    inset-inline-end: 0;
    transition-delay: var(--tui-duration);

    &_hidden {
        opacity: 0;
        visibility: hidden;
    }
}
```

#### Vertical

Scrollable vertical container with automatic fade on the edges.

**Template:**
```html
<div tuiFade="vertical" tuiScrollRef class="fade" >
<tui-scroll-controls /> Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons. </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiFade, TuiScrollControls, TuiScrollRef],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.fade {
    display: flex;
    inline-size: 17rem;
    block-size: 10rem;
    font: var(--tui-typography-body-l);
    overflow: auto;
}
```

#### Hyphens

In multiline mode you can use hyphen CSS rule to avoid long words wrapping to the next line entirely which can cause fade effect to not be visible at all due to last visible line becoming too short.

**Template:**
```html
<div tuiNotification> Use CSS hyphens and declare <code>lang</code> on your <code>html</code> tag so that you don't get a situation where a whole long word is shifted to the new line and you observe no fade effect </div>
<p tuiFade tuiFadeHeight="1.25rem" tuiFadeOffset="4.5rem" > Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the pneumonoultramicroscopicsilicovolcanoconiosis Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons. </p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiFade, TuiNotification],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiFade] {
    inline-size: 25rem;
    block-size: 2.5rem;
    hyphens: auto;
}
```

#### InputChip

**Template:**
```html
<tui-textfield multi tuiTextfieldSize="s" >
<input placeholder="Enter" tuiInputChip [unique]="false" [(ngModel)]="value" />
<tui-input-chip *tuiItem />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = ['3', '4', '5', 'Compartmentalization'];
}
```

**LESS:**
```less
[tuiChip] {
    max-inline-size: 6.25rem;
}
```
