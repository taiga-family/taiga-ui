import {QueryList} from '@angular/core';

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

/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 * @deprecated use viewChild(), viewChildren(), contentChild() and contentChildren() for strict type checking
 */
export const EMPTY_QUERY = new QueryList<any>();
export const EMPTY_ARRAY: [] = [];
export const EMPTY_FUNCTION: (...args: any[]) => void = () => {};
export const EMPTY_CLIENT_RECT: DOMRect = {
    ...rect,
    toJSON: () => rect,
};
