import {
    ContentChild,
    Directive,
    effect,
    ElementRef,
    inject,
    Input,
    signal,
} from '@angular/core';
import {
    tuiGetClosestFocusable,
    tuiIsNativeKeyboardFocusable,
} from '@taiga-ui/cdk/utils/focus';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiDropdownDirective} from './dropdown.directive';

@Directive({standalone: true, selector: '[tuiDropdownA11y]'})
export class TuiDropdownA11y {
    @ContentChild('tuiDropdownHost', {descendants: true, read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();
    private readonly dropdown = inject(TuiDropdownDirective);

    protected readonly sync = effect(() => {
        const content = this.dropdown._content();
        const dropdown = this.dropdown.ref();
        const host = this.host || this.el;

        host.setAttribute('aria-expanded', String(!!dropdown));
        host.setAttribute('aria-controls', this.dropdown.id);
        host.setAttribute('aria-haspopup', this._tuiDropdownRole());
        dropdown?.location.nativeElement.setAttribute('role', this._tuiDropdownRole());

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

    // This code is copied from tuiDropdownOpen directive, as it's not possible to use
    // forwardRef in host directives. https://github.com/angular/angular/issues/58485 this issue
    // resolves it, but the code provided only in angular 18+.
    private get host(): HTMLElement {
        const initial = this.dropdownHost?.nativeElement || this.el;
        const focusable = tuiIsNativeKeyboardFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({initial, root: this.el});

        return this.dropdownHost?.nativeElement || focusable || this.el;
    }
}
