import {
    AbstractTuiControl,
    AbstractTuiInteractive,
    TuiIdentityMatcher,
} from '@taiga-ui/cdk';

// TODO: Consider refactoring checkOption, it is only needed in ComboBox
export interface TuiDataListHost<T, K = AbstractTuiControl<T> | AbstractTuiInteractive> {
    hostControl?: K;
    handleOption(option: T): void;
    checkOption?(option: T): void;
    readonly identityMatcher?: TuiIdentityMatcher<T>;
}
