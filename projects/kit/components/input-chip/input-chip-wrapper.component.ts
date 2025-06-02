import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {TuiTextfieldMultiComponent} from '@taiga-ui/core/components/textfield';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import type {PolymorpheusContext} from '@taiga-ui/polymorpheus/classes/context';

interface Chip<T> {
    readonly item: T;
    readonly index: number;
    readonly length: number;
}

/*
 * Internal wrapper for polymorpheus-context
 */
@Component({
    standalone: true,
    selector: 'tui-chip-wrapper',
    imports: [PolymorpheusOutlet],
    template: `
        <!-- prettier-ignore -->
        <ng-container
            *polymorpheusOutlet="textfield.item ?? default as text; context: context"
        >{{ text }}</ng-container>
    `,
    styles: [
        `
            :host {
                max-width: 100%;
                flex-shrink: 0;
                white-space: pre-wrap;
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
    protected readonly context = injectContext<PolymorpheusContext<Chip<T>>>();
    protected readonly textfield = inject(TuiTextfieldMultiComponent);

    protected readonly default: PolymorpheusContent<TuiContext<Chip<T>>> = ({
        $implicit: {item, index, length},
    }) => (index + 1 === length && !this.textfield.focused() ? `${item}` : `${item}, `);
}
