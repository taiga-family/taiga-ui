import {computed} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core/directives/hint';

import {TuiAsideComponent} from './aside.component';

@Directive({
    standalone: true,
    selector: '[tuiHintAside]',
    providers: [tuiHintOptionsProvider({direction: 'right'})],
    hostDirectives: [TuiHintDirective],
})
export class TuiHintAside {
    private readonly el = tuiInjectElement();
    private readonly aside = inject(TuiAsideComponent);
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});

    protected readonly binding = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHint',
        computed(() =>
            this.aside.expanded() || this.dropdown ? '' : this.el.textContent?.trim(),
        ),
    );
}
