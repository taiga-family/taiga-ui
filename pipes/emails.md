# Emails

- **Package**: `KIT`
- **Type**: pipes

Pipe for creating autocomplete when entering email addresses

### Usage Examples

#### Example

Standard and custom addresses

**Template:**
```html
<p> @if (default | tuiEmails; as emails) { <tui-textfield>
<label tuiLabel>Standard addresses</label>
<input tuiInput [(ngModel)]="default" /> @if (emails.length) { <tui-data-list-wrapper *tuiDropdown [items]="emails" /> } </tui-textfield> } </p>
<p> @if (custom | tuiEmails: emails; as emails) { <tui-textfield>
<label tuiLabel>Custom addresses</label>
<input tuiInput [(ngModel)]="custom" /> @if (emails.length) { <tui-data-list-wrapper *tuiDropdown [items]="emails" /> } </tui-textfield> } </p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiInput, TuiLabel} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiEmailsPipe} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiEmailsPipe,
        TuiInput,
        TuiLabel,
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
