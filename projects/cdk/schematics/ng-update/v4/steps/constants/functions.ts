import type {ReplacementType} from '../../../interfaces/replacement-type';

export const REPLACE_FUNCTIONS: readonly ReplacementType[] = [
    {
        from: 'tuiDocLanguageSwitcher',
        to: 'tuiLanguageSwitcher',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
];
