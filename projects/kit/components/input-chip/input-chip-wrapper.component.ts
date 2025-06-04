import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {TuiTextfieldMultiComponent} from '@taiga-ui/core/components/textfield';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

interface Chip<T> {
    readonly item: T;
    readonly index: number;
}

/*
 * Internal wrapper for polymorpheus-context
 */
@Component({
    standalone: true,
    selector: 'tui-chip-wrapper',
    imports: [PolymorpheusOutlet],
    template:
        '<ng-container *polymorpheusOutlet="content as text; context: context">{{ text }}</ng-container>',
    styles: [
        `
            :host {
                max-width: 100%;
                flex-shrink: 0;
                white-space: pre-wrap;
                text-overflow: ellipsis;

                &._string {
                    overflow: hidden;

                    &::after {
                        content: ', ';
                    }
                }

                &:last-of-type {
                    max-width: 80%;
                }
            }

            :host-context(tui-textfield:not([data-focus='true'])):last-of-type::after {
                display: none;
            }
        `,
    ],
    host: {
        '[class._string]': '!textfield.item',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiChipWrapper<T> {
    protected readonly context = injectContext<TuiContext<Chip<T>>>();
    protected readonly textfield = inject(TuiTextfieldMultiComponent);

    protected get content(): PolymorpheusContent<TuiContext<Chip<T>>> {
        return this.textfield.item ?? String(this.context.$implicit.item);
    }
}
