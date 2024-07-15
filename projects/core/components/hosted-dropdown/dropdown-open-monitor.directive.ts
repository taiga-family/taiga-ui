import {Directive, Inject, Input, Optional, Self} from '@angular/core';
import {TuiDestroyService, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TuiDropdownDirective, TuiDropdownOpenDirective} from '@taiga-ui/core/directives';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TUI_HOSTED_DROPDOWN_COMPONENT} from './hosted-dropdown.token';

@Directive({
    selector: '[tuiDropdownOpenMonitor]',
    providers: [TuiDestroyService],
})
export class TuiDropdownOpenMonitorDirective {
    @Input()
    set tuiDropdownOpenMonitor(open: boolean) {
        this.open?.update(open);
        this.hosted.updateOpen(open);
    }

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_HOSTED_DROPDOWN_COMPONENT)
        private readonly hosted: TuiInjectionTokenType<
            typeof TUI_HOSTED_DROPDOWN_COMPONENT
        >,
        @Self() @Inject(TuiDropdownDirective) dropdown: TuiDropdownDirective,
        @Optional()
        @Inject(TuiDropdownOpenDirective)
        private readonly open: TuiDropdownOpenDirective | null,
    ) {
        if (open?.dropdown === dropdown) {
            open.tuiDropdownOpenChange.pipe(takeUntil(destroy$)).subscribe(value => {
                if (value) {
                    hosted.nativeFocusableElement?.focus();
                }

                hosted.updateOpen(value);
            });
        }
    }
}
