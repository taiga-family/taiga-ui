# TextareaLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of Textarea instead!

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiTextareaModule,
  ],
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl('Content'),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-textarea formControlName="testValue">Bio</tui-textarea>
</form>
```

### Example

```html
<tui-textarea [expandable]="expandable" [focusable]="focusable" [formControl]="control" [maxLength]="maxLength" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [readOnly]="readOnly" [rows]="rows" [style.max-width.rem]="20" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContent" [tuiTextfieldIcon]="icon" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" > Textfield for multiline input. It can grow with its content. <textarea tuiTextfieldLegacy [placeholder]="placeholder" ></textarea>
</tui-textarea>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state (formControl.disable()) |
| expandable | `boolean` | Control height can be expanded to show all content |
| maxLength | `number` | Use maxLength for highlighting extra characters. If you want to limit the number of characters, add '"> with native maxlength attribute. |
| rows | `number` | A number of visible rows in expandable mode |
| tuiTextfieldIcon | `PolymorpheusContent` | Icon content. If content is a string, it is used as stringified svg or a name of an icon |

### Usage Examples

#### A simple field and expandable

**Template:**
```html
<p> It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from content inside </p>
<form [formGroup]="testForm">
<tui-textarea formControlName="testValue1">Type a text</tui-textarea>
<tui-textarea formControlName="testValue2" class="tui-space_top-4" [expandable]="true" > Type a text </tui-textarea>
<tui-textarea #textarea formControlName="testValue3" class="tui-space_top-4" [expandable]="textarea.focused" > Type a text (expandable on focus) </tui-textarea>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiTextareaModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
        testValue2: new FormControl('This one can be expanded', Validators.required),
        testValue3: new FormControl(
            'This one can be expanded (expandable on focus)',
            Validators.required,
        ),
    });
}
```

#### Custom size

**Template:**
```html
<p>You can set a custom min-height for component</p>
<form [formGroup]="testForm">
<tui-textarea formControlName="testValue1" class="tui-space_bottom-4 field-large" > Type a text </tui-textarea>
<tui-textarea formControlName="testValue1" class="tui-space_bottom-4 field-small" [expandable]="false" > Type a text </tui-textarea>
<tui-textarea formControlName="testValue1" class="field-medium" [expandable]="true" [maxLength]="30" > Type a text </tui-textarea>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiTextareaModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
    });
}
```

**LESS:**
```less
.field-large {
    min-block-size: 9.375rem;
}

.field-small {
    min-block-size: 3.5rem;
}

.field-medium {
    min-block-size: 5rem;
}
```

#### With label outside

**Template:**
```html
<p> You can use label outside mode with <code>tuiLabel</code>
</p>
<form [formGroup]="testForm">
<label tuiLabel> Type a text <tui-textarea formControlName="testValue1" [tuiTextfieldLabelOutside]="true" />
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiLabel,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
    });
}
```

#### With extra characters highlight

**Template:**
```html
<div class="description"> To highlight extra characters: <ul class="steps">
<li> use <code>maxLength</code> input </li>
<li class="steps_optional"> (Optional) Don't forget to set form validator (for example, <code>Validators.maxLength</code> ) if you want to make field invalid on exceeding the characters limit </li>
</ul>
</div>
<form [formGroup]="testForm">
<tui-textarea formControlName="testValue1" tuiHintContent="it's just a joke" [expandable]="true" [maxLength]="maxLength" > This is an example with very long label text </tui-textarea>
<tui-error formControlName="testValue1" [error]="[] | tuiFieldError | async" />
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {type AfterViewInit, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiError, TuiHint, TuiLabel} from '@taiga-ui/core';
import {TuiFieldErrorPipe, tuiValidationErrorsProvider} from '@taiga-ui/kit';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

const LONG_TEXT_EXAMPLE = `
In Java: everything is an object.
In Clojure: everything is a list.
In JavaScript: everything is a terrible mistake.
`;

export function maxLengthMessageFactory(context: {requiredLength: string}): string {
    return `Maximum length — ${context.requiredLength}`;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiHint,
        TuiLabel,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Enter this!',
            maxlength: maxLengthMessageFactory,
        }),
    ],
})
export default class Example implements AfterViewInit {
    protected readonly maxLength = 97;

    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [
            Validators.required,
            Validators.maxLength(this.maxLength),
        ]),
    });

    public ngAfterViewInit(): void {
        tuiMarkControlAsTouchedAndValidate(this.testForm);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.description {
    margin-block-end: 2rem;
}

.steps {
    list-style-type: disc;
    padding-inline-start: 0.9375rem;
    margin: 1rem 0;

    &_optional {
        list-style-type: circle;
    }
}
```

#### Native attributes

**Template:**
```html
<tui-textarea [(ngModel)]="value"> Bio <textarea maxlength="97" placeholder="Write a few words about yourself" tuiTextfieldLegacy ></textarea>
</tui-textarea>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextareaModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Direction: RTL

**Template:**
```html
<tui-textarea tuiHintContent="معلومات شخصيه" tuiHintDirection="bottom-right" class="input" [maxLength]="100" [tuiTextfieldCleaner]="true" [(ngModel)]="value" > مونتى بايثون <textarea tuiTextfieldLegacy></textarea>
</tui-textarea>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiHint, TuiTextareaModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value =
        'مونتى پايثون و ساعات معروفين انهم ذى پايثونز كانو مجموعة كوميديا سرياليه من بريطانيا';
}
```

**LESS:**
```less
.input {
    inline-size: 20rem;
    direction: rtl;
}
```

#### Appearance

**Template:**
```html
<tui-textarea tuiTextfieldAppearance="neutral" [(ngModel)]="value" > Changing appearance <textarea tuiTextfieldLegacy></textarea>
</tui-textarea>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextareaModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 'Using TuiTextfieldControllerModule';
}
```

Learn more how to set some attributes or listen to events on native textarea in this
example

Text displayed in a text field when the it has no value
