import {type Signal, signal} from '@angular/core';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiControlOptions {
    readonly: Signal<boolean>;
}

export const [TUI_CONTROL_OPTIONS, tuiControlOptionsProvider] =
    tuiCreateOptions<TuiControlOptions>({readonly: signal(false)});
