import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {tuiGetIconMode} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./icon-badge.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-icon-badge',
    },
})
class TuiIconBadgeStyles {}

@Directive({
    standalone: true,
    selector: 'tui-icon[badge]',
    host: {
        tuiIconBadge: '',
        '[style.--t-icon-badge]': 'badgeSrc()',
        '[attr.data-icon-badge]': 'badgeMode()',
    },
})
export class TuiIconBadge {
    private readonly icon = inject(TuiIcon);

    protected readonly nothing = tuiWithStyles(TuiIconBadgeStyles);
    protected readonly badgeSrc = signal<string | null>(null);
    protected readonly badgeMode = signal<string | null>(null);

    @Input()
    public set badge(icon: string) {
        this.badgeSrc.set(this.icon.resolve(icon));
        this.badgeMode.set(tuiGetIconMode(icon));
    }
}
