import {hasElementAttribute} from '../../../../utils/templates/elements';
import {type ReplacementAttribute} from '../../../interfaces';

export const ATTRS_TO_REPLACE: readonly ReplacementAttribute[] = [
    {
        from: {
            attrName: 'icon',
            withAttrsNames: ['tuiBadge'],
            filterFn: (element) => element.tagName === 'tui-icon',
        },
        to: {attrName: 'iconStart'},
    },
    {
        from: {
            attrName: '[icon]',
            withAttrsNames: ['tuiBadge'],
            filterFn: (element) => element.tagName === 'tui-icon',
        },
        to: {attrName: '[iconStart]'},
    },
    {
        from: {attrName: '[tuiAlert]', withTagNames: ['*']},
        to: {attrName: '[tuiNotification]'},
    },
    {
        from: {attrName: '[(tuiAlert)]', withTagNames: ['*']},
        to: {attrName: '[(tuiNotification)]'},
    },
    {
        from: {attrName: '(tuiAlertChange)', withTagNames: ['*']},
        to: {attrName: '(tuiNotificationChange)'},
    },
    {
        from: {attrName: '[tuiAlertOptions]', withTagNames: ['*']},
        to: {attrName: '[tuiNotificationOptions]'},
    },
    {
        from: {attrName: '[tuiOnboarding]', withTagNames: ['*']},
        to: {attrName: '[tuiResponsiveDialog]'},
    },
    {
        from: {attrName: '[(tuiOnboarding)]', withTagNames: ['*']},
        to: {attrName: '[(tuiResponsiveDialog)]'},
    },
    {
        from: {attrName: '(tuiOnboardingChange)', withTagNames: ['*']},
        to: {attrName: '(tuiResponsiveDialogChange)'},
    },
    {
        from: {attrName: '[tuiOnboardingOptions]', withTagNames: ['*']},
        to: {attrName: '[tuiResponsiveDialogOptions]'},
    },
    {
        from: {attrName: 'tuiButtonClose', withTagNames: ['*']},
        to: {attrName: 'tuiButtonX'},
    },
    {
        from: {attrName: 'tuiTag', withTagNames: ['*']},
        to: {attrName: 'tuiChip'},
    },
    {
        from: {attrName: '*tuiTextfieldDropdown', withTagNames: ['*']},
        to: {attrName: '*tuiDropdown'},
    },
    {
        from: {attrName: '*tuiDataList', withTagNames: ['*']},
        to: {attrName: '*tuiDropdown'},
    },
    {
        from: {attrName: 'tuiTextfield', withTagNames: ['*']},
        to: {attrName: 'tuiInput'},
    },
    {
        from: {attrName: 'tuiDropdownOpen', withTagNames: ['*']},
        to: {attrName: 'tuiDropdownAuto'},
    },
    {
        from: {attrName: 'tuiDropdownMobile', withTagNames: ['*']},
        to: {attrName: 'tuiDropdownSheet'},
    },
    {
        from: {attrName: '[tuiSheet]', withTagNames: ['*']},
        to: {attrName: '[tuiSheetDialog]'},
    },
    {
        from: {attrName: 'tuiSheetOptions', withTagNames: ['*']},
        to: {attrName: 'tuiSheetDialogOptions'},
    },
    {
        from: {attrName: 'showLoader', withTagNames: ['tui-loader']},
        to: {attrName: 'loading'},
    },
    {
        from: {attrName: '[showLoader]', withTagNames: ['tui-loader']},
        to: {attrName: '[loading]'},
    },
    {
        from: {attrName: 'tuiStepper', withTagNames: ['nav']},
        to: {attrName: ''},
    },
    {
        from: {attrName: 'tuiTabs', withTagNames: ['nav']},
        to: {attrName: ''},
    },
    {
        from: {attrName: 'tuiExpandContent', withTagNames: ['ng-template']},
        to: {attrName: 'tuiItem'},
    },
    {
        from: {attrName: '*tuiExpandContent', withTagNames: ['*']},
        to: {attrName: '*tuiItem'},
    },
    {
        from: {
            attrName: '[tuiAppearance]',
            withTagNames: ['*'],
            filterFn: (element) => hasElementAttribute(element, 'tuiCardLarge'),
        },
        to: {attrName: '[appearance]'},
    },
    {
        from: {
            attrName: 'tuiAppearance',
            withTagNames: ['*'],
            filterFn: (element) => hasElementAttribute(element, 'tuiCardLarge'),
        },
        to: {attrName: 'appearance'},
    },
    {
        from: {attrName: '(tuiPresentChange)', withTagNames: ['*']},
        to: {attrName: '(tuiPresent)'},
    },
    {
        from: {attrName: 'new', withAttrsNames: ['tuiOption']},
        to: {attrName: ''},
    },
];
