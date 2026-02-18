import {Directive, inject} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {
    TUI_DROPDOWN_COMPONENT,
    TuiDropdownDirective,
} from '@taiga-ui/core/portals/dropdown';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';

@Directive({
    selector: '[tuiDropdownMobile]',
    providers: [
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                inject(WA_IS_MOBILE)
                    ? TuiDropdownMobileComponent
                    : inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
        },
    ],
    host: {
        '[style.visibility]': 'dropdown.ref() ? "visible" : ""',
        '(mousedown)': 'onMouseDown($event)',
    },
})
export class TuiDropdownMobile {
    private readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly dropdown = inject(TuiDropdownDirective);

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
