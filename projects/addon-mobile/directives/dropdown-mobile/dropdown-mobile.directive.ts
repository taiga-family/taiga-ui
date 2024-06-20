import {Directive, HostListener, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/directives/dropdown';

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
        '[style.visibility]': '"visible"',
    },
})
export class TuiDropdownMobileDirective {
    private readonly isMobile = inject(TUI_IS_MOBILE);

    @Input()
    public tuiDropdownMobile = '';

    @HostListener('mousedown', ['$event'])
    protected onMouseDown(event: MouseEvent): void {
        if (
            !this.isMobile ||
            !tuiIsHTMLElement(event.target) ||
            !event.target.matches('input,textarea')
        ) {
            return;
        }

        event.preventDefault();
        event.target.focus({preventScroll: true});
    }
}
