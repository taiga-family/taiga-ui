import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    selector: 'tui-compass',
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/compass.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--t-degrees.deg]': 'degrees()',
    },
})
export class TuiCompass {
    public readonly degrees = input(NaN);
}
