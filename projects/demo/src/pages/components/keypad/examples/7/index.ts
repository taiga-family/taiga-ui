import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad, tuiKeypadOptionsProvider} from '@taiga-ui/addon-mobile';

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
    protected readonly value = signal('');
}
