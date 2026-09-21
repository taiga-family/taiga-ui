# Variables

Taiga UI uses CSS custom properties for many of its visual aspects. You can see
colors
for the full list of color variables.

Besides colors there are also following variables that can be adjusted at any level of DOM structure:

- ``

—

## Override example

### Usage Examples

#### Override example

**Template:**
```html
<div appearance="floating" tuiCardLarge >
<tui-textfield>
<input tuiInput [(ngModel)]="value" />
<label tuiLabel>Input example</label>
</tui-textfield>
<label tuiLabel>
<input tuiCheckbox type="checkbox" [(ngModel)]="checkbox" /> Checkbox example </label>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, TuiInput, TuiLabel} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    selector: 'tui-variables-example-1',
    imports: [FormsModule, TuiCardLarge, TuiCheckbox, TuiInput, TuiLabel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
    protected checkbox = true;
}
```

**LESS:**
```less
:host {
    --tui-typography-family-text: 'Comic Sans MS', cursive;
    --tui-typography-body-m: bold 1rem/1.5rem var(--tui-typography-family-text);
    --tui-typography-body-s: normal 0.5rem/1.25rem var(--tui-typography-family-text);
    --tui-background-accent-1: #c86dd7;
    --tui-background-accent-1-hover: #a456b1;
    --tui-background-accent-1-pressed: #7f3b8a;
    --tui-text-primary-on-accent-1: #fff;
    --tui-radius-s: 0;
    --tui-radius-m: 0.25rem;
    --tui-height-l: 4.375rem;
}
```
