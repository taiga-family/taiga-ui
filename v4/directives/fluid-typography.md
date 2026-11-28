# FluidTypography

- **Package**: `KIT`
- **Type**: directives

A directive that adjusts font size for the text to fit in the container

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiFluidTypography} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfield,
    TuiFluidTypography,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiTextfield
    tuiFluidTypography
  />
</tui-textfield>
```

### Usage Examples

#### Text

**Template:**
```html
<div style="resize: horizontal; overflow: hidden; white-space: nowrap; line-height: 2rem; margin-bottom: 1rem" tuiFluidTypography [textContent]="text" ></div>
<button tuiButton type="button" (click)="randomize()" > Randomize </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiFluidTypography} from '@taiga-ui/kit';

const WORDS = ['Rock', 'Paper', 'Scissor'];

@Component({
    standalone: true,
    imports: [TuiButton, TuiFluidTypography],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected text = 'There is some text in here';

    protected randomize(): void {
        this.text = Array.from(
            {length: Math.ceil(10 * Math.random())},
            () => WORDS[Math.floor(Math.random() * WORDS.length)],
        ).join(', ');
    }
}
```

#### Textfield

**Template:**
```html
<tui-textfield>
<input placeholder="Type in long value" tuiFluidTypography tuiTextfield [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiFluidTypography} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiFluidTypography, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Options

**Template:**
```html
<tui-textfield>
<input placeholder="Type in long value" tuiTextfield [tuiFluidTypography]="scale()" [(ngModel)]="value" />
</tui-textfield>
<tui-input-range class="tui-space_top-4" [max]="30" [min]="1" [ngModel]="range()" (ngModelChange)="range.set($event)" > Min/Max (converted to pixels) </tui-input-range>
```

**TypeScript:**
```ts
import {Component, computed, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_FLUID_TYPOGRAPHY_OPTIONS, TuiFluidTypography} from '@taiga-ui/kit';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiFluidTypography, TuiInputRangeModule, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly options = inject(TUI_FLUID_TYPOGRAPHY_OPTIONS);

    protected value = 'I am a very long value';
    protected range = signal([this.options.min * 16, this.options.max * 16]);
    protected scale = computed<[number, number]>(() => [
        (this.range()[0] ?? 0) / 16,
        (this.range()[1] ?? 0) / 16,
    ]);
}
```
