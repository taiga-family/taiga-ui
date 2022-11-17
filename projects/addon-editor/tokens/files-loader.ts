import {InjectionToken} from '@angular/core';
import {
    TuiEditorAttachedFile,
    TuiEditorAttachOptions,
} from '@taiga-ui/addon-editor/interfaces';
import {TuiHandler} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

export const TUI_ATTACH_FILES_OPTIONS: InjectionToken<TuiEditorAttachOptions> =
    new InjectionToken<TuiEditorAttachOptions>(
        `[TUI_ATTACH_FILES_OPTIONS]: files loader options`,
        {factory: () => ({accept: `*/*`, multiple: true})},
    );

export const TUI_ATTACH_FILES_LOADER: InjectionToken<
    TuiHandler<File[], Observable<TuiEditorAttachedFile[]>>
> = new InjectionToken<TuiHandler<File[], Observable<TuiEditorAttachedFile[]>>>(
    `[TUI_ATTACH_FILES_LOADER]: files loader handler`,
);
