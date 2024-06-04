import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiDropdownDirective, TuiDropdownOpenDirective} from '@taiga-ui/core';
import {filter} from 'rxjs';

import {TUI_HOSTED_DROPDOWN_COMPONENT} from './hosted-dropdown.token';

@Directive({
    selector: '[tuiDropdownOpenMonitor]',
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
                takeUntilDestroyed(),
            )
            .subscribe(() => {
                hosted.nativeFocusableElement?.focus();
                hosted.updateOpen(true);
            });
    }
}
