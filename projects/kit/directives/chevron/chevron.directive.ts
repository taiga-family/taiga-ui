import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
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
export class TuiChevron implements DoCheck {
    private readonly el = tuiInjectElement();
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});

    protected readonly nothing = tuiWithStyles(TuiChevronStyles);

    @Input()
    public tuiChevron: boolean | '' = '';

    public ngDoCheck(): void {
        this.el.classList.toggle(
            '_chevron-rotated',
            !!this.dropdown?.dropdownBoxRef || this.tuiChevron === true,
        );
    }
}
