# Textfield

- **Package**: `CORE`
- **Type**: components

`Textfield` is a low level component that other more complex controls are based upon.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiTextfield} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfield,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiTextfield
    [(ngModel)]="value"
  />
</tui-textfield>
```

### Example

```html
<tui-textfield [filler]="filler" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [tuiTextfieldCleaner]="textfield.cleaner" [tuiTextfieldSize]="textfield.size" >
<label *ngIf="textfield.size !== 's'" tuiLabel > I am a label </label>
<input placeholder="I am placeholder" tuiTextfield [disabled]="control.disabled" [invalid]="control.invalid" [readOnly]="control.readonly" [(ngModel)]="value" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(ngModel)] | `string` | Value (or reactive control directives) |
| [filler] | `string` | Filler |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield iconEnd="@tui.settings" iconStart="@tui.search" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiTextfield [(ngModel)]="value" />
<tui-icon icon="@tui.bell" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
<label tuiLabel> For long labels it is better to use label outside as it can wrap to multiple lines <tui-textfield #m iconEnd="@tui.settings" iconStart="@tui.search" tuiTextfieldSize="m" >
<input tuiTextfield [placeholder]="m.focused() ? 'I am placeholder' : 'I am a label'" [(ngModel)]="value" />
<tui-icon icon="@tui.bell" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
</label>
<tui-textfield #s iconEnd="@tui.settings" iconStart="@tui.search" tuiTextfieldSize="s" >
<input tuiTextfield [placeholder]="s.focused() ? 'I am placeholder' : 'I am a label'" [(ngModel)]="value" />
<tui-icon icon="@tui.bell" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### States

**Template:**
```html
<tui-textfield iconStart="@tui.search">
<label tuiLabel>Disabled</label>
<input tuiTextfield [disabled]="true" [(ngModel)]="value" />
<tui-icon tuiTooltip="Disabled does not show tooltip" />
</tui-textfield>
<tui-textfield iconStart="@tui.search">
<label tuiLabel>Read-only</label>
<input placeholder="I am placeholder" tuiTextfield [readOnly]="true" [(ngModel)]="value" />
<tui-icon tuiTooltip="Readonly shows tooltip" />
</tui-textfield>
<tui-textfield iconStart="@tui.search">
<label tuiLabel>Invalid</label>
<input placeholder="I am placeholder" tuiTextfield [invalid]="true" [(ngModel)]="value" />
<tui-icon tuiTooltip="Can also follow Angular validation" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 'Test';
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Dropdown

**Template:**
```html
<tui-textfield iconEnd="@tui.search">
<label tuiLabel>Start typing</label>
<input #input placeholder="I am placeholder" tuiTextfield [(ngModel)]="value" />
<tui-icon tuiTooltip="Autocomplete suggestions" />
<ng-container *ngIf="items | tuiFilterByInput as filtered">
<ng-container *ngIf="input.value && filtered.length">
<tui-data-list-wrapper *tuiTextfieldDropdown [items]="filtered" />
</ng-container>
</ng-container>
</tui-textfield>
<tui-textfield>
<label tuiLabel>Select option</label>
<input placeholder="I am placeholder" tuiSelectLike tuiTextfield [(ngModel)]="value" />
<tui-icon tuiTooltip="Fixed choice select" />
<tui-data-list-wrapper *tuiTextfieldDropdown [items]="items" />
</tui-textfield>
<tui-textfield tuiChevron tuiDropdownDirection="top" tuiDropdownLimitWidth="auto" >
<label tuiLabel>Dropdown settings</label>
<input placeholder="I am placeholder" tuiSelectLike tuiTextfield [(ngModel)]="value" />
<tui-icon tuiTooltip="Fixed choice select" />
<tui-data-list-wrapper *tuiTextfieldDropdown [items]="items" />
</tui-textfield>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown, TuiIcon, TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
        TuiFilterByInputPipe,
        TuiIcon,
        TuiSelectLike,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';

    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### InputPassword

**Template:**
```html
<tui-textfield>
<label tuiLabel>Click icon to toggle</label>
<input placeholder="I am placeholder" tuiTextfield type="password" [(ngModel)]="value" />
<tui-icon tuiPassword />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiPassword} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiPassword, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Mask

**Template:**
```html
<tui-textfield [tuiTextfieldCleaner]="false">
<label tuiLabel>Flat angle</label>
<input #input placeholder="3,14" tuiTextfield [maskito]="options" [(ngModel)]="value" />
<button *ngIf="value" iconStart="@tui.x" tabindex="-1" tuiIconButton type="button" (click)="clear()" (pointerdown.zoneless.prevent)="input.focus()" > Clear </button>
</tui-textfield>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {
    maskitoAddOnFocusPlugin,
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    maskitoRemoveOnBlurPlugin,
} from '@maskito/kit';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';

const postfix = ' rad';
const numberOptions = maskitoNumberOptionsGenerator({
    postfix,
    decimalSeparator: ',',
    maximumFractionDigits: 8,
    min: 0,
});

@Component({
    standalone: true,
    imports: [FormsModule, MaskitoDirective, NgIf, TuiButton, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = Math.PI.toFixed(8);
    protected readonly options: MaskitoOptions = {
        ...numberOptions,
        plugins: [
            ...numberOptions.plugins,
            maskitoCaretGuard((value) => [0, value.length - postfix.length]),
            maskitoAddOnFocusPlugin(postfix),
            maskitoRemoveOnBlurPlugin(postfix),
        ],
    };

    protected clear(): void {
        this.value = postfix;
    }
}
```

#### Email

**Template:**
```html
<tui-textfield>
<label tuiLabel>Email</label>
<input placeholder="Enter your email" tuiTextfield type="email" [(ngModel)]="email" />
<tui-icon icon="@tui.mail" />
</tui-textfield>
<tui-textfield>
<label tuiLabel>Email</label>
<input inputmode="email" placeholder="Enter your email" tuiTextfield type="text" [(ngModel)]="email" />
<tui-icon icon="@tui.mail" />
</tui-textfield>
<tui-textfield>
<label tuiLabel>Email</label>
<input autocomplete="new-password" placeholder="Enter your email" tuiTextfield type="email" [(ngModel)]="email" />
<tui-icon icon="@tui.mail" />
</tui-textfield>
<p> Email: <code>{{ email }}</code>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiIcon, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected email = '';
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

`inputmode="email"`
— keyboard hint only, no validation.

`autocomplete="new-password"`
— disables autofill and suggestion pop-ups.

Use
`type="email"`
when you need format validation, or
`inputmode="email"`
with
`type="text"`
if you only want a convenient keyboard layout.
