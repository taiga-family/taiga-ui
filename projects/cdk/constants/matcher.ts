import {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk/types';

import {TUI_DEFAULT_STRINGIFY} from './stringify';

/**
 * Default handler for matching stringified version of an item and a search query
 * @param item arbitrary element to match with a string
 * @param search search query
 * @param stringify handler to turn item into a string
 */
export const TUI_DEFAULT_MATCHER = <T>(
    item: T,
    search: string,
    stringify: TuiHandler<T, string> = TUI_DEFAULT_STRINGIFY,
): boolean => stringify(item).toLowerCase().includes(search.toLowerCase());

/**
 * Default handler for strict matching stringified version of an item and a search query
 * @param item arbitrary element to match with a string
 * @param search search query
 * @param stringify handler to turn item into a string
 */
export const TUI_STRICT_MATCHER = <T>(
    item: T,
    search: string,
    stringify: TuiHandler<T, string> = TUI_DEFAULT_STRINGIFY,
): boolean => stringify(item).toLowerCase() === search.toLowerCase();

/**
 * Default handler to match equality of two elements
 * ATTENTION: considers two empty arrays equal
 *
 * @param item1 first element
 * @param item2 second element
 */
export const TUI_DEFAULT_IDENTITY_MATCHER: TuiIdentityMatcher<unknown> = (item1, item2) =>
    item1 === item2 || bothEmpty(item1, item2);

function bothEmpty(item1: unknown, item2: unknown): boolean {
    return (
        Array.isArray(item1) &&
        Array.isArray(item2) &&
        item1.length === 0 &&
        item2.length === 0
    );
}
