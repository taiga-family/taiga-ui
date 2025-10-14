import {inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiPositionOptions} from '@taiga-ui/core/directives/notification';

export interface TuiToastOptions<I> extends TuiPositionOptions {
    readonly autoClose: number;
    readonly closable: boolean;
    readonly appearance: string;
    readonly data?: I;
}

export const TUI_TOAST_CONCURRENCY = tuiCreateTokenFromFactory<number>(() =>
    inject(TUI_IS_MOBILE) ? 1 : 2,
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
