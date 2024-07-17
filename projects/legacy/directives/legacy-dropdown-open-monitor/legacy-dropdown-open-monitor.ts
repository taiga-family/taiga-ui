import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGetClosestFocusable} from '@taiga-ui/cdk/utils/focus';
import {TuiDropdownOpen, TuiDropdownOpenLegacy} from '@taiga-ui/core/directives/dropdown';
import {distinctUntilChanged} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiDropdownOpenMonitor]',
})
export class TuiLegacyDropdownOpenMonitorDirective {
    private readonly el = tuiInjectElement();
    private readonly host = inject(TuiDropdownOpen, {self: true});
    private readonly external = inject(TuiDropdownOpenLegacy, {
        optional: true,
    });

    constructor() {
        this.host.driver
            .pipe(distinctUntilChanged(), takeUntilDestroyed())
            .subscribe((open) => this.external?.tuiDropdownOpenChange.next(open));

        this.external?.tuiDropdownOpenChange
            .pipe(distinctUntilChanged(), takeUntilDestroyed())
            .subscribe((open) => {
                if (open) {
                    tuiGetClosestFocusable({
                        initial: this.el,
                        root: this.el,
                    })?.focus();
                }

                this.host.toggle(open);
            });
    }
}
