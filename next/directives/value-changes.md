# ValueChanges

- **Package**: `CDK`
- **Type**: directives

This directive allows you to access reactive control or container value changes as an output

### Usage Examples

#### Control

**Template:**
```html
<form [formGroup]="form">
<tui-textfield>
<input formControlName="control" tuiInput (tuiValueChanges)="onChanges($event)" />
<label tuiLabel>Value changes on blur</label>
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
import {TuiInput, TuiLabel, TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiInput, TuiLabel, TuiValueChanges],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

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
<input formControlName="name" tuiInput />
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
import {TuiInput, TuiNotificationService} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInput, TuiInputNumber, TuiValueChanges],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly form = new FormGroup({
        name: new FormControl('', {updateOn: 'blur'}),
        age: new FormControl<number | null>(null),
    });

    protected onChanges(value: string): void {
        this.alerts.open(JSON.stringify(value)).subscribe();
    }
}
```
