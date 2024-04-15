import {Directive, HostListener, Inject, inject} from '@angular/core';
import {TUI_IS_MOBILE, tuiIsHTMLElement} from '@taiga-ui/cdk';
import {TUI_DROPDOWN_COMPONENT, TuiDropdownComponent} from '@taiga-ui/core';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';

@Directive({
    selector: '[tuiDropdownMobile]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE) ? TuiDropdownMobileComponent : TuiDropdownComponent,
        },
    ],
    host: {
        '[style.visibility]': '"visible"',
    },
})
export class TuiDropdownMobileDirective {
    constructor(@Inject(TUI_IS_MOBILE) private readonly isMobile: boolean) {}

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
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
