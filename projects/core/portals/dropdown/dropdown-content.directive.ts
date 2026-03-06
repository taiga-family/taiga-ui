import {isPlatformBrowser} from '@angular/common';
import {Directive, inject, type OnDestroy, PLATFORM_ID, TemplateRef} from '@angular/core';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiDropdownDirective} from './dropdown.directive';

@Directive({selector: 'ng-template[tuiDropdown]'})
export class TuiDropdownContent implements OnDestroy {
    readonly #directive = inject(TuiDropdownDirective);

    constructor() {
        tuiSetSignal(this.#directive.content, inject(TemplateRef));

        if (
            isPlatformBrowser(inject(PLATFORM_ID)) &&
            this.#directive.el.matches(':focus-within')
        ) {
            this.#directive.toggle(true);
        }
    }

    public ngOnDestroy(): void {
        tuiSetSignal(this.#directive.content, null);
    }
}
