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
        from: {
            name: 'TUI_VALIDATION_ERRORS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_VALIDATION_ERRORS',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
];
