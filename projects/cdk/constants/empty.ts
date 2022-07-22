import {QueryList} from '@angular/core';

/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 */
export const EMPTY_QUERY = new QueryList<any>();
export const EMPTY_ARRAY: [] = [];
export const EMPTY_FUNCTION: (...args: any[]) => void = () => {};
export const EMPTY_CLIENT_RECT: ClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
