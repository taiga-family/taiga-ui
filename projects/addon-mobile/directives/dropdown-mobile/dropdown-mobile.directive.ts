import {Directive, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_OPTION_CONTENT} from '@taiga-ui/core/components/data-list';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/directives/dropdown';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';
import {TuiOptionMobile} from './option-mobile/option-mobile.component';

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
        {
            provide: TUI_OPTION_CONTENT,
            useFactory: () =>
                inject(TUI_IS_MOBILE) &&
                // TODO(v5): remove it after deletion of all legacy controls
                inject(TuiTextfieldComponent, {optional: true})
                    ? TuiOptionMobile
                    : inject(TUI_OPTION_CONTENT, {skipSelf: true, optional: true}),
        },
    ],
    host: {
        '[style.visibility]': '"visible"',
        '(pointerdown)': 'onPointerDown($event)',
    },
})
export class TuiDropdownMobile {
    private readonly isMobile = inject(TUI_IS_MOBILE);

    @Input()
    public tuiDropdownMobile = '';

    protected onPointerDown(event: PointerEvent): void {
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
