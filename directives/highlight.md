# Highlight

- **Package**: `KIT`
- **Type**: directives

Directive is used to highlight text in element. You can configure the directive with `TUI_HIGHLIGHT_OPTIONS` token. Allowed options: highlightColor: The default color for the highlight. Use function `tuiHighlightOptionsProvider` to provide new value of this token. Does not work with inline elements

### How to Use (Import)

```ts
import {TuiHighlight} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiHighlight,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div
  [tuiHighlight]="query"
  [tuiHighlightColor]="'#228B22'"
>
  ...
</div>
```

### Usage Examples

#### Usage

**Template:**
```html
<tui-input tuiTextfieldIconLeft="@tui.search" [(ngModel)]="search" > Search </tui-input>
<table class="tui-space_top-4">
<thead>
<tr>
<th>Member</th>
<th>Nickname</th>
<th>Fate</th>
</tr>
</thead>
<tbody>
<tr *ngFor="let row of rows">
<td *ngFor="let cell of row" [tuiHighlight]="search" [tuiHighlightColor]="'#228B22'" > {{ cell }} </td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHighlight} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiHighlight,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected search = '';

    protected readonly rows = [
        ['King Arthur', '-', 'Arrested'],
        ['Sir Bedevere', 'The Wise', 'Arrested'],
        ['Sir Lancelot', 'The Brave', 'Arrested'],
        ['Sir Galahad', 'The Chaste', 'Killed'],
        ['Sir Robin', 'The Not-Quite-So-Brave-As-Sir-Lancelot', 'Killed'],
    ];
}
```

**LESS:**
```less
:host {
    display: block;
}

table {
    inline-size: 100%;
    border-spacing: 0;
}

th,
td {
    text-align: start;
    border: 1px solid var(--tui-border-normal);
    block-size: 3.375rem;
    padding: 0 1rem;
    vertical-align: middle;
}
```
