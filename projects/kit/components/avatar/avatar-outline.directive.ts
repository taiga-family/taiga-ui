import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./avatar-outline.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-avatar-outline',
    },
})
class TuiAvatarOutlineStyles {}

@Directive({
    standalone: true,
    selector: '[tuiAvatarOutline]',
    host: {
        '[style.--t-fill]': 'value',
        '[class._outline]': 'value',
    },
})
export class TuiAvatarOutlineDirective {
    protected readonly nothing = tuiWithStyles(TuiAvatarOutlineStyles);

    @Input()
    public tuiAvatarOutline: string | null = '';

    protected get value(): string | null {
        return this.tuiAvatarOutline === ''
            ? 'var(--tui-background-accent-1)'
            : this.tuiAvatarOutline;
    }
}
