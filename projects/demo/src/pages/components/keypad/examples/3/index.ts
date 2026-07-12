import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiKeypad,
    type TuiKeypadKey,
    tuiKeypadOptionsProvider,
} from '@taiga-ui/addon-mobile';
import {TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        tuiKeypadOptionsProvider({
            keys: [
                ['1', '2', '3'],
                ['4', '5', '6'],
                ['7', '8', '9'],
                ['clear', '0', 'enter'],
            ],
            icons: {
                backspace: '@tui.delete',
                clear: '@tui.trash',
                enter: '@tui.check',
            },
        }),
    ],
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly value = signal('');

    protected onKey(key: TuiKeypadKey): void {
        if (key === 'enter') {
            this.alerts.open(`Entered: ${this.value() || '—'}`).subscribe();
        } else if (key === 'clear') {
            this.alerts.open('Cleared').subscribe();
        }
    }
}
