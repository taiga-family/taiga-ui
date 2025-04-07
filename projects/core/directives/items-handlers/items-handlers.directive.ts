import {Directive, inject, Input, signal} from '@angular/core';
import type {
    TuiBooleanHandler,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk/types';

import type {TuiItemsHandlers} from './items-handlers.tokens';
import {TUI_ITEMS_HANDLERS} from './items-handlers.tokens';

@Directive({
    standalone: true,
})
export class TuiItemsHandlersDirective<T> {
    private readonly defaultHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);

    public readonly stringify = signal(this.defaultHandlers.stringify);
    public readonly identityMatcher = signal(this.defaultHandlers.identityMatcher);
    public readonly disabledItemHandler = signal(
        this.defaultHandlers.disabledItemHandler,
    );

    @Input('stringify')
    public set stringifySetter(x: TuiStringHandler<T>) {
        this.stringify.set(x);
    }

    @Input('identityMatcher')
    public set identityMatcherSetter(x: TuiIdentityMatcher<T>) {
        this.identityMatcher.set(x);
    }

    @Input('disabledItemHandler')
    public set disabledItemHandlerSetter(x: TuiBooleanHandler<T>) {
        this.identityMatcher.set(x);
    }
}

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiItemsHandlersDirective,
            inputs: ['stringify', 'identityMatcher', 'disabledItemHandler'],
        },
    ],
})
export class TuiWithItemsHandlers {}
