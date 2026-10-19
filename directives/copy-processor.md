# CopyProcessor

- **Package**: `CDK`
- **Type**: directives

Directive is used to processed text when coping

### How to Use (Import)

```ts
import {TuiCopyProcessor} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiCopyProcessor,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<span [tuiCopyProcessor]="processor">
  ...
</div>
```

### Usage Examples

#### Usage

**Template:**
```html
<tui-textfield class="tui-space_bottom-2">
<label tuiLabel>Copy this</label>
<input tuiInputNumber [tuiCopyProcessor]="(numberProcessor$ | async)!" [(ngModel)]="value" />
</tui-textfield>
<div [tuiCopyProcessor]="textProcessor">Try copy this text</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopyProcessor, type TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiAlertService, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, FormsModule, TuiCopyProcessor, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    host: {
        '(copy)': 'onCopy($event)',
    },
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected value = 12345.67;

    protected numberProcessor$ = inject(TUI_NUMBER_FORMAT).pipe(
        map(
            ({decimalSeparator, thousandSeparator}) =>
                (text: string) =>
                    text.replace(decimalSeparator, '.').replaceAll(thousandSeparator, ''),
        ),
    );

    protected onCopy(event: ClipboardEvent): void {
        this.alerts.open(event.clipboardData?.getData('text/plain') ?? '').subscribe();
    }

    protected readonly textProcessor: TuiStringHandler<string> = (text) =>
        text.toUpperCase();
}
```
