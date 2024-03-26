import type {ReplacementAttribute} from '../../../interfaces';

export const ATTRS_TO_REPLACE: ReplacementAttribute[] = [
    {
        from: {
            attrName: 'brandLogo',
            withTagNames: ['tui-card', 'tui-thumbnail-card'],
        },
        to: {attrName: 'iconLeft'},
    },
    {
        from: {
            attrName: '[brandLogo]',
            withTagNames: ['tui-card', 'tui-thumbnail-card'],
        },
        to: {attrName: '[iconLeft]'},
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
            withTagNames: ['tui-radio'],
        },
        to: {attrName: 'value'},
    },
    {
        from: {
            attrName: '[item]',
            withTagNames: ['tui-radio'],
        },
        to: {attrName: '[value]'},
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
    {
        from: {
            attrName: 'item',
            withTagNames: ['tui-radio-labeled'],
        },
        to: {attrName: 'value'},
    },
    {
        from: {
            attrName: '[item]',
            withTagNames: ['tui-radio-labeled'],
        },
        to: {attrName: '[value]'},
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
];
