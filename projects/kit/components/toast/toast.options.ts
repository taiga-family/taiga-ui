import {inject, InjectionToken} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiPositionOptions} from '@taiga-ui/core/portals/alert';

export interface TuiToastOptions<I> extends TuiPositionOptions {
    readonly autoClose: number;
    readonly closable: boolean;
    readonly appearance: string;
    readonly data?: I;
}

export const TUI_TOAST_CONCURRENCY = new InjectionToken(
    ngDevMode ? 'TUI_TOAST_CONCURRENCY' : '',
    {factory: () => (inject(TUI_IS_MOBILE) ? 1 : 2)},
);

export const [TUI_TOAST_OPTIONS, tuiToastOptionsProvider] = tuiCreateOptions<
    TuiToastOptions<any>
>({
    appearance: '',
    autoClose: 5000,
    closable: true,
    block: 'start',
    inline: 'center',
});
