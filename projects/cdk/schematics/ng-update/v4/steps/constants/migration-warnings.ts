import {MigrationWarning} from '../../../interfaces';

export const MIGRATION_WARNINGS: MigrationWarning[] = [
    {
        name: 'tuiCreateTimeMask',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateTimeMask has been removed. Use Time mask from Maskito instead https://maskito.dev/kit/time',
    },
    {
        name: 'tuiCreateDateRangeMask',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateDateRangeMask has been removed. Use DateRange mask from Maskito instead https://maskito.dev/kit/date-range',
    },
    {
        name: 'tuiCreateDateMask',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateDateMask has been removed. Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
    {
        name: 'tuiCreateAutoCorrectedTimePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedTimePipe has been removed. Use Time mask from Maskito instead https://maskito.dev/kit/time',
    },
    {
        name: 'tuiCreateAutoCorrectedDateTimePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedDateTimePipe has been removed. Use DateTime mask from Maskito instead https://maskito.dev/kit/date-time',
    },
    {
        name: 'tuiCreateAutoCorrectedDateRangePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedDateRangePipe has been removed. Use DateRange mask from Maskito instead https://maskito.dev/kit/date-range',
    },
    {
        name: 'tuiCreateAutoCorrectedDatePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiCreateAutoCorrectedDatePipe has been removed. Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
    {
        name: 'TuiAutoCorrectedDatePipeConfigs',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'TuiAutoCorrectedDatePipeConfigs has been removed. Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
    {
        name: 'tuiNormalizeDateValue',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiNormalizeDateValue has been removed. Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
];
