import type {ReplacementIdentifierMulti} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifierMulti[] = [
    {
        from: {name: 'TuiActiveZoneModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiActiveZone', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiAutoFocusModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiAutoFocus', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiFocusTrapModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiFocusTrap', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiElementModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiElement', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiForModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiFor', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiHoveredModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiHovered', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiItemModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiItem', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiPanModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPan', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiRepeatTimesModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiRepeatTimes', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiSwipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiSwipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiValueChangesModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValueChanges', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiZoomModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiZoom', moduleSpecifier: '@taiga-ui/cdk'},
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
        from: {name: 'TUI_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TUI_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TUI_NON_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TUI_NON_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TUI_NON_DIGITS_REGEXP', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TUI_NON_DIGITS_REGEXP', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiAlertModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiAlert', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiNotification', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiNotificationStatus', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiNotificationModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiNotification', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiCalendarModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiCalendar', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFormatDatePipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFormatDatePipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFormatNumberPipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFormatNumberPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFormatPhonePipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFormatPhonePipe', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'tuiFormatPhone', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'tuiFormatPhone', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiExtractCountryCodeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiToCountryCodePipe', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiIsoToCountryCodeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiIsoToCountryCodePipe', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'tuiIsoToCountryCode', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'tuiIsoToCountryCode', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'tuiNotKzRegion', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'tuiNotKzRegion', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'tuiGetMaxAllowedPhoneLength', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'tuiGetMaxAllowedPhoneLength', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiMonthPipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiMonthPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDataListModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiDataList', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDataListWrapperModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiDataListWrapper', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiErrorModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiError', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiExpandModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiExpand', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiLoaderModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiLoader', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiAccordion', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiAccordion', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiAccordionModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiAccordion', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBreadcrumbsModule', moduleSpecifier: '@taiga-ui/kit'},
        to: [
            {name: 'TuiBreadcrumbs', moduleSpecifier: '@taiga-ui/kit'},
            {name: 'TuiItem', moduleSpecifier: '@taiga-ui/cdk'},
        ],
    },
    {
        from: {name: 'TuiCalendarMonthModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiCalendarMonth', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiCalendarRangeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiCalendarRange', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiCarouselModule', moduleSpecifier: '@taiga-ui/kit'},
        to: [
            {name: 'TuiCarousel', moduleSpecifier: '@taiga-ui/kit'},
            {name: 'TuiItem', moduleSpecifier: '@taiga-ui/cdk'},
        ],
    },
    {
        from: {name: 'TuiPushModule', moduleSpecifier: '@taiga-ui/kit'},
        to: [
            {name: 'TuiPush', moduleSpecifier: '@taiga-ui/kit'},
            {name: 'TuiPush', moduleSpecifier: '@taiga-ui/kit'},
        ],
    },
    {
        from: {name: 'TuiElasticContainerModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiElasticContainer', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiFilesModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiFiles', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiFilterModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiFilter', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiInputInlineModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiInputInline', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiIsland', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiIsland', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiIslandModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiIsland', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiItemsWithMoreModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiItemsWithMore', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiLineClampModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiLineClamp', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiRangeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiRange', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSliderModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiSlider', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTilesModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTiles', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiStepperModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiStepper', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTreeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTree', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {
            name: 'TuiDataListDropdownManagerModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiDataListDropdownManager',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiHighlightModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiHighlight', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiLazyLoadingModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiLazyLoading', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiUnfinishedValidatorModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiUnfinishedValidator', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiUnmaskHandlerModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiUnmaskHandler', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiDialogFormService', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiConfirmService', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSortCountriesPipeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiSortCountriesPipe', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiStringifyContentPipeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiStringifyContentPipe', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiFilterByInputPipeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiFilterByInputPipe', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiFieldErrorPipeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiFieldErrorPipe', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiThumbnailCardModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiThumbnailCard',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
    },
    {
        from: {name: 'TuiCardModule', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {
            name: 'TuiThumbnailCard',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
    },
    {
        from: {name: 'TuiCard', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {
            name: 'TuiThumbnailCard',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
    },
    {
        from: {name: 'TuiWrapperModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiWrapperModule', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiPrimitiveTextfieldModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiPrimitiveTextfieldModule', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiTextfieldControllerModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiTextfieldControllerModule', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiTextfield', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiTextfield', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiBadgeModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiBadge', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiBadge', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiClickOutsideModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiClickOutside', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiCopyProcessorModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiCopyProcessor', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'AbstractTuiValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiControlValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiFilterPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiFilterPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiIsPresentPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiIsPresentPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiKeysPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiKeysPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiMapperPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiMapperPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiReplacePipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiReplacePipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiCheckboxModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCheckbox', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSwipeActionsModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwipeActions', moduleSpecifier: '@taiga-ui/addon-mobile'},
    },
    {
        from: {name: 'TuiRadioModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRadio', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiToggleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwitch', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextArea', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextarea', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiBadgedContent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {
            name: 'TuiBadgeNotificationModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {name: 'TuiBadgeNotification', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiBadgedContent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextArea', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextarea', moduleSpecifier: '@taiga-ui/kit'},
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
        to: {name: 'TuiScrollbar', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiGroupModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiGroup', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'AbstractTuiPortalHost', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortals', moduleSpecifier: '@taiga-ui/cdk'},
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
        from: {name: 'TuiDropdownHost', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdowns', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDropdownPortalService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownService', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortal', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortal', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortalModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortal', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDroppableModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDroppable', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiValidatorModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValidator', moduleSpecifier: '@taiga-ui/cdk'},
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
            name: 'TuiPresent',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiEditorModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiEditor', moduleSpecifier: '@tinkoff/tui-editor'},
    },
    {
        from: {name: 'TuiEditorSocketModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiEditorSocket', moduleSpecifier: '@tinkoff/tui-editor'},
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
            name: 'TuiFade',
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
        to: {name: 'TuiIcon', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiCheckboxLabeledModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiLabel', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiHostedDropdownModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiDropdown', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiTitleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiTitle', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiHeaderModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiHeader', moduleSpecifier: '@taiga-ui/layout'},
    },
    {
        from: {name: 'TuiPinModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiPin', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiCompassModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCompass', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiRatingModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRating', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiRatingModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiRating', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSurfaceModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSurface', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFlagPipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFlagPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiSvgModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiSvg', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiRootModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiRoot', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiCellModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCell', moduleSpecifier: '@taiga-ui/layout'},
    },
    {
        from: {name: 'TuiChipModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiChip', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {
            name: 'TuiTablePaginationModule',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
        to: {
            name: 'TuiTablePagination',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {name: 'TuiCardModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: [
            {name: 'TuiCardLarge', moduleSpecifier: '@taiga-ui/layout'},
            {name: 'TuiCardMedium', moduleSpecifier: '@taiga-ui/layout'},
        ],
    },
    {
        from: {name: 'TuiMarkerIconModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiAvatar', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TUI_PROMPT', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TUI_CONFIRM', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiActionModule', moduleSpecifier: '@taiga-ui/kit'},
        to: [
            {name: 'TuiCardLarge', moduleSpecifier: '@taiga-ui/layout'},
            {name: 'TuiSurface', moduleSpecifier: '@taiga-ui/core'},
        ],
    },
    {
        from: {name: 'TuiLinkModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiLink', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiInteractiveStateT', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiInteractiveState', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiButtonModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiButton',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiButtonModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiButton',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiLetModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiLet', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {
            name: 'TuiAccountModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiAccount',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiPanelModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiPanel',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiBackModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiBack',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiBackModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiBlocker',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiConfirmDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiConfirmDialog',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiConfirmationDialog',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiConfirmation',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItem',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemDetailsModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemDetails',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemDialog',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemActionModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemAction',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiErrorPageModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiErrorPage',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiPromptDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiPromptDialog',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiProprietaryRoot2023Module',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiProprietaryRoot2023',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiSignalModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiSignal',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiSubscriptionBadgeModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiSubscriptionBadge',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiNavigationModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: {
            name: 'TuiNavigation',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiEmailsPipeModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiEmailsPipe',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiIllustrationsModule',
            moduleSpecifier: '@taiga-ui/proprietary-icons',
        },
        to: {
            name: 'TuiIllustrationModePipe',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'ProductsNavigationModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: {
            name: 'ProductsNavigationComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiDropdownSecureModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: [
            {
                name: 'TuiDropdownSecure',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiDropdownSecure',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiProductMenuModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: [
            {
                name: 'TuiProductMenu',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiProductMenu',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiProductMenuButton',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiCardLogoModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiCardLogo',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiErrorDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: [
            {
                name: 'TuiErrorDialog',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiErrorDialogHeader',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiTimecodePlayerModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: [
            {
                name: 'TuiTimecodePlayer',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimecode',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimecodeProgress',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiTimelineStepsModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: [
            {
                name: 'TuiTimelineSteps',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimelineStep',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimelineStep',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiProfileMenuModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: [
            {
                name: 'TuiProfileMenu',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiProfileMenu',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiMobileCalendarModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiMobileCalendar',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiBarModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiBar',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiArcChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiArcChart',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiAxesModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiAxes',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiTableFiltersModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiTableFilters',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {
            name: 'TuiReorderModule',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
        to: {
            name: 'TuiReorder',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {
            name: 'TuiArrowModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiArrow',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiTableBarsHostModule',
            moduleSpecifier: '@taiga-ui/addon-tablebars',
        },
        to: {
            name: 'TuiTableBarsHost',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiTableBarsService',
            moduleSpecifier: '@taiga-ui/addon-tablebars',
        },
        to: {
            name: 'TuiTableBarsService',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiTableModule',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
        to: {
            name: 'TuiTable',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {
            name: 'TuiBarChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiBarChart',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiBarSetModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiBarSet',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiDocCopyModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocCopy',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiAppBarModule',
            moduleSpecifier: '@taiga-ui/layout',
        },
        to: {
            name: 'TuiAppBar',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiPreviewModule',
            moduleSpecifier: '@taiga-ui/addon-preview',
        },
        to: {
            name: 'TuiPreview',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiBlockStatusModule',
            moduleSpecifier: '@taiga-ui/layout',
        },
        to: {
            name: 'TuiBlockStatus',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiTabBarModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: [
            {
                name: 'TuiSidebar',
                moduleSpecifier: '@taiga-ui/addon-mobile',
            },
            {
                name: 'TuiSidebar',
                moduleSpecifier: '@taiga-ui/addon-mobile',
            },
        ],
    },
    {
        from: {
            name: 'TuiScrollIntoViewLinkModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiScrollIntoViewLink',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiTextCodeModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiTextCode',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiPreviewDialogModule',
            moduleSpecifier: '@taiga-ui/addon-preview',
        },
        to: {
            name: 'TuiPreviewDialog',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'tuiDefaultSort',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
        to: {
            name: 'tuiDefaultSort',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'TuiNavigationModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: {
            name: 'TuiProprietaryNavigation',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiErrorModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiError',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiStringifyPipeModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiStringifyPipe',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiHintModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiHint',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiDocDocumentationModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocCodeModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocDemoModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocMainModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocNavigationModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocPageModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiLegendItemModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiLegendItem',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiLineChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: [
            {
                name: 'TuiLineChart',
                moduleSpecifier: '@taiga-ui/addon-charts',
            },
            {
                name: 'TuiLineChartHint',
                moduleSpecifier: '@taiga-ui/addon-charts',
            },
        ],
    },

    {
        from: {
            name: 'TuiLineDaysChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: [
            {
                name: 'TuiLineDaysChart',
                moduleSpecifier: '@taiga-ui/addon-charts',
            },
            {
                name: 'TuiLineDaysChartHint',
                moduleSpecifier: '@taiga-ui/addon-charts',
            },
        ],
    },
    {
        from: {
            name: 'TuiPieChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiPieChart',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiRingChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiRingChart',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiInputCardModule',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
        to: {
            name: 'TuiInputCard',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiInputCardGroupedModule',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
        to: {
            name: 'TuiInputCardGrouped',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiInputCVCModule',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
        to: {
            name: 'TuiInputCVC',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiInputExpireModule',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
        to: {
            name: 'TuiInputExpire',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiCurrencyPipeModule',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
        to: {
            name: 'TuiCurrencyPipe',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiFormatCardModule',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
        to: {
            name: 'TuiFormatCardPipe',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiMobileDialogModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiMobileDialog',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiRippleModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiRipple',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiTouchableModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiTouchable',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiElasticStickyModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiElasticSticky',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiSheetDialogModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: [
            {
                name: 'TuiSheetDialog',
                moduleSpecifier: '@taiga-ui/addon-mobile',
            },
            {
                name: 'TuiSheetDialog',
                moduleSpecifier: '@taiga-ui/addon-mobile',
            },
        ],
    },
    {
        from: {
            name: 'TuiPullToRefreshModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiPullToRefresh',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiSheetModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiSheetModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiTooltipModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiTooltip',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
];
