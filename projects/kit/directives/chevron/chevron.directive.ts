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
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiIcons} from '@taiga-ui/core/directives/icons';

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
export class TuiChevron implements DoCheck {
    private readonly el = tuiInjectElement();
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});
    private readonly icons = inject(TuiIcons, {optional: true});
    private readonly icon = inject(TuiIcon, {optional: true});
    private readonly handler = inject(TuiChevronService).getHandler(inject(INJECTOR));

    protected readonly nothing = tuiWithStyles(TuiChevronStyles);

    @Input()
    public tuiChevron: boolean | '' = '';

    public ngDoCheck(): void {
        this.set(this.handler());
        this.el.classList.toggle(
            '_chevron-rotated',
            !!this.dropdown?.dropdownBoxRef || this.tuiChevron === true,
        );
    }

    private set(icon: string): void {
        if (this.icon) {
            this.icon.icon = icon;
        }

        if (this.icons) {
            this.icons.iconRight = icon;
        }
    }
}
