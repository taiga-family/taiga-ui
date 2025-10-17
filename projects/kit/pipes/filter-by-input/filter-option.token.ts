import {InjectionToken, type Provider} from '@angular/core';
import {type TuiStringMatcher} from '@taiga-ui/cdk/types';

export type TuiFilterByInputHandler = <T>(
    items: ReadonlyArray<readonly T[]> | readonly T[] | null,
    matcher: TuiStringMatcher<T>,
    query: string,
) => ReadonlyArray<readonly T[]> | readonly T[] | null;

export const TUI_FILTER_BY_INPUT_HANDLER = new InjectionToken<TuiFilterByInputHandler>(
    ngDevMode ? 'TUI_FILTER_BY_INPUT_HANDLER' : '',
);

export function provideTuiFilterHandler(inputHandler: TuiFilterByInputHandler): Provider {
    return {
        provide: TUI_FILTER_BY_INPUT_HANDLER,
        useValue: inputHandler,
    };
}
