import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGetClosestFocusable} from '@taiga-ui/cdk/utils/focus';
import {TuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {filter} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiDropdownOpenMonitor]',
})
export class TuiLegacyDropdownOpenMonitorDirective {
    private readonly el = tuiInjectElement();
    private readonly host = inject(TuiDropdownOpen, {self: true});
    private readonly external = inject(TuiDropdownOpen, {
        skipSelf: true,
        optional: true,
    });

    constructor() {
        this.external?.driver
            .pipe(
                filter(
                    () =>
                        this.host.dropdown === this.external?.dropdown &&
                        !this.host.focused,
                ),
                takeUntilDestroyed(),
            )
            .subscribe((value) => {
                if (value) {
                    tuiGetClosestFocusable({
                        initial: this.el,
                        root: this.el,
                    })?.focus();
                }

                this.host.toggle(value);
            });
    }
}
