import {hasElementAttribute} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {type ReplacementAttribute} from '../../../interfaces';

export const ATTRS_TO_REPLACE: ReplacementAttribute[] = [
    {
        from: {
            attrName: 'brandLogo',
            withTagNames: ['tui-card', 'tui-thumbnail-card'],
        },
        to: {attrName: 'iconStart'},
    },
    {
        from: {
            attrName: 'src',
            withTagNames: ['tui-svg'],
        },
        to: {attrName: 'icon'},
    },
    {
        from: {
            attrName: '[src]',
            withTagNames: ['tui-svg'],
        },
        to: {attrName: '[icon]'},
    },
    {
        from: {
            attrName: '[brandLogo]',
            withTagNames: ['tui-card', 'tui-thumbnail-card'],
        },
        to: {attrName: '[iconStart]'},
    },
    {
        from: {
            attrName: '[status]',
            withTagNames: ['tui-badge'],
        },
        to: {attrName: '[appearance]'},
    },
    {
        from: {
            attrName: 'status',
            withTagNames: ['tui-badge'],
        },
        to: {attrName: 'appearance'},
    },
    {
        from: {
            attrName: 'item',
            withTagNames: ['tui-radio', 'tui-radio-labeled', 'tui-radio-block'],
        },
        to: {attrName: 'value'},
    },
    {
        from: {
            attrName: '[item]',
            withTagNames: ['tui-radio', 'tui-radio-labeled', 'tui-radio-block'],
        },
        to: {attrName: '[value]'},
    },
    {
        from: {
            attrName: '(removed)',
            withTagNames: ['tui-file'],
        },
        to: {attrName: '(remove)'},
    },
    {
        from: {
            attrName: '[rounded]',
            withTagNames: ['tui-avatar'],
        },
        to: {attrName: '[round]'},
    },
    {
        from: {
            attrName: '(tuiResize)',
            withTagNames: ['*'],
        },
        to: {attrName: '(waResizeObserver)'},
    },
    // Hosted dropdown
    {
        from: {
            attrName: '[content]',
            withTagNames: ['tui-hosted-dropdown'],
        },
        to: {attrName: '[tuiDropdown]'},
    },
    {
        from: {
            attrName: '[sided]',
            withTagNames: ['tui-hosted-dropdown'],
        },
        to: {attrName: '[tuiDropdownSided]'},
    },
    {
        from: {
            attrName: '[canOpen]',
            withTagNames: ['tui-hosted-dropdown'],
        },
        to: {attrName: '[tuiDropdownEnabled]'},
    },
    {
        from: {
            attrName: '[open]',
            withTagNames: ['tui-hosted-dropdown'],
        },
        to: {attrName: '[tuiDropdownOpen]'},
    },
    {
        from: {
            attrName: '[(open)]',
            withTagNames: ['tui-hosted-dropdown'],
        },
        to: {attrName: '[(tuiDropdownOpen)]'},
    },
    {
        from: {
            attrName: '(openChange)',
            withTagNames: ['tui-hosted-dropdown'],
        },
        to: {
            attrName: '(tuiDropdownOpenChange)',
        },
    },
    {
        from: {
            attrName: '(focusedChange)',
            withTagNames: ['tui-hosted-dropdown'],
        },
        to: {
            attrName: '(tuiActiveZoneChange)',
        },
    },
    {
        from: {
            attrName: 'tuiHostedDropdownHost',
            withTagNames: ['*'],
        },
        to: {attrName: '#tuiDropdownHost'},
    },
    {
        from: {
            attrName: '[colors]',
            withTagNames: ['tui-progress-segmented'],
        },
        to: {attrName: '[tuiProgressColorSegments]'},
    },
    {
        from: {
            attrName: 'tuiMarkerIcon',
            withTagNames: ['button', 'a'],
        },
        to: {attrName: 'tuiAvatar'},
    },
    {
        from: {
            attrName: 'mode',
            withTagNames: ['tui-marker-icon'],
            withAttrsNames: ['tuiMarkerIcon'],
        },
        to: {attrName: 'appearance'},
    },
    {
        from: {
            attrName: '[mode]',
            withTagNames: ['tui-marker-icon'],
            withAttrsNames: ['tuiMarkerIcon'],
        },
        to: {attrName: '[appearance]'},
    },
    {
        from: {
            attrName: 'tuiAction',
            withTagNames: ['button', 'a'],
            withAttrsNames: ['tuiMarkerIcon'],
        },
        to: {attrName: 'tuiCardLarge tuiSurface="elevated"'},
    },
    {
        from: {
            attrName: 'icon',
            withAttrsNames: ['tuiButton', 'tuiIconButton'],
        },
        to: {attrName: 'iconStart'},
    },
    {
        from: {
            attrName: '[icon]',
            withAttrsNames: ['tuiButton', 'tuiIconButton'],
        },
        to: {attrName: '[iconStart]'},
    },
    {
        from: {
            attrName: 'iconLeft',
            withAttrsNames: ['tuiButton', 'tuiIconButton'],
        },
        to: {attrName: 'iconStart'},
    },
    {
        from: {
            attrName: '[iconLeft]',
            withAttrsNames: ['tuiButton', 'tuiIconButton'],
        },
        to: {attrName: '[iconStart]'},
    },
    {
        from: {
            attrName: 'iconRight',
            withAttrsNames: ['tuiButton', 'tuiIconButton'],
        },
        to: {attrName: 'iconEnd'},
    },
    {
        from: {
            attrName: '[iconRight]',
            withAttrsNames: ['tuiButton', 'tuiIconButton'],
        },
        to: {attrName: '[iconEnd]'},
    },
    {
        from: {
            attrName: 'icon',
            withAttrsNames: ['tuiLink'],
            filterFn: (element) =>
                !hasElementAttribute(element, 'iconAlign') ||
                findAttr(element.attrs, 'iconAlign')?.value === 'right',
        },
        to: {attrName: 'iconEnd'},
    },
    {
        from: {
            attrName: '[icon]',
            withAttrsNames: ['tuiLink'],
            filterFn: (element) =>
                !hasElementAttribute(element, 'iconAlign') ||
                findAttr(element.attrs, 'iconAlign')?.value === 'right',
        },
        to: {attrName: '[iconEnd]'},
    },
    {
        from: {
            attrName: 'icon',
            withAttrsNames: ['tuiLink'],
            filterFn: (element) => findAttr(element.attrs, 'iconAlign')?.value === 'left',
        },
        to: {attrName: 'iconStart'},
    },
    {
        from: {
            attrName: '[icon]',
            withAttrsNames: ['tuiLink'],
            filterFn: (element) => findAttr(element.attrs, 'iconAlign')?.value === 'left',
        },
        to: {attrName: '[iconStart]'},
    },
    {
        from: {
            attrName: 'new',
            withTagNames: ['tui-progress-circle'],
        },
        to: {attrName: ''},
    },
    {
        from: {
            attrName: 'tuiTextfield',
            withTagNames: ['input', 'textarea'],
        },
        to: {attrName: 'tuiTextfieldLegacy'},
    },
    {
        from: {
            attrName: 'status',
            withTagNames: ['tui-notification'],
            withAttrsNames: ['tuiNotification'],
        },
        to: {attrName: 'appearance'},
    },
    {
        from: {
            attrName: '[status]',
            withTagNames: ['tui-notification'],
            withAttrsNames: ['tuiNotification'],
        },
        to: {attrName: '[appearance]'},
    },
    {
        from: {
            attrName: '*tuiRow',
            withTagNames: ['tr'],
        },
        to: {
            attrName: '*ngFor',
        },
    },
    {
        from: {
            attrName: 'tuiResizeable',
            withTagNames: ['*'],
        },
        to: {
            attrName: 'tuiResizable',
        },
    },
];
