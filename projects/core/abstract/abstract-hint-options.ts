import {TuiDirection, TuiHintModeT} from '@taiga-ui/core/types';

export interface TuiAbstractHintOptions {
    readonly mode: TuiHintModeT | null;
    readonly direction: TuiDirection;
}

/** Default values for abstract hint options */
export const TUI_ABSTRACT_HINT_DEFAULT_OPTIONS: TuiAbstractHintOptions = {
    mode: null,
    direction: `bottom-left`,
};
