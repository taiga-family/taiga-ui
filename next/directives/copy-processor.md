# CopyProcessor

- **Package**: `CDK`
- **Type**: directives

Directive is used to processed text when coping

### Usage Examples

#### Usage

**Template:**
```html
<tui-textfield class="tui-space_bottom-2">
<label tuiLabel>Copy this</label>
<input tuiInputNumber [tuiCopyProcessor]="numberProcessor()" [(ngModel)]="value" />
</tui-textfield>
<div [tuiCopyProcessor]="textProcessor">Try copy this text</div>
```

**TypeScript:**
```ts
import {Component, computed, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopyProcessor, type TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiNotificationService, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCopyProcessor, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    host: {'(copy)': 'onCopy($event)'},
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected value = 12345.67;
    protected format = inject(TUI_NUMBER_FORMAT);

    protected readonly numberProcessor = computed(
        ({decimalSeparator, thousandSeparator} = this.format()) =>
            (text: string) =>
                text.replace(decimalSeparator, '.').replaceAll(thousandSeparator, ''),
    );

    protected onCopy(event: ClipboardEvent): void {
        this.alerts.open(event.clipboardData?.getData('text/plain') ?? '').subscribe();
    }

    protected readonly textProcessor: TuiStringHandler<string> = (text) =>
        text.toUpperCase();
}
```
