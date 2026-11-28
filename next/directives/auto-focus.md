# AutoFocus

- **Package**: `CDK`
- **Type**: directives

`tuiAutoFocus` allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show input </button> @if (showInput) { <tui-textfield [tuiTextfieldCleaner]="false">
<input tuiAutoFocus tuiInput [(ngModel)]="model" />
<label tuiLabel>Focusable input</label>
</tui-textfield> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected showInput = false;
    protected model = 'Focused after its appearance';

    protected onClick(): void {
        this.showInput = true;
    }
}
```

**CSS:**
```css
button {
    margin-block-end: 1.25rem;
}
```
