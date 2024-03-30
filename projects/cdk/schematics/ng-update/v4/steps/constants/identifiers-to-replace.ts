import type {ReplacementIdentifier} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifier[] = [
    {
        from: {name: 'TuiActiveZoneModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiActiveZoneDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiAutoFocusModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiAutoFocusDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'ALWAYS_TRUE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TUI_TRUE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'ALWAYS_FALSE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TUI_FALSE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
    },
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
        to: {name: 'TuiCheckboxComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSwipeActionsModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwipeActionsComponent', moduleSpecifier: '@taiga-ui/addon-mobile'},
    },
    {
        from: {name: 'TuiRadioModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRadioComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiToggleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwitchComponent', moduleSpecifier: '@taiga-ui/kit'},
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
        from: {
            name: 'TuiBadgeNotificationModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {name: 'TuiBadgeNotificationComponent', moduleSpecifier: '@taiga-ui/kit'},
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
        from: {name: 'TuiScrollbarModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiScrollbarComponent', moduleSpecifier: '@taiga-ui/core'},
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
        from: {name: 'TuiDroppableModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDroppableDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiValidatorModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValidatorDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiAmountModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAmountPipe', moduleSpecifier: '@taiga-ui/addon-commerce'},
    },
    {
        from: {name: 'TuiMoneyModule', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {name: 'TuiAmountPipe', moduleSpecifier: '@taiga-ui/addon-commerce'},
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
    {
        from: {name: 'TuiPresentModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiPresentDirective',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiEditorModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiEditorComponent', moduleSpecifier: '@tinkoff/tui-editor'},
    },
    {
        from: {name: 'TuiEditorSocketModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiEditorSocketComponent', moduleSpecifier: '@tinkoff/tui-editor'},
    },
    {
        from: {name: 'defaultEditorExtensions', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {
            name: 'TUI_EDITOR_DEFAULT_EXTENSIONS',
            moduleSpecifier: '@tinkoff/tui-editor',
        },
    },
    {
        from: {name: 'defaultEditorTools', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {
            name: 'TUI_EDITOR_DEFAULT_TOOLS',
            moduleSpecifier: '@tinkoff/tui-editor',
        },
    },
    {
        from: {name: 'TuiFadeModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiFadeDirective',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiInitialsModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiInitialsPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFallbackSrcModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiFallbackSrcPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiAutoColorModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAutoColorPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'tuiStringHashToHsl', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'tuiStringHashToHsl', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiIconModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiIconComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiCheckboxLabeledModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiLabelComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiHostedDropdownModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiDropdownModule', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiTitleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiTitleDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiHeaderModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiHeaderDirective', moduleSpecifier: '@taiga-ui/layout'},
    },
    {
        from: {name: 'TuiPinModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiPinComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiCompassModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCompassComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiRatingModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRatingComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiRatingModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiRatingComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
];
