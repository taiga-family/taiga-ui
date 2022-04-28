import {QueryList} from '@angular/core';
import {ValidatorFn} from '@angular/forms';

/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 */
export const EMPTY_QUERY = new QueryList<any>();
export const EMPTY_ARRAY: [] = [];
export const EMPTY_FUNCTION: (...args: any[]) => void = () => {};
/** @deprecated use Validators.nullValidator */
export const EMPTY_VALIDATOR: ValidatorFn = () => null;
