import {Directive, inject, input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {TUI_ITEMS_HANDLERS, type TuiItemsHandlers} from './items-handlers.tokens';

@Directive({
    providers: [tuiProvide(TUI_ITEMS_HANDLERS, TuiItemsHandlersDirective)],
})
export class TuiItemsHandlersDirective<T> implements TuiItemsHandlers<T> {
    private readonly handlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS, {
        skipSelf: true,
    });

    public readonly stringify = input(this.handlers.stringify());
    public readonly identityMatcher = input(this.handlers.identityMatcher());
    public readonly disabledItemHandler = input(this.handlers.disabledItemHandler());
}

@Directive({
    hostDirectives: [
        {
            directive: TuiItemsHandlersDirective,
            inputs: ['stringify', 'identityMatcher', 'disabledItemHandler'],
        },
    ],
})
export class TuiWithItemsHandlers {}
