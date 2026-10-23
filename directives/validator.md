# Validator

- **Package**: `CDK`
- **Type**: directives

`tuiValidator` allows set validators for form control on the fly

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="group">
<tui-textfield>
<label tuiLabel>Name</label>
<input formControlName="name" tuiInput />
</tui-textfield>
<tui-textfield tuiChevron class="tui-space_vertical-3" >
<label tuiLabel>Connection</label>
<input tuiSelect [ngModelOptions]="{standalone: true}" [(ngModel)]="type" />
<tui-data-list-wrapper *tuiDropdown [items]="items" />
</tui-textfield> @if (type === items[0]!) { <tui-textfield>
<label tuiLabel>Contact</label>
<input formControlName="contact" tuiInput [tuiValidator]="validator" />
</tui-textfield> } @else { <tui-textfield>
<label tuiLabel>Contact</label>
<input autocomplete="tel" formControlName="contact" mask="+7 ### ###-##-##" tuiInputPhone />
</tui-textfield> } </form>
```

**TypeScript:**
```ts
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
import {TuiInput} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiInputPhone, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInput,
        TuiInputPhone,
        TuiSelect,
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
