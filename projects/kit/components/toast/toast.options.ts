import {type TuiSwipeEvent} from '@taiga-ui/cdk/directives/swipe';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiToastOptions {
    autoClose: TuiHandler<string, number> | number;
    closable: TuiHandler<TuiSwipeEvent, boolean> | boolean;
    appearance: string;
    iconStart: string;
    iconEnd: string;
}

export const TUI_TOAST_DEFAULT_OPTIONS: TuiToastOptions = {
    appearance: '',
    autoClose: 5000,
    closable: true,
    iconStart: '',
    iconEnd: '',
};

export const [TUI_TOAST_OPTIONS, tuiToastOptionsProvider] = tuiCreateOptions(
    TUI_TOAST_DEFAULT_OPTIONS,
);
