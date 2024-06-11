import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiGetClosestFocusable, tuiInjectElement} from '@taiga-ui/cdk';
import {TuiDropdownOpenDirective} from '@taiga-ui/core';
import {filter} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiDropdownOpenMonitor]',
})
export class TuiLegacyDropdownOpenMonitorDirective {
    private readonly el = tuiInjectElement();
    private readonly host = inject(TuiDropdownOpenDirective, {self: true});
    private readonly external = inject(TuiDropdownOpenDirective, {
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
            .subscribe(value => {
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
