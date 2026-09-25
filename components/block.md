# Block

- **Package**: `KIT`
- **Type**: components

`Block` is a special presentation of a checkbox/radiobutton which can display actual control or be a control itself

### Example

```html
<label [appearance]="appearance.appearance" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceMode]="appearance.mode" [tuiAppearanceState]="appearance.state" [tuiBlock]="size" >
<span tuiTitle> tuiTitle <span tuiSubtitle>tuiSubtitle</span>
</span>
<input tuiSwitch type="checkbox" [(ngModel)]="value" />
</label>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiBlock] | `TuiSizeL | TuiSizeS` | — |

### Usage Examples

#### Sizes

**Template:**
```html
<form [formGroup]="form">
<label tuiBlock="s"> Qiwi <input formControlName="testValue2" size="s" tuiCheckbox type="checkbox" />
</label>
<label tuiBlock="m"> Oranges <input formControlName="testValue3" size="s" tuiCheckbox type="checkbox" />
</label>
<label tuiBlock> Watermelons <input formControlName="testValue4" tuiCheckbox type="checkbox" />
</label>
</form>
<form [formGroup]="form">
<label tuiBlock="s">
<input formControlName="testValue5" size="s" tuiRadio type="radio" value="qiwi" />
<span tuiTitle>
<span> Qiwi <tui-icon tuiTooltip="Not the bird" />
</span>
<span tuiSubtitle>Green and sour</span>
</span>
</label>
<label tuiBlock="m">
<input formControlName="testValue5" size="s" tuiRadio type="radio" value="oranges" />
<span tuiTitle>
<span> Oranges <tui-icon tuiTooltip="Famously don't rhyme with things" />
</span>
<span tuiSubtitle>Best for fresh squeeze</span>
</span>
</label>
<label tuiBlock>
<input formControlName="testValue5" tuiRadio type="radio" value="watermelons" />
<span tuiTitle>
<span> Watermelons <tui-icon tuiTooltip="Preferably seedless" />
</span>
<span tuiSubtitle>Cool and refreshing</span>
</span>
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, TuiIcon, TuiRadio, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiBlock,
        TuiCheckbox,
        TuiIcon,
        TuiRadio,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl({value: false, disabled: true}),
        testValue3: new FormControl({value: true, disabled: true}),
        testValue4: new FormControl(false),
        testValue5: new FormControl(),
    });
}
```

**LESS:**
```less
form {
    display: flex;
    inline-size: max-content;
    align-items: flex-start;
    gap: 1rem;
    margin-block-end: 1rem;
}
```

#### Groups

**Template:**
```html
<h3 class="title">Horizontal group</h3>
<form tuiGroup class="group" [collapsed]="true" [formGroup]="form" >
<label tuiBlock>
<input formControlName="value" tuiRadio type="radio" value="oranges" /> Oranges </label>
<label tuiBlock>
<input formControlName="value" tuiRadio type="radio" value="apples" /> Apples </label>
<label tuiBlock>
<input formControlName="value" tuiRadio type="radio" value="pineapples" />
<span tuiFade>Pineapples</span>
</label>
</form>
<h3 class="title">Vertical group</h3>
<form orientation="vertical" tuiGroup class="group" [collapsed]="true" [formGroup]="form" >
<label tuiBlock>
<input formControlName="value" tuiRadio type="radio" value="oranges" /> Oranges </label>
<label tuiBlock>
<input formControlName="value" tuiRadio type="radio" value="apples" /> Apples </label>
<label tuiBlock>
<input formControlName="value" tuiRadio type="radio" value="pineapples" /> Pineapples </label>
</form>
<h3 class="title">Without checkbox indicators</h3>
<form tuiGroup class="group" [collapsed]="true" [formGroup]="form" >
<label appearance="" tuiBlock >
<input formControlName="value" tuiBlock type="radio" value="oranges" /> Oranges </label>
<label appearance="" tuiBlock >
<input formControlName="value" tuiBlock type="radio" value="apples" /> Apples </label>
<label appearance="" tuiBlock >
<input formControlName="value" tuiBlock type="radio" value="pineapples" /> Pineapples </label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiRadio} from '@taiga-ui/core';
import {TuiBlock, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiBlock, TuiFade, TuiGroup, TuiRadio],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({value: new FormControl('orange')});
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.group {
    max-inline-size: 33rem;
    margin-block-end: 1.5rem;
}

.title {
    font: var(--tui-typography-heading-h5);
    margin: 0 0 1rem;
}
```

#### Custom

**Template:**
```html
<form [formGroup]="form">
<label tuiBlock>
<div tuiAvatar="@tui.user">
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</div> Heading <input formControlName="testValue1" tuiCheckbox type="checkbox" />
</label>
<label appearance="" tuiBlock >
<div tuiAvatar="@tui.user">
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</div>
<span tuiTitle [style.margin-block.rem]="-0.5" >
<span tuiSubtitle>Taiga UI</span> Alex Inkin </span>
<tui-icon icon="@tui.heart" />
<input formControlName="testValue2" tuiBlock type="checkbox" />
</label>
<label appearance="secondary" tuiBlock >
<span tuiTitle> Heading <span tuiSubtitle> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque incidunt itaque iusto natus quaerat quia similique veniam? </span>
</span>
<input formControlName="testValue3" tuiSwitch type="checkbox" />
</label>
<label tuiBlock="m" [style.align-self]="'stretch'" >
<input formControlName="testValue3" size="s" tuiSwitch type="checkbox" /> Enable <tui-icon tuiTooltip="Enabling this will cause trouble" [style.margin-inline-start]="'auto'" />
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBlock, TuiSwitch, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAvatar,
        TuiBlock,
        TuiCheckbox,
        TuiIcon,
        TuiSwitch,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
        testValue4: new FormControl(false),
    });
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}
```
