# InputTime

- **Package**: `KIT`
- **Type**: components

`InputTime` allows users to enter and edit time values using a keyboard, dropdown or even browser native picker.

### Example

```html
<ng-template>
<tui-textfield [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input placeholder="Pick a time" tuiInputTime [accept]="accept" [formControl]="control" [mode]="mode" [postfix]="postfix" [prefix]="prefix" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" [tuiTimeFormat]="{dayPeriod: timeFormatDoc.dayPeriod()}" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [mode] | `MaskitoTimeMode` | time format mode |
| [prefix] | `string` | time |
| [postfix] | `string` | time |
| [accept] | `ReadonlyArray<TuiTime>` | values to choose |

### Usage Examples

#### Mode

`InputTime` supports all possible time segments: hours, minutes, seconds, and even milliseconds. Property `mode` allows to choose specific combination of the segments. Explore MaskitoTimeMode type to see all available modes.

**Template:**
```html
<tui-textfield>
<input tuiInputTime [mode]="mode" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type MaskitoTimeMode} from '@maskito/kit';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly mode: MaskitoTimeMode = 'HH:MM:SS.MSS';
    protected value: TuiTime | null = new TuiTime(23, 59, 59, 999);
}
```

#### 12-hour format

Use `[tuiTimeFormat]="{dayPeriod}"` directive with a tuple of two locale-specific markers (e.g. `['AM', 'PM']` , chinese `['上午', '下午']` , greek `['π.μ.', 'μ.μ.']` and etc.) to switch the mask to a 12-hour time format with a meridiem suffix. Use `['', '']` (default) to keep the 24-hour format. Also available through `tuiTimeFormatProvider` .

**Template:**
```html
<tui-textfield>
<label tuiLabel>Enter 12-hour time format</label>
<input mode="HH:MM" tuiInputTime [formControl]="control" [tuiTimeFormat]="{dayPeriod: ['AM', 'PM']}" />
</tui-textfield>
<p><strong>Control value:</strong></p>
<pre><code>{{ control.value | json }}</code></pre>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime, TuiTimeFormat} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiInputTime, TuiTimeFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiTime | null>(new TuiTime(17, 0));
}
```

#### Form control validation

Form control value is TuiTime or `null` when empty If a field is optional, but unfinished field should be marked as invalid, use `tuiUnfinishedValidator` directive

**Template:**
```html
<form tuiForm="m" [formGroup]="form" >
<tui-textfield>
<label tuiLabel>Required field</label>
<input formControlName="required" tuiInputTime />
</tui-textfield>
<tui-error formControlName="required" />
<tui-textfield>
<label tuiLabel>Optional field</label>
<input formControlName="optional" tuiInputTime tuiUnfinishedValidator />
</tui-textfield>
<tui-error formControlName="optional" />
<footer>
<button tuiButton type="submit" [disabled]="form.invalid" > Submit </button>
</footer>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputTime, TuiUnfinishedValidator} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiInputTime,
        TuiUnfinishedValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            tuiUnfinished: 'Either fill this or leave blank',
            required: 'This field is required',
        }),
    ],
})
export default class Example {
    protected readonly form = new FormGroup({
        required: new FormControl(null, Validators.required),
        optional: new FormControl(),
    });
}
```

#### Options

**Template:**
```html
<tui-textfield>
<label tuiLabel>Sale</label>
<input prefix="Ends in " tuiInputTime [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            icon: '@tui.timer',
            mode: 'HH:MM:SS.MSS',
            timeSegmentMaxValues: {hours: 99},
        }),
    ],
})
export default class Example {
    protected value: TuiTime | null = new TuiTime(99, 59, 59, 999);
}
```

#### Textfield customization

Use all powers of `Textfield` : put any number of Icons and Tooltips inside (and control their order and color), modify the size of the textbox and etc. Explore Input documentation page for more customization options.

**Template:**
```html
<tui-textfield iconStart="@tui.alarm-clock" tuiTextfieldSize="m" [tuiTextfieldCleaner]="false" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiInputTime [(ngModel)]="value" /> @if (value) { <tui-icon [icon]="value.hours < 8 ? '@tui.moon' : '@tui.sun'" /> } <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputTime, tuiInputTimeOptionsProvider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputTime, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputTimeOptionsProvider({icon: ''})],
})
export default class Example {
    protected value: TuiTime | null = new TuiTime(9, 0);
}
```

#### Strict mode

Property `accept` allows to limit the set of allowed values. It is useful when you want to restrict user input to a specific set of time periods, for example, to allow only working hours with equally distant time intervals.

**Template:**
```html
<tui-textfield>
<input placeholder="Meeting time" tuiInputTime [accept]="acceptableValues" [(ngModel)]="value" />
<tui-icon tuiTooltip="Only time from 10:00 to 18:00 AND divisible by 30 is permitted" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {tuiCreateTimePeriods, TuiInputTime, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputTime, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiTime | null = null;

    protected acceptableValues = [
        // Array of TuiTime from 10:00 to 18:00 every half of hour
        ...tuiCreateTimePeriods(10, 18, [0, 30]),
        new TuiTime(18, 0),
    ];
}
```

#### Dropdown with DataList

Use `tuiItemsHandlersProvider` to override the default behavior of all `InputTime` -s below the current DI scope. To customize a specific `InputTime` , use the input properties `[identityMatcher]` / `[stringify]` / `disabledItemHandler` (inherited from `Textfield` ). Explore Dropdown and DataList documentation pages for more customization options.

**Template:**
```html
<tui-textfield [disabledItemHandler]="disabledItemHandler">
<input placeholder="Click me to open dropdown" tuiInputTime [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [items]="items | tuiFilterByInput: filter" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler, TuiTime} from '@taiga-ui/cdk';
import {
    type TuiFilterByInputOptions,
    TuiFilterByInputPipe,
    tuiItemsHandlersProvider,
} from '@taiga-ui/core';
import {tuiCreateTimePeriods, TuiDataListWrapper, TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiDataListWrapper, TuiFilterByInputPipe, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        /**
         * You can also use input props of `Textfield`
         * (they will have more priority):
         * ```html
         * <tui-textfield
         *     [identityMatcher]="..."
         *     [stringify]="..."
         * />
         * ```
         */
        tuiItemsHandlersProvider({
            stringify: signal((x: TuiTime) => x.toString('HH:MM')),
            identityMatcher: signal(
                (a: TuiTime | null, b: TuiTime | null) => a?.valueOf() === b?.valueOf(),
            ),
            // disabledItemHandler: signal((x: TuiTime) => x.hours > 18),
        }),
    ],
})
export default class Example {
    protected value: TuiTime | null = null;

    protected items: readonly TuiTime[] = [
        new TuiTime(16, 20),
        new TuiTime(16, 45),
        new TuiTime(17, 0),
        ...tuiCreateTimePeriods(18, 20, [0, 15, 30, 45]),
    ];

    protected readonly disabledItemHandler: TuiBooleanHandler<TuiTime> = (x) =>
        x?.valueOf() === this.items[0]!.valueOf();

    protected readonly filter: TuiFilterByInputOptions<TuiTime>['filter'] = (
        items,
        query,
    ) => items.filter((time) => time.toString('HH:MM').startsWith(query));
}
```

#### Transformer

`TuiValueTransformer` is a great opportunity to override default form control's value format without breaking component's internal logic. This example demonstrates how to use `string` -type instead of default `TuiTime` .

**Template:**
```html
<tui-textfield>
<input placeholder="Enter time" tuiInputTime [(ngModel)]="value" />
</tui-textfield>
<p><strong>Control value:</strong></p>
<code>{{ value | json }}</code>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {maskitoParseTime} from '@maskito/kit';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            valueTransformer: {
                fromControlValue(controlValue: string): TuiTime | null {
                    return controlValue
                        ? TuiTime.fromAbsoluteMilliseconds(
                              maskitoParseTime(controlValue, {mode: 'HH:MM'}),
                          )
                        : null;
                },
                toControlValue(time: TuiTime | null): string {
                    return time ? time.toString() : '';
                },
            },
        }),
    ],
})
export default class Example {
    protected value = '';
}
```

#### Native picker

Add `type="time"` for `<input />` to enable built-in browser picker for mobile devices . Touch clock icon to show the picker. Touch other parts of the textfield to show mobile device keyboard. Browser support limitations! IOS devices supports only `HH:MM` mode. Native picker supports only 24-hour format.

**Template:**
```html
@for (mode of supportedModes; track mode) { <tui-textfield>
<label tuiLabel>{{ mode }}</label>
<input tuiInputTime type="time" [mode]="mode" [ngModel]="initialValue" />
</tui-textfield> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type MaskitoTimeMode} from '@maskito/kit';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputTime],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly supportedModes: readonly MaskitoTimeMode[] = [
        'HH:MM',
        'HH:MM AA',
        'HH:MM:SS',
        'HH:MM:SS AA',
        'HH:MM:SS.MSS',
        'HH:MM:SS.MSS AA',
    ];

    protected readonly initialValue = new TuiTime(23, 59, 59, 999);
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Native picker with suggestions

Link your `<input type="time" />` to a `<datalist />` by `list` attribute to show a list of suggestions inside native picker. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value. Browser support limitations! IOS devices does not support `<datalist />` for time picker.

**Template:**
```html
<tui-textfield>
<input list="suggestions" placeholder="Click on clock icon" tuiInputTime type="time" [(ngModel)]="value" />
<datalist id="suggestions">
<option value="08:00">Morning</option>
<option value="12:00">Noon</option>
<option value="18:00">Evening</option>
</datalist>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiTime | null = null;
}
```

Use
`[tuiTimeFormat]="&#123;dayPeriod&#125;"`
directive with a tuple of two locale-specific markers (e.g.
`['AM', 'PM']`
, chinese
`['上午', '下午']`
, greek
`['π.μ.', 'μ.μ.']`
and etc.) to switch the mask to a 12-hour time format with a meridiem suffix.
