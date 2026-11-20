# Switch

- **Package**: `KIT`
- **Type**: components

A switch component that is able to imitate native control on mobile platforms. Use `--tui-background-accent-2` CSS variable to customize color of native control emulation

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiSwitch} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSwitch,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<input
  tuiSwitch
  type="checkbox"
  [(ngModel)]="value"
/>
```

### Usage Examples

#### Platforms

**Template:**
```html
<div *ngFor="let platform of platforms; let first = first" class="wrapper" [class.wrapper_web]="platform === 'web'" [tuiPlatform]="platform" >
<input tuiSwitch type="checkbox" [ngModel]="true" [showIcons]="first" [size]="getSize(first)" />
<input tuiSwitch type="checkbox" [disabled]="true" [ngModel]="true" [showIcons]="first" [size]="getSize(first)" />
<input tuiSwitch type="checkbox" [showIcons]="first" [size]="getSize(first)" />
<input tuiSwitch type="checkbox" [disabled]="true" [ngModel]="false" [showIcons]="first" [size]="getSize(first)" />
<input tuiSwitch type="checkbox" [formControl]="invalidTrue" [showIcons]="first" [size]="getSize(first)" />
<input tuiSwitch type="checkbox" [formControl]="invalidFalse" [showIcons]="first" [size]="getSize(first)" />
</div>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component, type OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {type TuiSizeS} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, NgFor, ReactiveFormsModule, TuiPlatform, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
    protected readonly platforms: ReadonlyArray<'android' | 'ios' | 'web'> = [
        'web',
        'web',
        'android',
        'ios',
    ];

    protected readonly invalidTrue = new FormControl(true, () => ({invalid: true}));
    protected readonly invalidFalse = new FormControl(false, () => ({invalid: true}));

    public ngOnInit(): void {
        this.invalidTrue.markAsTouched();
        this.invalidFalse.markAsTouched();
    }

    protected getSize(first: boolean): TuiSizeS {
        return first ? 'm' : 's';
    }
}
```

**LESS:**
```less
:host {
    display: flex;

    --tui-background-accent-2: var(--tui-status-info);
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    gap: 1rem;
    padding: 1rem;

    &_web {
        border: 1px solid var(--tui-border-normal);
        border-inline-start-width: 0;

        &:first-child {
            border-inline-end-width: 0;
            border-inline-start-width: 1px;
        }
    }
}
```

#### Same color

**Template:**
```html
<input tuiSwitch type="checkbox" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiSwitchOptionsProvider({showIcons: false, appearance: () => 'primary'}),
    ],
})
export default class Example {
    protected value = false;
}
```

**LESS:**
```less
:host {
    display: flex;

    --tui-background-accent-2: var(--tui-status-info);
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    gap: 1rem;
    padding: 1rem;

    &_web {
        border: 1px solid var(--tui-border-normal);
        border-inline-start-width: 0;

        &:first-child {
            border-inline-end-width: 0;
            border-inline-start-width: 1px;
        }
    }
}
```

#### Customization

**Template:**
```html
<input tuiSwitch type="checkbox" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiSwitchOptionsProvider({
            appearance: (el) => (el.checked ? 'accent' : 'secondary'),
        }),
    ],
})
export default class Example {
    protected value = false;
}
```
