import type {TuiDocTypeReferenceParsed} from '@taiga-ui/addon-doc/utils';
import {tuiTypeReferenceParser} from '@taiga-ui/addon-doc/utils';
import type {TuiHandler, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_DOC_TYPE_REFERENCE_HANDLER = tuiCreateToken<TuiStringHandler<
    string | null
> | null>(null);

export const TUI_DOC_TYPE_REFERENCE_PARSER =
    tuiCreateToken<TuiHandler<string, TuiDocTypeReferenceParsed>>(tuiTypeReferenceParser);
