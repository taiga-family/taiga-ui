import {Directive, HostListener, Inject, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE, tuiIsHTMLElement} from '@taiga-ui/cdk';
import {TUI_DROPDOWN_COMPONENT, TuiDropdownComponent} from '@taiga-ui/core';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';

@Directive({
    selector: '[tuiDropdownMobile]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () => {
                if (!inject(TUI_IS_MOBILE)) {
                    return TuiDropdownComponent;
                }

                // TODO: Add sheet version
                return TuiDropdownMobileComponent;
            },
        },
    ],
    host: {
        '[style.visibility]': '"visible"',
    },
})
export class TuiDropdownMobileDirective {
    @Input()
    tuiDropdownMobile: '' | 'inline' | 'sheet' = 'inline';

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
