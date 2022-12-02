import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiSizeL} from '@taiga-ui/core';

export interface TuiInputFilesOptions {
    /**
     * @description:
     * user - The user-facing camera and/or microphone should be used.
     * environment - The outward-facing camera and/or microphone should be used
     */
    capture: 'environment' | 'user' | null;
    accepts: string;
    multiple: boolean;
    size: TuiSizeL;
    maxFileSize: number;
}

export const TUI_INPUT_FILES_DEFAULT_OPTIONS: TuiInputFilesOptions = {
    capture: null,
    accepts: ``,
    multiple: false,
    size: `m`,
    maxFileSize: 30 * 1000 * 1000, // 30 MB
};

export const TUI_INPUT_FILES_OPTIONS = new InjectionToken<TuiInputFilesOptions>(
    `[TUI_INPUT_FILES_OPTIONS]: Default parameters for input files component`,
    {
        factory: () => TUI_INPUT_FILES_DEFAULT_OPTIONS,
    },
);

export const tuiInputFilesOptionsProvider: (
    options: Partial<TuiInputFilesOptions>,
) => ValueProvider = (options: Partial<TuiInputFilesOptions>) => ({
    provide: TUI_INPUT_FILES_OPTIONS,
    useValue: {...TUI_INPUT_FILES_DEFAULT_OPTIONS, ...options},
});
