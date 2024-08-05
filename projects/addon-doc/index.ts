import {
    TuiDocCode,
    TuiDocCopy,
    TuiDocDemo,
    TuiDocDocumentation,
    TuiDocDocumentationPropertyConnector,
    TuiDocExample,
    TuiDocExampleGetTabsPipe,
    TuiDocMain,
    TuiDocNavigation,
    TuiDocPage,
    TuiDocPageTabConnector,
    TuiDocTab,
    TuiDocTypeReferencePipe,
} from '@taiga-ui/addon-doc/components';
import {TuiDocText} from '@taiga-ui/addon-doc/directives';

export const TuiAddonDoc = [
    TuiDocCopy,
    TuiDocTab,
    TuiDocDemo,
    TuiDocCode,
    TuiDocExample,
    TuiDocExampleGetTabsPipe,
    TuiDocTypeReferencePipe,
    TuiDocDocumentation,
    TuiDocDocumentationPropertyConnector,
    TuiDocPage,
    TuiDocPageTabConnector,
    TuiDocNavigation,
    TuiDocMain,
    TuiDocText,
] as const;

export * from '@taiga-ui/addon-doc/components';
export * from '@taiga-ui/addon-doc/directives';
export * from '@taiga-ui/addon-doc/services';
export * from '@taiga-ui/addon-doc/tokens';
export * from '@taiga-ui/addon-doc/types';
export * from '@taiga-ui/addon-doc/utils';
