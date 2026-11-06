# Tooltip

- **Package**: `KIT`
- **Type**: components

Component to show icons with a hint by hover

### Example

```html
<tui-icon [size]="size" [tuiHintAppearance]="hint.appearance" [tuiHintCentered]="hint.centered" [tuiHintDirection]="hint.direction" [tuiTooltip]="content" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiTooltip] | `PolymorpheusContent` | content of the hint |
| [size] | `TuiSizeS` | size of the icon |

### Usage Examples

#### Basic

**Template:**
```html
<p>Component with a static text...</p>
<tui-icon tuiHintDirection="end" tuiTooltip="Supports basic <strong>HTML</strong>" />
<p> ...or any custom HTML or logic with <code>PolymorpheusContent</code> : </p>
<tui-icon tuiHintDirection="bottom-end" [tuiTooltip]="tooltip" />
<p class="wrapping-tooltip"> Example of wrapping tooltip <tui-icon tuiHintDirection="bottom-end" [tuiTooltip]="tooltip" />
</p>
<ng-template #tooltip> @let isLoading = (isLoading$ | async)!; <tui-loader size="s" class="tooltip" [inheritColor]="true" [loading]="isLoading" > {{ isLoading ? '' : 'Error 502: Bad Gateway' }} </tui-loader>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLoader} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';
import {interval, map, startWith} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiIcon, TuiLoader, TuiTooltip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected isLoading$ = interval(2000).pipe(
        map((i) => Boolean(i % 2)),
        startWith(true),
    );
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.tooltip {
    block-size: 1.25rem;
    min-inline-size: 6.25rem;
}

.wrapping-tooltip {
    inline-size: fit-content;
    max-inline-size: 11rem;
    background: var(--tui-background-base-alt);
    border-radius: 0.5rem;
    line-height: 1.5rem;
    padding: 0.375rem 1.875rem 0.375rem 0.5rem;
    resize: horizontal;
    overflow: auto;

    & [tuiTooltip] {
        position: absolute;
    }
}
```

#### Custom host

**Template:**
```html
<p> Custom host can be set with <a tuiLink [routerLink]="['/tui-hint']" >
<code>tuiHint</code>
</a> directive </p>
<div size="l" tabindex="0" tuiAvatar tuiHintAppearance="floating" tuiHintDirection="end" [style.background]="'❤️' | tuiAutoColor" [tuiHint]="tooltip" > ❤️ </div>
<ng-template #tooltip>
<div> What is <strong>love</strong> ? </div>
<div>Baby don't hurt me</div>
<div>Don't hurt me</div>
<div>No more...</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiLink} from '@taiga-ui/core';
import {TuiAutoColorPipe, TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [RouterLink, TuiAutoColorPipe, TuiAvatar, TuiHint, TuiLink],
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
    background: #3e4757;
    box-shadow: 0 0 0 100rem #3e4757;
    color: var(--tui-background-base);
}
```

#### Repeating template

**Template:**
```html
<ng-template #tooltip>Allowed symbols: ♠ ♣ ♦ ♥</ng-template>
<tui-textfield tuiTextfieldSize="m" class="input" >
<input tuiInput />
</tui-textfield>
<tui-icon tuiHintDirection="bottom" [tuiTooltip]="tooltip" />
<tui-textfield tuiTextfieldSize="m" class="input" >
<input tuiInput />
</tui-textfield>
<tui-icon appearance="" tuiHintDirection="bottom" tuiTooltip="Set icon color with 'color' after resetting appearance" class="primary" />
<tui-textfield tuiTextfieldSize="m" class="input" >
<input tuiInput />
</tui-textfield>
<tui-icon tuiHintDirection="end" [tuiTooltip]="tooltip" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiInput, TuiTooltip],
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
    inline-size: 25rem;
}

.primary {
    color: var(--tui-background-accent-1);
}

.input {
    display: inline-flex;
    inline-size: 18.75rem;
    margin: 0.75rem 0.75rem 0.75rem 0;
    vertical-align: middle;
}
```

#### Options

**Template:**
```html
<p>Modified icon</p>
<tui-icon tuiTooltip="Oh, snap!" />
<p>Modified appearance</p>
<tui-icon appearance="negative" icon="@tui.info" tuiTooltip="Oh, snap!" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiHintOptionsProvider, TuiIcon} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiHintOptionsProvider({icon: '@tui.camera'})],
})
export default class Example {}
```

#### Visibility

**Template:**
```html
<p>Visible: {{ visible }}</p>
<tui-icon tuiHintDirection="bottom" tuiTooltip="I am a hint" (tuiHintVisible)="visible = $event" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected visible = false;
}
```
