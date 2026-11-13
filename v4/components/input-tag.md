# InputTag

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use InputChip instead! `InputTag` allows to input several tags with autocomplete and list in dropdown.

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputTagModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputTagModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<ng-container [formGroup]="formName">
  <tui-input-tag formControlName="controlName"></tui-input-tag>
</ng-container>

<tui-input-tag [(ngModel)]="model"></tui-input-tag>
```

### Example

```html
<ng-template>
<tui-input-tag [autoColor]="autoColor" [disabledItemHandler]="disabledItemHandler" [editable]="editable" [focusable]="focusable" [formControl]="control" [inputHidden]="inputHidden" [maxLength]="maxLength" [placeholder]="exampleText" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [rows]="rows" [separator]="separator" [style.text-align]="textAlign" [tagValidator]="tagValidator" [tuiDropdownAlign]="dropdownAlign" [tuiDropdownDirection]="dropdownDirection" [tuiDropdownLimitWidth]="dropdownLimitWidth" [tuiDropdownMaxHeight]="dropdownMaxHeight" [tuiDropdownMinHeight]="dropdownMinHeight" [tuiDropdownOffset]="dropdownOffset" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldIcon]="icon" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" [uniqueTags]="uniqueTags" [(search)]="search" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Please enter Pythons' names </tui-input-tag>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| search | `string | null` | Textfield value to subscribe on input or setting it from the outside (emits null when item from list selected) |
| maxLength | `number` | Max length of tag |
| disabledItemHandler | `TuiBooleanHandler<string>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > Handler for deactivation some tags |
| placeholder | `string` | Placeholder |
| uniqueTags | `boolean` | Ability to enter unique or non-unique tags |
| editable | `boolean` | Tags are editable |
| separator | `string | RegExp` | String or RegExp to separate tags |
| rows | `number` | A number of visible rows |
| inputHidden | `boolean` | Hide input field. For example, to prevent adding new tags |
| tagValidator | `TuiBooleanHandler<string>` | " [documentationPropertyValues]="tagValidatorVariants" [(documentationPropertyValue)]="tagValidator" > A function that checks that tag is valid |
| autoColor | `boolean` | Auto color for tags ( autoColor = true does not work together with labelOutside ==== false : use only outside labels) |
| tuiTextfieldIcon | `PolymorpheusContent` | Icon content. If content is a string, it is used as stringified svg. |

### Usage Examples

#### Basic

**Template:**
```html
<tui-input-tag [formControl]="control" [style.max-width.rem]="20" [tuiTextfieldLabelOutside]="true" > I'm a <i>placeholder</i>
</tui-input-tag>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTagModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<string[]>([]);
}
```

#### Async items loading

**Template:**
```html
<tui-input-tag [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" (searchChange)="onSearchChange($event)" > Choose your Pythons' <tui-data-list-wrapper *tuiDataList [items]="items$ | async" />
</tui-input-tag>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {delay, type Observable, of, startWith, Subject, switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    // Database mock data
    private readonly items = inject<readonly string[]>('Pythons' as any);
    private readonly search$ = new Subject<string>();

    protected value = [];

    protected readonly items$ = this.search$.pipe(
        switchMap((search) =>
            this.serverRequest(search).pipe(startWith<readonly string[] | null>(null)),
        ),
        startWith(this.items),
    );

    protected onSearchChange(search: string): void {
        this.search$.next(search);
    }

    /**
     * Server request emulation
     */
    private serverRequest(search: string): Observable<readonly string[]> {
        const result = this.items.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase()),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
```

#### sizes

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-tag formControlName="testValue" tuiTextfieldSize="s" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > I'm a <i>placeholder</i>
</tui-input-tag>
<tui-input-tag formControlName="testValue" tuiTextfieldSize="m" class="tui-space_top-2" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" > I'm a <i>placeholder</i>
</tui-input-tag>
<tui-input-tag formControlName="testValue" class="tui-space_top-2" [tuiTextfieldCleaner]="true" > I'm a <i>placeholder</i>
</tui-input-tag>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTagModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(['I', 'love', 'Angular']),
    });
}
```

#### Custom validation

**Template:**
```html
<p>In this sample, tags with digits are invalid</p>
<tui-input-tag [formControl]="control" [tagValidator]="tagValidator" [tuiTextfieldLabelOutside]="true" [(search)]="search" > Try it <ng-container *ngIf="filtered.length">
<tui-data-list *tuiDataList>
<button *ngFor="let item of filtered" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</ng-container>
</tui-input-tag>
<tui-error [error]="[] | tuiFieldError | async" [formControl]="control" />
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    ReactiveFormsModule,
    type ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    type TuiBooleanHandler,
    tuiPure,
    TuiValidationError,
} from '@taiga-ui/cdk';
import {TuiDataList, TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

function createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {
    return ({value}: AbstractControl) => {
        const invalidTags = value ? value.filter(handler) : EMPTY_ARRAY;

        return invalidTags.length > 0
            ? {
                  tags: new TuiValidationError('Some tags are invalid'),
              }
            : null;
    };
}

const ITEMS = ['The Midnight', 'FM-84', 'Timecop1983', 'GUNSHIP'];

function tagValidator(tag: string): boolean {
    return !/\d/.test(tag);
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiDataList,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected search = '';

    protected readonly tagValidator = tagValidator;

    protected readonly control = new FormControl<string[]>(
        [],
        createControlValidator(tagValidator),
    );

    protected get filtered(): readonly string[] {
        return this.filterBy(this.search, this.control.value ?? []);
    }

    @tuiPure
    private filterBy(search: string, value: readonly string[]): readonly string[] {
        return ITEMS.filter(
            (item) => TUI_DEFAULT_MATCHER(item, search) && !value.includes(item),
        );
    }
}
```

#### Direction: RTL

**Template:**
```html
<tui-input-tag tuiHintContent="مونتی پایتون" tuiTextfieldIconLeft="@tui.search" class="input" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiHint, TuiInputTagModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = ['گراهام چپمن', 'جان کلیز'];
}
```

**LESS:**
```less
.input {
    max-inline-size: 20rem;
    direction: rtl;
    text-align: end;
}
```

#### Custom separator

**Template:**
```html
<div orientation="vertical" tuiGroup tuiHintContent="Just here to test icons alignment" tuiTextfieldIconLeft="@tui.search" class="input" [collapsed]="true" [tuiTextfieldCleaner]="true" >
<tui-input [(ngModel)]="customSeparator">Custom separator</tui-input>
<tui-input-tag [separator]="customSeparator" [tuiTextfieldLabelOutside]="true" [uniqueTags]="false" [(ngModel)]="value" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiHint} from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiInputTagModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiGroup,
        TuiHint,
        TuiInputModule,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = ['not', 'unique', 'tags, with', 'custom', 'separator', 'separator'];
    protected customSeparator = ';';
}
```

**LESS:**
```less
.input {
    max-inline-size: 20rem;
}
```

#### No spaces inside tags

Use power of RegExp to forbid spaces inside tags via property `[separator]` .

**Template:**
```html
<tui-input-tag [separator]="customSeparator" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputTagModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = ['Use', 'space', 'button'];
    protected customSeparator = /[\s,]/; // Use space or comma to create new tag
}
```

#### expandable

**Template:**
```html
<tui-input-tag class="input" [formControl]="control" [rows]="3" [tuiTextfieldLabelOutside]="true" > I'm a <i>placeholder</i>
</tui-input-tag>
<tui-input-tag class="input tui-space_top-5" [formControl]="control" [rows]="3" > I'm a <i>placeholder</i>
</tui-input-tag>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTagModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
    ]);
}
```

**LESS:**
```less
.input {
    max-inline-size: 20rem;
}
```

#### Mask

**Template:**
```html
<tui-input-tag tuiTextfieldIcon="@tui.calendar" [formControl]="control" [maskito]="options" [tagValidator]="tagValidator" [tuiTextfieldLabelOutside]="true" > dd.mm.yyyy </tui-input-tag>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {type TuiBooleanHandler, TuiDay} from '@taiga-ui/cdk';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        MaskitoDirective,
        ReactiveFormsModule,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<string[]>([]);
    protected readonly min = new Date(2000, 0, 1);
    protected readonly max = new Date(2025, 4, 10);

    protected readonly options: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
        separator: '.',
        min: this.min,
        max: this.max,
    });

    protected tagValidator: TuiBooleanHandler<string> = (tag: string) => {
        const {year, month, day} = TuiDay.parseRawDateString(tag);

        return (
            TuiDay.isValidDay(year, month, day) &&
            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() >= this.min &&
            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() <= this.max
        );
    };
}
```

Custom align content by text-align
