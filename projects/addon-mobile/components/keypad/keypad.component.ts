import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    selector: 'tui-keypad',
    template: '<ng-content />',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './keypad.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--t-columns]': 'columns()',
        '(mousedown.zoneless.prevent)': '(0)',
        '(pointerdown.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadComponent {
    public readonly columns = input(3);
}
