import type {TuiIdentityMatcher, TuiStringHandler} from '@taiga-ui/cdk';

export type TuiDataListRole = 'listbox' | 'menu';

export interface TuiDataListAccessor<T = unknown> {
    getOptions(includeDisabled?: boolean): readonly T[];
}

// TODO: Consider refactoring checkOption, it is only needed in ComboBox
export interface TuiDataListHost<T> {
    checkOption?(option: T): void;
    handleOption(option: T): void;
    readonly identityMatcher?: TuiIdentityMatcher<T>;
    readonly stringify?: TuiStringHandler<T>;
}
