import {computed} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core/directives/hint';
import {TuiAsideGroupComponent} from '@taiga-ui/layout/components';

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
    private readonly group = inject(TuiAsideGroupComponent, {optional: true});

    protected readonly binding = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHint',
        computed(() =>
            this.aside.expanded() || this.group ? '' : this.el.textContent?.trim(),
        ),
    );
}
