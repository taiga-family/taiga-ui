# ValueChanges

- **Package**: `CDK`
- **Type**: directives

This directive allows you to access reactive control or container value changes as an output

### How to Use (Import)

```ts
import {TuiValueChanges} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiValueChanges,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<input
  [formControl]="control"
  (tuiValueChanges)="onChanges($event)"
/>
```

### Usage Examples

#### Control

**Template:**
```html
<form [formGroup]="form">
<tui-input formControlName="control" (tuiValueChanges)="onChanges($event)" > Value changes on blur </tui-input>
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValueChanges} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputModule, TuiValueChanges],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly form = new FormGroup({
        control: new FormControl('', {updateOn: 'blur'}),
    });

    protected onChanges(value: string): void {
        this.alerts.open(value).subscribe();
    }
}
```

#### Container

**Template:**
```html
<form [formGroup]="form" (tuiValueChanges)="onChanges($event)" >
<tui-textfield>
<label tuiLabel>Value changes on blur</label>
<input formControlName="name" tuiTextfield />
</tui-textfield>
<tui-textfield class="tui-space_top-4">
<label tuiLabel>Value changes on edit</label>
<input formControlName="age" tuiInputNumber [step]="1" />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValueChanges} from '@taiga-ui/cdk';
import {TuiAlertService, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield, TuiValueChanges],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly form = new FormGroup({
        name: new FormControl('', {updateOn: 'blur'}),
        age: new FormControl<number | null>(null),
    });

    protected onChanges(value: string): void {
        this.alerts.open(JSON.stringify(value)).subscribe();
    }
}
```
