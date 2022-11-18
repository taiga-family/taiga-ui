import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputFilesContent {
    readonly link: PolymorpheusContent;
    readonly label: PolymorpheusContent;
}

export const TUI_INPUT_FILES_DEFAULT_CONTENT: TuiInputFilesContent = {
    label: ``,
    link: ``,
};

export const TUI_INPUT_FILES_CONTENT = new InjectionToken<TuiInputFilesContent>(
    `[TUI_INPUT_FILES_CONTENT]: Default parameters for files input component`,
    {
        factory: () => TUI_INPUT_FILES_DEFAULT_CONTENT,
    },
);

export const tuiInputFilesContentProvider: (
    content: Partial<TuiInputFilesContent>,
) => ValueProvider = (content: Partial<TuiInputFilesContent>) => ({
    provide: TUI_INPUT_FILES_CONTENT,
    useValue: {...TUI_INPUT_FILES_DEFAULT_CONTENT, ...content},
});
