import type {ReplacementType} from '../../../interfaces';

export const TYPES_TO_RENAME: readonly ReplacementType[] = [
    {
        from: 'TuiDocExample',
        to: 'Record<string, string | Promise<unknown>>',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
        removeImport: true,
    },
];
