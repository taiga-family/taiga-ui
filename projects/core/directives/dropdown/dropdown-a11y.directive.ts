import {Directive, effect, inject, Input, signal} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk/services';

import {TuiDropdownDirective} from './dropdown.directive';
import {TUI_DROPDOWN_HOST} from './dropdown.providers';

@Directive({standalone: true, selector: '[tuiDropdownA11y]'})
export class TuiDropdownA11y {
    private readonly id = inject(TuiIdService).generate();
    private readonly host = inject(TUI_DROPDOWN_HOST);
    private readonly dropdown = inject(TuiDropdownDirective);

    protected readonly sync = effect(() => {
        const content = this.dropdown._content();
        const dropdown = this.dropdown.ref();
        const host = this.host.nativeElement;

        host.setAttribute('aria-expanded', String(!!dropdown));
        host.setAttribute('aria-controls', this.id);
        host.setAttribute('aria-haspopup', this._tuiDropdownRole());

        if (host.matches('input')) {
            host.setAttribute('role', 'combobox');
        }

        dropdown?.location.nativeElement.setAttribute('role', this._tuiDropdownRole());
        dropdown?.location.nativeElement.setAttribute('id', this.id);

        if (content) {
            return;
        }

        host.removeAttribute('aria-expanded');
        host.removeAttribute('aria-controls');
        host.removeAttribute('aria-haspopup');
    });

    // TODO: refactor to signal inputs after Angular update
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public readonly _tuiDropdownRole = signal<string>('listbox');

    @Input()
    public set tuiDropdownRole(role: string) {
        this._tuiDropdownRole.set(role);
    }
}
