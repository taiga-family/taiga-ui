# Validator

- **Package**: `CDK`
- **Type**: directives

`tuiValidator` allows set validators for form control on the fly

### How to Use (Import)

```ts
import {TuiValidator} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiValidator,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-input
  formControlName="control"
  [tuiValidator]="validator"
></tui-input>
```

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="group">
<tui-input formControlName="name">Name</tui-input>
<tui-textfield tuiChevron class="tui-space_vertical-3" >
<label tuiLabel>Connection</label>
<input tuiSelect [ngModelOptions]="{standalone: true}" [(ngModel)]="type" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items" />
</tui-textfield>
<tui-input *ngIf="type === items[0]!; else phone" formControlName="contact" [tuiValidator]="validator" > Contact </tui-input>
<ng-template #phone>
<tui-input-phone formControlName="contact">Contact</tui-input-phone>
</ng-template>
</form>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidator} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiInputModule, TuiInputPhoneModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputModule,
        TuiInputPhoneModule,
        TuiSelect,
        TuiTextfield,
        TuiValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Email', 'Phone'];

    protected type = this.items[0]!;

    protected readonly group = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormControl('', Validators.required),
    });

    protected readonly validator = Validators.email;
}
```
