import {
    TuiDocAPI,
    TuiDocAPIItem,
    TuiDocAPINumberItem,
    TuiDocCode,
    TuiDocCopy,
    TuiDocDemo,
    TuiDocExample,
    TuiDocExampleGetTabsPipe,
    TuiDocMain,
    TuiDocNavigation,
    TuiDocPage,
    TuiDocPageTabConnector,
    TuiDocTab,
} from '@taiga-ui/addon-doc/components';

export const TuiAddonDoc = [
    TuiDocAPI,
    TuiDocAPIItem,
    TuiDocAPINumberItem,
    TuiDocCopy,
    TuiDocTab,
    TuiDocDemo,
    TuiDocCode,
    TuiDocExample,
    TuiDocExampleGetTabsPipe,
    TuiDocPage,
    TuiDocPageTabConnector,
    TuiDocNavigation,
    TuiDocMain,
] as const;

export * from '@taiga-ui/addon-doc/components';
export * from '@taiga-ui/addon-doc/services';
export * from '@taiga-ui/addon-doc/tokens';
export * from '@taiga-ui/addon-doc/types';
export * from '@taiga-ui/addon-doc/utils';
