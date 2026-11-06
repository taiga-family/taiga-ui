# HintDescribe

- **Package**: `CORE`
- **Type**: directives

Directive to show a hint in accessible way upon keyboard focus

### Example

```html
<input placeholder="My id is 'qwerty'" tuiHint="I will be visible upon keyboard focus" tuiHintDescribe="qwerty" [tuiHintAppearance]="hint.appearance" [tuiHintCentered]="hint.centered" [tuiHintDirection]="hint.direction" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiHint] | `PolymorpheusContent` | content of the hint |
| [tuiHintDescribe] | `string` | ID of the related element |

### Usage Examples

#### Basic

**Template:**
```html
<p>
<button appearance="secondary" iconStart="@tui.circle-help" tuiHint="Works well with icon buttons" tuiHintDescribe tuiHintDirection="end" tuiIconButton type="button" ></button>
</p>
<p>
<button id="button" appearance="secondary" iconStart="@tui.circle-help" tuiButton type="button" > Hint </button>
<tui-icon tuiHintDirection="end" tuiTooltip="Or with external tooltip" tuiTooltipDescribe="button" class="tui-space_top-4 tui-space_left-4" />
</p>
<tui-textfield>
<input tuiInput [(ngModel)]="value" />
<label tuiLabel>Input with accessible hint</label>
<tui-icon tuiTooltip="This is built-in with controls" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiHint, TuiIcon, TuiInput, TuiTooltip],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = '';
}
```
