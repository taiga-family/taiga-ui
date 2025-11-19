import {computed, Directive, inject, Input, signal} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core/directives/hint';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiAsideComponent} from './aside.component';

@Directive({
    standalone: true,
    selector: '[tuiHintAside]',
    providers: [tuiHintOptionsProvider({direction: 'right'})],
    hostDirectives: [TuiHintDirective],
})
export class TuiHintAsideDirective {
    private readonly el = tuiInjectElement();
    private readonly aside = inject(TuiAsideComponent);
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});
    protected readonly hint = signal<PolymorpheusContent>(null);

    protected readonly binding = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHint',
        computed(() => {
            const hint = this.hint();
            const expanded = this.aside.expanded();

            return expanded || this.dropdown
                ? ''
                : hint || (() => this.el.textContent?.trim());
        }),
    );

    @Input()
    public set tuiHintAside(value: PolymorpheusContent) {
        this.hint.set(value);
    }
}
