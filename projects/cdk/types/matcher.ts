import type {TuiStringHandler} from './handler';
import type {TuiMapper, TuiTypedMapper} from './mapper';

/**
 * A matcher function to test items against with extra arguments.
 *
 * @deprecated Will be removed in v4.0. Use {@link TuiTypedMatcher} instead.
 */
export type TuiMatcher<I> = TuiMapper<I, boolean>;

/**
 * A matcher function to test items against with extra arguments.
 */
export type TuiTypedMatcher<I extends unknown[]> = TuiTypedMapper<I, boolean>;

export type TuiStringMatcher<I> = (
    item: I,
    matchValue: string,
    stringify: TuiStringHandler<I>,
) => boolean;

export type TuiIdentityMatcher<I> = (item1: I, item2: I) => boolean;
