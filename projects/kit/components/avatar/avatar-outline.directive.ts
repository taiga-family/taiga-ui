import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./avatar-outline.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-avatar-outline'},
})
class Styles {}

@Directive({
    selector: '[tuiAvatarOutline]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        '[style.--t-fill]': 'value()',
        '[class._outline]': 'value()',
    },
})
export class TuiAvatarOutline {
    protected readonly value = computed((value = this.tuiAvatarOutline()) =>
        value === '' ? 'var(--tui-background-accent-1)' : value,
    );

    public readonly tuiAvatarOutline = input<string | null>('');
}
