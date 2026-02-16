import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {
    injectContext,
    PolymorpheusComponent,
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
        '<ng-container *polymorpheusOutlet="content() as text; context: context">{{ text }}</ng-container>',
    styleUrl: './textfield-item.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._string]': '!textfield.item()',
        '[class._disabled]': 'handlers.disabledItemHandler()(context.$implicit.item)',
        '(pointerdown.self)': 'prevent($event)',
        '(keydown.arrowLeft.prevent)': 'el.previousElementSibling?.firstChild?.focus()',
        '(keydown.arrowRight.prevent)': 'el.nextElementSibling?.firstChild?.focus()',
    },
})
export class TuiTextfieldItemComponent<T> {
    protected readonly el = tuiInjectElement();
    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);
    protected readonly context = injectContext<TuiContext<TuiTextfieldItem<T>>>();
    protected readonly textfield = inject(TuiTextfieldMultiComponent);
    protected readonly content = computed(
        () =>
            this.textfield.item() ??
            this.handlers.stringify()(this.context.$implicit.item),
    );

    protected prevent(e: Event): void {
        this.textfield.focused() && e.preventDefault();
    }
}

export const TUI_TEXTFIELD_ITEM: PolymorpheusContent<TuiContext<TuiTextfieldItem<any>>> =
    new PolymorpheusComponent(TuiTextfieldItemComponent);
