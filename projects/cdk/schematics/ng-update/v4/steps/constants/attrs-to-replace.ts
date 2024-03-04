import {type ReplacementAttribute} from '../../../interfaces';

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
        },
        to: {attrName: '(waResizeObserver)'},
    },
];
