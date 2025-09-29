import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    effect,
    inject,
    InjectionToken,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TUI_ICON_END} from '@taiga-ui/core/tokens';

export const TUI_CHEVRON = new InjectionToken(ngDevMode ? 'TUI_CHEVRON' : '', {
    factory: () => '@tui.chevron-down',
});

@Component({
    template: '',
    styleUrls: ['./chevron.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-chevron'},
})
class Styles {}

@Directive({
    selector: '[tuiChevron]',
    providers: [provideStyles(Styles), tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
    hostDirectives: [TuiWithStyles],
    host: {tuiChevron: ''},
})
export class TuiChevron {
    private readonly el = tuiInjectElement();
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});

    protected readonly toggle = effect(() =>
        this.el.classList.toggle(
            '_chevron-rotated',
            this.tuiChevron() || (this.tuiChevron() === '' && !!this.dropdown?.ref()),
        ),
    );

    public readonly tuiChevron = input<boolean | ''>('');
}
