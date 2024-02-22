import {Component, HostListener, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure, TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiAlertService} from '@taiga-ui/core';
import {isObservable, map, Observable, of} from 'rxjs';

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

    protected value = 12345.67;

    @HostListener('copy', ['$event'])
    protected onCopy(event: ClipboardEvent): void {
        this.alerts.open(event.clipboardData?.getData('text/plain') ?? '').subscribe();
    }

    @tuiPure
    get numberProcessor$(): Observable<TuiStringHandler<string>> {
        const format = isObservable(this.format) ? this.format : of(this.format);

        return format.pipe(
            map(
                format => text =>
                    text
                        .replace(format.decimalSeparator, '.')
                        .replaceAll(new RegExp(format.thousandSeparator, 'g'), ''),
            ),
        );
    }

    protected readonly textProcessor: TuiStringHandler<string> = text =>
        text.toUpperCase();
}
