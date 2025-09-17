import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiToastOptions {
    position: string;
    appearance: string;
    autoClose: TuiHandler<string, number> | number;
    maxConcurrent: number;
    closable: boolean;
}

export const TUI_TOAST_DEFAULT_OPTIONS: TuiToastOptions = {
    position: '0.25rem auto 0 auto',
    appearance: '',
    autoClose: 5000,
    maxConcurrent: 1,
    closable: true,
};

export const [TUI_TOAST_OPTIONS, tuiToastOptionsProvider] = tuiCreateOptions(
    TUI_TOAST_DEFAULT_OPTIONS,
);
