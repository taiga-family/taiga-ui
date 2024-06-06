import type {MigrationWarning} from '../../../interfaces';

export const MIGRATION_WARNINGS: MigrationWarning[] = [
    {
        name: 'TuiNumberMaskOptions',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Number mask from Maskito instead https://maskito.dev/kit/number',
    },
    {
        name: 'tuiCreateAutoCorrectedNumberPipe',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Number mask from Maskito instead https://maskito.dev/kit/number',
    },
    {
        name: 'tuiCreateNumberMask',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Number mask from Maskito instead https://maskito.dev/kit/number',
    },
    {
        name: 'tuiEnableAutoCorrectDecimalSymbol',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Number mask from Maskito instead https://maskito.dev/kit/number',
    },
    {
        name: 'TuiTextMaskConfig',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Maskito instead https://maskito.dev',
    },
    {
        name: 'TuiTextMaskCorrectionHandler',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Maskito instead https://maskito.dev',
    },
    {
        name: 'TuiTextMaskListHandler',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Maskito instead https://maskito.dev',
    },
    {
        name: 'TuiTextMaskList',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Maskito instead https://maskito.dev',
    },
    {
        name: 'TuiTextMaskOptions',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Maskito instead https://maskito.dev',
    },
    {
        name: 'TuiTextMaskPipeHandler',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Maskito instead https://maskito.dev',
    },
    {
        name: 'TuiTextMaskPipeResult',
        moduleSpecifier: '@taiga-ui/core',
        message: 'Use Maskito instead https://maskito.dev',
    },
    {
        name: 'tuiCreateCorrectionMask',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'Use processors from Maskito instead https://maskito.dev/core-concepts/processors',
    },
    {
        name: 'tuiCreateTimeMask',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use Time mask from Maskito instead https://maskito.dev/kit/time',
    },
    {
        name: 'tuiCreateDateRangeMask',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'Use DateRange mask from Maskito instead https://maskito.dev/kit/date-range',
    },
    {
        name: 'tuiCreateDateMask',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
    {
        name: 'tuiCreateAutoCorrectedTimePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use Time mask from Maskito instead https://maskito.dev/kit/time',
    },
    {
        name: 'tuiCreateAutoCorrectedDateTimePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'Use DateTime mask from Maskito instead https://maskito.dev/kit/date-time',
    },
    {
        name: 'tuiCreateAutoCorrectedDateRangePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'Use DateRange mask from Maskito instead https://maskito.dev/kit/date-range',
    },
    {
        name: 'tuiCreateAutoCorrectedDatePipe',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
    {
        name: 'TuiAutoCorrectedDatePipeConfigs',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
    {
        name: 'tuiNormalizeDateValue',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use Date mask from Maskito instead https://maskito.dev/kit/date',
    },
    {
        name: 'tuiObjectFromEntries',
        moduleSpecifier: '@taiga-ui/cdk',
        message: 'Use Object.fromEntries instead',
    },
    {
        name: 'EMPTY_MASK',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'Use Maskito instead https://maskito.dev (use MASKITO_DEFAULT_OPTIONS or just pass null to [maskito]-directive)',
    },
    {
        name: 'TextMaskModule',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use Maskito instead https://maskito.dev',
    },

    {
        name: 'cardHolderMask',
        moduleSpecifier: '@taiga-ui/addon-commerce',
        message: 'Use TUI_CARD_HOLDER_MASK with Maskito instead https://maskito.dev',
    },
    {
        name: 'tuiCreateAutoCorrectedExpirePipe',
        moduleSpecifier: '@taiga-ui/addon-commerce',
        message:
            'Use Date mask (with [mode]="mm/yyyy") from Maskito instead https://maskito.dev/kit/date/API?mode=mm%2Fyyyy',
    },
    {
        name: 'TuiMaskAccessorModule',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'Use Maskito instead (this MaskAccessor is not required for it) https://maskito.dev/frameworks/angular#custom-input',
    },
    {
        name: 'TUI_INPUT_NUMBER_OPTIONS',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'TUI_INPUT_NUMBER_OPTIONS "precision" and "decimal" have been moved to TUI_FORMAT_NUMBER_OPTIONS. See https://taiga-ui.dev/components/input-number#options ',
    },
];
