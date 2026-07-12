import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TUI_DEFAULT_KEYPAD,
    TuiKeypad,
    type TuiKeypadCell,
    type TuiKeypadKey,
} from '@taiga-ui/addon-mobile';
import {TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly examples = [
        'Basic keypad',
        'Customize',
        'Collapsible',
        'Fluid',
        'Calculator',
        'Phone Dialer',
        'Options provider',
    ];

    protected disabled = false;
    protected readonly disabledVariants = [false, true];
    protected readonly value = signal('');
    protected keys = TUI_DEFAULT_KEYPAD;

    protected readonly keysVariants: ReadonlyArray<
        ReadonlyArray<readonly TuiKeypadCell[]>
    > = [
        TUI_DEFAULT_KEYPAD,
        [
            ['clear', '(', ')', '÷'],
            ['7', '8', '9', '×'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', 'backspace', 'enter'],
        ],
        [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['*', '0', '#'],
        ],
    ];

    protected onKey(key: TuiKeypadKey): void {
        this.alerts.open(`Key clicked: ${key}`).subscribe();
    }
}
