import {InjectionToken, type Provider} from '@angular/core';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {BehaviorSubject, EMPTY, type Observable} from 'rxjs';

import {type TuiDialogOptions} from './dialog.interfaces';

export const TUI_DIALOGS = new InjectionToken(ngDevMode ? 'TUI_DIALOGS' : '', {
    factory: () => new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
});

export const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogOptions<void> = {
    appearance: '',
    size: 'm',
    required: false,
    closeable: true,
    dismissible: true,
    label: '',
    header: '',
    data: undefined,
};

/**
 * A stream to close dialogs
 */
export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    ngDevMode ? 'TUI_DIALOGS_CLOSE' : '',
    {
        factory: () => EMPTY,
    },
);

/**
 * Default parameters for dialog component
 */
export const TUI_DIALOG_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_DIALOG_OPTIONS' : '',
    {
        factory: () => TUI_DIALOG_DEFAULT_OPTIONS,
    },
);

export function tuiDialogOptionsProvider(
    options: Partial<TuiDialogOptions<unknown>>,
): Provider {
    return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
