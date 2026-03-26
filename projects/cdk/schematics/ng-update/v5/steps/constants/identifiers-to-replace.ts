import {type ReplacementIdentifierMulti} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifierMulti[] = [
    {
        from: {
            name: 'TuiInputYearModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: [
            {
                name: 'TuiInputYear',
                moduleSpecifier: '@taiga-ui/kit',
            },
            {
                name: 'TuiTextfield',
                moduleSpecifier: '@taiga-ui/core',
            },
        ],
    },
    {
        from: {
            name: 'TuiInputPhoneModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInputPhone',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiButtonClose',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiButtonX',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiAlertService',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiNotificationService',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'tuiAlertOptionsProvider',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'tuiNotificationOptionsProvider',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiSurface',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiSurface',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiCell',
            moduleSpecifier: '@taiga-ui/layout',
        },
        to: {
            name: 'TuiCell',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'tuiCellOptionsProvider',
            moduleSpecifier: '@taiga-ui/layout',
        },
        to: {
            name: 'tuiCellOptionsProvider',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiAutoColorPipe',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiAutoColorPipe',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiFlagPipe',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiFlagPipe',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'tuiPure',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'tuiPure',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiTimeMode',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'MaskitoTimeMode',
            moduleSpecifier: '@maskito/kit',
        },
    },
    {
        from: {
            name: 'ResizeObserverService',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
        to: {
            name: 'WaResizeObserverService',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
    },
    {
        from: {
            name: 'TuiSlides',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiSlides',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiElasticContainer',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiElasticContainer',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiFloatingContainer',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiFloatingContainer',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiPdfViewer',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiPdfViewer',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiPdfViewerComponent',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiPdfViewer',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiTagModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiChip',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'tuiTagOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'tuiChipOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiComboBoxModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiComboBox',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiSelectModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiSelect',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiSheetModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiSheetDialog',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiSheetDialogOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiSheetDialogOptions',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiSheetService',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiSheetDialogService',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TUI_IS_ANDROID',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'WA_IS_ANDROID',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'TUI_IS_IOS',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'WA_IS_IOS',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'TUI_IS_MOBILE',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'WA_IS_MOBILE',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'TUI_IS_WEBKIT',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'WA_IS_WEBKIT',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'TUI_IS_E2E',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'WA_IS_E2E',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'tuiIsEdge',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'isEdge',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'tuiIsFirefox',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'isFirefox',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'tuiIsSafari',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'isSafari',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'provideEventPlugins',
            moduleSpecifier: '@taiga-ui/event-plugins',
        },
        to: {
            name: 'provideTaiga',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiIslandDirective',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiCardLarge',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiAccordion',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiAccordion',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiTextfield',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiInput',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiSlider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiSlider',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiSliderComponent',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiSliderComponent',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiCheckbox',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiCheckbox',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiRadio',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiRadio',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiKeySteps',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiKeySteps',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'tuiCheckboxOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiCheckboxOptionsProvider',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TUI_FLOATING_PRECISION',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_FLOATING_PRECISION',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TUI_CHECKBOX_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_CHECKBOX_OPTIONS',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TUI_RADIO_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_RADIO_OPTIONS',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiExpand',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiExpand',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: [
            {
                name: 'TuiFieldErrorPipe',
                moduleSpecifier: '@taiga-ui/kit',
            },
            {
                name: 'TuiFieldErrorContentPipe',
                moduleSpecifier: '@taiga-ui/kit',
            },
        ],
        to: {
            name: 'TuiError',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TUI_VALIDATION_ERRORS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_VALIDATION_ERRORS',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'tuiInputDateOptionsProviderNew',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputDateOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiInitialsPipe',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiInitialsPipe',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'tuiIsNativeFocused',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'tuiIsFocused',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiIsNativeFocusedIn',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'tuiIsFocusedIn',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiGetNativeFocused',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'tuiGetFocused',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiIsNativeKeyboardFocusable',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'tuiIsFocusable',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiBlurNativeFocused',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'tuiBlurFocused',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: [
            {
                name: 'tuiIsApple',
                moduleSpecifier: '@taiga-ui/cdk',
            },
            {
                name: 'tuiIsApple',
                moduleSpecifier: '@taiga-ui/legacy',
            },
        ],
        to: {
            name: 'isApple',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'tuiIsIos',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'isIos',
            moduleSpecifier: '@ng-web-apis/platform',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE_ADDON_COMMERCE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE_ADDON_COMMERCE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE_ADDON_EDITOR',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE_ADDON_EDITOR',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE_ADDON_TABLE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE_ADDON_TABLE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE_CORE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE_CORE',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE_COUNTRIES',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE_COUNTRIES',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE_KIT',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE_KIT',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TUI_JAPAN_LANGUAGE_LAYOUT',
            moduleSpecifier: '@taiga-ui/i18n',
        },
        to: {
            name: 'TUI_JAPANESE_LANGUAGE_LAYOUT',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TuiSidebar',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: [
            {
                name: 'TuiDrawer',
                moduleSpecifier: '@taiga-ui/kit',
            },
            {
                name: 'TuiPopup',
                moduleSpecifier: '@taiga-ui/core',
            },
        ],
    },
    {
        from: {
            name: 'TuiInputPasswordModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: [
            {
                name: 'TuiPassword',
                moduleSpecifier: '@taiga-ui/kit',
            },
            {
                name: 'TuiTextfield',
                moduleSpecifier: '@taiga-ui/core',
            },
        ],
    },
    {
        from: {
            name: 'TuiInputMonthModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: [
            {
                name: 'TuiInputMonth',
                moduleSpecifier: '@taiga-ui/kit',
            },
        ],
    },
    {
        from: {
            name: 'TuiInputColorModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInputColor',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiPopover', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortalContext', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiPopoverService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortal', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiPopoverDirective', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortalDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'tuiAsPopover', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'tuiAsPortal', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {
            name: 'TuiInputDateModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInputDate',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiInputTimeModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInputTime',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiInputPhoneInternationalModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInputPhoneInternational',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiInputDateRangeModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInputDateRange',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiFilterByInputPipe',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiFilterByInputPipe',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'tuiIsFlat',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiIsFlat',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'TuiInputTagModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInputChip',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiFormatPhonePipe',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'MaskitoPipe',
            moduleSpecifier: '@maskito/angular',
        },
    },
    {
        from: {
            name: 'TuiOnboardingFlowDialog',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
        to: {
            name: 'TuiResponsiveDialog',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiOnboardingFlowDialogService',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
        to: {
            name: 'TuiResponsiveDialogService',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiOnboardingDialogDirective',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
        to: {
            name: 'TuiResponsiveDialog',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiInputModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiInput',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiTextareaModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: {
            name: 'TuiTextarea',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
];
