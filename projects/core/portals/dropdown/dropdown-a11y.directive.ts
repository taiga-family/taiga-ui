import {Directive, effect, inject, input} from '@angular/core';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_HOST} from './dropdown.providers';

@Directive({selector: '[tuiDropdownA11y]'})
export class TuiDropdownA11y {
    private readonly host = inject(TUI_DROPDOWN_HOST);
    private readonly dropdown = inject(TuiDropdownDirective);

    public readonly tuiDropdownRole = input('listbox');

    protected readonly sync = effect(() => {
        const content = this.dropdown.content();
        const dropdown = this.dropdown.ref();
        const host = this.host.nativeElement;

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
