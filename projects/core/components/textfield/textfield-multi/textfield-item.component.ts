import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {
    injectContext,
    type PolymorpheusContent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';

import {TuiTextfieldMultiComponent} from './textfield-multi.component';

export interface TuiTextfieldItem<T> {
    readonly item: T;
    readonly index: number;
}

/*
 * Internal wrapper for polymorpheus-context
 */
@Component({
    selector: 'tui-textfield-item',
    imports: [PolymorpheusOutlet],
    template:
        '<ng-container *polymorpheusOutlet="content as text; context: context">{{ text }}</ng-container>',
    styleUrl: './textfield-item.style.less',
    // TODO: Set to OnPush in v5 when textfield.item becomes a signal
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    host: {
        '[class._string]': '!textfield.item',
        '[class._disabled]': 'handlers.disabledItemHandler()(context.$implicit.item)',
        '(pointerdown.self.prevent)': '0',
        '(keydown.arrowLeft.prevent)': 'el.previousElementSibling?.firstChild?.focus()',
        '(keydown.arrowRight.prevent)': 'el.nextElementSibling?.firstChild?.focus()',
    },
})
export class TuiTextfieldItemComponent<T> {
    protected readonly el = tuiInjectElement();
    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);
    protected readonly context = injectContext<TuiContext<TuiTextfieldItem<T>>>();
    protected readonly textfield: TuiTextfieldMultiComponent<T> = inject(
        TuiTextfieldMultiComponent,
    );

    protected get content(): PolymorpheusContent<TuiContext<TuiTextfieldItem<T>>> {
        return (
            this.textfield.item ?? this.handlers.stringify()(this.context.$implicit.item)
        );
    }
}
