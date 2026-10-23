# Fade

- **Package**: `KIT`
- **Type**: directives

Directive that uses masking to fade out overflown content

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiFade} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiFade,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiFade>
  <!-- long text here -->
</div>
```

### Example

```html
<div tuiFade class="fade" [tuiFadeHeight]="lineHeight" [tuiFadeOffset]="offset" [tuiFadeSize]="size" > I am a very long text with <code>white-space: nowrap</code> that fades </div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiFade | `TuiOrientation` | Orientation of the fade |
| tuiFadeHeight | `string` | Line height (required for multiline text fade) |
| tuiFadeOffset | `string` | Offset from the edge for the fade to start |
| tuiFadeSize | `string` | Size of the fade |

### Usage Examples

#### Basic

**Template:**
```html
<tui-scrollbar class="scrollbar">
<div tuiFade tuiScrollable class="fade" > I am a very long text that overflows with a single line fade </div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFade, TuiScrollable, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.scrollbar {
    inline-size: 20rem;
}

.fade {
    .scrollbar-hidden();

    inline-size: 100%;
    block-size: 2rem;
    font: var(--tui-font-heading-6);
    white-space: nowrap;
    overflow: auto;
}
```

#### Multiline

**Template:**
```html
<div class="wrapper">
<div tuiFade tuiFadeHeight="1.25rem" tuiFadeOffset="4.5rem" class="fade" [class.fade_expanded]="expanded" > Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons. <button *ngIf="expanded" tuiLink type="button" (click)="toggle()" > Show less </button>
</div>
<button tuiLink type="button" class="expand" [class.expand_hidden]="expanded" (click)="toggle()" > Read more </button>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgIf, TuiFade, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
@import '@taiga-ui/core/styles/taiga-ui-local';

.wrapper {
    position: relative;
}

.fade {
    .transition(height);

    block-size: 3.75rem;

    &_expanded {
        block-size: 10rem;
    }
}

.expand {
    .transition(opacity, visibility);

    position: absolute;
    bottom: 0;
    right: 0;
    transition-delay: var(--tui-duration);

    &_hidden {
        opacity: 0;
        visibility: hidden;
    }
}
```

#### Vertical

**Template:**
```html
<tui-scrollbar>
<div tuiFade="vertical" tuiScrollable class="fade" > Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons. </div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollable, TuiScrollbar} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFade, TuiScrollable, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.fade {
    .scrollbar-hidden();

    inline-size: 17rem;
    block-size: 10rem;
    font: var(--tui-font-text-l);
    overflow: auto;
}
```

#### Hyphens

**Template:**
```html
<tui-notification> Use CSS hyphens and declare <code>lang</code> on your <code>html</code> tag so that you don't get a situation where a whole long word is shifted to the new line and you observe no fade effect </tui-notification>
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
    standalone: true,
    imports: [TuiFade, TuiNotification],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = ['3', '4', '5', 'Compartmentalization'];
}
```

**LESS:**
```less
[tuiChip] {
    max-inline-size: 6.25rem;
}
```
