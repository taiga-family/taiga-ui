# Checkbox

- **Package**: `KIT`
- **Type**: components

A checkbox component that is able to imitate native control on mobile platforms. Use `--tui-background-accent-2` CSS variable to customize color of native control emulation

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiCheckbox} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiCheckbox,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<input
  tuiCheckbox
  type="checkbox"
  [(ngModel)]="value"
/>
```

### Usage Examples

#### Platforms

Add import of `@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less` to your encapsulated global styles to enable power of `TuiPlatform` directive.

**Template:**
```html
<div *ngFor="let platform of platforms; let first = first" class="wrapper" [class.wrapper_web]="platform === 'web'" [tuiPlatform]="platform" > {{ platform }} <input tuiCheckbox type="checkbox" [ngModel]="true" [size]="getSize(first)" />
<input tuiCheckbox type="checkbox" [indeterminate]="true" [size]="getSize(first)" />
<input tuiCheckbox type="checkbox" [disabled]="true" [ngModel]="true" [size]="getSize(first)" />
<input tuiCheckbox type="checkbox" [size]="getSize(first)" />
<input tuiCheckbox type="checkbox" [disabled]="true" [ngModel]="false" [size]="getSize(first)" />
<input tuiCheckbox type="checkbox" [formControl]="invalidTrue" [size]="getSize(first)" />
<input tuiCheckbox type="checkbox" [formControl]="invalidFalse" [size]="getSize(first)" />
</div>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, type OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {type TuiSizeS} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, ReactiveFormsModule, TuiCheckbox, TuiPlatform],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

#### Decorative

**Template:**
```html
<p>
<input checked tuiCheckbox type="checkbox" />
</p>
<p>
<input tuiCheckbox type="checkbox" />
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
import {TuiButton} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiCheckbox],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected checked = false;
}
```

#### Form

**Template:**
```html
<ng-container *ngIf="currentQuestion < 2; else result">
<p>{{ currentQuestion + 1 }}. {{ questionTitles[currentQuestion] }}</p>
<form [formGroup]="form">
<label *ngFor="let option of questions[currentQuestion]; let index = index">
<input size="s" tuiCheckbox type="checkbox" [formControlName]="index" /> {{ option }} </label>
</form>
<button size="s" tuiButton type="button" class="tui-space_top-4" (click)="nextQuestion()" > Next </button>
</ng-container>
<ng-template #result>
<p><b>Your answers</b></p>
<div *ngFor="let options of results; let i = index" class="tui-space_top-4" >
<p>{{ i + 1 }}. {{ questionTitles[i] }}</p>
<label *ngFor="let question of questions[i]; let j = index">
<input size="s" tuiCheckbox type="checkbox" [checked]="options[j]" /> {{ question }} </label>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, NgIf, ReactiveFormsModule, TuiButton, TuiCheckbox],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
        0: new FormControl(false),
        1: new FormControl(false),
        2: new FormControl(false),
    });

    protected nextQuestion(): void {
        this.currentQuestion++;

        this.results.push(Object.values(this.form.value).map(Boolean));

        this.form = new FormGroup({
            0: new FormControl(false),
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

#### Customization

Use `tuiCheckboxOptionsProvider` to override the colors of the checkbox with appearance colors

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
import {TuiCheckbox, tuiCheckboxOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
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
    protected checked = false;
}
```
