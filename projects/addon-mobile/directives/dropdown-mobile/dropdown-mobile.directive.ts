import {Directive, HostListener, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE, tuiIsHTMLElement} from '@taiga-ui/cdk';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core';

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
