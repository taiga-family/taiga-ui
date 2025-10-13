import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiToastOptions<I> {
    readonly autoClose: number;
    readonly closable: boolean;
    readonly appearance: string;
    readonly data?: I;
    readonly position: 'bottom' | 'top';
    readonly orientation: 'center' | 'end' | 'start';
}

export const TUI_TOAST_DEFAULT_OPTIONS: TuiToastOptions<void> = {
    appearance: '',
    autoClose: 5000,
    closable: true,
    position: 'top',
    orientation: 'center',
};

export const [TUI_TOAST_OPTIONS, tuiToastOptionsProvider] = tuiCreateOptions(
    TUI_TOAST_DEFAULT_OPTIONS,
);
