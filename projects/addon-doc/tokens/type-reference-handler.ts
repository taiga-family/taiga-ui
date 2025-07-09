import {InjectionToken} from '@angular/core';
import type {TuiDocTypeReferenceParsed} from '@taiga-ui/addon-doc/utils';
import {tuiTypeReferenceParser} from '@taiga-ui/addon-doc/utils';
import type {TuiHandler, TuiStringHandler} from '@taiga-ui/cdk/types';

export const TUI_DOC_TYPE_REFERENCE_HANDLER = new InjectionToken<TuiStringHandler<
    string | null
> | null>(ngDevMode ? 'TUI_DOC_TYPE_REFERENCE_HANDLER' : '', {
    factory: () => null,
});

export const TUI_DOC_TYPE_REFERENCE_PARSER = new InjectionToken<
    TuiHandler<string, TuiDocTypeReferenceParsed>
>(ngDevMode ? 'TUI_DOC_TYPE_REFERENCE_PARSER' : '', {
    factory: () => tuiTypeReferenceParser,
});
