# HintManual

- **Package**: `CORE`
- **Type**: directives

Directive to show a hint manually

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
  type="button"
  tuiHint="Custom host with text tooltip"
  [tuiHintManual]="true"
>
  Press me
</button>

<button
  tuiButton
  type="button"
  [tuiHint]="template"
  [tuiHintManual]="true"
>
  Press that ↑
</button>

<ng-template #template>Reusable template</ng-template>
```

### Example

```html
<button tuiButton tuiHint="It says 'Hi all!' into console" type="button" [tuiHintAppearance]="appearance" [tuiHintDirection]="direction" [tuiHintManual]="show" (click)="sayHi()" > A strange button </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiHint | `PolymorpheusContent` | Content |
| tuiHintManual | `boolean` | Show/hide hint |

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
import {TuiButton, TuiHint, TuiHintDirective, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiButton, TuiHint, TuiHintDirective, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
