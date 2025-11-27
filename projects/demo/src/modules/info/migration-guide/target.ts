import {Directive, inject, type OnInit} from '@angular/core';
import {WA_LOCATION} from '@ng-web-apis/common';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {TuiAccordionComponent, TuiAccordionDirective} from '@taiga-ui/kit';

@Directive({
    selector: '[tuiAccordionTarget]',
})
export class TuiAccordionTarget implements OnInit {
    readonly #el = tuiInjectElement();
    readonly #component = inject(TuiAccordionComponent);
    readonly #directive = inject(TuiAccordionDirective);
    readonly #location = inject(WA_LOCATION);

    public ngOnInit(): void {
        this.#directive.open.set(`#${this.#el.id}` === this.#location.hash);
        this.#component.toggle(this.#directive);
    }
}
