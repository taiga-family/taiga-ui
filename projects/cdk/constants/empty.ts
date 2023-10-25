import {QueryList} from '@angular/core';

/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 */
export const TUI_EMPTY_QUERY = new QueryList<any>();

/**
 * @deprecated: use {@link TUI_EMPTY_QUERY}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EMPTY_QUERY = TUI_EMPTY_QUERY;

export const TUI_EMPTY_ARRAY: [] = [];

/**
 * @deprecated: use {@link TUI_EMPTY_ARRAY}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EMPTY_ARRAY = TUI_EMPTY_ARRAY;

export const TUI_EMPTY_FUNCTION: (...args: any[]) => void = () => {};

/**
 * @deprecated: use {@link TUI_EMPTY_FUNCTION}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EMPTY_FUNCTION = TUI_EMPTY_FUNCTION;

const rect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
} as const;

export const TUI_EMPTY_CLIENT_RECT: DOMRect = {
    ...rect,
    toJSON() {
        return rect;
    },
};

/**
 * @deprecated: use {@link TUI_EMPTY_CLIENT_RECT}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EMPTY_CLIENT_RECT = TUI_EMPTY_CLIENT_RECT;
