import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiToastOptions<I> {
    autoClose: number;
    closable: boolean;
    appearance: string;
    data?: I;
}

export const TUI_TOAST_DEFAULT_OPTIONS: TuiToastOptions<void> = {
    appearance: '',
    autoClose: 5000,
    closable: true,
};

export const [TUI_TOAST_OPTIONS, tuiToastOptionsProvider] = tuiCreateOptions(
    TUI_TOAST_DEFAULT_OPTIONS,
);
