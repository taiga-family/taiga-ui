# InputNumberLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputNumber instead! A component to input numbers. Control value is also of number type. There are also other components to input numbers: Slider InputSlider (it uses `InputNumber` inside) InputRange (it uses `InputNumber` inside) Number formatting can be customized with TUI_NUMBER_FORMAT token.

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TuiInputNumberModule],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(5000),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-number formControlName="testValue">Type a sum</tui-input-number>
</form>
```

### Example

```html
<ng-template>
<tui-input-number [focusable]="focusable" [formControl]="control" [max]="max" [min]="min" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [step]="step" [style.text-align]="textAlign" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiNumberFormat]="{ precision: numberFormatDoc.precision(), decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), thousandSeparator: numberFormatDoc.thousandSeparator(), decimalSeparator: numberFormatDoc.decimalSeparator(), }" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContent" [tuiTextfieldFiller]="filler" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldPostfix]="postfix" [tuiTextfieldPrefix]="prefix" [tuiTextfieldSize]="size" > Type a sum </tui-input-number>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (use formControl.disable() ) |
| min | `number | null` | Min value |
| max | `number | null` | Max value |
| step | `number` | Step to increase/decrease value with keyboard and buttons on the side |

### Usage Examples

#### Currency

To input money use properties `[postfix]` or `[prefix]` . To get currency symbol use pipe tuiCurrency .

**Template:**
```html
<tui-input-number tuiHintContent="Dollar sign is commonly placed BEFORE the amount. Use [prefix]." [formControl]="control" [tuiTextfieldPrefix]="'USD' | tuiCurrency" > Type a sum </tui-input-number>
<tui-input-number tuiHintContent="Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix]." [formControl]="control" [tuiTextfieldPostfix]="'978' | tuiCurrency" > Type a sum </tui-input-number>
<tui-input-number tuiHintContent="Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix]." [formControl]="control" [tuiTextfieldPrefix]="826 | tuiCurrency" > Type a sum </tui-input-number>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiHint} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiCurrencyPipe,
        TuiHint,
        TuiInputNumberModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(100);
}
```

**LESS:**
```less
tui-input-number {
    max-inline-size: 20rem;

    &:not(:last-child) {
        margin-block-end: 1rem;
    }
}
```

#### sizes

Customize input via TextfieldControllers .

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-number formControlName="testValue" tuiTextfieldPostfix="kg" tuiTextfieldSize="s" > Potatoes <input name="potato" tuiTextfieldLegacy />
</tui-input-number>
<tui-input-number formControlName="testValue" tuiTextfieldPostfix="L" tuiTextfieldSize="m" class="tui-space_top-2" [tuiTextfieldLabelOutside]="true" > Milk <input id="milk" tuiTextfieldLegacy />
</tui-input-number>
<tui-input-number formControlName="testValue" tuiTextfieldPostfix="cm" class="tui-space_top-2" > Carrot <input placeholder="Make bunnies happy" tuiTextfieldLegacy />
</tui-input-number>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<number | null>(null),
    });
}
```

**LESS:**
```less
.input {
    color: #ffa500;
}
```

#### 8 digits after comma

Use property `[precision]` to configure a number of digits after comma.

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-number decimal="not-zero" formControlName="testValue" [tuiNumberFormat]="{precision: 8}" >
<strong>&pi;</strong> -value </tui-input-number>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputNumberModule, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(Math.PI),
    });
}
```

#### Align to the right

**Template:**
```html
<tui-input-number tuiHintContent="Using cleaner is not recommended ;)" tuiTextfieldPrefix="$" class="input" [(ngModel)]="value" > Type a sum </tui-input-number>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiHint, TuiInputNumberModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiNumberFormatProvider({decimalSeparator: '.', thousandSeparator: ','})],
})
export default class Example {
    protected value = 1234.56;
}
```

**LESS:**
```less
.input {
    text-align: end;
    inline-size: 20rem;
}
```

#### Prefix and postfix

**Template:**
```html
<tui-input-number tuiTextfieldPostfix=",00" tuiTextfieldPrefix="¥ " [tuiNumberFormat]="{precision: 0}" [(ngModel)]="value" > Type a sum </tui-input-number>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiInputNumberModule,
        TuiNumberFormat,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiNumberFormatProvider({decimalSeparator: ',', thousandSeparator: '.'})],
})
export default class Example {
    protected value = 123.56;
}
```

#### Default options override

**Template:**
```html
<tui-input-number [(ngModel)]="value">Only integers</tui-input-number>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberModule, tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumberModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiNumberFormatProvider({
            precision: 0,
        }),
        tuiInputNumberOptionsProvider({
            step: 1,
        }),
    ],
})
export default class Example {
    protected value = 237;
}
```

#### Dynamic formatting change

**Template:**
```html
<tui-input-number tuiTextfieldPrefix="$" class="input" [(ngModel)]="value" > Type a sum </tui-input-number>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core';
import {TUI_LANGUAGE} from '@taiga-ui/i18n';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useFactory: () =>
                inject(TUI_LANGUAGE).pipe(
                    map(({name}) => ({
                        ...TUI_DEFAULT_NUMBER_FORMAT,
                        thousandSeparator: name === 'english' ? ',' : ' ',
                        decimalSeparator: name === 'english' ? '.' : ',',
                    })),
                ),
        },
    ],
})
export default class Example {
    protected value = 1234.56;
}
```

#### Min / max

**Template:**
```html
<tui-input-number [max]="max" [min]="min" [tuiTextfieldLabelOutside]="true" [(ngModel)]="value" > Enter value between {{ min }} and {{ max }} <input tuiTextfieldLegacy />
</tui-input-number>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;
    protected min = 100;
    protected max = 1_000;
}
```

Custom align content by text-align
