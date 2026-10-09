# Checkbox

- **Package**: `CORE`
- **Type**: components

A checkbox component that is able to imitate native control on mobile platforms. Use `--tui-background-accent-2` CSS variable to customize color of native control emulation

### Usage Examples

#### Example 1

Add import of `@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less` to your encapsulated global styles to enable power of `TuiPlatform` directive.

**Template:**
```html
@for (platform of platforms; track $index) { <div class="wrapper" [class.wrapper_web]="platform === 'web'" [tuiPlatform]="platform" > {{ platform }} <input tuiCheckbox type="checkbox" [ngModel]="true" [size]="getSize($first)" />
<input tuiCheckbox type="checkbox" [indeterminate]="true" [size]="getSize($first)" />
<input tuiCheckbox type="checkbox" [disabled]="true" [ngModel]="true" [size]="getSize($first)" />
<input tuiCheckbox type="checkbox" [size]="getSize($first)" />
<input tuiCheckbox type="checkbox" [disabled]="true" [ngModel]="false" [size]="getSize($first)" />
<input tuiCheckbox type="checkbox" [formControl]="invalidTrue" [size]="getSize($first)" />
<input tuiCheckbox type="checkbox" [formControl]="invalidFalse" [size]="getSize($first)" />
</div> }
```

**TypeScript:**
```ts
import {Component, type OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiCheckbox, type TuiSizeS} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiCheckbox, TuiPlatform],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
    protected readonly platforms: ReadonlyArray<'android' | 'ios' | 'web'> = [
        'web',
        'web',
        'ios',
        'android',
    ];

    protected readonly invalidTrue = new FormControl(true, () => ({invalid: true}));
    protected readonly invalidFalse = new FormControl(false, () => ({invalid: true}));

    public ngOnInit(): void {
        this.invalidTrue.markAsTouched();
        this.invalidFalse.markAsTouched();
    }

    protected getSize(first: boolean): TuiSizeS {
        return first ? 'm' : 's';
    }
}
```

**LESS:**
```less
:host {
    display: flex;

    --tui-background-accent-2: var(--tui-status-info);
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 1rem;
    padding: 1rem;

    &_web {
        border: 1px solid var(--tui-border-normal);
        border-inline-start-width: 0;

        &:first-child {
            border-inline-end-width: 0;
            border-inline-start-width: 1px;
        }
    }
}
```

#### Example 2

If you only want to show checkbox for decorative purpose, without it being interactive — use it without Angular forms.

**Template:**
```html
<p>
<input checked tuiCheckbox type="checkbox" />
</p>
<p>
<input tuiCheckbox type="checkbox" [indeterminate]="true" />
</p>
<p>
<input tuiCheckbox type="checkbox" [checked]="checked" />
</p>
<button tuiButton type="button" (click)="checked = !checked" > Toggle </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCheckbox} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiCheckbox],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected checked = false;
}
```

#### Example 3

Using with Angular forms: `boolean` is determinate and `null` is indeterminate state.

**Template:**
```html
@if (currentQuestion < 2) { <p>{{ currentQuestion + 1 }}. {{ questionTitles[currentQuestion] }}</p>
<form [formGroup]="form"> @for (option of questions[currentQuestion]; track option) { <label>
<input size="s" tuiCheckbox type="checkbox" [formControlName]="$index" /> {{ option }} </label> } </form>
<button size="s" tuiButton type="button" class="tui-space_top-4" (click)="nextQuestion()" > Next </button> } @else { <p><b>Your answers</b></p> @for (options of results; track options; let i = $index) { <div class="tui-space_top-4">
<p>{{ i + 1 }}. {{ questionTitles[i] }}</p> @for (question of questions[i]; track question; let j = $index) { <label>
<input size="s" tuiCheckbox type="checkbox" [checked]="options[j]" /> {{ question }} </label> } </div> } }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCheckbox} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiButton, TuiCheckbox],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly questionTitles = [
        'What framework do you like?',
        'What library do you like?',
    ];

    protected readonly questions = [
        ['Angular', 'React', 'Vue'],
        ['Taiga UI', 'Material UI', 'PrimeNG'],
    ];

    protected currentQuestion = 0;
    protected results: boolean[][] = [];

    protected form = new FormGroup({
        0: new FormControl(true),
        1: new FormControl(false),
        2: new FormControl(),
    });

    protected nextQuestion(): void {
        this.currentQuestion++;
        this.results.push(Object.values(this.form.value).map(Boolean));
        this.form = new FormGroup({
            0: new FormControl(true),
            1: new FormControl(false),
            2: new FormControl(false),
        });
    }
}
```

**LESS:**
```less
label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```

#### Example 4

**Template:**
```html
<input tuiCheckbox type="checkbox" [(ngModel)]="checked" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, tuiCheckboxOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiCheckbox],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiCheckboxOptionsProvider({
            appearance: (el) => (el.checked ? 'primary-grayscale' : 'outline-grayscale'),
        }),
    ],
})
export default class Example {
    protected checked = true;
}
```
