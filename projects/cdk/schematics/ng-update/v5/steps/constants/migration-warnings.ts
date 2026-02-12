import {type MigrationWarning} from '../../../interfaces';

export const MIGRATION_WARNINGS: MigrationWarning[] = [
    {
        name: 'TUI_DATE_MODE_MASKITO_ADAPTER',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiDateMode and MaskitoDateMode are now compatible with each other; the adapter is no longer required',
    },
    {
        name: 'TuiDateMode',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'All values inside TuiDateMode are renamed: DMY -> dd/mm/yyyy, MDY -> mm/dd/yyyy, YMD -> yyyy/mm/dd',
    },
];
