import {Directive, inject} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDropdownDirective, TuiDropdownOpenDirective} from '@taiga-ui/core/directives';
import {filter, takeUntil} from 'rxjs';

import {TUI_HOSTED_DROPDOWN_COMPONENT} from './hosted-dropdown.token';

@Directive({
    selector: '[tuiDropdownOpenMonitor]',
    providers: [TuiDestroyService],
})
export class TuiDropdownOpenMonitorDirective {
    constructor() {
        const open = inject(TuiDropdownOpenDirective, {optional: true});
        const hosted = inject(TUI_HOSTED_DROPDOWN_COMPONENT);
        const dropdown = inject(TuiDropdownDirective);

        open?.tuiDropdownOpenChange
            .pipe(
                filter(
                    value =>
                        value && open.dropdown === (dropdown as any) && !hosted.focused,
                ),
                takeUntil(inject(TuiDestroyService)),
            )
            .subscribe(() => {
                hosted.nativeFocusableElement?.focus();
                hosted.updateOpen(true);
            });
    }
}
