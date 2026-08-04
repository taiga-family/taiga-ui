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
    // Encapsulation.None + a version-scoped wrapper lets the pad style its projected
    // `<button>`/`<a>` children directly, so consumers drop native elements in without a
    // per-key directive (same approach as `tui-segmented`).
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
        // A tap anywhere on the pad (keys or the gaps between them) must not blur the
        // field the keypad drives — prevent it once here rather than on each key. iOS
        // Safari ignores preventDefault on pointerdown for focus, so mousedown is also
        // prevented: it reliably keeps the field focused across browsers.
        '(pointerdown.zoneless.prevent)': '(0)',
    },
})
export class TuiKeypadComponent {
    public readonly columns = input(3);
}
