import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    TemplateRef,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiParentAnimation} from '@taiga-ui/core/animations';
import type {TuiPortalItem} from '@taiga-ui/core/types';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiHintDirective} from './hint.directive';

@Component({
    template: `
        <ng-container
            *polymorpheusOutlet="context.$implicit.content; context: context"
        ></ng-container>
    `,
    host: {'[@tuiParentAnimation]': ''},
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation],
})
export class TuiHintUnstyledComponent {
    protected readonly context = inject<TuiContext<TuiPortalItem>>(POLYMORPHEUS_CONTEXT);
}

@Directive({
    selector: 'ng-template[tuiHint]',
    providers: [
        {
            provide: POLYMORPHEUS_CONTEXT,
            useValue: {$implicit: {}},
        },
    ],
})
export class TuiHintUnstyledDirective<C> {
    constructor() {
        const hint = inject(TuiHintDirective<C>);

        hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
        hint.content = inject(TemplateRef<C>);
    }
}
