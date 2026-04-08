import {
    ChangeDetectionStrategy,
    Component,
    computed,
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
            @import './avatar-outline.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-avatar-outline-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiAvatarOutline]',
    host: {
        '[style.--t-fill]': 'value()',
        '[class._outline]': 'value()',
    },
})
export class TuiAvatarOutline {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly value = computed((value = this.tuiAvatarOutline()) =>
        value === '' ? 'var(--tui-background-accent-1)' : value,
    );

    public readonly tuiAvatarOutline = input<string | null>('');
}
