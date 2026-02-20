import"./chunk-HU6DUUP4.js";var o=`import {Component, computed, inject} from '@angular/core';
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

    protected numberProcessor = computed(
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
`;export{o as default};
