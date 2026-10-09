# Copy

- **Package**: `KIT`
- **Type**: components

This component provides an easy way to copy text content to the clipboard. It displays the content normally and shows a copy button on hover, with visual feedback when content is copied.

### Usage Examples

#### Basic

Using component in various scenarios.

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
    imports: [TuiCopy, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

Using size option for various font size cases.

**Template:**
```html
@for (font of fonts | keyvalue: orderBy; track font) { <p>
<tui-copy [size]="$index > 5 ? 'm' : 'l'" [style.font]="`var(${font.value})`" [style.white-space]="'nowrap'" > {{ font.key }} </tui-copy>
</p> }
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    imports: [KeyValuePipe, TuiCopy],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly fonts = {
        'heading-h1': '--tui-typography-heading-h1',
        'heading-h2': '--tui-typography-heading-h2',
        'heading-h3': '--tui-typography-heading-h3',
        'heading-h4': '--tui-typography-heading-h4',
        'heading-h5': '--tui-typography-heading-h5',
        'heading-h6': '--tui-typography-heading-h6',
        'body-l': '--tui-typography-body-l',
        'body-m': '--tui-typography-body-m',
        'body-s': '--tui-typography-body-s',
        'body-xs': '--tui-typography-body-xs',
        'ui-l': '--tui-typography-ui-l',
        'ui-m': '--tui-typography-ui-m',
        'ui-s': '--tui-typography-ui-s',
        'ui-xs': '--tui-typography-ui-xs',
    } as const;

    protected orderBy(): number {
        return 0;
    }
}
```

#### InputCopy

Using `tui-icon[tuiCopy]` inside a textfield

**Template:**
```html
<tui-textfield>
<label tuiLabel>Click icon to copy</label>
<input placeholder="I am placeholder" tuiInput [(ngModel)]="value" />
<tui-icon tuiCopy />
</tui-textfield>
<tui-textfield multi [rows]="1" [style.margin-block-start.rem]="1" [style.max-inline-size.rem]="17" >
<input tuiInputChip [(ngModel)]="multiValue" />
<tui-input-chip *tuiItem />
<tui-icon tuiCopy />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiCopy, TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCopy, TuiIcon, TuiInput, TuiInputChip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
    protected multiValue = ['I', 'love', 'Taiga UI'];
}
```

#### With CopyProcessor

Dedicated component for copying values inside tooltips

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
<button tuiButtonCopy="Alexander Inkin" tuiTheme="dark" > Name </button>
<button tuiButtonCopy="@a.inkin" tuiTheme="dark" > Login </button>
</ng-template>
</p>
<p>
<span tuiHintAppearance="floating" tuiHintDirection="top" [tuiHint]="sedov" > Roman Sedov </span>
<ng-template #sedov>
<button tuiButtonCopy="Roman Sedov">Name</button>
<button tuiButtonCopy="@r.sedov">Login</button>
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
    imports: [FormsModule, TuiCopy, TuiHint],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
