# InputTimeLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputTime instead! `InputTime` allows input time in HH:MM format DI-tokens for input-configurations: `TUI_TIME_VALUE_TRANSFORMER` custom format of control output ( `TuiTime | null` is default). See example with string as control's output.

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputTimeModule,
  ],
  providers: [
    {
      provide: TUI_INPUT_TIME_OPTIONS,
      useValue: {
        icon: '@tui.circle-check',
        mode: 'HH:MM:SS',
        itemSize: 's',
      },
    },
  ],
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(new TuiTime(12, 30)),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-time formControlName="testValue">Placeholder</tui-input-time>
</form>
```

### Example

```html
<ng-template>
<tui-input-time [disabledItemHandler]="disabledItemHandler" [focusable]="focusable" [formControl]="control" [items]="items" [itemsHidden]="itemsHidden" [itemSize]="itemSize" [mode]="mode" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [strict]="strict" [style.text-align]="textAlign" [tuiDropdownAlign]="dropdownAlign" [tuiDropdownDirection]="dropdownDirection" [tuiDropdownLimitWidth]="dropdownLimitWidth" [tuiDropdownMaxHeight]="dropdownMaxHeight" [tuiDropdownMinHeight]="dropdownMinHeight" [tuiDropdownOffset]="dropdownOffset" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldPostfix]="postfix" [tuiTextfieldPrefix]="prefix" [tuiTextfieldSize]="size" > Input time </tui-input-time>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| disabledItemHandler | `TuiBooleanHandler<TuiTime>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > Handler to disable some items |
| items | `ReadonlyArray<TuiTime>` | " [documentationPropertyValues]="itemsVariants" [(documentationPropertyValue)]="items" > Items to choose |
| itemsHidden | `boolean` | Disable the display of the dropdown list |
| itemSize | `TuiSizeS | TuiSizeL` | Item size |
| strict | `boolean` | Only items are allowed |
| mode | `TuiTimeMode` | Modes for seconds and ms support |

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-time formControlName="testValue" tuiTextfieldSize="s" > Input time </tui-input-time>
<tui-input-time formControlName="testValue" tuiTextfieldSize="m" class="tui-space_top-2" [tuiTextfieldLabelOutside]="true" > Input time </tui-input-time>
<p> If field is not required, but you want to mark it invalid if user did not complete it, use <code>tuiUnfinishedValidator</code> directive </p>
<tui-input-time formControlName="testValue" tuiUnfinishedValidator > Input time </tui-input-time>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {
    TuiInputTimeModule,
    TuiTextfieldControllerModule,
    TuiUnfinishedValidator,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiInputTimeModule,
        TuiTextfieldControllerModule,
        TuiUnfinishedValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(12, 30)),
    });
}
```

#### Dropdown

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-time formControlName="testValue" [items]="items1" > Input time </tui-input-time>
<tui-input-time formControlName="testValue" class="tui-space_top-4" [items]="items2" [strict]="true" > Input time </tui-input-time>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
    });

    protected items1 = tuiCreateTimePeriods();
    protected items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);
}
```

#### Options (icon)

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-time formControlName="testValue" [items]="items1" > Input time </tui-input-time>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule, tuiInputTimeOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            icon: '@tui.circle-check',
            mode: 'HH:MM:SS',
            itemSize: 's',
        }),
    ],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
    });

    protected items1 = tuiCreateTimePeriods();
}
```

#### Options (max values)

**Template:**
```html
<form tuiTextfieldPostfix="left" [formGroup]="testForm" >
<tui-input-time formControlName="testValue">Max: 47h 59m</tui-input-time>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiTime} from '@taiga-ui/cdk';
import {
    TuiInputTimeModule,
    tuiInputTimeOptionsProvider,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            mode: 'HH:MM',
            maxValues: {HH: 47, MM: 59, SS: 59, MS: 999},
        }),
    ],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
    });
}
```

#### AM / PM

Any `mode` ending with `AA` is 12-hour time format with meridiem part

**Template:**
```html
<tui-input-time mode="HH:MM AA" [formControl]="control" > Enter 12-hour time format </tui-input-time>
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
import {TuiInputTimeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [JsonPipe, ReactiveFormsModule, TuiInputTimeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiTime | null>(new TuiTime(17, 0));
}
```

#### With control's output as string

**Template:**
```html
<tui-input-time [formControl]="control" [items]="items" > Input time </tui-input-time>
<p>Stringified control value:</p>
<p>
<code>{{ control.value }}</code>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime, TuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_TIME_VALUE_TRANSFORMER, tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

class ExampleTimeTransformer extends TuiValueTransformer<TuiTime | null, string | null> {
    public fromControlValue(controlValue: string): TuiTime | null {
        return controlValue ? TuiTime.fromString(controlValue) : null;
    }

    public toControlValue(time: TuiTime | null): string {
        return time ? time.toString() : '';
    }
}

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_TIME_VALUE_TRANSFORMER,
            useClass: ExampleTimeTransformer,
        },
    ],
})
export default class Example {
    protected readonly control = new FormControl('');
    protected readonly items = tuiCreateTimePeriods();
}
```

#### Native input time

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-time formControlName="testValue" class="tui-space_bottom-3" [tuiTextfieldCleaner]="true" > Choose a time </tui-input-time>
<tui-input-time formControlName="testValue2" mode="HH:MM:SS" class="tui-space_bottom-3" [tuiTextfieldCleaner]="true" > Choose a time </tui-input-time>
<tui-input-time formControlName="testValue3" class="tui-space_bottom-3" [items]="items" [tuiTextfieldCleaner]="true" > Choose a time </tui-input-time>
<tui-input-time formControlName="testValue4" mode="HH:MM:SS" [items]="items" [tuiTextfieldCleaner]="true" > Choose a time </tui-input-time>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {
    TuiInputTimeModule,
    tuiInputTimeOptionsProvider,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            nativePicker: true,
        }),
    ],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(10, 30)),
        testValue2: new FormControl(new TuiTime(10, 30, 0)),
        testValue3: new FormControl(new TuiTime(14, 30)),
        testValue4: new FormControl(new TuiTime(10, 30, 0)),
    });

    protected readonly items = tuiCreateTimePeriods(14, 16, [0, 30]);
}
```

Custom align content by text-align
