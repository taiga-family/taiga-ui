import {InjectionToken} from '@angular/core';
import type {TuiStringMatcher} from '@taiga-ui/cdk';

export type TuiFilterByInputHandler = <T>(
    items: ReadonlyArray<readonly T[]> | readonly T[] | null,
    matcher: TuiStringMatcher<T>,
    query: string,
) => ReadonlyArray<readonly T[]> | readonly T[] | null;

export const TUI_FILTER_BY_INPUT_HANDLER = new InjectionToken<TuiFilterByInputHandler>(
    ngDevMode ? 'TUI_FILTER_BY_INPUT_HANDLER' : '',
);
