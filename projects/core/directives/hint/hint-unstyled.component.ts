import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    TemplateRef,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiParentAnimation} from '@taiga-ui/core/animations';
import type {TuiPortalItem} from '@taiga-ui/core/types';
import {
    injectContext,
    PolymorpheusComponent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';

import {TuiHintDirective} from './hint.directive';

@Component({
    standalone: true,
    imports: [PolymorpheusOutlet],
    template: '<ng-container *polymorpheusOutlet="context.$implicit.content" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation],
    host: {'[@tuiParentAnimation]': ''},
})
export class TuiHintUnstyledComponent {
    protected readonly context = injectContext<TuiContext<TuiPortalItem>>();
}

@Directive({
    standalone: true,
    selector: 'ng-template[tuiHint]',
})
export class TuiHintUnstyled<C> {
    constructor() {
        const hint = inject(TuiHintDirective<C>);

        hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
        hint.content.set(inject(TemplateRef<C>));
    }
}
