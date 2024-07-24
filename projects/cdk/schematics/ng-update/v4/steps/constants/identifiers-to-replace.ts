import type {ReplacementIdentifierMulti} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifierMulti[] = [
    {
        from: {name: 'TuiActiveZoneModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiActiveZone', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiPaginationModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiPagination', moduleSpecifier: '@taiga-ui/kit'},
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
        from: {name: 'tuiCapitalizeFirstLetter', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'tuiCapitalizeFirstLetter', moduleSpecifier: '@taiga-ui/legacy'},
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
        from: {name: 'TuiNotificationModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiNotification', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiNotificationT', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiNotificationStatus', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFormatPhonePipe', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFormatPhonePipe', moduleSpecifier: '@taiga-ui/legacy'},
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
        to: {
            name: 'TuiDataList',
            moduleSpecifier: '@taiga-ui/core',
            spreadInModule: true,
        },
    },
    {
        from: {name: 'TuiDataListWrapperModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiDataListWrapper',
            moduleSpecifier: '@taiga-ui/kit',
            spreadInModule: true,
        },
    },
    {
        from: {name: 'TuiErrorModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiError', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiExpandModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiExpand', moduleSpecifier: '@taiga-ui/core', spreadInModule: true},
    },
    {
        from: {name: 'TuiLoaderModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiLoader', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiAccordionModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiAccordion',
            moduleSpecifier: '@taiga-ui/kit',
            spreadInModule: true,
        },
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
        to: {name: 'TuiCarousel', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
    },
    {
        from: {name: 'TuiPushModule', moduleSpecifier: '@taiga-ui/kit'},
        to: [
            {name: 'TuiPush', moduleSpecifier: '@taiga-ui/kit'},
            {name: 'TuiPushDirective', moduleSpecifier: '@taiga-ui/kit'},
        ],
    },
    {
        from: {name: 'TuiElasticContainerModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiElasticContainer', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiFilesModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiFiles', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
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
        from: {name: 'TuiIslandComponent', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiIslandDirective', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiIslandModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiIslandDirective', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiItemsWithMoreModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiItemsWithMore',
            moduleSpecifier: '@taiga-ui/kit',
            spreadInModule: true,
        },
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
        to: {name: 'TuiSlider', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
    },
    {
        from: {name: 'TuiTilesModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTiles', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
    },
    {
        from: {name: 'TuiStepperModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiStepper', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
    },
    {
        from: {name: 'TuiTreeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTree', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
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
        to: {name: 'TuiImgLazyLoading', moduleSpecifier: '@taiga-ui/kit'},
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
        from: {name: 'TuiCardComponent', moduleSpecifier: '@taiga-ui/addon-commerce'},
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
        from: {name: 'TuiTextfieldComponent', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiTextfieldComponent', moduleSpecifier: '@taiga-ui/legacy'},
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
        from: {name: 'TuiCheckboxModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiCheckbox', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiPrimitiveCheckboxModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiCheckbox', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSwipeActionsModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: [
            {name: 'TuiSwipeActions', moduleSpecifier: '@taiga-ui/addon-mobile'},
            {name: 'TuiSwipeActionsAutoClose', moduleSpecifier: '@taiga-ui/addon-mobile'},
        ],
    },
    {
        from: {name: 'TuiRadioModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRadio', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
    },
    {
        from: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAvatar', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiAvatar', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiToggleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwitch', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiToggleModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiSwitch', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiToggleComponent', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiSwitch', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaModule', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiTextareaModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaModule', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiTextAreaDirective', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaDirective', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiBadgedContent',
            moduleSpecifier: '@taiga-ui/kit',
            spreadInModule: true,
        },
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/kit'},
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
        from: {name: 'TuiTextAreaComponent', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaComponent', moduleSpecifier: '@taiga-ui/legacy'},
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
        from: {name: 'TUI_SANITIZER', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TUI_SANITIZER', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiScrollbarModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiScrollbar', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiScrollbarComponent', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiScrollbar', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiGroupModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiGroup', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'AbstractTuiPortalHostComponent', moduleSpecifier: '@taiga-ui/cdk'},
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
        from: {name: 'TuiDropdownHostComponent', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdowns', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDropdownPortalService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownService', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortalDirective', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortal', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortalModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortal', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDropdownModule', moduleSpecifier: '@taiga-ui/core'},
        to: {
            name: 'TuiDropdown',
            moduleSpecifier: '@taiga-ui/core',
            spreadInModule: true,
        },
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
        from: {name: 'TuiAmountPipeModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAmountPipe', moduleSpecifier: '@taiga-ui/addon-commerce'},
    },
    {
        from: {name: 'TuiMoneyModule', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {name: 'TuiAmountPipe', moduleSpecifier: '@taiga-ui/addon-commerce'},
    },
    {
        from: {name: 'TuiResizeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {
            name: 'WaResizeObserver',
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
        to: [
            {name: 'TuiEditor', moduleSpecifier: '@taiga-ui/editor'},
            {name: 'TuiEditorSocket', moduleSpecifier: '@taiga-ui/editor'},
        ],
    },
    {
        from: {name: 'TuiEditorSocketModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiEditorSocket', moduleSpecifier: '@taiga/editor'},
    },
    {
        from: {name: 'defaultEditorExtensions', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TUI_EDITOR_DEFAULT_EXTENSIONS', moduleSpecifier: '@taiga-ui/editor'},
    },
    {
        from: {
            name: 'TUI_EDITOR_DEFAULT_EXTENSIONS',
            moduleSpecifier: '@tinkoff/tui-editor',
        },
        to: {name: 'TUI_EDITOR_DEFAULT_EXTENSIONS', moduleSpecifier: '@taiga-ui/editor'},
    },
    {
        from: {name: 'defaultEditorTools', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TUI_EDITOR_DEFAULT_TOOLS', moduleSpecifier: '@taiga-ui/editor'},
    },
    {
        from: {name: 'TUI_EDITOR_DEFAULT_TOOLS', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TUI_EDITOR_DEFAULT_TOOLS', moduleSpecifier: '@taiga-ui/editor'},
    },
    {
        from: {name: 'TuiColorPickerModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiColorPickerModule', moduleSpecifier: '@taiga-ui/legacy'},
    },
    {
        from: {name: 'TuiInputColorModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiInputColorModule', moduleSpecifier: '@taiga-ui/legacy'},
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
        from: {name: 'TuiRadioLabeledModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiLabel', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiTabsModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTabs', moduleSpecifier: '@taiga-ui/kit', spreadInModule: true},
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
        from: {name: 'TuiBlockDetailsModule', moduleSpecifier: '@taiga-ui/layout'},
        to: {name: 'TuiBlockDetails', moduleSpecifier: '@taiga-ui/layout'},
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
        to: {name: 'TuiIcon', moduleSpecifier: '@taiga-ui/core'},
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
        from: {name: 'TuiButtonModule', moduleSpecifier: '@taiga-ui/core'},
        to: {
            name: 'TuiButton',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {name: 'TUI_ARROW', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TUI_ARROW',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {name: 'TuiArrowComponent', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiArrowComponent',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {name: 'TuiDialogModule', moduleSpecifier: '@taiga-ui/core'},
        to: {
            name: 'TuiDialog',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {name: 'TuiButtonModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiButton',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'tuiButtonOptionsProvider',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'tuiButtonOptionsProvider',
            moduleSpecifier: '@taiga-ui/core',
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
            name: 'TuiAccountComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiPanelModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiPanelComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiBackModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiBackComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiBackModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiBlockerComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiConfirmDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiConfirmDialogComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiConfirmationDialog',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiConfirmationComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemDetailsModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemDetailsComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemDialogComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemActionModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemActionComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiErrorPageModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiErrorPageComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiPromptDialogComponent',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiConfirm',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiSignalModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiSignalComponent',
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
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiNavigation',
            moduleSpecifier: '@taiga-ui/layout',
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiSegmentedModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiSegmented',
            moduleSpecifier: '@taiga-ui/kit',
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
        to: {
            name: 'TuiDropdownSecure',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiProductMenuModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiProductMenu',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
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
                name: 'TuiErrorDialogComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiErrorDialogHeaderComponent',
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
        ],
    },
    {
        from: {
            name: 'TuiTimelineStepsModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: [
            {
                name: 'TuiTimelineStepsComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimelineStepComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimelineStepDirective',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiProfileMenuModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: {
            name: 'TuiProfileMenu',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
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
            name: 'TuiBarComponent',
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
            spreadInModule: true,
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
            name: 'TuiArrowComponent',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiTableBarsHostModule',
            moduleSpecifier: '@taiga-ui/addon-tablebars',
        },
        to: {
            name: 'TuiTableBarsHostComponent',
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
            spreadInModule: true,
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
            name: 'TuiPromptData',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiConfirmData',
            moduleSpecifier: '@taiga-ui/kit',
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
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiAppearanceModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiAppearance',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiButtonCloseModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiButtonClose',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiButtonGroupModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiButtonGroup',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiButtonVerticalModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {
            name: 'TuiButtonVertical',
            moduleSpecifier: '@taiga-ui/kit',
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
            spreadInModule: true,
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
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiTabBarModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiTabBar',
            moduleSpecifier: '@taiga-ui/addon-mobile',
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiSidebarModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiSidebar',
            moduleSpecifier: '@taiga-ui/addon-mobile',
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiProgressModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiProgress',
            moduleSpecifier: '@taiga-ui/kit',
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiRadioListModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiRadioList',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiInputFilesModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputFiles',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiScrollIntoViewLinkModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocScrollIntoViewLink',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiTextCodeModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocText',
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
            name: 'TuiPreviewDialogService',
            moduleSpecifier: '@taiga-ui/addon-preview',
        },
        to: {
            name: 'TuiPreviewDialogService',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'PolymorpheusModule',
            moduleSpecifier: '@tinkoff/ng-polymorpheus',
        },
        to: [
            {name: 'PolymorpheusTemplate', moduleSpecifier: '@taiga-ui/polymorpheus'},
            {name: 'PolymorpheusOutlet', moduleSpecifier: '@taiga-ui/polymorpheus'},
        ],
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
            name: 'AbstractTuiControl',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'AbstractTuiControl',
            moduleSpecifier: '@taiga-ui/legacy',
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
            spreadInModule: true,
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
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiDocPage',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocRoutePage',
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
            name: 'TuiAddonDocModule',
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
            name: 'TuiInputCardGroup',
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
                name: 'TuiSheetDialogComponent',
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
            name: 'TuiTooltipModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_ARROW_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_ARROW_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiArrowOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiArrowOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiArrowOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiArrowOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiComboBoxModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiComboBoxModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputCopyModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputCopyModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputCopyOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputCopyOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_COPY_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_COPY_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_COPY_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_COPY_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiInputCopyOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputCopyOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputDateModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputDateModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputDateMultiModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputDateMultiModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputDateMultiModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputDateMultiModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputDateRangeModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputDateRangeModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputDateTimeModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputDateTimeModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputMonthModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputMonthModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputMonthRangeModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputMonthRangeModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputNumberModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputNumberModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputNumberOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputNumberOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_NUMBER_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_NUMBER_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_NUMBER_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_NUMBER_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiInputNumberOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputNumberOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputPasswordModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputPasswordModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputPasswordOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputPasswordOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_PASSWORD_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_PASSWORD_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_PASSWORD_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_PASSWORD_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiInputPasswordOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputPasswordOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputPhoneModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputPhoneModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputPhoneOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputPhoneOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_PHONE_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_PHONE_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_PHONE_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_PHONE_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiInputPhoneOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputPhoneOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputPhoneInternationalModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputPhoneInternationalComponent',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputPhoneInternationalOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputPhoneInternationalOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiInputPhoneInternationalOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputPhoneInternationalOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputRangeModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputRangeModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputSliderModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputSliderModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputTagModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputTagModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputTagOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputTagOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_TAG_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_TAG_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_TAG_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_TAG_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiInputTagOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputTagOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputTimeModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputTimeModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputTimeOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputTimeOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiTimeFormatParts',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiTimeFormatParts',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'MAX_TIME_VALUES',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'MAX_TIME_VALUES',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_TIME_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_TIME_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_INPUT_TIME_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_INPUT_TIME_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiInputTimeOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiInputTimeOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiInputYearModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiInputYearModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiMultiSelectModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiMultiSelectModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiMultiSelectComponent',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiMultiSelectComponent',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiMultiSelectOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiMultiSelectOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_MULTI_SELECT_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_MULTI_SELECT_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_MULTI_SELECT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_MULTI_SELECT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiMultiSelectOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiMultiSelectOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiMultiSelectOptionModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiMultiSelectOptionModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiSelectModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiSelectModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiSelectOptions',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiSelectOptions',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_SELECT_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_SELECT_DEFAULT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_SELECT_OPTIONS',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_SELECT_OPTIONS',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'tuiSelectOptionsProvider',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'tuiSelectOptionsProvider',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiSelectOptionModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiSelectOptionModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiTagModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiTagModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TUI_IS_APPLE',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'TUI_IS_APPLE',
            moduleSpecifier: '@taiga-ui/legacy',
        },
    },
    {
        from: {
            name: 'TuiDocPage',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocRoutePage',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocPages',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocRoutePages',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiLabelModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiLabel',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'ResizeObserverModule',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
        to: {
            name: 'WaResizeObserver',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
    },
    {
        from: {
            name: 'IntersectionObserverModule',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
        to: {
            name: 'WaIntersectionObserver',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
    },
    {
        from: {
            name: 'INTERSECTION_THRESHOLD',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
        to: {
            name: 'WA_INTERSECTION_THRESHOLD',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
    },
    {
        from: {
            name: 'INTERSECTION_ROOT_MARGIN',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
        to: {
            name: 'WA_INTERSECTION_ROOT_MARGIN',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
    },
    {
        from: {
            name: 'INTERSECTION_ROOT',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
        to: {
            name: 'WA_INTERSECTION_ROOT',
            moduleSpecifier: '@ng-web-apis/intersection-observer',
        },
    },
    {
        from: {
            name: 'MUTATION_OBSERVER_INIT',
            moduleSpecifier: '@ng-web-apis/mutation-observer',
        },
        to: {
            name: 'WA_MUTATION_OBSERVER_INIT',
            moduleSpecifier: '@ng-web-apis/mutation-observer',
        },
    },
    {
        from: {
            name: 'MutationObserverDirective',
            moduleSpecifier: '@ng-web-apis/mutation-observer',
        },
        to: {
            name: 'WaMutationObserver',
            moduleSpecifier: '@ng-web-apis/mutation-observer',
        },
    },
    {
        from: {name: 'WINDOW', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_WINDOW', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'USER_AGENT', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_USER_AGENT', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'NAVIGATOR', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_NAVIGATOR', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'SESSION_STORAGE', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_SESSION_STORAGE', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'PAGE_VISIBILITY', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_PAGE_VISIBILITY', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'LOCATION', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_LOCATION', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'PERFORMANCE', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_PERFORMANCE', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'LOCAL_STORAGE', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_LOCAL_STORAGE', moduleSpecifier: '@ng-web-apis/common'},
    },
    {
        from: {name: 'ANIMATION_FRAME', moduleSpecifier: '@ng-web-apis/common'},
        to: {name: 'WA_ANIMATION_FRAME', moduleSpecifier: '@ng-web-apis/common'},
    },
];
