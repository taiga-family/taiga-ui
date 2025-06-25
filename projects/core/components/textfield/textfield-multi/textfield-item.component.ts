import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTextfieldMultiComponent} from './textfield-multi.component';

export interface TuiTextfieldItem<T> {
    readonly item: T;
    readonly index: number;
}

/*
 * Internal wrapper for polymorpheus-context
 */
@Component({
    standalone: true,
    selector: 'tui-textfield-item',
    imports: [PolymorpheusOutlet],
    template:
        '<ng-container *polymorpheusOutlet="content as text; context: context">{{ text }}</ng-container>',
    styleUrls: ['./textfield-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._string]': '!textfield.item',
        '(keydown.arrowLeft.prevent)': 'el.previousElementSibling?.firstChild?.focus()',
        '(keydown.arrowRight.prevent)': 'el.nextElementSibling?.firstChild?.focus()',
    },
})
export class TuiTextfieldItemComponent<T> {
    protected readonly el = tuiInjectElement();
    protected readonly context = injectContext<TuiContext<TuiTextfieldItem<T>>>();
    protected readonly textfield: TuiTextfieldMultiComponent<T> = inject(
        TuiTextfieldMultiComponent,
    );

    protected get content(): PolymorpheusContent<TuiContext<TuiTextfieldItem<T>>> {
        return this.textfield.item ?? String(this.context.$implicit.item);
    }
}
