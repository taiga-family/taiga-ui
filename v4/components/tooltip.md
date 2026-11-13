# Tooltip

- **Package**: `KIT`
- **Type**: components

Component to show icons with a hint by hover

### How to Use (Import)

```ts
import {TuiHint} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTooltip,
    TuiHint,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-icon tuiTooltip="Please don't touch this" />
```

### Example

```html
<tui-icon [size]="size" [tuiHintAppearance]="appearance" [tuiHintDirection]="direction" [tuiTooltip]="content" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiTooltip | `PolymorpheusContent` | Content |
| size | `TuiSizeS` | Size |

### Usage Examples

#### Basic

**Template:**
```html
<p>Component with a static text...</p>
<tui-icon tuiHintDirection="right" tuiTooltip="Supports basic <strong>HTML</strong>" />
<p> ...or any custom HTML or logic with <code>PolymorpheusContent</code> : </p>
<tui-icon tuiHintDirection="bottom-right" [tuiTooltip]="tooltip" />
<p class="wrapping-tooltip"> Example of wrapping tooltip <tui-icon tuiHintDirection="bottom-right" [tuiTooltip]="tooltip" />
</p>
<ng-template #tooltip>
<tui-loader *tuiLet="(isLoading$ | async)! as isLoading" size="s" class="tooltip" [inheritColor]="true" [showLoader]="isLoading" > {{ isLoading ? '' : 'Error 502: Bad Gateway' }} </tui-loader>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiIcon, TuiLoader} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';
import {interval, map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiIcon, TuiLet, TuiLoader, TuiTooltip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
@import '@taiga-ui/core/styles/taiga-ui-local';

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
<tui-avatar size="l" tabindex="0" tuiHintAppearance="dark" tuiHintDirection="right" [style.background]="'❤️' | tuiAutoColor" [tuiHint]="tooltip" > ❤️ </tui-avatar>
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
import {TuiAutoColorPipe, TuiHintDirective, TuiLink} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [RouterLink, TuiAutoColorPipe, TuiAvatar, TuiHintDirective, TuiLink],
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
    background: #3e4757;
    box-shadow: 0 0 0 100rem #3e4757;
    color: var(--tui-background-base);
}
```

#### Repeating template

**Template:**
```html
<ng-template #tooltip>Allowed symbols: ♠ ♣ ♦ ♥</ng-template>
<tui-input tuiTextfieldSize="m" class="input" [tuiTextfieldLabelOutside]="true" />
<tui-icon tuiHintDirection="bottom" [tuiTooltip]="tooltip" />
<tui-input tuiTextfieldSize="m" class="input" [tuiTextfieldLabelOutside]="true" />
<tui-icon appearance="" tuiHintDirection="bottom" tuiTooltip="Set icon color with 'color' after resetting appearance" class="primary" />
<tui-input tuiTextfieldSize="m" class="input" />
<tui-icon tuiHintDirection="right" [tuiTooltip]="tooltip" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiIcon,
        TuiInputModule,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTooltip,
    ],
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
    inline-size: 25rem;
}

.primary {
    color: var(--tui-background-accent-1);
}

.input {
    display: inline-block;
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
    standalone: true,
    imports: [TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiHintOptionsProvider({
            icon: '@tui.camera',
        }),
    ],
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
    standalone: true,
    imports: [TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected visible = false;
}
```
