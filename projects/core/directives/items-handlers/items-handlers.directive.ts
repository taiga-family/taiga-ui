import {Directive, inject, Input, signal} from '@angular/core';
import type {
    TuiBooleanHandler,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import type {TuiItemsHandlers} from './items-handlers.tokens';
import {TUI_ITEMS_HANDLERS} from './items-handlers.tokens';

@Directive({
    standalone: true,
    providers: [tuiProvide(TUI_ITEMS_HANDLERS, TuiItemsHandlersDirective)],
})
export class TuiItemsHandlersDirective<T> implements TuiItemsHandlers<T> {
    private readonly defaultHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS, {
        skipSelf: true,
    });

    public readonly stringify = signal(this.defaultHandlers.stringify());
    public readonly identityMatcher = signal(this.defaultHandlers.identityMatcher());
    public readonly disabledItemHandler = signal(
        this.defaultHandlers.disabledItemHandler(),
    );

    // TODO(v5): use signal inputs
    @Input('stringify')
    public set stringifySetter(x: TuiStringHandler<T>) {
        this.stringify.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('identityMatcher')
    public set identityMatcherSetter(x: TuiIdentityMatcher<T>) {
        this.identityMatcher.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('disabledItemHandler')
    public set disabledItemHandlerSetter(x: TuiBooleanHandler<T>) {
        this.disabledItemHandler.set(x);
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
