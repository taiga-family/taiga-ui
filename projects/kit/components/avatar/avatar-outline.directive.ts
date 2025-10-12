import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './avatar-outline.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-avatar-outline'},
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
