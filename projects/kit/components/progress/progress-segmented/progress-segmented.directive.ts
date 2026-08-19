import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './progress-segmented.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-progress-segmented-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiProgressBar][segments]',
    host: {
        class: '_segmented',
        '[style.--t-segment-width]': '1 / segments()',
    },
})
export class TuiProgressSegmented {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly segments = input(1);
}
