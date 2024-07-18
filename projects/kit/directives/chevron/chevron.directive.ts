import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    effect,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiCreateToken,
    tuiProvide,
    tuiWithStyles,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TUI_ICON_END} from '@taiga-ui/core/tokens';

export const TUI_CHEVRON = tuiCreateToken('@tui.chevron-down');

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./chevron.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-chevron'},
})
class TuiChevronStyles {}

@Directive({
    standalone: true,
    selector: '[tuiChevron]',
    providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
    host: {tuiChevron: ''},
})
export class TuiChevron {
    private readonly el = tuiInjectElement();
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});

    protected readonly nothing = tuiWithStyles(TuiChevronStyles);
    protected readonly toggle = effect(() =>
        this.el.classList.toggle(
            '_chevron-rotated',
            this.chevron() || (this.chevron() === '' && !!this.dropdown?.ref()),
        ),
    );

    // TODO: refactor to signal inputs after Angular update
    public readonly chevron = signal<boolean | ''>('');

    @Input()
    public set tuiChevron(chevron: boolean | '') {
        this.chevron.set(chevron);
    }
}
