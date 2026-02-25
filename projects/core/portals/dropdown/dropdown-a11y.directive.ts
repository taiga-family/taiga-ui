import {Directive, effect, inject, input} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownOpen} from './dropdown-open.directive';

@Directive({selector: '[tuiDropdownA11y]'})
export class TuiDropdownA11y {
    private readonly el = tuiInjectElement();
    private readonly dropdown = inject(TuiDropdownDirective);
    private readonly open = inject(TuiDropdownOpen, {self: true, optional: true});

    public readonly tuiDropdownRole = input('listbox');

    protected readonly sync = effect(() => {
        const content = this.dropdown.content();
        const dropdown = this.dropdown.ref();
        const host = this.open?.host || this.el;

        host.setAttribute('aria-expanded', String(!!dropdown));
        host.setAttribute('aria-controls', this.dropdown.id);
        host.setAttribute('aria-haspopup', this.tuiDropdownRole());
        dropdown?.location.nativeElement.setAttribute('role', this.tuiDropdownRole());

        if (content) {
            return;
        }

        host.removeAttribute('aria-expanded');
        host.removeAttribute('aria-controls');
        host.removeAttribute('aria-haspopup');
    });
}
