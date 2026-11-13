# Emails

- **Package**: `KIT`
- **Type**: pipes

Pipe for creating autocomplete when entering email addresses

### How to Use (Import)

```ts
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiEmailsPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    NgIf,
    FormsModule,
    TuiEmailsPipe,
    TuiInputModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-input
  *ngIf="value | tuiEmails as emails"
  [(ngModel)]="value"
>
  Введите адрес
  <ng-template
    *ngIf="emails.length"
    [tuiDataList]
  >
    <tui-data-list-wrapper [items]="emails"></tui-data-list-wrapper>
  </ng-template>
</tui-input>
```

### Usage Examples

#### Example

**Template:**
```html
<p>
<tui-input *ngIf="default | tuiEmails as emails" [(ngModel)]="default" > Standard addresses <ng-template *ngIf="emails.length" tuiDataList >
<tui-data-list-wrapper [items]="emails" />
</ng-template>
</tui-input>
</p>
<p>
<tui-input *ngIf="custom | tuiEmails: emails as emails" [(ngModel)]="custom" > Custom addresses <ng-template *ngIf="emails.length" tuiDataList >
<tui-data-list-wrapper [items]="emails" />
</ng-template>
</tui-input>
</p>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiEmailsPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiDataList,
        TuiDataListWrapper,
        TuiEmailsPipe,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected default = '';
    protected custom = '';

    protected readonly emails = ['google.com', 'github.com', 'taiga-ui.dev'];
}
```
