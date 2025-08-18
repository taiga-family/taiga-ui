import {InjectionToken} from '@angular/core';
import {tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc/utils';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {identity} from 'rxjs';

/**
 * Processes content in example
 */
export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR = new InjectionToken<
    TuiHandler<Record<string, string>, Record<string, string>>
>(ngDevMode ? 'TUI_DOC_EXAMPLE_CONTENT_PROCESSOR' : '', {
    factory: () => identity,
});

/**
 * Processes markdown in code block
 */
export const TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR = new InjectionToken<
    TuiHandler<string, readonly string[]>
>(ngDevMode ? 'TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR' : '', {
    factory: () => tuiTryParseMarkdownCodeBlock,
});
