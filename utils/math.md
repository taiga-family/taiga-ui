# Math

- **Package**: `CDK`
- **Type**: components/utils

A set of utils to calculate math

```ts
import {clamp} from '@taiga-ui/cdk';

// ...
clamped = clamp(value, min, max);
// ...
```

### Usage Examples

#### round

round, floor and ceil with fixed common problems of the native implementation

**Template:**
```html
<p>{{ rounded }} = round(value, precision);</p>
<p>{{ floored }} = floor(value, precision);</p>
<p>{{ ceiled }} = ceil(value, precision);</p>
<form [formGroup]="parametersForm">
<div class="parameters">
<tui-textfield class="tui-space_top-2">
<label tuiLabel>value</label>
<input formControlName="value" tuiInputNumber [tuiNumberFormat]="{precision: 3}" />
</tui-textfield>
<tui-textfield class="tui-space_top-2">
<label tuiLabel>precision</label>
<input formControlName="precision" tuiInputNumber />
</tui-textfield>
</div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCeil, tuiFloor, tuiRound} from '@taiga-ui/cdk';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiNumberFormat, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(1.005),
        precision: new FormControl(2),
    });

    protected get rounded(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiRound(value ?? 1.005, precision ?? 2);
    }

    protected get floored(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiFloor(value ?? 1.005, precision ?? 2);
    }

    protected get ceiled(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiCeil(value ?? 1.005, precision ?? 2);
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```

#### inRange

Checks if the value is in range

**Template:**
```html
{{ ranged }} = inRange(value, fromInclude, toExclude); <form [formGroup]="parametersForm">
<div class="parameters"> @for (parameter of ['value', 'fromInclude', 'toExclude']; track parameter) { <tui-textfield class="tui-space_top-2">
<label tuiLabel>{{ parameter }}</label>
<input tuiInputNumber [formControlName]="parameter" />
</tui-textfield> } </div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInRange} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(13),
        fromInclude: new FormControl(5),
        toExclude: new FormControl(42),
    });

    protected get ranged(): boolean {
        const {value, fromInclude, toExclude} = this.parametersForm.value;

        return tuiInRange(value ?? 13, fromInclude ?? 5, toExclude ?? 42);
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```

#### normalizeToIntNumber

Normalizes any number to an integer within inclusive range

**Template:**
```html
{{ normalized }} = normalizeToIntNumber(value, min, max); <form [formGroup]="parametersForm">
<div class="parameters"> @for (parameter of ['value', 'min', 'max']; track parameter) { <tui-textfield class="tui-space_top-2">
<label tuiLabel>{{ parameter }}</label>
<input tuiInputNumber [formControlName]="parameter" />
</tui-textfield> } </div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNormalizeToIntNumber} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(0),
        min: new FormControl(5),
        max: new FormControl(42),
    });

    protected get normalized(): number {
        const {value, min, max} = this.parametersForm.value;

        return tuiNormalizeToIntNumber(value ?? 0, min ?? 5, max ?? 42);
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```

#### quantize

Rounds a number to the closest value in a fixed discrete series

**Template:**
```html
{{ quantized }} = quantize(value, quantum); <form [formGroup]="parametersForm">
<div class="parameters"> @for (parameter of ['value', 'quantum']; track parameter) { <tui-textfield class="tui-space_top-2">
<label tuiLabel>{{ parameter }}</label>
<input tuiInputNumber [formControlName]="parameter" />
</tui-textfield> } </div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiQuantize} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(3),
        quantum: new FormControl(2),
    });

    protected get quantized(): number {
        const {value, quantum} = this.parametersForm.value;

        return tuiQuantize(value ?? 3, quantum ?? 2);
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```

#### clamp

Clamps a value between two inclusive limits

**Template:**
```html
{{ clamped }} = clamp(value, min, max); <form [formGroup]="parametersForm">
<div class="parameters"> @for (parameter of ['value', 'min', 'max']; track parameter) { <tui-textfield class="tui-space_top-2">
<label tuiLabel>{{ parameter }}</label>
<input tuiInputNumber [formControlName]="parameter" />
</tui-textfield> } </div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(0),
        min: new FormControl(5),
        max: new FormControl(42),
    });

    protected get clamped(): number {
        const {value, min, max} = this.parametersForm.value;

        return tuiClamp(value ?? 0, min ?? 5, max ?? 42);
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```

- Import into component and use:
