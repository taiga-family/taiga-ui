import {Directive, inject, input} from '@angular/core';

import {TUI_DATA_LIST_HOST} from './data-list.tokens';

@Directive({
    selector: 'button[tuiOption][value], a[tuiOption][value], label[tuiOption][value]',
    host: {'(click)': 'onClick()'},
})
export class TuiOptionWithValue<T = unknown> {
    private readonly host = inject(TUI_DATA_LIST_HOST, {optional: true});

    public readonly disabled = input(false);
    public readonly value = input<T>();

    protected onClick(value = this.value()): void {
        if (value !== undefined) {
            this.host?.handleOption?.(value);
        }
    }
}
