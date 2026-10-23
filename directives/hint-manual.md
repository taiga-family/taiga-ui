# HintManual

- **Package**: `CORE`
- **Type**: directives

Directive to show a hint manually

### Example

```html
<button tuiButton tuiHint="It says 'Hi all!' into console" type="button" [tuiHintAppearance]="hint.appearance" [tuiHintCentered]="hint.centered" [tuiHintDirection]="hint.direction" [tuiHintManual]="show" (click)="sayHi()" > A strange button </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiHint] | `PolymorpheusContent` | content of the hint |
| [tuiHintManual] | `boolean` | show/hide the hint |

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton type="button" [tuiHint]="template" [tuiHintManual]="hintShown" (click)="toggleHint()" > Hint </button>
<ng-template #template> Use <a appearance="action-grayscale" routerLink="hint" tuiLink tuiTheme="dark" class="link" > Hint </a>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiButton, TuiHint, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected hintShown = false;

    protected toggleHint(): void {
        this.hintShown = !this.hintShown;
    }
}
```

**LESS:**
```less
:host {
    display: block;
}
```
