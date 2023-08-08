import {Directive, Inject, Optional, Self} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDropdownDirective, TuiDropdownOpenDirective} from '@taiga-ui/core/directives';
import {Observable} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

import {TuiHostedDropdownComponent} from './hosted-dropdown.component';

@Directive({
    selector: '[tuiDropdownOpenMonitor]',
    providers: [TuiDestroyService],
})
export class TuiDropdownOpenMonitorDirective {
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiHostedDropdownComponent) hosted: TuiHostedDropdownComponent,
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
