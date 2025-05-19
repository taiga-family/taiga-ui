import type {WritableSignal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    TemplateRef,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import type {TuiPortalItem} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {
    injectContext,
    PolymorpheusComponent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';

import {TuiHintDirective} from './hint.directive';

@Component({
    standalone: true,
    imports: [PolymorpheusOutlet],
    template: '<ng-container *polymorpheusOutlet="context.$implicit.content()" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHintUnstyledComponent {
    protected readonly context =
        injectContext<
            TuiContext<TuiPortalItem & {content: WritableSignal<PolymorpheusContent>}>
        >();
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
