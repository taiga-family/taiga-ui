import {
    type TuiDocTypeReferenceParsed,
    tuiTypeReferenceParser,
} from '@taiga-ui/addon-doc/utils';
import {tuiCreateToken, type TuiHandler, type TuiStringHandler} from '@taiga-ui/cdk';

export const TUI_DOC_TYPE_REFERENCE_HANDLER = tuiCreateToken<TuiStringHandler<
    string | null
> | null>(null);

export const TUI_DOC_TYPE_REFERENCE_PARSER =
    tuiCreateToken<TuiHandler<string, TuiDocTypeReferenceParsed>>(tuiTypeReferenceParser);
