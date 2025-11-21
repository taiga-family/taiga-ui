import {computed, Directive, inject, input} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiAsideComponent} from './aside.component';

@Directive({
    selector: '[tuiHintAside]',
    providers: [tuiHintOptionsProvider({direction: 'right'})],
    hostDirectives: [TuiHintDirective],
})
export class TuiHintAsideDirective {
    private readonly el = tuiInjectElement();
    private readonly aside = inject(TuiAsideComponent);
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});
    public readonly tuiHintAside = input<PolymorpheusContent>(null);

    protected readonly binding = tuiDirectiveBinding(
        TuiHintDirective,
        'content',
        computed(() => {
            const hint = this.tuiHintAside();
            const expanded = this.aside.expanded();

            return expanded || this.dropdown
                ? ''
                : hint || (() => this.el.textContent?.trim());
        }),
    );
}
