import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'tui-keypad',
    template: '<ng-content />',
    styleUrl: './keypad.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-columns]': 'columns()',
        // A tap anywhere on the pad (keys or the gaps between them) must not blur the
        // field the keypad drives — prevent it once here rather than on each key
        '(pointerdown.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadComponent {
    public readonly columns = input(3);
}
