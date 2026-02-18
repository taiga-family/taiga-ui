import {computed, Directive, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {
    TUI_DROPDOWN_COMPONENT,
    TuiDropdownDirective,
} from '@taiga-ui/core/directives/dropdown';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';

@Directive({
    standalone: true,
    selector: '[tuiDropdownMobile]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE)
                    ? TuiDropdownMobileComponent
                    : inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
        },
    ],
    host: {
        '[style.visibility]': 'visible() ? "visible" : ""',
        '(mousedown)': 'onMouseDown($event)',
    },
})
export class TuiDropdownMobile {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly dropdown = inject(TuiDropdownDirective, {
        optional: true,
        self: true,
    });

    protected readonly visible = computed(() => !this.dropdown || this.dropdown.ref());

    @Input()
    public tuiDropdownMobile = '';

    protected onMouseDown(event: MouseEvent): void {
        if (
            !this.isMobile ||
            !tuiIsHTMLElement(event.target) ||
            !event.target.matches('input,textarea') ||
            this.tuiDropdownMobile
        ) {
            return;
        }

        event.preventDefault();
        event.target.focus({preventScroll: true});
    }
}
