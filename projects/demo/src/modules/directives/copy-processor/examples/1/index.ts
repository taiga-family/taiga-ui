import {Component, HostListener, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {NumberFormatSettings, TUI_NUMBER_FORMAT, TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-copy-processor-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCopyProcessorExample1 {
    value = 12345.67;

    constructor(
        @Inject(TUI_NUMBER_FORMAT) private readonly format: NumberFormatSettings,
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    @HostListener('copy', ['$event'])
    onCopy(event: ClipboardEvent): void {
        this.alertService
            .open(event.clipboardData?.getData('text/plain') ?? '')
            .subscribe();
    }

    readonly processor: TuiStringHandler<string> = text =>
        text
            .replace(this.format.decimalSeparator, '.')
            .replace(new RegExp(this.format.thousandSeparator, 'g'), '');
}
