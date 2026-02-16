import {Directive, inject, Input, signal} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/directives/dropdown';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';

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
    hostDirectives: [{directive: TuiActiveZone, outputs: ['tuiActiveZoneChange']}],
    host: {
        '[style.visibility]': 'visible()',
        '(mousedown)': 'onMouseDown($event)',
        '(tuiActiveZoneChange)': 'visible.set($event ? "visible" : "")',
    },
})
export class TuiDropdownMobile {
    private readonly isMobile = inject(TUI_IS_MOBILE);

    protected readonly visible = signal('');

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
