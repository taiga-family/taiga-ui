# HintDescribe

- **Package**: `CORE`
- **Type**: directives

Directive to show a hint in accessible way upon keyboard focus

### How to Use (Import)

```ts
import {TuiHint} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiHint,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<button
  tuiButton
  tuiHint="I'm a hint"
  tuiHintDescribe
>
  Press me
</button>
```

### Example

```html
<input placeholder="My id is 'qwerty'" tuiHint="I will be visible upon keyboard focus" tuiHintDescribe="qwerty" [tuiHintAppearance]="appearance" [tuiHintDirection]="direction" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiHint | `PolymorpheusContent` | Content |
| tuiHintDescribe | `string` | Id of the element |

### Usage Examples

#### Basic

**Template:**
```html
<p>
<button appearance="secondary" iconStart="@tui.circle-help" tuiHint="Works well with icon buttons" tuiHintDescribe tuiHintDirection="right" tuiIconButton type="button" ></button>
</p>
<p>
<button id="button" appearance="secondary" iconStart="@tui.circle-help" tuiButton type="button" > Hint </button>
<tui-icon tuiHintDirection="right" tuiTooltip="Or with external tooltip" tuiTooltipDescribe="button" class="tui-space_top-4 tui-space_left-4" />
</p>
<tui-input tuiHintContent="This is built-in with controls" [(ngModel)]="value" > Input with accessible hint </tui-input>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiHintDirective, TuiIcon} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiButton,
        TuiHint,
        TuiHintDirective,
        TuiIcon,
        TuiInputModule,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = '';
}
```
