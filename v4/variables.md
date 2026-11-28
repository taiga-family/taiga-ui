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
<div tuiAppearance="floating" tuiCardLarge >
<tui-input [(ngModel)]="value">Input example</tui-input>
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
import {TuiAppearance, TuiLabel} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'tui-variables-example-1',
    imports: [
        FormsModule,
        TuiAppearance,
        TuiCardLarge,
        TuiCheckbox,
        TuiInputModule,
        TuiLabel,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiVariablesExample1 {
    protected value = '';
    protected checkbox = true;
}
```

**LESS:**
```less
:host {
    --tui-font-text: 'Comic Sans MS', cursive;
    --tui-font-text-m: bold 1rem/1.5rem var(--tui-font-text);
    --tui-font-text-s: normal 0.5rem/1.25rem var(--tui-font-text);
    --tui-background-accent-1: #c86dd7;
    --tui-background-accent-1-hover: #a456b1;
    --tui-background-accent-1-pressed: #7f3b8a;
    --tui-text-primary-on-accent-1: #fff;
    --tui-radius-s: 0;
    --tui-radius-m: 0.25rem;
    --tui-height-l: 4.375rem;
}
```
