# Input

- **Package**: `CORE`
- **Type**: components

Input is a basic string textfield. All other input components are built on its basis.

### Example

```html
<tui-textfield #textfieldEl [content]="!textfieldEl.focused() && value ? textfield.content : ''" [filler]="filler" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [invalid]="control.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfield.cleaner" [tuiTextfieldSize]="textfield.size" > @if (textfield.size !== 's') { <label tuiLabel>I am a label</label> } <input placeholder="I am placeholder" tuiInput [disabled]="control.disabled" [readonly]="control.readonly" [(ngModel)]="value" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(ngModel)] | `string` | text value (alternatively use reactive forms) |
| [filler] | `string` | grayed out guiding text |

### Usage Examples

#### Basic

Basic string value input.

**Template:**
```html
<tui-textfield iconEnd="@tui.settings" iconStart="@tui.search" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiInput [(ngModel)]="value" />
<tui-icon icon="@tui.bell" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
<label tuiLabel> For long labels it is better to use label outside as it can wrap to multiple lines <tui-textfield #m iconEnd="@tui.settings" iconStart="@tui.search" tuiTextfieldSize="m" >
<input tuiInput [placeholder]="m.focused() ? 'I am placeholder' : 'I am a label'" [(ngModel)]="value" />
<tui-icon icon="@tui.bell" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
</label>
<tui-textfield #s iconEnd="@tui.settings" iconStart="@tui.search" tuiTextfieldSize="s" >
<input tuiInput [placeholder]="s.focused() ? 'I am placeholder' : 'I am a label'" [(ngModel)]="value" />
<tui-icon icon="@tui.bell" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInput, TuiTooltip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
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

#### States

You can change states of the component manually or it can follow state of a form control when Angular form directives are applied to it.

**Template:**
```html
<tui-textfield iconStart="@tui.search">
<label tuiLabel>Disabled</label>
<input tuiInput [disabled]="true" [(ngModel)]="value" />
<tui-icon tuiTooltip="Disabled does not show tooltip" />
</tui-textfield>
<tui-textfield iconStart="@tui.search">
<label tuiLabel>Read-only</label>
<input placeholder="I am placeholder" tuiInput [readonly]="true" [(ngModel)]="value" />
<tui-icon tuiTooltip="Readonly shows tooltip" />
</tui-textfield>
<tui-textfield iconStart="@tui.search" [invalid]="true" >
<label tuiLabel>Invalid</label>
<input placeholder="I am placeholder" tuiInput [(ngModel)]="value" />
<tui-icon tuiTooltip="Can also follow Angular validation" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInput, TuiTooltip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 'Test';
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

#### Dropdown

For more complex dropdown controls it is recommended to use dedicated components, such as Select or ComboBox

**Template:**
```html
<tui-textfield iconEnd="@tui.search">
<label tuiLabel>Start typing</label>
<input #input placeholder="I am placeholder" tuiInput [(ngModel)]="value" />
<tui-icon tuiTooltip="Autocomplete suggestions" /> @if (items | tuiFilterByInput; as filtered) { @if (input.value && filtered.length) { <tui-data-list-wrapper *tuiDropdown [items]="filtered" /> } } </tui-textfield>
<tui-textfield>
<label tuiLabel>Select option</label>
<input placeholder="I am placeholder" tuiInput tuiSelectLike [(ngModel)]="value" />
<tui-icon tuiTooltip="Fixed choice select" />
<tui-data-list-wrapper *tuiDropdown [items]="items" />
</tui-textfield>
<tui-textfield tuiChevron tuiDropdownDirection="top" tuiDropdownLimitWidth="auto" >
<label tuiLabel>Dropdown settings</label>
<input placeholder="I am placeholder" tuiInput tuiSelectLike [(ngModel)]="value" />
<tui-icon tuiTooltip="Fixed choice select" />
<tui-data-list-wrapper *tuiDropdown [items]="items" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDropdown,
    TuiFilterByInputPipe,
    TuiIcon,
    TuiInput,
    TuiSelectLike,
} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
        TuiFilterByInputPipe,
        TuiIcon,
        TuiInput,
        TuiSelectLike,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
    protected readonly items = inject<readonly string[]>('Pythons' as any);
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

#### InputPassword

An example of a password textfield with an interactive icon to toggle the input type.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Click icon to toggle</label>
<input placeholder="I am placeholder" tuiInput type="password" [(ngModel)]="value" />
<tui-icon tuiPassword />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiPassword} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInput, TuiPassword],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Custom cleaner

If you need to perform some additional actions or logging when user clicks cleaner button.

**Template:**
```html
<tui-textfield [tuiTextfieldCleaner]="false">
<input #input placeholder="Input value" tuiInput [(ngModel)]="value" /> @if (value) { <button tabindex="-1" tuiButtonX (click)="clear()" > Clear </button> } </tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonX, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButtonX, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';

    protected clear(): void {
        console.info('The custom clear handler has been invoked');

        this.value = '';
    }
}
```

#### Mask

We recommends using Maskito for input masking. Maskito is supported by Taiga Family team and it is already peer-dependency of `@taiga-ui/kit` library. This example demonstrates how to use built-in Number mask with postfix and augment it by several Maskito plugins.

**Template:**
```html
<tui-textfield [tuiTextfieldCleaner]="false">
<label tuiLabel>Flat angle</label>
<input #input placeholder="3,14" tuiInput [maskito]="options" [(ngModel)]="value" /> @if (value) { <button tabindex="-1" tuiButtonX (click)="clear()" > Clear </button> } </tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {
    maskitoAddOnFocusPlugin,
    maskitoCaretGuard,
    maskitoNumber,
    maskitoRemoveOnBlurPlugin,
} from '@maskito/kit';
import {TuiButtonX, TuiInput} from '@taiga-ui/core';

const postfix = ' rad';

const numberOptions = maskitoNumber({
    postfix,
    decimalSeparator: ',',
    maximumFractionDigits: 8,
    min: 0,
});

@Component({
    imports: [FormsModule, MaskitoDirective, TuiButtonX, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = Math.PI.toFixed(8);

    protected readonly options: MaskitoOptions = {
        ...numberOptions,
        plugins: [
            ...numberOptions.plugins,
            maskitoCaretGuard((value) => [0, value.length - postfix.length]),
            maskitoAddOnFocusPlugin(postfix),
            maskitoRemoveOnBlurPlugin(postfix),
        ],
    };

    protected clear(): void {
        this.value = postfix;
    }
}
```

#### Long label

On mobile, especially when font scaling is enabled for accessibility, you have limited space and might want to make sure the entire label is visible when the user fills it in. You can enable wrapping so it can wrap onto multiple lines.

**Template:**
```html
<tui-textfield>
<label tuiFade tuiLabel > Very long label that you must display without truncating </label>
<input tuiFade tuiInput [(ngModel)]="value" />
</tui-textfield>
<tui-textfield multi>
<label tuiFade tuiLabel > Very long label that you must display without truncating </label>
<input tuiInputChip [(ngModel)]="chips" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInput} from '@taiga-ui/core';
import {TuiFade, TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiFade, TuiInput, TuiInputChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 'Single string';
    protected chips = ['Single string'];
}
```

**LESS:**
```less
:host {
    display: flex;
    inline-size: 17rem;
    flex-direction: column;
    gap: 1rem;

    tui-textfield[data-focus='true'] {
        align-items: center;

        [tuiLabel] {
            transition: none;
            white-space: normal;
        }
    }
}
```
