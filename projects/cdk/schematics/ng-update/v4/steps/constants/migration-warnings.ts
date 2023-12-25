import {MigrationWarning} from '../../../interfaces';

export const MIGRATION_WARNINGS: MigrationWarning[] = [
    {
        name: 'tuiCreateTimeMask',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateTimeMask has been removed. Use Time mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'tuiCreateDateRangeMask',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateDateRangeMask has been removed. Use DateRange mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'tuiCreateDateMask',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateDateMask has been removed. Use Date mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'tuiCreateAutoCorrectedTimePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedTimePipe has been removed. Use Time mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'tuiCreateAutoCorrectedDateTimePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedDateTimePipe has been removed. Use DateTime mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'tuiCreateAutoCorrectedDateRangePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedDateRangePipe has been removed. Use DateRange mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'tuiCreateAutoCorrectedDatePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedDatePipe has been removed. Use Date mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'TuiAutoCorrectedDatePipeConfigs',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'TuiAutoCorrectedDatePipeConfigs has been removed. Use Date mask from Maskito instead https://github.com/taiga-family/maskito',
    },
    {
        name: 'tuiNormalizeDateValue',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiNormalizeDateValue has been removed. Use Date mask from Maskito instead https://github.com/taiga-family/maskito',
    },
];
