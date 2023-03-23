import type {TuiStringHandler} from './handler';
import type {TuiMapper} from './mapper';

/**
 * A matcher function to test items against with extra arguments.
 */
export type TuiMatcher<I> = TuiMapper<I, boolean>;

export type TuiStringMatcher<I> = (
    item: I,
    matchValue: string,
    stringify: TuiStringHandler<I>,
) => boolean;

export type TuiIdentityMatcher<I> = (item1: I, item2: I) => boolean;
