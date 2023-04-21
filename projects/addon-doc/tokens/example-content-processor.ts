import {InjectionToken} from '@angular/core';
import {tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc/utils';
import {TuiHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

/**
 * Processes content in example
 */
export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR = new InjectionToken<
    TuiHandler<Record<string, string>, Record<string, string>>
>(`[TUI_DOC_EXAMPLE_CONTENT_PROCESSOR]`, {
    factory: () => identity,
});

/**
 * Processes markdown in code block
 */
export const TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR = new InjectionToken<
    TuiHandler<string, string[]>
>(`[TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR]`, {
    factory: () => tuiTryParseMarkdownCodeBlock,
});
