import {Component, HostListener, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-copy-processor-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCopyProcessorExample1 {
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly alerts = inject(TuiAlertService);

    value = 12345.67;

    @HostListener('copy', ['$event'])
    onCopy(event: ClipboardEvent): void {
        this.alerts.open(event.clipboardData?.getData('text/plain') ?? '').subscribe();
    }

    readonly numberProcessor: TuiStringHandler<string> = text =>
        text
            .replace(this.format.decimalSeparator, '.')
            .replaceAll(new RegExp(this.format.thousandSeparator, 'g'), '');

    readonly textProcessor: TuiStringHandler<string> = text => text.toUpperCase();
}
