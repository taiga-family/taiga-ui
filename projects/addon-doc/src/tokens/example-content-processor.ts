import {InjectionToken} from '@angular/core';
import {TuiHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

import {tuiTryParseMarkdownCodeBlock} from '../components/code/parse-code-block';

export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR: InjectionToken<
    TuiHandler<Record<string, string>, Record<string, string>>
> = new InjectionToken(
    `[TUI_DOC_EXAMPLE_CONTENT_PROCESSOR]: Processes content in example`,
    {factory: () => identity},
);

export const TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR: InjectionToken<
    TuiHandler<string, string[]>
> = new InjectionToken(
    `[TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR]: Processes markdown in code block`,
    {factory: () => tuiTryParseMarkdownCodeBlock},
);
