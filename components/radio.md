# Radio

- **Package**: `CORE`
- **Type**: components

A radio component that is able to imitate native control on mobile platforms. Use `--tui-background-accent-2` CSS variable to customize color of native control emulation Due to internal Angular implementation of radio buttons, you are required to add `name` attribute to your `input` tag, unless you are using `formControlName`

### Usage Examples

#### Platforms

**Template:**
```html
@for (platform of platforms; track $index) { <div class="wrapper" [class.wrapper_web]="platform === 'web'" [tuiPlatform]="platform" > {{ platform }} <input ngModel="checked" tuiRadio type="radio" value="checked" [size]="getSize($first)" />
<input ngModel="checked" tuiRadio type="radio" value="checked" [disabled]="true" [size]="getSize($first)" />
<input tuiRadio type="radio" [size]="getSize($first)" />
<input ngModel="checked" tuiRadio type="radio" [disabled]="true" [size]="getSize($first)" />
<input tuiRadio type="radio" [formControl]="invalidTrue" [size]="getSize($first)" [value]="true" />
<input tuiRadio type="radio" [formControl]="invalidFalse" [size]="getSize($first)" [value]="true" />
</div> }
```

**TypeScript:**
```ts
import {Component, type OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiRadio, type TuiSizeS} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiPlatform, TuiRadio],
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

#### Identity matcher

**Template:**
```html
<button tuiButton type="button" (click)="value = {test: 'value'}" > Set copy </button>
<p>
<label tuiLabel>
<input name="test" tuiRadio type="radio" [identityMatcher]="identityMatcher" [value]="{test: 'value'}" [(ngModel)]="value" /> value </label>
</p>
<p>
<label tuiLabel>
<input name="test" tuiRadio type="radio" [identityMatcher]="identityMatcher" [value]="{test: 'test'}" [(ngModel)]="value" /> test </label>
</p>
<p>
<label tuiLabel>
<input name="test" tuiRadio type="radio" [identityMatcher]="identityMatcher" [value]="{test: 'item'}" [(ngModel)]="value" /> item </label>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel, TuiRadio} from '@taiga-ui/core';

interface TestValue {
    test: string;
}

@Component({
    imports: [FormsModule, TuiButton, TuiLabel, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TestValue | null = null;

    protected identityMatcher = (a: TestValue, b: TestValue): boolean =>
        a?.test === b?.test;
}
```

#### List

**Template:**
```html
<form [formGroup]="form">
<tui-radio-list formControlName="vertical" [itemContent]="content" [items]="objects" />
<ng-template #content let-data >
<span tuiTitle> {{ data.name }} <span tuiSubtitle>{{ data.description }}</span>
</span>
</ng-template>
<hr />
<tui-radio-list formControlName="disabled" [items]="strings" />
<hr />
</form>
<tui-radio-list size="s" [disabledItemHandler]="handler" [items]="strings" [style.flex-direction]="'row'" [style.width]="'max-content'" [(ngModel)]="horizontal" />
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
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiRadioList} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiRadioList, TuiTitle],
    templateUrl: './index.html',
    styles: `
        hr {
            block-size: 1px;
            background: var(--tui-border-normal);
            border: 0;
            margin: 1rem 0;
        }
    `,
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        vertical: new FormControl(null, Validators.required),
        disabled: new FormControl({value: null, disabled: true}),
    });

    protected readonly objects = [
        {
            name: 'King Arthur',
            description: 'Graham Chapman',
        },
        {
            name: "It's Man",
            description: 'Michael Palin',
        },
        {
            name: 'Silly Walks',
            description: 'John Cleese',
        },
    ];

    protected readonly strings = ['King Arthur', "It's Man", 'Silly Walks'];
    protected horizontal = this.strings[0]!;

    protected readonly handler: TuiBooleanHandler<string> = (item) =>
        item === this.strings[2]!;
}
```

#### Customization

**Template:**
```html
<p>
<label tuiLabel>
<input name="example" tuiRadio type="radio" value="1" [(ngModel)]="value" /> example 1 </label>
</p>
<p>
<label tuiLabel>
<input name="example" tuiRadio type="radio" value="2" [(ngModel)]="value" /> example 2 </label>
</p>
<p>
<label tuiLabel>
<input name="example" tuiRadio type="radio" value="3" [(ngModel)]="value" /> example 3 </label>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel, TuiRadio, tuiRadioOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiLabel, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiRadioOptionsProvider({
            appearance: (el) => (el.checked ? 'primary-grayscale' : 'outline-grayscale'),
        }),
    ],
})
export default class Example {
    protected value = '1';
}
```
