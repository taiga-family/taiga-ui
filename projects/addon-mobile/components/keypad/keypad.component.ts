import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    input,
} from '@angular/core';

import {TuiKeypadButton} from './keypad-button.component';

@Component({
    selector: 'tui-keypad',
    template: '<ng-content />',
    styleUrl: './keypad.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-columns]': 'columns()',
        '[style.--t-rows]': 'rows()',
        // A tap anywhere on the pad (keys or the gaps between them) must not blur the
        // field the keypad drives — prevent it once here rather than on each key
        '(pointerdown.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadComponent {
    private readonly buttons = contentChildren(TuiKeypadButton);

    protected readonly rows = computed(() =>
        Math.max(1, Math.ceil(this.buttons().length / Math.max(1, this.columns()))),
    );

    public readonly columns = input(3);
}
