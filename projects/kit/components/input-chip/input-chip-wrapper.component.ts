import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {TuiTextfieldMultiComponent} from '@taiga-ui/core/components/textfield';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {
    injectContext,
    PolymorpheusComponent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';
import type {PolymorpheusContext} from '@taiga-ui/polymorpheus/classes/context';

import {TuiInputChipComponent} from './input-chip.component';

/*
 * Internal wrapper for polymorpheus-context
 */
@Component({
    standalone: true,
    selector: 'tui-chip-wrapper',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container
            *polymorpheusOutlet="textfield.item ?? default as text; context: context"
        >
            {{ text }}
        </ng-container>
    `,
    styles: [
        `
            :host {
                max-width: 100%;
                flex-shrink: 0;
                overflow: hidden;

                &:last-of-type {
                    max-width: 80%;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiChipWrapper<T> {
    protected readonly context = injectContext<
        PolymorpheusContext<{
            index: number;
            item: T;
        }>
    >();

    protected readonly default: PolymorpheusContent<
        TuiContext<{index: number; item: T}>
    > = new PolymorpheusComponent(TuiInputChipComponent);

    protected readonly textfield = inject(TuiTextfieldMultiComponent);
}
