import {Directive, Inject, Optional, Self} from '@angular/core';
import {TuiDestroyService, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TuiDropdownDirective, TuiDropdownOpenDirective} from '@taiga-ui/core/directives';
import {filter, Observable, takeUntil} from 'rxjs';

import {TUI_HOSTED_DROPDOWN_COMPONENT} from './hosted-dropdown.token';

@Directive({
    selector: '[tuiDropdownOpenMonitor]',
    providers: [TuiDestroyService],
})
export class TuiDropdownOpenMonitorDirective {
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_HOSTED_DROPDOWN_COMPONENT)
        hosted: TuiInjectionTokenType<typeof TUI_HOSTED_DROPDOWN_COMPONENT>,
        @Self() @Inject(TuiDropdownDirective) dropdown: TuiDropdownDirective,
        @Optional()
        @Inject(TuiDropdownOpenDirective)
        open: TuiDropdownOpenDirective | null,
    ) {
        open?.tuiDropdownOpenChange
            .pipe(
                filter(value => value && open.dropdown === dropdown && !hosted.focused),
                takeUntil(destroy$),
            )
            .subscribe(() => {
                hosted.nativeFocusableElement?.focus();
                hosted.updateOpen(true);
            });
    }
}
