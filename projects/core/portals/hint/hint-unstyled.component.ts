import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    INJECTOR,
    TemplateRef,
} from '@angular/core';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiHintDirective} from './hint.directive';

@Component({
    imports: [PolymorpheusOutlet],
    template: '<ng-container *polymorpheusOutlet="hint.content()" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHintUnstyledComponent {
    protected readonly hint = inject(TuiHintDirective);
}

@Directive({
    selector: 'ng-template[tuiHint]',
})
export class TuiHintUnstyled<C> {
    constructor() {
        const hint = inject(TuiHintDirective<C>);

        tuiSetSignal(hint.content, inject(TemplateRef<C>));
        hint.component = new PolymorpheusComponent(
            TuiHintUnstyledComponent,
            inject(INJECTOR),
        );
    }
}
