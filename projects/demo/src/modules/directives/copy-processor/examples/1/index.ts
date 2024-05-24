import {AsyncPipe} from '@angular/common';
import {Component, HostListener, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TuiCopyProcessorDirective} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiAlertService} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiInputNumberModule, TuiCopyProcessorDirective, FormsModule, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly alerts = inject(TuiAlertService);

    protected value = 12345.67;

    protected numberProcessor$ = this.format.pipe(
        map(
            format => (text: string) =>
                text
                    .replace(format.decimalSeparator, '.')
                    .replaceAll(new RegExp(format.thousandSeparator, 'g'), ''),
        ),
    );

    @HostListener('copy', ['$event'])
    protected onCopy(event: ClipboardEvent): void {
        this.alerts.open(event.clipboardData?.getData('text/plain') ?? '').subscribe();
    }

    protected readonly textProcessor: TuiStringHandler<string> = text =>
        text.toUpperCase();
}
