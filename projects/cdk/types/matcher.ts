import {TuiStringHandler} from './handler';
import {TuiMapper, TypedTuiMapper} from './mapper';

/**
 * A matcher function to test items against with extra arguments.
 *
 * @deprecated Will be removed in v4.0. Use `TypedTuiMatcher` instead.
 */
export type TuiMatcher<I> = TuiMapper<I, boolean>;

/**
 * A matcher function to test items against with extra arguments.
 */
export type TypedTuiMatcher<I extends unknown[]> = TypedTuiMapper<I, boolean>;

export type TuiStringMatcher<I> = (
    item: I,
    matchValue: string,
    stringify: TuiStringHandler<I>,
) => boolean;

export type TuiIdentityMatcher<I> = (item1: I, item2: I) => boolean;
