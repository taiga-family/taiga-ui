import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    INJECTOR,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement, tuiWithStyles} from '@taiga-ui/cdk';
import {TuiDropdownDirective, TuiIconsDirective} from '@taiga-ui/core';

import {TuiChevronService} from './chevron.service';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./chevron.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-chevron',
    },
})
class TuiChevronStyles {}

@Directive({
    standalone: true,
    selector: '[tuiChevron]',
    host: {
        tuiChevron: '',
    },
})
export class TuiChevronDirective implements DoCheck {
    private readonly el = tuiInjectElement();
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});
    private readonly icons = inject(TuiIconsDirective);
    private readonly handler = inject(TuiChevronService).getHandler(inject(INJECTOR));

    @Input()
    public tuiChevron: boolean | '' = '';

    protected readonly nothing = tuiWithStyles(TuiChevronStyles);

    public ngDoCheck(): void {
        this.icons.iconRight = this.handler();
        this.el.classList.toggle(
            '_chevron-rotated',
            !!this.dropdown?.dropdownBoxRef || this.tuiChevron === true,
        );
    }
}
