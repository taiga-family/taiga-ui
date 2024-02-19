import {ReplacementIdentifier} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifier[] = [
    {
        from: {name: 'TuiCardModule', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {name: 'TuiThumbnailCardModule', moduleSpecifier: '@taiga-ui/addon-commerce'},
    },
    {
        from: {name: 'TuiCardComponent', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {
            name: 'TuiThumbnailCardComponent',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
    },
    {
        from: {name: 'TuiBadgeModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiBadgeDirective', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiBadgeDirective', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiCheckboxModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCheckboxModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSwipeActionsModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwipeActionsComponent', moduleSpecifier: '@taiga-ui/addon-mobile'},
    },
    {
        from: {name: 'TuiRadioModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRadioModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiToggleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiToggleModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaDirective', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaDirective', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiBadgedContentComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiBadgedContentComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaComponent', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiInputCountModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiInputNumberModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'ArrayElement', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiArrayElement', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {
            name: 'DocumentationPropertyType',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocumentationPropertyType',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'RawContentLoader',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiRawContentLoader',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiContextWithImplicit',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'TuiContext',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {name: 'TUI_SCROLL_REF', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TUI_SCROLL_REF', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiGroupModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiGroupDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'AbstractTuiPortalHostComponent', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortalsComponent', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'AbstractTuiPortalService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortalService', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'AbstractTuiDialogService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPopoverService', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiDropdownHostComponent', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownsComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDropdownPortalService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownService', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortalDirective', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortalDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortalModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortalDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiResizeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {
            name: 'ResizeObserverDirective',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
    },
    {
        from: {name: 'TuiResizeService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {
            name: 'ResizeObserverService',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
    },
];
