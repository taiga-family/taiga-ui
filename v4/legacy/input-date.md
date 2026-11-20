# InputDateLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputDate instead! `InputDate` – input with a calendar. Date formatting can be customized with TUI_DATE_FORMAT token. See example with the usage of these tokens. DI-tokens for input-configurations: `TUI_DATE_VALUE_TRANSFORMER` custom format of control output ( TuiDay is default). See example with built-in Date object as control's output.

### How to Use (Import)

```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputDateModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-date formControlName="testValue">
    Choose a date
    <input tuiTextfieldLegacy />
  </tui-input-date>
</form>
```

### Example

```html
<ng-template>
<tui-input-date [disabledItemHandler]="disabledItemHandler" [focusable]="focusable" [formControl]="control" [items]="items" [markerHandler]="markerHandler" [max]="max" [min]="min" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiDropdownOpen]="!!(dropdownOpen | async)" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" (tuiDropdownOpenChange)="dropdownOpen.next($event)" > Choose a date </tui-input-date>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| disabledItemHandler | `TuiBooleanHandler<TuiDay>` | " [documentationPropertyValues]="disabledItemHandlerVariants" [(documentationPropertyValue)]="disabledItemHandler" > A handler that gets a date and returns true if it is disabled. Must be a pure function |
| items | `TuiNamedDay[]` | A list of preset dates for dropdown |
| markerHandler | `TuiMarkerHandler | null` | A handler that gets date and returns null or a tuple with circled marker colors |
| min | `TuiDay | null` | Minimum date |
| max | `TuiDay | null` | Maximum date |

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm" [tuiTextfieldCleaner]="true" >
<p> If a field is optional, but unfinished field should be marked as invalid, use <code>tuiUnfinishedValidator</code> directive </p>
<tui-input-date formControlName="testValue" tuiUnfinishedValidator="Finish filling the field" [max]="max" [min]="min" > Choose a date </tui-input-date>
<tui-error formControlName="testValue" [error]="[] | tuiFieldError | async" />
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    TuiUnfinishedValidator,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputDateModule,
        TuiTextfieldControllerModule,
        TuiUnfinishedValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });

    protected readonly min = new TuiDay(2017, 0, 21);
    protected readonly max = new TuiDay(2017, 0, 28);
}
```

#### sizes

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-date formControlName="testValue" tuiTextfieldSize="s" > Choose a date </tui-input-date>
<tui-input-date formControlName="testValue" tuiTextfieldSize="m" class="tui-space_vertical-4" [tuiTextfieldLabelOutside]="true" > Choose a date </tui-input-date>
<tui-input-date formControlName="testValue" tuiTextfieldSize="l" > Choose a date </tui-input-date>
<p tuiDropdownOpen [tuiDropdown]="dropdown" >
<button tuiButton type="button" > In dropdown </button>
<ng-template #dropdown>
<tui-input-date formControlName="testValue" tuiTextfieldSize="l" > Choose a date </tui-input-date>
</ng-template>
</p>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiInputDateModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDropdown,
        TuiInputDateModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 2, 15)),
    });
}
```

#### With named dates

**Template:**
```html
<h2 class="tui-text_h4">Taiga UI usage experience</h2>
<p>
<tui-input-date [max]="max" [min]="min" [(ngModel)]="from" > Start </tui-input-date>
</p>
<p>
<tui-input-date [items]="items" [min]="from || min" [(ngModel)]="to" > Finish </tui-input-date>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateModule, TuiNamedDay} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected from: TuiDay | null = null;
    protected to: TuiDay | null = null;
    protected min = new TuiDay(2017, 9, 4);
    protected max = TuiDay.currentLocal();
    protected items = [new TuiNamedDay(TuiDay.currentLocal(), 'Until today')];
}
```

#### Date localization

**Template:**
```html
<tui-notification class="tui-space_bottom-4"> If you need to set some attributes or listen to events on native <code>input</code> , you can put it inside with <code>Textfield</code> directive as shown below </tui-notification>
<tui-input-date [formControl]="control"> Choose a date <input autocomplete="bday" tuiTextfieldLegacy />
</tui-input-date>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiNotification} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateModule, TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '/'})],
})
export default class Example {
    protected readonly control = new FormControl(new TuiDay(2017, 0, 15));
}
```

#### With native Date output

**Template:**
```html
<h3>Control's output as TuiDay (default)</h3>
<tui-input-date [formControl]="defaultControl">Choose a date</tui-input-date>
<p>Stringified control value:</p>
<p>
<code>{{ defaultControl.value }}</code>
</p>
<hr />
<h3>Control's output as native Date</h3>
<p> (see <code>toNativeDate</code> directive) </p>
<tui-input-date toNativeDate [formControl]="nativeDateControl" > Choose a date </tui-input-date>
<p>Stringified control value:</p>
<p>
<code>{{ nativeDateControl.value }}</code>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateModule} from '@taiga-ui/legacy';

import {ExampleNativeDateTransformer} from './native-date-transformer.directive';

@Component({
    standalone: true,
    imports: [ExampleNativeDateTransformer, ReactiveFormsModule, TuiInputDateModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly nativeDateControl = new FormControl(new Date(2022, 0, 26));
    protected readonly defaultControl = new FormControl(new TuiDay(2022, 0, 26));
}
```

#### Native input date

**Template:**
```html
<form [formGroup]="testForm" [tuiTextfieldCleaner]="true" >
<tui-input-date formControlName="testValue">Choose a date</tui-input-date>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import {TuiInputDateModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });
}
```

#### Dynamic date format

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-date formControlName="testValue">Choose a date</tui-input-date>
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core';
import {TUI_LANGUAGE} from '@taiga-ui/i18n';
import {TuiInputDateModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_FORMAT,
            useFactory: () =>
                inject(TUI_LANGUAGE).pipe(
                    map(({name}) => ({
                        ...TUI_DEFAULT_DATE_FORMAT,
                        mode: name === 'english' ? 'MDY' : 'DMY',
                        separator: name === 'english' ? '/' : '.',
                    })),
                ),
        },
    ],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });
}
```

Custom align content by text-align

If you want to use
MobileCalendar
with your controls add
`tuiProvideMobileCalendar()`
to the providers
