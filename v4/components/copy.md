# Copy

- **Package**: `KIT`
- **Type**: components

This component provides an easy way to copy text content to the clipboard. It displays the content normally and shows a copy button on hover, with visual feedback when content is copied.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiCopy} from '@taiga-ui/kit';
// ...

@Component({
  imports: [
    // ...
    TuiCopy,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-copy>Here you can reproduce copy Taiga UI</tui-copy>
```

### Usage Examples

#### Basic

**Template:**
```html
<p tuiTitle>
<span tuiSubtitle>Bank account</span>
<tui-copy>1234 42069237 88884321</tui-copy>
</p>
<p>
<tui-copy>Very very long text that is so long it will wrap to the next line</tui-copy>
</p>
<tui-copy><span>Very very long text that is so long it will overflow and get truncated</span></tui-copy>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCopy, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 17rem;
}

[tuiSubtitle] {
    color: var(--tui-text-secondary);
}

span {
    display: inline-block;
    max-inline-size: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: text-bottom;
}
```

#### Sizes

**Template:**
```html
<p *ngFor="let font of fonts; let index = index">
<tui-copy [size]="index > 5 ? 'm' : 'l'" [style.font]="'var(--tui-' + font + ')'" [style.white-space]="'nowrap'" > {{ font }} </tui-copy>
</p>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiCopy],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly fonts = [
        'font-heading-1',
        'font-heading-2',
        'font-heading-3',
        'font-heading-4',
        'font-heading-5',
        'font-heading-6',
        'font-text-xl',
        'font-text-l',
        'font-text-m',
        'font-text-s',
        'font-text-xs',
    ];
}
```

#### InputCopy

**Template:**
```html
<tui-textfield>
<label tuiLabel>Click icon to copy</label>
<input placeholder="I am placeholder" tuiTextfield [(ngModel)]="value" />
<tui-icon icon="@tui.copy" tuiCopy />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiCopy, TuiIcon, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### With CopyProcessor

**Template:**
```html
<tui-copy [tuiCopyProcessor]="processor">Taiga UI</tui-copy>
<p> When you copy, the result will have a space prepended and appended: <code>" Taiga UI "</code> . </p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopyProcessor} from '@taiga-ui/cdk';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCopy, TuiCopyProcessor],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly processor = (value: string): string => ` ${value} `;
}
```

#### ButtonCopy

**Template:**
```html
<p>
<span tuiHintDirection="top" [tuiHint]="inkin" > Alexander Inkin </span>
<ng-template #inkin>
<button tuiButtonCopy="Alexander Inkin" type="button" > Name </button>
<button tuiButtonCopy="@a.inkin" type="button" > Login </button>
</ng-template>
</p>
<p>
<span tuiHintAppearance="dark" tuiHintDirection="top" [tuiHint]="sedov" > Roman Sedov </span>
<ng-template #sedov>
<button tuiButtonCopy="Roman Sedov" type="button" > Name </button>
<button tuiButtonCopy="@r.sedov" type="button" > Login </button>
</ng-template>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiCopy, TuiHint],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
