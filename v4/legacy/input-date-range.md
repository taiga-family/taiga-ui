# InputDateRangeLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputDateRange instead! `InputDate` is a field to input a range of dates. Date formatting can be customized with TUI_DATE_FORMAT token. See an example with the usage of these tokens. DI-tokens for input-configurations: `TUI_DATE_RANGE_VALUE_TRANSFORMER` custom format of control output ( TuiDayRange is default). See an example of how to provide transformers for `InputDate` and `InputDateRange` to work with native Date objects.

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputDateRangeModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-date-range formControlName="testValue">Choose dates</tui-input-date-range>
</form>
```

### Example

```html
<ng-template>
<tui-input-date-range class="b-demo-control" [defaultViewedMonth]="defaultViewedMonth" [disabledItemHandler]="disabledItemHandler" [focusable]="focusable" [formControl]="control" [items]="items" [markerHandler]="markerHandler" [max]="max" [maxLength]="maxLength" [min]="min" [minLength]="minLength" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" > Choose dates </tui-input-date-range>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| defaultViewedMonth | `TuiMonth` | Default month to show |
| disabledItemHandler | `TuiBooleanHandler<TuiDay>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > A handler that gets a date and returns true if it is disabled. Must be a pure function |
| items | `TuiDayRangePeriod[]` | Fixed intervals (shows 2 calendars with empty array) |
| markerHandler | `TuiMarkerHandler | null` | A handler that gets date and returns null or a tuple with circled marker colors |
| min | `TuiDay | null` | Min date |
| max | `TuiDay | null` | Max date |
| minLength | `TuiDayLike | null` | Minimal length of range |
| maxLength | `TuiDayLike | null` | Maximal length of range |

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<p> If a field is optional, but unfinished field should be marked as invalid, use <code>tuiUnfinishedValidator</code> directive </p>
<tui-input-date-range formControlName="testValue" tuiUnfinishedValidator="Finish filling the field" [max]="max" [min]="min" > Choose dates <input placeholder="From - To" tuiTextfieldLegacy />
</tui-input-date-range>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRangeModule, TuiUnfinishedValidator} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateRangeModule, TuiUnfinishedValidator],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = new TuiDay(2018, 2, 25);
    protected readonly max = new TuiDay(2040, 2, 20);

    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDayRange(this.min, this.min.append({day: 5}))),
    });
}
```

#### Big size

**Template:**
```html
<tui-input-date-range [formControl]="control">Choose dates</tui-input-date-range>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(
        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
    );
}
```

#### Date localization

**Template:**
```html
<tui-input-date-range [formControl]="control">Choose dates</tui-input-date-range>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {tuiDateFormatProvider} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '/'})],
})
export default class Example {
    protected readonly control = new FormControl(
        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
    );
}
```

#### With native Date output

**Template:**
```html
<tui-input-date-range [formControl]="control" [items]="dateRangeItems" > Choose dates </tui-input-date-range>
<p>Stringified control value:</p>
<p>
<code>{{ control.value }}</code>
</p>
```

**TypeScript:**
```ts
import {Component, Injectable} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange, TuiValueTransformer} from '@taiga-ui/cdk';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_VALUE_TRANSFORMER,
    tuiCreateDefaultDayRangePeriods,
} from '@taiga-ui/kit';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

class ExampleDateRangeTransformer extends TuiValueTransformer<
    TuiDayRange | null,
    [Date, Date] | null
> {
    constructor(
        private readonly dateTransformer: TuiValueTransformer<TuiDay | null, Date | null>,
    ) {
        super();
    }

    public fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {
        const [transformedFrom, transformedTo] = controlValue || [null, null];
        const from =
            transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);
        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);

        return from && to && new TuiDayRange(from, to);
    }

    public toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {
        const from =
            componentValue && this.dateTransformer.toControlValue(componentValue.from);
        const to =
            componentValue && this.dateTransformer.toControlValue(componentValue.to);

        return from && to && [from, to];
    }
}

@Injectable()
export class ExampleDateTransformer extends TuiValueTransformer<
    TuiDay | null,
    Date | null
> {
    public fromControlValue(controlValue: Date | null): TuiDay | null {
        return controlValue && TuiDay.fromLocalNativeDate(controlValue);
    }

    public toControlValue(componentValue: TuiDay | null): Date | null {
        return componentValue?.toLocalNativeDate() || null;
    }
}

export function getExampleDateRangeTransformer(
    dateTransformer: ExampleDateTransformer | null,
): TuiValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {
    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);
}

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useClass: ExampleDateTransformer,
        },
        {
            provide: TUI_DATE_RANGE_VALUE_TRANSFORMER,
            deps: [TUI_DATE_VALUE_TRANSFORMER],
            useFactory: getExampleDateRangeTransformer,
        },
    ],
})
export default class Example {
    protected readonly dateRangeItems = tuiCreateDefaultDayRangePeriods();

    protected readonly control = new FormControl([
        new Date(2018, 2, 10),
        new Date(2018, 3, 20),
    ]);
}
```

#### Custom period

**Template:**
```html
<tui-input-date-range [formControl]="control" [items]="items" > Choose dates </tui-input-date-range>
<button size="s" tuiButton type="button" class="tui-space_top-4" (click)="selectToday()" > Select today </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiDayRangePeriod} from '@taiga-ui/kit';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

const today = TuiDay.currentLocal();
const yesterday = today.append({day: -1});

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiInputDateRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(new TuiDayRange(today, today));

    protected readonly items = [
        new TuiDayRangePeriod(
            new TuiDayRange(today, today),
            'Today',
            ({$implicit}) => `Today (${$implicit.from})`,
        ),
        new TuiDayRangePeriod(
            new TuiDayRange(yesterday, yesterday),
            'Yesterday',
            ({$implicit}) => `Yesterday (${$implicit.from})`,
        ),
        new TuiDayRangePeriod(
            new TuiDayRange(yesterday, yesterday),
            'Yet another yesterday',
            ({$implicit}) => `Yet another yesterday (${$implicit.from})`,
        ),
    ];

    protected selectToday(): void {
        this.control.setValue(new TuiDayRange(today, today));
    }
}
```

Custom align content by text-align
