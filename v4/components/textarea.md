# Textarea

- **Package**: `KIT`
- **Type**: components

`Textarea` uses Textfield to create a multi-line string input.

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiTextarea,
  ],
})
export class Example {
  value = 'Value';
}
```

### How to Use (Template)

```html
<tui-textfield>
  <label tuiLabel>Label</label>
  <textarea
    tuiTextarea
    [(ngModel)]="value"
  ></textarea>
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<label *ngIf="textfieldDoc.size !== 's'" tuiLabel > Label </label>
<textarea placeholder="Placeholder" tuiTextarea [formControl]="control" [invalid]="controlDoc.invalid" [max]="max" [min]="min" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" ></textarea>
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | Minimum number of rows in height |
| [max] | `number` | Maximum number of rows before scroll appears |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<label tuiLabel>Large with label inside</label>
<textarea placeholder="Placeholder" tuiTextarea ></textarea>
</tui-textfield>
<tui-textfield tuiTextfieldSize="m">
<label tuiLabel>Medium with label inside</label>
<textarea placeholder="Placeholder" tuiTextarea ></textarea>
</tui-textfield>
<label tuiLabel> Large with label outside <tui-textfield>
<textarea placeholder="Placeholder" tuiTextarea ></textarea>
</tui-textfield>
</label>
<label tuiLabel> Medium with label outside <tui-textfield tuiTextfieldSize="m">
<textarea placeholder="Placeholder" tuiTextarea ></textarea>
</tui-textfield>
</label>
<label tuiLabel> Small with label outside <tui-textfield tuiTextfieldSize="s">
<textarea placeholder="Placeholder" tuiTextarea ></textarea>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiTextarea, TuiTextfield],
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Limit

**Template:**
```html
<tui-textfield [style.margin-block-end.rem]="1">
<label tuiLabel>Limit</label>
<textarea placeholder="Placeholder" tuiTextarea [formControl]="control" [limit]="100" [max]="6" [min]="3" ></textarea>
</tui-textfield>
<button tuiButton type="button" (click)="control.setValue('Short text')" > Programmatically update </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea, TuiTextareaLimit} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiTextarea,
        TuiTextareaLimit,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected control = new FormControl(
        'Adding [limit] directive allows you to display a counter of symbols inside the textarea, highlight excessive characters in red and also automatically add Validators.maxlength(x) validator',
    );

    constructor() {
        this.control.markAsTouched();
    }
}
```

#### Custom highlight

**Template:**
```html
<tui-textfield>
<label tuiLabel>Custom highlight</label>
<textarea placeholder="Type 'width' or 'height'" tuiTextarea [content]="highlight" [(ngModel)]="value" ></textarea>
</tui-textfield>
<ng-template #highlight let-text >
<span [innerHTML]="process(text)"></span>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea, tuiTextareaOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextarea, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiTextareaOptionsProvider({
            min: 4,
            max: 4,
        }),
    ],
})
export default class Example {
    protected value =
        'You can implement your own highlight, just make sure you do not alter font width or height';

    protected process(text: string): string {
        return text
            .replaceAll('width', '<span class="width">width</span>')
            .replaceAll('height', '<span class="height">height</span>');
    }
}
```

**LESS:**
```less
:host {
    ::ng-deep .width {
        background: var(--tui-status-info-pale);
    }

    ::ng-deep .height {
        background: var(--tui-status-positive-pale);
    }
}
```

#### Icons

**Template:**
```html
<tui-textfield iconStart="@tui.pencil">
<label tuiLabel>Your best thought</label>
<textarea placeholder="Write something..." required tuiTextarea [max]="4" [min]="4" [(ngModel)]="value" ></textarea>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextarea, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```
